"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { z } from "zod";
import axios from "@/configs/axios";
import { useLanguage } from "@/contexts/LanguageContext";
import Cookies from "js-cookie";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const { t } = useLanguage();

	const formSchema = z.object({
		email: z.string().email({ message: t("login.emailError") }),
		password: z.string().min(1, { message: t("login.passwordError") }),
		rememberMe: z.boolean().default(false),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			rememberMe: false,
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		setError(null);

		try {
			const response = await axios.post(
				"https://package.ethiolegalshield.com/api/v1/auth/login",
				{
					email: values.email,
					password: values.password,
				}
			);

			const { jwtToken } = response.data;

			// Store the token in localStorage or a secure cookie
			Cookies.set("jwtToken", jwtToken, { expires: 7 });
			// localStorage.setItem("jwtToken", jwtToken);

			// Set the token in the axios default headers for future requests
			axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

			// Redirect to the dashboard or home page
			router.push("/");
		} catch (error) {
			console.error("Login error:", error);
			setError(t("login.invalidCredentials"));
		} finally {
			setIsLoading(false);
		}
	}

	// async function onSubmit(values: z.infer<typeof formSchema>) {
	// 	console.log("🚀 ~ onSubmit ~ event:", values);

	// 	// const result: any = await signIn("credentials", {
	// 	// 	redirect: false,
	// 	// 	phone: values.phone,
	// 	// });

	// 	const response = await signIn("credentials", {
	// 		...values,
	// 		email: values.email,
	// 		password: values.password,
	// 		redirect: false,
	// 	});
	// 	console.log("🚀 ~ onSubmit ~ response:", response);
	// 	if (!response?.error) {
	// 		router.push("/");
	// 		router.refresh();
	// 	}

	// 	if (!response?.ok) {
	// 		throw new Error("Network response was not ok");
	// 	}
	// 	// Process response here
	// 	console.log("Login Successful", response);
	// }

	return (
		<>
			<div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
				<Card className="w-full max-w-md">
					<CardHeader>
						<div className="flex flex-col items-center space-y-2">
							<Image
								alt="Ethio Legal Shield"
								src="/assets/images/ethiolegalshild.png"
								width={120}
								height={100}
							/>
							<h1 className="text-2xl font-semibold tracking-tight">
								{t("login.title")}
							</h1>
							<p className="text-sm text-muted-foreground">
								{t("login.description")}
							</p>
						</div>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("login.emailLabel")}</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder={t("login.emailPlaceholder")}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>{t("login.passwordLabel")}</FormLabel>
											<FormControl>
												<Input
													type="password"
													placeholder={t("login.passwordPlaceholder")}
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex items-center justify-between">
									<FormField
										control={form.control}
										name="rememberMe"
										render={({ field }) => (
											<FormItem className="flex items-center space-x-2">
												<FormControl>
													<Checkbox
														checked={field.value}
														onCheckedChange={field.onChange}
													/>
												</FormControl>
												<FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
													{t("login.rememberMe")}
												</FormLabel>
											</FormItem>
										)}
									/>
									<Link
										href="/forgot-password"
										className="text-sm text-primary hover:underline">
										{t("login.forgotPassword")}
									</Link>
								</div>
								<Button type="submit" className="w-full" disabled={isLoading}>
									{isLoading ? t("login.signingIn") : t("login.submitButton")}
								</Button>
							</form>
						</Form>
					</CardContent>
					<CardFooter>
						<p className="text-sm text-center text-muted-foreground">
							{t("login.signupPrompt")}{" "}
							<Link href="/signup" className="text-primary hover:underline">
								{t("login.signupLink")}
							</Link>
						</p>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}
