"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Book,
	Package,
	Calendar,
	User,
	Info,
	FileText,
	MapPin,
	LogIn,
	LogOut,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface SideDrawerProps {
	isOpen: boolean;
	onClose: () => void;
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

export default function SideDrawer({
	isOpen,
	onClose,
	activeTab,
	setActiveTab,
}: SideDrawerProps) {
	const { t } = useLanguage();
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		// Check if user is logged in
		setIsLoggedIn(document.cookie.includes("session=authenticated"));
	}, []);

	const handleLogout = () => {
		// Clear the session cookie
		document.cookie =
			"session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		setIsLoggedIn(false);
		router.push("/login");
		onClose();
	};

	const navItems = [
		{ id: "content", icon: Book, label: t("nav.content") },
		{ id: "packages", icon: Package, label: t("nav.packages") },
		{ id: "appointments", icon: Calendar, label: t("nav.appointments") },
		{ id: "profile", icon: User, label: t("nav.profile") },
	];

	const additionalItems = [
		{ id: "about", icon: Info, label: t("navigation.about") },
		{ id: "terms", icon: FileText, label: t("navigation.terms") },
		{ id: "address", icon: MapPin, label: t("navigation.address") },
	];

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent side="left" className="w-[300px] sm:w-[400px]">
				<SheetHeader>
					<SheetTitle className="text-2xl font-bold text-blue-600">
						Ethio Legal Shield
					</SheetTitle>
				</SheetHeader>
				<nav className="mt-8">
					<ul className="space-y-2">
						{navItems.map((item) => (
							<li key={item.id}>
								<Button
									variant="ghost"
									className={`w-full justify-start text-lg ${
										activeTab === item.id ? "bg-blue-100 text-blue-600" : ""
									}`}
									onClick={() => {
										setActiveTab(item.id);
										onClose();
									}}>
									<item.icon className="mr-2 h-5 w-5" />
									{item.label}
								</Button>
							</li>
						))}
					</ul>
					<Separator className="my-4" />
					<ul className="space-y-2">
						{additionalItems.map((item) => (
							<li key={item.id}>
								<Button
									variant="ghost"
									className="w-full justify-start text-lg"
									asChild>
									<Link href={`/${item.id}`}>
										<item.icon className="mr-2 h-5 w-5" />
										{item.label}
									</Link>
								</Button>
							</li>
						))}
					</ul>
					<Separator className="my-4" />
					{isLoggedIn ? (
						<Button
							variant="destructive"
							className="w-full justify-start text-lg"
							onClick={handleLogout}>
							<LogOut className="mr-2 h-5 w-5" />
							{t("navigation.logout")}
						</Button>
					) : (
						<Button
							variant="default"
							className="w-full justify-start text-lg"
							asChild>
							<Link href="/login">
								<LogIn className="mr-2 h-5 w-5" />
								{t("navigation.login")}
							</Link>
						</Button>
					)}
				</nav>
			</SheetContent>
		</Sheet>
	);
}
