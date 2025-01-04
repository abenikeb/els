"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useCreateUserMutation } from "./user-query";

import OTPForm from "../login/otp-form";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { CardFooter } from "@/components/ui/card";
import Link from "next/link";

const formSchema = z.object({
	givenName: z
		.string()
		.min(2, {
			message: "First name must be at least 2 characters.",
		})
		.regex(/^[A-Za-z]+$/, "Only alphabetic characters are allowed"),
	fatherName: z
		.string()
		.min(2, {
			message: "Last name must be at least 2 characters.",
		})
		.regex(/^[A-Za-z]+$/, "Only alphabetic characters are allowed"),
	email: z.string().email({
		message: "Please enter a valid email address.",
	}),
	mobileNumber: z.string().regex(/^0\d{9}$/, {
		message: "Please enter a valid phone number.",
	}),
	password: z
		.string()
		.min(8)
		.max(32)
		.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
			message:
				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
		}),
	confirmPassword: z.string(),
});

export default function UserRegistrationForm() {
	const { mutate: createUser } = useCreateUserMutation();

	const { t } = useLanguage();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState("");

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			givenName: "",
			fatherName: "",
			email: "",
			mobileNumber: "",
			password: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		createUser(values, {
			onSuccess(data: any, variables, context) {
				console.log("🚀 ~ onSuccess ~ data:", data.data.email);
				setEmail(data.data.email);
				setOpen(true);
			},

			onError(error: any, variables, context) {
				console.log("🚀 ~ onError ~ error:", error.response.data.message);
				alert(error.response.data.message);
			},
		});
		console.log(values);
	}

	return (
		<div className=" mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
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
							{t("signup.title")}
						</h1>
						<p className="text-sm text-muted-foreground">
							{t("signup.description")}
						</p>
					</div>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							<FormField
								control={form.control}
								name="givenName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("signup.firstNameLabel")}</FormLabel>
										<FormControl>
											<Input
												placeholder={t("signup.firstNamePlaceholder")}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="fatherName"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("signup.lastNameLabel")}</FormLabel>
										<FormControl>
											<Input
												placeholder={t("signup.lastNamePlaceholder")}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("signup.emailLabel")}</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder={t("signup.emailPlaceholder")}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="mobileNumber"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("signup.phoneLabel")}</FormLabel>
										<FormControl>
											<Input
												type="tel"
												placeholder={t("signup.phonePlaceholder")}
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
										<FormLabel>{t("signup.passwordLabel")}</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder={t("signup.passwordPlaceholder")}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel>{t("signup.confirmPasswordLabel")}</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder={t("signup.confirmPasswordPlaceholder")}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type="submit" className="w-full" disabled={isLoading}>
								{isLoading ? t("signup.submitting") : t("signup.submitButton")}
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<p className="text-sm text-center text-muted-foreground">
						{t("signup.loginPrompt")}{" "}
						<Link href="/login" className="text-primary hover:underline">
							{t("signup.loginLink")}
						</Link>
					</p>
				</CardFooter>
			</Card>
			<OTPForm open={open} setOpen={setOpen} email={email} />
		</div>
	);
}
