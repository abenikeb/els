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
import { AlertCircle } from "lucide-react";
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
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
							{error && (
								<Alert variant="destructive">
									<AlertCircle className="h-4 w-4" />
									<AlertTitle>Error</AlertTitle>
									<AlertDescription>{error}</AlertDescription>
								</Alert>
							)}
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
	);
}

export default UserAuthForm;
