"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AdminProfile from "@/components/admin/AdminProfile";
import AdminAppointments from "@/components/admin/AdminAppointments";
import AdminLawyerManagement from "@/components/admin/AdminLawyerManagement";
import AdminUserManagement from "@/components/admin/AdminUserManagement";
import AdminContentManagement from "@/components/admin/AdminContentManagement";
import AdminPackageManagement from "@/components/admin/AdminPackageManagement";
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
import {
	Home,
	Calendar,
	Users,
	UserPlus,
	FileText,
	Package,
	LogOut,
} from "lucide-react";

export default function AdminDashboard() {
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
				return <AdminProfile />;
			case "appointments":
				return <AdminAppointments />;
			case "lawyers":
				return <AdminLawyerManagement />;
			case "users":
				return <AdminUserManagement />;
			case "content":
				return <AdminContentManagement />;
			case "packages":
				return <AdminPackageManagement />;
			default:
				return <AdminProfile />;
		}
	};

	return (
		<SidebarProvider>
			<div className="w-full flex h-screen bg-gray-100">
				<Sidebar className="bg-white border-r border-gray-200">
					<SidebarHeader className="p-4 bg-blue-900 text-white">
						<div className="flex items-center space-x-3">
							<Avatar>
								<AvatarImage src={apiData.admin.profile.avatar} />
								<AvatarFallback>
									{apiData.admin.profile.name.charAt(0)}
								</AvatarFallback>
							</Avatar>
							<div>
								<h2 className="font-semibold">{apiData.admin.profile.name}</h2>
								<p className="text-sm text-blue-200">
									{t("adminDashboard.role")}
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
											{t("adminDashboard.profile.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("appointments")}
											className="w-full justify-start">
											<Calendar className="mr-2 h-4 w-4" />
											{t("adminDashboard.appointments.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("lawyers")}
											className="w-full justify-start">
											<UserPlus className="mr-2 h-4 w-4" />
											{t("adminDashboard.lawyerManagement.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("users")}
											className="w-full justify-start">
											<Users className="mr-2 h-4 w-4" />
											{t("adminDashboard.userManagement.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("content")}
											className="w-full justify-start">
											<FileText className="mr-2 h-4 w-4" />
											{t("adminDashboard.contentManagement.title")}
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											onClick={() => setActiveSection("packages")}
											className="w-full justify-start">
											<Package className="mr-2 h-4 w-4" />
											{t("adminDashboard.packageManagement.title")}
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
							{t("adminDashboard.logout")}
						</Button>
					</div>
				</Sidebar>
				<div className="flex-1 overflow-auto">
					<header className="bg-white shadow-sm">
						<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
							<h1 className="text-2xl font-semibold text-gray-900">
								{t(`adminDashboard.${activeSection}.title`)}
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
