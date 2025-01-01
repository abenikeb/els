"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function AdminUserManagement() {
	const { t, apiData } = useLanguage();
	const [users, setUsers] = useState(apiData.admin.users);

	const handleDeleteUser = (id: string) => {
		// Here you would typically make an API call to delete the user
		const updatedUsers = users.filter((user: any) => user.id !== id);
		setUsers(updatedUsers);
		console.log("Deleted user:", id);
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">
				{t("adminDashboard.userManagement.title")}
			</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>{t("adminDashboard.userManagement.name")}</TableHead>
						<TableHead>{t("adminDashboard.userManagement.email")}</TableHead>
						<TableHead>{t("adminDashboard.userManagement.role")}</TableHead>
						<TableHead>{t("adminDashboard.userManagement.actions")}</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{users.map((user: any) => (
						<TableRow key={user.id}>
							<TableCell>{user.name}</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell>{user.role}</TableCell>
							<TableCell>
								<Button
									size="sm"
									variant="destructive"
									onClick={() => handleDeleteUser(user.id)}>
									{t("adminDashboard.userManagement.deleteButton")}
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
