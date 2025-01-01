"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const { t } = useLanguage();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically make an API call to authenticate the user
		// For demonstration purposes, we'll just simulate a successful login
		document.cookie = `session=authenticated; path=/;`;
		router.push("/");
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<Card className="w-full max-w-md">
				<CardHeader>
					<CardTitle>{t("login.title")}</CardTitle>
					<CardDescription>{t("login.description")}</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700">
								{t("login.emailLabel")}
							</label>
							<Input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-700">
								{t("login.passwordLabel")}
							</label>
							<Input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							{t("login.submitButton")}
						</Button>
					</form>
				</CardContent>
				<CardFooter>
					<p className="text-sm text-gray-600">
						{t("login.signupPrompt")}{" "}
						<a href="/signup" className="text-blue-600 hover:underline">
							{t("login.signupLink")}
						</a>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}
