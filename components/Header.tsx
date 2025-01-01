import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
	return (
		<header className="bg-white shadow-sm">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				<div className="flex items-center">
					<Link
						href="/"
						className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
						Ethio Legal Shield
					</Link>
				</div>
				<div className="hidden md:flex space-x-6">
					<Link href="#" className="text-gray-600 hover:text-blue-600">
						Services
					</Link>
					<Link href="#" className="text-gray-600 hover:text-blue-600">
						About
					</Link>
					<Link href="#" className="text-gray-600 hover:text-blue-600">
						Contact
					</Link>
				</div>
				<Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
					Get Started
				</Button>
			</nav>
		</header>
	);
}
