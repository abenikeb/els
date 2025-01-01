"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsPage() {
	const { t } = useLanguage();

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">{t("navigation.terms")}</h1>
			<p>This is the Terms and Conditions page content.</p>
		</div>
	);
}
