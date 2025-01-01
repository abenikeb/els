"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Mail, Phone, Lock } from "lucide-react";

export default function Profile() {
	const { t, language, apiData, getLocalizedApiData } = useLanguage();
	const router = useRouter();
	const [personalInfo, setPersonalInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
	});
	const [passwords, setPasswords] = useState({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});

	useEffect(() => {
		// Check if user is logged in
		const isLoggedIn = document.cookie.includes("session=authenticated");
		if (!isLoggedIn) {
			router.push("/login");
		} else {
			// Fetch user data from mock API
			setPersonalInfo({
				firstName: getLocalizedApiData("user.firstName") || "",
				lastName: getLocalizedApiData("user.lastName") || "",
				email: apiData.user.email,
				phone: apiData.user.phone,
			});
		}
	}, [language, apiData, getLocalizedApiData, router]);

	const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPasswords((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handlePersonalInfoSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Personal info updated:", personalInfo);
		// Here you would typically make an API call to update the user's information
		alert(t("profile.personalInfo.saveSuccess"));
	};

	const handlePasswordSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (passwords.newPassword !== passwords.confirmPassword) {
			alert(t("profile.changePassword.mismatchError"));
			return;
		}
		console.log("Password updated");
		// Here you would typically make an API call to update the user's password
		alert(t("profile.changePassword.updateSuccess"));
	};

	return (
		<div className="space-y-8 bg-gray-50 p-3 rounded-lg">
			<h2 className="text-3xl font-bold text-blue-900">{t("profile.title")}</h2>
			<Tabs defaultValue="personal-info" className="w-full">
				<TabsList className="grid w-full grid-cols-2 mb-6">
					<TabsTrigger value="personal-info">
						{t("profile.tabs.personalInfo")}
					</TabsTrigger>
					<TabsTrigger value="change-password">
						{t("profile.tabs.changePassword")}
					</TabsTrigger>
				</TabsList>
				<TabsContent value="personal-info">
					<Card className="shadow-md">
						<CardHeader>
							<CardTitle className="text-blue-900">
								{t("profile.personalInfo.title")}
							</CardTitle>
							<CardDescription>
								{t("profile.personalInfo.description")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handlePersonalInfoSubmit} className="space-y-4">
								<div className="flex items-center space-x-4 mb-6">
									<Avatar className="h-24 w-24">
										<AvatarImage
											src="/placeholder.svg?height=96&width=96"
											alt="Profile picture"
										/>
										<AvatarFallback>
											<User className="h-12 w-12" />
										</AvatarFallback>
									</Avatar>
									<Button variant="outline">
										{t("profile.personalInfo.changePicture")}
									</Button>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<Label htmlFor="firstName">
											{t("profile.personalInfo.firstName")}
										</Label>
										<Input
											id="firstName"
											name="firstName"
											value={personalInfo.firstName}
											onChange={handlePersonalInfoChange}
											className="mt-1"
										/>
									</div>
									<div>
										<Label htmlFor="lastName">
											{t("profile.personalInfo.lastName")}
										</Label>
										<Input
											id="lastName"
											name="lastName"
											value={personalInfo.lastName}
											onChange={handlePersonalInfoChange}
											className="mt-1"
										/>
									</div>
								</div>
								<div>
									<Label htmlFor="email">
										{t("profile.personalInfo.email")}
									</Label>
									<div className="relative mt-1">
										<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
										<Input
											id="email"
											name="email"
											type="email"
											value={personalInfo.email}
											onChange={handlePersonalInfoChange}
											className="pl-10"
										/>
									</div>
								</div>
								<div>
									<Label htmlFor="phone">
										{t("profile.personalInfo.phone")}
									</Label>
									<div className="relative mt-1">
										<Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
										<Input
											id="phone"
											name="phone"
											value={personalInfo.phone}
											onChange={handlePersonalInfoChange}
											className="pl-10"
										/>
									</div>
								</div>
							</form>
						</CardContent>
						<CardFooter>
							<Button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white"
								onClick={handlePersonalInfoSubmit}>
								{t("profile.personalInfo.saveButton")}
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="change-password">
					<Card className="shadow-md">
						<CardHeader>
							<CardTitle className="text-blue-900">
								{t("profile.changePassword.title")}
							</CardTitle>
							<CardDescription>
								{t("profile.changePassword.description")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handlePasswordSubmit} className="space-y-4">
								<div>
									<Label htmlFor="currentPassword">
										{t("profile.changePassword.currentPassword")}
									</Label>
									<div className="relative mt-1">
										<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
										<Input
											id="currentPassword"
											name="currentPassword"
											type="password"
											value={passwords.currentPassword}
											onChange={handlePasswordChange}
											className="pl-10"
										/>
									</div>
								</div>
								<div>
									<Label htmlFor="newPassword">
										{t("profile.changePassword.newPassword")}
									</Label>
									<div className="relative mt-1">
										<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
										<Input
											id="newPassword"
											name="newPassword"
											type="password"
											value={passwords.newPassword}
											onChange={handlePasswordChange}
											className="pl-10"
										/>
									</div>
								</div>
								<div>
									<Label htmlFor="confirmPassword">
										{t("profile.changePassword.confirmPassword")}
									</Label>
									<div className="relative mt-1">
										<Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
										<Input
											id="confirmPassword"
											name="confirmPassword"
											type="password"
											value={passwords.confirmPassword}
											onChange={handlePasswordChange}
											className="pl-10"
										/>
									</div>
								</div>
							</form>
						</CardContent>
						<CardFooter>
							<Button
								type="submit"
								className="w-full bg-blue-600 hover:bg-blue-700 text-white"
								onClick={handlePasswordSubmit}>
								{t("profile.changePassword.updateButton")}
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
