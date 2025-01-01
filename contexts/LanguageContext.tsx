"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import { getStaticText, getMockApiData, Language } from "@/app/api/mockData";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
	staticText: any;
	apiData: any;
	getLocalizedApiData: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>("en");
	const [staticText, setStaticText] = useState(getStaticText("en"));
	const [apiData] = useState(getMockApiData());

	const [translations, setTranslations] = useState<Record<string, string>>({});

	useEffect(() => {
		const savedLanguage = localStorage.getItem("language") as Language;
		if (savedLanguage) {
			setLanguage(savedLanguage);
			setStaticText(getStaticText(savedLanguage));
		}

		const fetchTranslations = async () => {
			// In a real application, you would fetch this from an API or file
			const newTranslations = {
				en: {
					"profile.title": "Profile",
					"profile.tabs.personalInfo": "Personal Info",
					"profile.tabs.changePassword": "Change Password",
					"profile.personalInfo.title": "Personal Information",
					"profile.personalInfo.description":
						"Update your personal details here",
					"profile.personalInfo.firstName": "First Name",
					"profile.personalInfo.lastName": "Last Name",
					"profile.personalInfo.email": "Email",
					"profile.personalInfo.phone": "Phone",
					"profile.personalInfo.changePicture": "Change Picture",
					"profile.personalInfo.saveButton": "Save Changes",
					"profile.personalInfo.saveSuccess":
						"Personal information updated successfully",
					"profile.changePassword.title": "Change Password",
					"profile.changePassword.description":
						"Ensure your account is using a strong password",
					"profile.changePassword.currentPassword": "Current Password",
					"profile.changePassword.newPassword": "New Password",
					"profile.changePassword.confirmPassword": "Confirm New Password",
					"profile.changePassword.updateButton": "Update Password",
					"profile.changePassword.mismatchError": "New passwords do not match",
					"profile.changePassword.updateSuccess":
						"Password updated successfully",
				},
				am: {
					"profile.title": "መገለጫ",
					"profile.tabs.personalInfo": "የግል መረጃ",
					"profile.tabs.changePassword": "የይለፍ ቃል ለውጥ",
					"profile.personalInfo.title": "የግል መረጃ",
					"profile.personalInfo.description": "የግል ዝርዝሮችዎን እዚህ ያዘምኑ",
					"profile.personalInfo.firstName": "ስም",
					"profile.personalInfo.lastName": "የአባት ስም",
					"profile.personalInfo.email": "ኢሜይል",
					"profile.personalInfo.phone": "ስልክ ቁጥር",
					"profile.personalInfo.changePicture": "ምስል ለውጥ",
					"profile.personalInfo.saveButton": "ለውጦችን አስቀምጥ",
					"profile.personalInfo.saveSuccess": "የግል መረጃ በተሳካ ሁኔታ ተዘምኗል",
					"profile.changePassword.title": "የይለፍ ቃል ለውጥ",
					"profile.changePassword.description":
						"አካውንትዎ ጠንካራ የይለፍ ቃል እየተጠቀመ መሆኑን ያረጋግጡ",
					"profile.changePassword.currentPassword": "አሁን ያለው የይለፍ ቃል",
					"profile.changePassword.newPassword": "አዲስ የይለፍ ቃል",
					"profile.changePassword.confirmPassword": "አዲስ የይለፍ ቃልን አረጋግጥ",
					"profile.changePassword.updateButton": "የይለፍ ቃል አዘምን",
					"profile.changePassword.mismatchError": "አዲስ የይለፍ ቃሎች አይዛመዱም",
					"profile.changePassword.updateSuccess": "የይለፍ ቃል በተሳካ ሁኔታ ተዘምኗል",
				},
				om: {
					"profile.title": "Ibsa",
					"profile.tabs.personalInfo": "Odeeffannoo Dhuunfaa",
					"profile.tabs.changePassword": "Jecha Icciitii Jijjiiruu",
					"profile.personalInfo.title": "Odeeffannoo Dhuunfaa",
					"profile.personalInfo.description":
						"Odeeffannoo dhuunfaa keessan asitti haaromsa",
					"profile.personalInfo.firstName": "Maqaa",
					"profile.personalInfo.lastName": "Maqaa Abbaa",
					"profile.personalInfo.email": "Imeelii",
					"profile.personalInfo.phone": "Bilbila",
					"profile.personalInfo.changePicture": "Suuraa Jijjiiruu",
					"profile.personalInfo.saveButton": "Jijjiirama Olkaa'uu",
					"profile.personalInfo.saveSuccess":
						"Odeeffannoon dhuunfaa milkaa'inaan haaromfameera",
					"profile.changePassword.title": "Jecha Icciitii Jijjiiruu",
					"profile.changePassword.description":
						"Akkaawuntiin keessan jecha icciitii cimaa fayyadamaa jiraachuu mirkaneeffadhaa",
					"profile.changePassword.currentPassword": "Jecha Icciitii Ammaa",
					"profile.changePassword.newPassword": "Jecha Icciitii Haaraa",
					"profile.changePassword.confirmPassword":
						"Jecha Icciitii Haaraa Mirkaneessuu",
					"profile.changePassword.updateButton": "Jecha Icciitii Haaromsi",
					"profile.changePassword.mismatchError":
						"Jecha icciitii haaraan wal hin simu",
					"profile.changePassword.updateSuccess":
						"Jecha icciitii milkaainaan haaromfameera",
				},
			};
			setTranslations(newTranslations[language]);
		};
		fetchTranslations();
	}, []);

	const changeLanguage = (lang: Language) => {
		setLanguage(lang);
		setStaticText(getStaticText(lang));
		localStorage.setItem("language", lang);
	};

	const t = (key: string): string => {
		const keys = key.split(".");
		let value: any = staticText;
		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				return key; // Return the key if translation is not found
			}
		}
		return typeof value === "string" ? value : key;
	};

	const getLocalizedApiData = (key: string): any => {
		const keys = key.split(".");
		let value: any = apiData;
		for (const k of keys) {
			if (value && typeof value === "object" && k in value) {
				value = value[k];
			} else {
				return undefined;
			}
		}
		return value && typeof value === "object" && language in value
			? value[language]
			: value;
	};

	return (
		<LanguageContext.Provider
			value={{
				language,
				setLanguage: changeLanguage,
				t,
				staticText,
				apiData,
				getLocalizedApiData,
			}}>
			{children}
		</LanguageContext.Provider>
	);
};
