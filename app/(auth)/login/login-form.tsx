"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

export function UserAuthForm() {
	const [isLoading, setIsLoading] = useState(false);
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
			const result = await signIn("credentials", {
				email: values.email,
				password: values.password,
				redirect: false,
			});

			if (result?.error) {
				setError(t("login.invalidCredentials"));
			} else {
				router.push("/");
				router.refresh();
			}
		} catch (error) {
			console.error("Login error:", error);
			setError(t("login.invalidCredentials"));
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4 py-8">
			<Link
				href="/"
				className="absolute top-4 left-4 text-blue-600 hover:text-blue-800 flex items-center">
				<ArrowLeft className="mr-2" size={20} />
				{t("common.backToHome")}
			</Link>
			<Card className="w-full max-w-md shadow-lg">
				<CardHeader>
					<div className="flex flex-col items-center space-y-2">
						<Image
							alt="Ethio Legal Shield"
							src="/assets/images/ethiolegalshild.png"
							width={120}
							height={100}
						/>
						<h1 className="text-3xl font-bold text-blue-900">
							{t("login.title")}
						</h1>
						<p className="text-sm text-gray-600">{t("login.description")}</p>
					</div>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											{t("login.emailLabel")}
										</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder={t("login.emailPlaceholder")}
												className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
										<FormLabel className="text-gray-700">
											{t("login.passwordLabel")}
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder={t("login.passwordPlaceholder")}
												className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
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
													className="border-gray-300 text-blue-600 focus:ring-blue-500"
												/>
											</FormControl>
											<FormLabel className="text-sm font-medium text-gray-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
												{t("login.rememberMe")}
											</FormLabel>
										</FormItem>
									)}
								/>
								<Link
									href="/forgot-password"
									className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
									{t("login.forgotPassword")}
								</Link>
							</div>
							{error && (
								<Alert
									variant="destructive"
									className="bg-red-50 border-red-200 text-red-800">
									<AlertCircle className="h-4 w-4" />
									<AlertTitle>Error</AlertTitle>
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}
							<Button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white"
								disabled={isLoading}>
								{isLoading ? t("login.signingIn") : t("login.submitButton")}
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<p className="text-sm text-center text-gray-600 w-full">
						{t("login.signupPrompt")}{" "}
						<Link
							href="/signup"
							className="text-blue-600 hover:text-blue-800 font-semibold">
							{t("login.signupLink")}
						</Link>
					</p>
				</CardFooter>
			</Card>
		</div>
	);
}

export default UserAuthForm;

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
// 	Form,
// 	FormControl,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import {
// 	Card,
// 	CardContent,
// 	CardHeader,
// 	CardFooter,
// } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { AlertCircle } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { signIn } from "next-auth/react";

// export function UserAuthForm() {
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [error, setError] = useState<string | null>(null);
// 	const router = useRouter();
// 	const { t } = useLanguage();

// 	const formSchema = z.object({
// 		email: z.string().email({ message: t("login.emailError") }),
// 		password: z.string().min(1, { message: t("login.passwordError") }),
// 		rememberMe: z.boolean().default(false),
// 	});

// 	const form = useForm<z.infer<typeof formSchema>>({
// 		resolver: zodResolver(formSchema),
// 		defaultValues: {
// 			email: "",
// 			password: "",
// 			rememberMe: false,
// 		},
// 	});

// 	async function onSubmit(values: z.infer<typeof formSchema>) {
// 		setIsLoading(true);
// 		setError(null);

// 		try {
// 			const result = await signIn("credentials", {
// 				email: values.email,
// 				password: values.password,
// 				redirect: false,
// 			});

// 			if (result?.error) {
// 				setError(t("login.invalidCredentials"));
// 			} else {
// 				router.push("/");
// 				router.refresh();
// 			}
// 		} catch (error) {
// 			console.error("Login error:", error);
// 			setError(t("login.invalidCredentials"));
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	}

// 	return (
// 		<div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
// 			<Card className="w-full max-w-md">
// 				<CardHeader>
// 					<div className="flex flex-col items-center space-y-2">
// 						<Image
// 							alt="Ethio Legal Shield"
// 							src="/assets/images/ethiolegalshild.png"
// 							width={120}
// 							height={100}
// 						/>
// 						<h1 className="text-2xl font-semibold tracking-tight">
// 							{t("login.title")}
// 						</h1>
// 						<p className="text-sm text-muted-foreground">
// 							{t("login.description")}
// 						</p>
// 					</div>
// 				</CardHeader>
// 				<CardContent>
// 					<Form {...form}>
// 						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// 							<FormField
// 								control={form.control}
// 								name="email"
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormLabel>{t("login.emailLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												type="email"
// 												placeholder={t("login.emailPlaceholder")}
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<FormField
// 								control={form.control}
// 								name="password"
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormLabel>{t("login.passwordLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												type="password"
// 												placeholder={t("login.passwordPlaceholder")}
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<div className="flex items-center justify-between">
// 								<FormField
// 									control={form.control}
// 									name="rememberMe"
// 									render={({ field }) => (
// 										<FormItem className="flex items-center space-x-2">
// 											<FormControl>
// 												<Checkbox
// 													checked={field.value}
// 													onCheckedChange={field.onChange}
// 												/>
// 											</FormControl>
// 											<FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
// 												{t("login.rememberMe")}
// 											</FormLabel>
// 										</FormItem>
// 									)}
// 								/>
// 								<Link
// 									href="/forgot-password"
// 									className="text-sm text-primary hover:underline">
// 									{t("login.forgotPassword")}
// 								</Link>
// 							</div>
// 							{error && (
// 								<Alert variant="destructive">
// 									<AlertCircle className="h-4 w-4" />
// 									<AlertTitle>Error</AlertTitle>
// 									<AlertDescription>{error}</AlertDescription>
// 								</Alert>
// 							)}
// 							<Button type="submit" className="w-full" disabled={isLoading}>
// 								{isLoading ? t("login.signingIn") : t("login.submitButton")}
// 							</Button>
// 						</form>
// 					</Form>
// 				</CardContent>
// 				<CardFooter>
// 					<p className="text-sm text-center text-muted-foreground">
// 						{t("login.signupPrompt")}{" "}
// 						<Link href="/signup" className="text-primary hover:underline">
// 							{t("login.signupLink")}
// 						</Link>
// 					</p>
// 				</CardFooter>
// 			</Card>
// 		</div>
// 	);
// }

// export default UserAuthForm;
