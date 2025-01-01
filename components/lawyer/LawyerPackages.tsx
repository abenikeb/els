"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LawyerPackages() {
	const { t, apiData } = useLanguage();
	const [packages, setPackages] = useState(apiData.lawyer.packages);
	const [newPackage, setNewPackage] = useState({
		name: "",
		description: "",
		price: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setNewPackage((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const updatedPackages = [
			...packages,
			{ ...newPackage, id: Date.now().toString() },
		];
		setPackages(updatedPackages);
		console.log("Added new package:", newPackage);
		alert(t("lawyerDashboard.packages.addSuccess"));
		setNewPackage({ name: "", description: "", price: "" });
	};

	const handleDelete = (id: string) => {
		const updatedPackages = packages.filter((pkg: any) => pkg.id !== id);
		setPackages(updatedPackages);
		console.log("Deleted package:", id);
		alert(t("lawyerDashboard.packages.deleteSuccess"));
	};

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>{t("lawyerDashboard.packages.addNew")}</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Label htmlFor="name">{t("lawyerDashboard.packages.name")}</Label>
							<Input
								id="name"
								name="name"
								value={newPackage.name}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<Label htmlFor="description">
								{t("lawyerDashboard.packages.description")}
							</Label>
							<Textarea
								id="description"
								name="description"
								value={newPackage.description}
								onChange={handleInputChange}
								rows={3}
								required
							/>
						</div>
						<div>
							<Label htmlFor="price">
								{t("lawyerDashboard.packages.price")}
							</Label>
							<Input
								id="price"
								name="price"
								type="number"
								value={newPackage.price}
								onChange={handleInputChange}
								required
							/>
						</div>
						<Button type="submit">
							{t("lawyerDashboard.packages.addButton")}
						</Button>
					</form>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>
						{t("lawyerDashboard.packages.existingPackages")}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>{t("lawyerDashboard.packages.name")}</TableHead>
								<TableHead>
									{t("lawyerDashboard.packages.description")}
								</TableHead>
								<TableHead>{t("lawyerDashboard.packages.price")}</TableHead>
								<TableHead>{t("lawyerDashboard.packages.actions")}</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{packages.map((pkg: any) => (
								<TableRow key={pkg.id}>
									<TableCell>{pkg.name}</TableCell>
									<TableCell>{pkg.description}</TableCell>
									<TableCell>{pkg.price}</TableCell>
									<TableCell>
										<Button
											size="sm"
											variant="destructive"
											onClick={() => handleDelete(pkg.id)}>
											{t("lawyerDashboard.packages.deleteButton")}
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
