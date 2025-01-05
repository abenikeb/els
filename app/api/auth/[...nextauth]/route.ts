import { NextAuthOptions } from "next-auth";
import { cookies } from "next/headers";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error("Missing email or password");
				}

				try {
					const response = await axios.post(
						"https://package.ethiolegalshield.com/api/v1/auth/login",
						{
							email: credentials.email,
							password: credentials.password,
							redirect: false,
						}
					);

					console.log({ userResponse: response.data });

					const user = response.data;

					if (user && user.jwtToken) {
						const { jwtToken } = user;
						cookies().set("jwtToken", jwtToken);
						return {
							id: user.id,
							email: user.email,
							name: user.name,
							jwtToken: user.jwtToken,
						};
					} else {
						return null;
					}
				} catch (error) {
					console.error("Authentication error:", error);
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }: any) {
			console.log({ userToken: token });
			if (user) {
				token.id = user.id;
				token.email = user.email;
				token.name = user.name;
				token.jwtToken = user.jwtToken;
			}
			return token;
		},
		async session({ session, token }: any) {
			if (token && session.user) {
				session.user.id = token.id as string;
				session.user.email = token.email as string;
				session.user.name = token.name as string;
				session.user.jwtToken = token.jwtToken as string;
			}
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	cookies: {
		sessionToken: {
			name: `__Secure-next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: "lax",
				path: "/",
				secure: process.env.NODE_ENV === "production",
			},
		},
	},

	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
