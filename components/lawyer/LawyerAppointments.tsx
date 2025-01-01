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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LawyerAppointments() {
	const { t, apiData } = useLanguage();
	const [appointments, setAppointments] = useState(apiData.lawyer.appointments);

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
		console.log(`Appointment ${id} ${action}d`);
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>{t("lawyerDashboard.appointments.title")}</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>
								{t("lawyerDashboard.appointments.clientName")}
							</TableHead>
							<TableHead>{t("lawyerDashboard.appointments.date")}</TableHead>
							<TableHead>{t("lawyerDashboard.appointments.time")}</TableHead>
							<TableHead>{t("lawyerDashboard.appointments.status")}</TableHead>
							<TableHead>{t("lawyerDashboard.appointments.actions")}</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{appointments.map((appointment: any) => (
							<TableRow key={appointment.id}>
								<TableCell>{appointment.clientName}</TableCell>
								<TableCell>{appointment.date}</TableCell>
								<TableCell>{appointment.time}</TableCell>
								<TableCell>
									<Badge
										variant={
											appointment.status === "approved"
												? "default"
												: appointment.status === "rejected"
												? "destructive"
												: "default"
										}>
										{t(
											`lawyerDashboard.appointments.statuses.${appointment.status}`
										)}
									</Badge>
								</TableCell>
								<TableCell>
									{appointment.status === "pending" && (
										<>
											<Button
												size="sm"
												variant="outline"
												className="mr-2"
												onClick={() =>
													handleAppointmentAction(appointment.id, "approve")
												}>
												{t("lawyerDashboard.appointments.approve")}
											</Button>
											<Button
												size="sm"
												variant="destructive"
												onClick={() =>
													handleAppointmentAction(appointment.id, "reject")
												}>
												{t("lawyerDashboard.appointments.reject")}
											</Button>
										</>
									)}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	);
}
