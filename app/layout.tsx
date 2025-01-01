import type { Metadata } from "next";
import { Raleway as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

import "./globals.css";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Provider from "@/components/Provider";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["400", "500", "600", "700"],
});

export const metadata = {
	title: "Ethio Legal Shield",
	description:
		"Affordable legal protection for individuals and businesses in Ethiopia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Provider session={undefined}>
				<LanguageProvider>
					<body
						className={cn(
							"min-h-screen bg-background font-sans antialiased",
							fontSans.variable
						)}>
						{/* <Header /> */}
						<main className="min-h-screen">{children}</main>
						{/* <Footer /> */}
					</body>
				</LanguageProvider>
				{/* <Footer /> */}
			</Provider>
		</html>
	);
}
