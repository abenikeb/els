"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
	onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
	const { language, setLanguage, t } = useLanguage();

	return (
		<header className="bg-white shadow-sm">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center">
					<Button
						variant="ghost"
						className="md:hidden mr-2"
						onClick={onMenuClick}>
						<Menu className="h-6 w-6" />
					</Button>
					<Link
						href="/"
						className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
						<img
							src="/assets/images/logo-els.png"
							className="w-32 h-10"
							alt=""
						/>
					</Link>
				</div>
				<div className="hidden md:flex space-x-6">
					<Link href="#" className="text-gray-600 hover:text-blue-600">
						{t("nav.content")}
					</Link>
					<Link href="#" className="text-gray-600 hover:text-blue-600">
						{t("nav.packages")}
					</Link>
					<Link href="#" className="text-gray-600 hover:text-blue-600">
						{t("nav.appointments")}
					</Link>
					<Link href="#" className="text-gray-600 hover:text-blue-600">
						{t("nav.profile")}
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<Select
						value={language}
						onValueChange={(value) => setLanguage(value as "en" | "am" | "om")}>
						<SelectTrigger className="w-[100px]">
							<SelectValue placeholder="Language" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="en">English</SelectItem>
							<SelectItem value="am">አማርኛ</SelectItem>
							<SelectItem value="om">Afaan Oromoo</SelectItem>
						</SelectContent>
					</Select>
					{/* <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
						Get Started
					</Button> */}
				</div>
			</nav>
		</header>
	);
}
