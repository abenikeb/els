import { cookies } from "next/headers";
import axios from "@/configs/axios";
import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialProvider({
			name: "credentials",
			credentials: {
				email: { label: "Email", type: "text " },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				const { email, password } = credentials ?? {};

				if (!email || !password) {
					throw new Error("Missing username or password");
				}

				try {
					const { data } = await axios.post(
						"https://package.ethiolegalshield.com/api/v1/auth/login",
						{
							email,
							password,
						}
					);
					console.log("🚀 ~ authorize ~ data:", data);

					if (!data) {
						return null;
					}
					const { jwtToken } = data;
					cookies().set("jwtToken", jwtToken);
					return data;
				} catch (error) {
					console.error(error);
				}
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
		maxAge: 30 * 60,
	},
	pages: {
		signIn: "/login",
	},

	callbacks: {
		jwt: async ({ token, user }) => {
			return { ...token, ...user };
		},
		session: async ({ session, token }) => {
			return { ...session, user: token };
		},
	},
};
