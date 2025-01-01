"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

export default function AdminLawyerManagement() {
	const { t, apiData } = useLanguage();
	const [lawyers, setLawyers] = useState(apiData.admin.lawyers);
	const [newLawyer, setNewLawyer] = useState({
		name: "",
		email: "",
		specialization: "",
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewLawyer((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddLawyer = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically make an API call to add the new lawyer
		const updatedLawyers = [
			...lawyers,
			{ ...newLawyer, id: Date.now().toString() },
		];
		setLawyers(updatedLawyers);
		setNewLawyer({ name: "", email: "", specialization: "" });
		console.log("Added new lawyer:", newLawyer);
	};

	const handleDeleteLawyer = (id: string) => {
		// Here you would typically make an API call to delete the lawyer
		const updatedLawyers = lawyers.filter((lawyer: any) => lawyer.id !== id);
		setLawyers(updatedLawyers);
		console.log("Deleted lawyer:", id);
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">
				{t("adminDashboard.lawyerManagement.title")}
			</h2>
			<Dialog>
				<DialogTrigger asChild>
					<Button className="mb-4">
						{t("adminDashboard.lawyerManagement.addLawyer")}
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							{t("adminDashboard.lawyerManagement.addLawyerTitle")}
						</DialogTitle>
					</DialogHeader>
					<form onSubmit={handleAddLawyer} className="space-y-4">
						<div>
							<Label htmlFor="name">
								{t("adminDashboard.lawyerManagement.name")}
							</Label>
							<Input
								id="name"
								name="name"
								value={newLawyer.name}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<Label htmlFor="email">
								{t("adminDashboard.lawyerManagement.email")}
							</Label>
							<Input
								id="email"
								name="email"
								type="email"
								value={newLawyer.email}
								onChange={handleInputChange}
								required
							/>
						</div>
						<div>
							<Label htmlFor="specialization">
								{t("adminDashboard.lawyerManagement.specialization")}
							</Label>
							<Input
								id="specialization"
								name="specialization"
								value={newLawyer.specialization}
								onChange={handleInputChange}
								required
							/>
						</div>
						<Button type="submit">
							{t("adminDashboard.lawyerManagement.addButton")}
						</Button>
					</form>
				</DialogContent>
			</Dialog>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>{t("adminDashboard.lawyerManagement.name")}</TableHead>
						<TableHead>{t("adminDashboard.lawyerManagement.email")}</TableHead>
						<TableHead>
							{t("adminDashboard.lawyerManagement.specialization")}
						</TableHead>
						<TableHead>
							{t("adminDashboard.lawyerManagement.actions")}
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{lawyers.map((lawyer: any) => (
						<TableRow key={lawyer.id}>
							<TableCell>{lawyer.name}</TableCell>
							<TableCell>{lawyer.email}</TableCell>
							<TableCell>{lawyer.specialization}</TableCell>
							<TableCell>
								<Button
									size="sm"
									variant="destructive"
									onClick={() => handleDeleteLawyer(lawyer.id)}>
									{t("adminDashboard.lawyerManagement.deleteButton")}
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
