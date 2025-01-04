"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import LawyerProfile from "@/components/lawyer/LawyerProfile";
import LawyerAppointments from "@/components/lawyer/LawyerAppointments";
import LawyerContent from "@/components/lawyer/LawyerContent";
import LawyerPackages from "@/components/lawyer/LawyerPackages";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Home, Calendar, FileText, Package, LogOut } from "lucide-react";

export default function LawyerDashboard() {
	const { t, apiData } = useLanguage();
	const [activeSection, setActiveSection] = useState("profile");
	const router = useRouter();

	const handleLogout = () => {
		document.cookie =
			"session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		router.push("/login");
	};

	const renderActiveSection = () => {
		switch (activeSection) {
			case "profile":
				return <LawyerProfile />;
			case "appointments":
				return <LawyerAppointments />;
			case "content":
				return <LawyerContent />;
			case "packages":
				return <LawyerPackages />;
			default:
				return <LawyerProfile />;
		}
	};

	return (
		<SidebarProvider>
			<div className="w-full flex h-screen bg-gray-100">
				<Sidebar className="bg-white border-r border-gray-200">
					<SidebarHeader className="p-4 bg-blue-900 text-white">
						<div className="flex items-center space-x-3">
							<Avatar>
								<AvatarImage src={apiData.lawyer.profile.avatar} />
								<AvatarFallback>
									{apiData.lawyer.profile.name.charAt(0)}
								</AvatarFallback>
							</Avatar>
							<div>
								<h2 className="font-semibold">{apiData.lawyer.profile.name}</h2>
								<p className="text-sm text-blue-200">
									{t("lawyerDashboard.role")}
								</p>
							</div>
						</div>
					</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("profile")}
											className="w-full justify-start">
											<Home className="mr-2 h-4 w-4" />
											{t("lawyerDashboard.profile.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("appointments")}
											className="w-full justify-start">
											<Calendar className="mr-2 h-4 w-4" />
											{t("lawyerDashboard.appointments.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("content")}
											className="w-full justify-start">
											<FileText className="mr-2 h-4 w-4" />
											{t("lawyerDashboard.content.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("packages")}
											className="w-full justify-start">
											<Package className="mr-2 h-4 w-4" />
											{t("lawyerDashboard.packages.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
					<div className="mt-auto p-4">
						<Button
							onClick={handleLogout}
							variant="outline"
							className="w-full justify-start">
							<LogOut className="mr-2 h-4 w-4" />
							{t("lawyerDashboard.logout")}
						</Button>
					</div>
				</Sidebar>
				<div className="flex-1 overflow-auto">
					<header className="bg-white shadow-sm">
						<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
							<h1 className="text-2xl font-semibold text-gray-900">
								{t(`lawyerDashboard.${activeSection}.title`)}
							</h1>
						</div>
					</header>
					<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
						<div className="px-4 py-6 sm:px-0">
							<Card>
								<CardContent className="p-6">
									{renderActiveSection()}
								</CardContent>
							</Card>
						</div>
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
