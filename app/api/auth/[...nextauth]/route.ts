import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "@/configs/axios";
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
				const { email, password } = credentials ?? {};

				if (!email || !password) {
					throw new Error("Missing email or password");
				}

				console.log({ email });

				try {
					const { data } = await axios.post(
						"https://package.ethiolegalshield.com/api/v1/auth/login",
						{
							email,
							password,
						}
					);

					if (!data) {
						return null;
					}

					return {
						id: data.user.id,
						email: data.user.email,
						name: data.user.name,
						jwtToken: data.jwtToken,
					};
				} catch (error) {
					console.error("Authentication error:", error);
					return null;
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }: any) {
			if (user) {
				token.id = user.id;
				token.email = user.email;
				token.name = user.name;
				token.jwtToken = user.jwtToken;
			}
			return token;
		},
		async session({ session, token }: any) {
			if (token) {
				session.user.id = token.id;
				session.user.email = token.email;
				session.user.name = token.name;
				session.user.jwtToken = token.jwtToken;
			}
			return session;
		},
	},
	pages: {
		signIn: "/login",
	},
	session: {
		strategy: "jwt",
		maxAge: 30 * 60, // 30 minutes
	},
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
