"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function LawyerProfile() {
	const { t, apiData } = useLanguage();
	const [profile, setProfile] = useState(apiData.lawyer.profile);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setProfile((prev: any) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Updated profile:", profile);
		alert(t("lawyerDashboard.profile.updateSuccess"));
	};

	return (
		<div className="max-w-2xl ">
			<div className="flex items-center space-x-4 mb-6">
				<Avatar className="h-20 w-20">
					<AvatarImage src={profile.avatar} />
					<AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
				</Avatar>
				<div>
					<h2 className="text-2xl font-bold">{profile.name}</h2>
					<p className="text-gray-500">{profile.specialization}</p>
				</div>
			</div>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div>
						<Label htmlFor="name">{t("lawyerDashboard.profile.name")}</Label>
						<Input
							id="name"
							name="name"
							value={profile.name}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label htmlFor="email">{t("lawyerDashboard.profile.email")}</Label>
						<Input
							id="email"
							name="email"
							type="email"
							value={profile.email}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label htmlFor="phone">{t("lawyerDashboard.profile.phone")}</Label>
						<Input
							id="phone"
							name="phone"
							value={profile.phone}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div>
						<Label htmlFor="specialization">
							{t("lawyerDashboard.profile.specialization")}
						</Label>
						<Input
							id="specialization"
							name="specialization"
							value={profile.specialization}
							onChange={handleInputChange}
							required
						/>
					</div>
				</div>
				<div>
					<Label htmlFor="bio">{t("lawyerDashboard.profile.bio")}</Label>
					<Textarea
						id="bio"
						name="bio"
						value={profile.bio}
						onChange={handleInputChange}
						rows={4}
						required
					/>
				</div>
				<Button type="submit" className="bg-blue-800">
					{t("lawyerDashboard.profile.updateButton")}
				</Button>
			</form>
		</div>
	);
}
