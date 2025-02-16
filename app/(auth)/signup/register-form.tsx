"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import OTPForm from "../login/otp-form";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "@/configs/axios";
import { ArrowLeft } from "lucide-react";

const formSchema = z
	.object({
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
		type: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ["confirmPassword"],
	});

export default function UserRegistrationForm() {
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
			confirmPassword: "",
			type: "CUSTOMER",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		try {
			const response = await axios.post("/users", values);
			setEmail(response.data.email);
			setOpen(true);
		} catch (error: any) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("An error occurred. Please try again.");
			}
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
				<CardHeader className="space-y-1">
					<div className="flex flex-col items-center space-y-2">
						<Image
							alt="Ethio Legal Shield"
							src="/assets/images/ethiolegalshild.png"
							width={120}
							height={100}
						/>
						<h1 className="text-3xl font-bold text-blue-900">
							{t("signup.title")}
						</h1>
						<p className="text-sm text-gray-600">{t("signup.description")}</p>
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
										<FormLabel className="text-gray-700">
											{t("signup.firstNameLabel")}
										</FormLabel>
										<FormControl>
											<Input
												placeholder={t("signup.firstNamePlaceholder")}
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
								name="fatherName"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											{t("signup.lastNameLabel")}
										</FormLabel>
										<FormControl>
											<Input
												placeholder={t("signup.lastNamePlaceholder")}
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
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											{t("signup.emailLabel")}
										</FormLabel>
										<FormControl>
											<Input
												type="email"
												placeholder={t("signup.emailPlaceholder")}
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
								name="mobileNumber"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											{t("signup.phoneLabel")}
										</FormLabel>
										<FormControl>
											<Input
												type="tel"
												placeholder={t("signup.phonePlaceholder")}
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
											{t("signup.passwordLabel")}
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder={t("signup.passwordPlaceholder")}
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
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-gray-700">
											{t("signup.confirmPasswordLabel")}
										</FormLabel>
										<FormControl>
											<Input
												type="password"
												placeholder={t("signup.confirmPasswordPlaceholder")}
												className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white"
								disabled={isLoading}>
								{isLoading ? t("signup.submitting") : t("signup.submitButton")}
							</Button>
						</form>
					</Form>
				</CardContent>
				<CardFooter>
					<p className="text-sm text-center text-gray-600 w-full">
						{t("signup.loginPrompt")}{" "}
						<Link
							href="/login"
							className="text-blue-600 hover:text-blue-800 font-semibold">
							{t("signup.loginLink")}
						</Link>
					</p>
				</CardFooter>
			</Card>
			<OTPForm open={open} setOpen={setOpen} email={email} />
		</div>
	);
}

// "use client";
// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";
// import { Button } from "@/components/ui/button";
// import {
// 	Form,
// 	FormControl,
// 	FormDescription,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from "@/components/ui/form";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { useCreateUserMutation } from "./user-query";

// import OTPForm from "../login/otp-form";
// import { useLanguage } from "@/contexts/LanguageContext";
// import Image from "next/image";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { useRouter } from "next/navigation";
// import { CardFooter } from "@/components/ui/card";
// import Link from "next/link";

// const formSchema = z.object({
// 	givenName: z
// 		.string()
// 		.min(2, {
// 			message: "First name must be at least 2 characters.",
// 		})
// 		.regex(/^[A-Za-z]+$/, "Only alphabetic characters are allowed"),
// 	fatherName: z
// 		.string()
// 		.min(2, {
// 			message: "Last name must be at least 2 characters.",
// 		})
// 		.regex(/^[A-Za-z]+$/, "Only alphabetic characters are allowed"),
// 	email: z.string().email({
// 		message: "Please enter a valid email address.",
// 	}),
// 	mobileNumber: z.string().regex(/^0\d{9}$/, {
// 		message: "Please enter a valid phone number.",
// 	}),
// 	password: z
// 		.string()
// 		.min(8)
// 		.max(32)
// 		.regex(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, {
// 			message:
// 				"Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
// 		}),
// 	confirmPassword: z.string(),
// });

// export default function UserRegistrationForm() {
// 	const { mutate: createUser } = useCreateUserMutation();

// 	const { t } = useLanguage();
// 	const router = useRouter();
// 	const [isLoading, setIsLoading] = useState(false);

// 	const [open, setOpen] = useState(false);
// 	const [email, setEmail] = useState("");

// 	const form = useForm<z.infer<typeof formSchema>>({
// 		resolver: zodResolver(formSchema),
// 		defaultValues: {
// 			givenName: "",
// 			fatherName: "",
// 			email: "",
// 			mobileNumber: "",
// 			password: "",
// 		},
// 	});

// 	function onSubmit(values: z.infer<typeof formSchema>) {
// 		createUser(values, {
// 			onSuccess(data: any, variables, context) {
// 				console.log("🚀 ~ onSuccess ~ data:", data.data.email);
// 				setEmail(data.data.email);
// 				setOpen(true);
// 			},

// 			onError(error: any, variables, context) {
// 				console.log("🚀 ~ onError ~ error:", error.response.data.message);
// 				alert(error.response.data.message);
// 			},
// 		});
// 		console.log(values);
// 	}

// 	return (
// 		<div className=" mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
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
// 							{t("signup.title")}
// 						</h1>
// 						<p className="text-sm text-muted-foreground">
// 							{t("signup.description")}
// 						</p>
// 					</div>
// 				</CardHeader>
// 				<CardContent>
// 					<Form {...form}>
// 						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
// 							<FormField
// 								control={form.control}
// 								name="givenName"
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormLabel>{t("signup.firstNameLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												placeholder={t("signup.firstNamePlaceholder")}
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<FormField
// 								control={form.control}
// 								name="fatherName"
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormLabel>{t("signup.lastNameLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												placeholder={t("signup.lastNamePlaceholder")}
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<FormField
// 								control={form.control}
// 								name="email"
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormLabel>{t("signup.emailLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												type="email"
// 												placeholder={t("signup.emailPlaceholder")}
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<FormField
// 								control={form.control}
// 								name="mobileNumber"
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormLabel>{t("signup.phoneLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												type="tel"
// 												placeholder={t("signup.phonePlaceholder")}
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
// 										<FormLabel>{t("signup.passwordLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												type="password"
// 												placeholder={t("signup.passwordPlaceholder")}
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<FormField
// 								control={form.control}
// 								name="confirmPassword"
// 								render={({ field }) => (
// 									<FormItem>
// 										<FormLabel>{t("signup.confirmPasswordLabel")}</FormLabel>
// 										<FormControl>
// 											<Input
// 												type="password"
// 												placeholder={t("signup.confirmPasswordPlaceholder")}
// 												{...field}
// 											/>
// 										</FormControl>
// 										<FormMessage />
// 									</FormItem>
// 								)}
// 							/>
// 							<Button type="submit" className="w-full" disabled={isLoading}>
// 								{isLoading ? t("signup.submitting") : t("signup.submitButton")}
// 							</Button>
// 						</form>
// 					</Form>
// 				</CardContent>
// 				<CardFooter>
// 					<p className="text-sm text-center text-muted-foreground">
// 						{t("signup.loginPrompt")}{" "}
// 						<Link href="/login" className="text-primary hover:underline">
// 							{t("signup.loginLink")}
// 						</Link>
// 					</p>
// 				</CardFooter>
// 			</Card>
// 			<OTPForm open={open} setOpen={setOpen} email={email} />
// 		</div>
// 	);
// }
