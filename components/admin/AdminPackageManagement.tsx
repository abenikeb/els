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

export default function AdminPackageManagement() {
	const { t, apiData } = useLanguage();
	const [packages, setPackages] = useState(apiData.admin.packages);
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
		// Here you would typically make an API call to add the new package
		const updatedPackages = [
			...packages,
			{ ...newPackage, id: Date.now().toString() },
		];
		setPackages(updatedPackages);
		setNewPackage({ name: "", description: "", price: "" });
		console.log("Added new package:", newPackage);
	};

	const handleDeletePackage = (id: string) => {
		// Here you would typically make an API call to delete the package
		const updatedPackages = packages.filter((pkg: any) => pkg.id !== id);
		setPackages(updatedPackages);
		console.log("Deleted package:", id);
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">
				{t("adminDashboard.packageManagement.title")}
			</h2>
			<form onSubmit={handleSubmit} className="space-y-4 mb-8">
				<div>
					<Label htmlFor="name">
						{t("adminDashboard.packageManagement.name")}
					</Label>
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
						{t("adminDashboard.packageManagement.description")}
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
						{t("adminDashboard.packageManagement.price")}
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
					{t("adminDashboard.packageManagement.addButton")}
				</Button>
			</form>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>{t("adminDashboard.packageManagement.name")}</TableHead>
						<TableHead>
							{t("adminDashboard.packageManagement.description")}
						</TableHead>
						<TableHead>{t("adminDashboard.packageManagement.price")}</TableHead>
						<TableHead>
							{t("adminDashboard.packageManagement.actions")}
						</TableHead>
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
									onClick={() => handleDeletePackage(pkg.id)}>
									{t("adminDashboard.packageManagement.deleteButton")}
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
