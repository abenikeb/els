"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import SideDrawer from "@/components/layout/SideDrawer";
import Content from "@/components/sections/Content";
import Packages from "@/components/sections/Packages";
import Appointments from "@/components/sections/Appointments";
import Profile from "@/components/sections/Profile";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
	const [activeTab, setActiveTab] = useState("content");
	const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
	const { t } = useLanguage();

	const renderActiveSection = () => {
		switch (activeTab) {
			case "content":
				return <Content />;
			case "packages":
				return <Packages />;
			case "appointments":
				return <Appointments />;
			case "profile":
				return <Profile />;
			default:
				return <Content />;
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col">
			<Header onMenuClick={() => setIsSideDrawerOpen(true)} />
			<SideDrawer
				isOpen={isSideDrawerOpen}
				onClose={() => setIsSideDrawerOpen(false)}
				activeTab={activeTab}
				setActiveTab={setActiveTab}
			/>
			<main className="flex-grow container mx-auto px-4 py-8">
				{renderActiveSection()}
			</main>
			{/* <Footer /> */}
			<BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	);
}
