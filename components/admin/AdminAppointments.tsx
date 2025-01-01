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

export default function AdminAppointments() {
	const { t, apiData } = useLanguage();
	const [appointments, setAppointments] = useState(apiData.admin.appointments);

	const handleAppointmentAction = (
		id: string,
		action: "approve" | "reject"
	) => {
		setAppointments((prev: any) =>
			prev.map((app: any) =>
				app.id === id
					? { ...app, status: action === "approve" ? "approved" : "rejected" }
					: app
			)
		);
		// Here you would typically make an API call to update the appointment status
		console.log(`Appointment ${id} ${action}d`);
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4">
				{t("adminDashboard.appointments.title")}
			</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>{t("adminDashboard.appointments.clientName")}</TableHead>
						<TableHead>{t("adminDashboard.appointments.lawyerName")}</TableHead>
						<TableHead>{t("adminDashboard.appointments.date")}</TableHead>
						<TableHead>{t("adminDashboard.appointments.time")}</TableHead>
						<TableHead>{t("adminDashboard.appointments.status")}</TableHead>
						<TableHead>{t("adminDashboard.appointments.actions")}</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{appointments.map((appointment: any) => (
						<TableRow key={appointment.id}>
							<TableCell>{appointment.clientName}</TableCell>
							<TableCell>{appointment.lawyerName}</TableCell>
							<TableCell>{appointment.date}</TableCell>
							<TableCell>{appointment.time}</TableCell>
							<TableCell>
								{t(
									`adminDashboard.appointments.statuses.${appointment.status}`
								)}
							</TableCell>
							<TableCell>
								{appointment.status === "pending" && (
									<>
										<Button
											size="sm"
											className="mr-2"
											onClick={() =>
												handleAppointmentAction(appointment.id, "approve")
											}>
											{t("adminDashboard.appointments.approve")}
										</Button>
										<Button
											size="sm"
											variant="destructive"
											onClick={() =>
												handleAppointmentAction(appointment.id, "reject")
											}>
											{t("adminDashboard.appointments.reject")}
										</Button>
									</>
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
