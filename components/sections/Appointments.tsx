"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, MapPin, CalendarIcon, User, Phone, Mail } from "lucide-react";
import axios from "@/configs/axios";
import { Specialist, Appointment } from "@/types/appointment";
import Cookies from "js-cookie";

const sampleSpecialists: Specialist[] = [
	{
		id: "cm4pac4qi001pf2f6yay7uqow",
		givenName: "Tewodros",
		fatherName: "Fikadu",
		mobileNumber: "911228447",
		email: "Tedybeharu@gmail.com",
		type: "SPECIALIST",
		createdAt: "2024-12-15T07:29:16.022Z",
		updatedAt: "2024-12-15T07:29:16.022Z",
	},
];

export default function AppointmentsPage() {
	const router = useRouter();
	const { toast } = useToast();

	const [specialists, setSpecialists] =
		useState<Specialist[]>(sampleSpecialists);
	const [appointments, setAppointments] = useState<Appointment[]>([]);
	const [selectedSpecialist, setSelectedSpecialist] = useState<string>("");
	const [selectedDate, setSelectedDate] = useState<Date | undefined>(
		new Date()
	);
	const [selectedTime, setSelectedTime] = useState<string>("");
	const [notes, setNotes] = useState<string>("");

	useEffect(() => {
		const isLoggedIn = Cookies.get("jwtToken");

		if (!isLoggedIn) {
			router.push("/login");
		} else {
			fetchSpecialists();
			fetchAppointments();
		}
	}, [router]);

	const fetchSpecialists = async () => {
		try {
			const response = await axios.get("/users");
			setSpecialists(
				response.data.length > 0 ? response.data : sampleSpecialists
			);
		} catch (error) {
			console.error("Error fetching specialists:", error);
			toast({
				title: "Error",
				description: "Failed to fetch specialists. Using sample data.",
				variant: "destructive",
			});
			setSpecialists(sampleSpecialists);
		}
	};

	const fetchAppointments = async () => {
		try {
			const response = await axios.get("/appointments");
			setAppointments(response.data);
		} catch (error) {
			console.error("Error fetching appointments:", error);
			toast({
				title: "Error",
				description: "Failed to fetch appointments. Please try again.",
				variant: "destructive",
			});
		}
	};

	const handleCreateAppointment = async () => {
		if (!selectedSpecialist || !selectedDate || !selectedTime) {
			toast({
				title: "Error",
				description: "Please fill in all required fields.",
				variant: "destructive",
			});
			return;
		}

		const appointmentDateTime = new Date(selectedDate);
		const [hours, minutes] = selectedTime.split(":");
		appointmentDateTime.setHours(parseInt(hours, 10), parseInt(minutes, 10));

		try {
			await axios.post("/appointments", {
				specialistId: selectedSpecialist,
				scheduledAt: appointmentDateTime.toISOString(),
				notes: notes,
			});
			toast({
				title: "Success",
				description: "Appointment created successfully.",
			});
			fetchAppointments();
			setSelectedSpecialist("");
			setSelectedDate(new Date());
			setSelectedTime("");
			setNotes("");
		} catch (error) {
			console.error("Error creating appointment:", error);
			toast({
				title: "Error",
				description: "Failed to create appointment. Please try again.",
				variant: "destructive",
			});
		}
	};

	return (
		<div className="container mx-auto py-10 px-4 bg-gray-50 min-h-screen">
			<h1 className="text-4xl font-bold text-blue-900 mb-8">Appointments</h1>
			<Tabs defaultValue="create" className="w-full">
				<TabsList className="grid w-full grid-cols-2 mb-8">
					<TabsTrigger value="create" className="text-lg">
						Create Appointment
					</TabsTrigger>
					<TabsTrigger value="view" className="text-lg">
						View Appointments
					</TabsTrigger>
				</TabsList>
				<TabsContent value="create">
					<div className="grid gap-8 md:grid-cols-2">
						<Card className="shadow-lg">
							<CardHeader>
								<CardTitle className="text-2xl text-blue-900">
									Select a Specialist
								</CardTitle>
								<CardDescription>
									Choose a specialist for your appointment
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ScrollArea className="h-[400px] rounded-md border p-4">
									{specialists.map((specialist) => (
										<Card
											key={specialist.id}
											className="mb-4 cursor-pointer hover:bg-blue-50 transition-colors">
											<CardHeader>
												<div className="flex items-center space-x-4">
													<Avatar className="h-12 w-12">
														<AvatarImage
															src={`https://api.dicebear.com/6.x/initials/svg?seed=${specialist.givenName} ${specialist.fatherName}`}
														/>
														<AvatarFallback>
															<User className="h-6 w-6" />
														</AvatarFallback>
													</Avatar>
													<div>
														<CardTitle className="text-lg text-blue-900">
															{specialist.givenName} {specialist.fatherName}
														</CardTitle>
														<CardDescription>{specialist.type}</CardDescription>
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<div className="flex items-center space-x-2 text-sm text-gray-600">
													<Phone className="h-4 w-4" />
													<span>{specialist.mobileNumber}</span>
												</div>
												<div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
													<Mail className="h-4 w-4" />
													<span>{specialist.email}</span>
												</div>
											</CardContent>
											<CardFooter>
												<Button
													className="w-full"
													variant={
														selectedSpecialist === specialist.id
															? "default"
															: "outline"
													}
													onClick={() => setSelectedSpecialist(specialist.id)}>
													{selectedSpecialist === specialist.id
														? "Selected"
														: "Select"}
												</Button>
											</CardFooter>
										</Card>
									))}
								</ScrollArea>
							</CardContent>
						</Card>
						<Card className="shadow-lg">
							<CardHeader>
								<CardTitle className="text-2xl text-blue-900">
									Appointment Details
								</CardTitle>
								<CardDescription>
									Select date, time, and add notes for your appointment
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="space-y-2">
									<Label htmlFor="date">Date</Label>
									<Calendar
										mode="single"
										selected={selectedDate}
										onSelect={setSelectedDate}
										className="rounded-md border"
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="time">Time</Label>
									<Input
										id="time"
										type="time"
										value={selectedTime}
										onChange={(e) => setSelectedTime(e.target.value)}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="notes">Notes (Optional)</Label>
									<Input
										id="notes"
										value={notes}
										onChange={(e) => setNotes(e.target.value)}
										placeholder="Any additional notes for your appointment"
									/>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full text-lg"
									onClick={handleCreateAppointment}
									disabled={
										!selectedSpecialist || !selectedDate || !selectedTime
									}>
									Create Appointment
								</Button>
							</CardFooter>
						</Card>
					</div>
				</TabsContent>
				<TabsContent value="view">
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle className="text-2xl text-blue-900">
								Your Appointments
							</CardTitle>
							<CardDescription>
								View and manage your existing appointments
							</CardDescription>
						</CardHeader>
						<CardContent>
							{appointments.length === 0 ? (
								<p className="text-center text-gray-600">
									You have no appointments scheduled.
								</p>
							) : (
								<ScrollArea className="h-[500px]">
									<div className="space-y-6">
										{appointments.map((appointment) => (
											<Card
												key={appointment.id}
												className="shadow-md hover:shadow-lg transition-shadow">
												<CardHeader>
													<div className="flex justify-between items-center">
														<div className="flex items-center space-x-4">
															<Avatar className="h-10 w-10">
																<AvatarImage
																	src={`https://api.dicebear.com/6.x/initials/svg?seed=${appointment.specialist.givenName} ${appointment.specialist.fatherName}`}
																/>
																<AvatarFallback>
																	<User className="h-5 w-5" />
																</AvatarFallback>
															</Avatar>
															<div>
																<CardTitle className="text-lg text-blue-900">
																	{appointment.specialist.givenName}{" "}
																	{appointment.specialist.fatherName}
																</CardTitle>
																<CardDescription>
																	{appointment.specialist.type}
																</CardDescription>
															</div>
														</div>
														<Badge
															variant={
																appointment.status === "CONFIRMED"
																	? "default"
																	: "secondary"
															}>
															{appointment.status}
														</Badge>
													</div>
												</CardHeader>
												<CardContent>
													<div className="flex items-center space-x-2 text-gray-600">
														<CalendarIcon className="h-4 w-4" />
														<span>
															{format(
																new Date(appointment.scheduledAt),
																"MMMM d, yyyy"
															)}
														</span>
													</div>
													<div className="flex items-center space-x-2 text-gray-600 mt-1">
														<Clock className="h-4 w-4" />
														<span>
															{format(
																new Date(appointment.scheduledAt),
																"h:mm a"
															)}
														</span>
													</div>
													{appointment.notes && (
														<div className="mt-2 text-gray-600">
															<strong>Notes:</strong> {appointment.notes}
														</div>
													)}
												</CardContent>
											</Card>
										))}
									</div>
								</ScrollArea>
							)}
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}

// "use client";

// import { useState } from "react";
// import { useLanguage } from "@/contexts/LanguageContext";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardFooter,
// 	CardHeader,
// 	CardTitle,
// } from "@/components/ui/card";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Clock, MapPin, CalendarIcon, User } from "lucide-react";

// export default function Appointments() {
// 	const { t, apiData, getLocalizedApiData } = useLanguage();
// 	const [date, setDate] = useState<Date | undefined>(new Date());
// 	const [selectedTime, setSelectedTime] = useState<string | undefined>();
// 	const [selectedLawyer, setSelectedLawyer] = useState<string | undefined>();

// 	const handleBookAppointment = () => {
// 		if (date && selectedTime && selectedLawyer) {
// 			// Here you would typically make an API call to book the appointment
// 			console.log("Booking appointment:", {
// 				date,
// 				time: selectedTime,
// 				lawyer: selectedLawyer,
// 			});
// 			alert(t("appointments.bookingSuccess"));
// 		} else {
// 			alert(t("appointments.bookingError"));
// 		}
// 	};

// 	return (
// 		<div className="space-y-8 bg-gray-50 p-6 rounded-lg">
// 			<h2 className="text-3xl font-bold text-blue-900">
// 				{t("appointments.title")}
// 			</h2>
// 			<Tabs defaultValue="calendar" className="w-full">
// 				<TabsList className="grid w-full grid-cols-2 mb-6">
// 					<TabsTrigger value="calendar">
// 						{t("appointments.tabs.calendar")}
// 					</TabsTrigger>
// 					<TabsTrigger value="lawyers">
// 						{t("appointments.tabs.lawyers")}
// 					</TabsTrigger>
// 				</TabsList>
// 				<TabsContent value="calendar">
// 					<div className="grid gap-6 md:grid-cols-2">
// 						<Card className="shadow-md">
// 							<CardHeader>
// 								<CardTitle className="text-blue-900">
// 									{t("appointments.dateSelection.title")}
// 								</CardTitle>
// 								<CardDescription>
// 									{t("appointments.dateSelection.description")}
// 								</CardDescription>
// 							</CardHeader>
// 							<CardContent>
// 								<Calendar
// 									mode="single"
// 									selected={date}
// 									onSelect={setDate}
// 									className="rounded-md border border-blue-200"
// 								/>
// 							</CardContent>
// 						</Card>
// 						<Card className="shadow-md">
// 							<CardHeader>
// 								<CardTitle className="text-blue-900">
// 									{t("appointments.details.title")}
// 								</CardTitle>
// 								<CardDescription>
// 									{t("appointments.details.description")}
// 								</CardDescription>
// 							</CardHeader>
// 							<CardContent className="space-y-4">
// 								<div>
// 									<label className="block text-sm font-medium mb-1 text-blue-900">
// 										{t("appointments.details.timeLabel")}
// 									</label>
// 									<Select value={selectedTime} onValueChange={setSelectedTime}>
// 										<SelectTrigger className="w-full">
// 											<SelectValue
// 												placeholder={t("appointments.details.timeLabel")}
// 											/>
// 										</SelectTrigger>
// 										<SelectContent>
// 											{apiData.appointments.availableTimes.map((time: any) => (
// 												<SelectItem key={time} value={time}>
// 													{time}
// 												</SelectItem>
// 											))}
// 										</SelectContent>
// 									</Select>
// 								</div>
// 								<div>
// 									<label className="block text-sm font-medium mb-1 text-blue-900">
// 										{t("appointments.details.lawyerLabel")}
// 									</label>
// 									<Select
// 										value={selectedLawyer}
// 										onValueChange={setSelectedLawyer}>
// 										<SelectTrigger className="w-full">
// 											<SelectValue
// 												placeholder={t("appointments.details.lawyerLabel")}
// 											/>
// 										</SelectTrigger>
// 										<SelectContent>
// 											{apiData.appointments.lawyers.map((lawyer: any) => (
// 												<SelectItem key={lawyer.id} value={lawyer.id}>
// 													{getLocalizedApiData(
// 														`appointments.lawyers.${lawyer.id}.name`
// 													)}
// 												</SelectItem>
// 											))}
// 										</SelectContent>
// 									</Select>
// 								</div>
// 							</CardContent>
// 							<CardFooter>
// 								<Button
// 									className="w-full bg-blue-600 hover:bg-blue-700 text-white"
// 									onClick={handleBookAppointment}>
// 									{t("appointments.button")}
// 								</Button>
// 							</CardFooter>
// 						</Card>
// 					</div>
// 				</TabsContent>
// 				<TabsContent value="lawyers">
// 					<ScrollArea className="h-[500px] rounded-md border border-blue-200 p-4">
// 						{apiData.appointments.lawyers.map((lawyer: any) => (
// 							<Card
// 								key={lawyer.id}
// 								className="mb-4 shadow-md hover:shadow-lg transition-shadow duration-200">
// 								<CardHeader>
// 									<div className="flex items-center space-x-4">
// 										<Avatar className="h-12 w-12">
// 											<AvatarImage
// 												src={`/placeholder.svg?height=48&width=48`}
// 												alt={
// 													getLocalizedApiData(
// 														`appointments.lawyers.${lawyer.id}.name`
// 													) || ""
// 												}
// 											/>
// 											<AvatarFallback>
// 												<User className="h-6 w-6" />
// 											</AvatarFallback>
// 										</Avatar>
// 										<div>
// 											<CardTitle className="text-blue-900">
// 												{getLocalizedApiData(
// 													`appointments.lawyers.${lawyer.id}.name`
// 												)}
// 											</CardTitle>
// 											<CardDescription>
// 												{getLocalizedApiData(
// 													`appointments.lawyers.${lawyer.id}.specialization`
// 												)}
// 											</CardDescription>
// 										</div>
// 									</div>
// 								</CardHeader>
// 								<CardContent>
// 									<p className="text-sm text-gray-600 mb-4">
// 										{getLocalizedApiData(
// 											`appointments.lawyers.${lawyer.id}.bio`
// 										)}
// 									</p>
// 									<div className="flex space-x-2">
// 										<Badge
// 											variant="secondary"
// 											className="bg-blue-100 text-blue-800">
// 											<Clock className="w-3 h-3 mr-1" />
// 											{getLocalizedApiData(
// 												`appointments.lawyers.${lawyer.id}.availability`
// 											)}
// 										</Badge>
// 										<Badge
// 											variant="secondary"
// 											className="bg-blue-100 text-blue-800">
// 											<MapPin className="w-3 h-3 mr-1" />
// 											{getLocalizedApiData(
// 												`appointments.lawyers.${lawyer.id}.location`
// 											)}
// 										</Badge>
// 									</div>
// 								</CardContent>
// 								<CardFooter>
// 									<Button
// 										className="w-full bg-blue-600 hover:bg-blue-700 text-white"
// 										onClick={() => setSelectedLawyer(lawyer.id)}>
// 										{t("appointments.selectLawyer")}
// 									</Button>
// 								</CardFooter>
// 							</Card>
// 						))}
// 					</ScrollArea>
// 				</TabsContent>
// 			</Tabs>
// 			{date && selectedTime && selectedLawyer && (
// 				<Card className="bg-blue-50 border-blue-200 shadow-md mt-6">
// 					<CardHeader>
// 						<CardTitle className="text-blue-900">
// 							{t("appointments.summary.title")}
// 						</CardTitle>
// 					</CardHeader>
// 					<CardContent>
// 						<div className="flex items-center space-x-2 text-blue-800">
// 							<CalendarIcon className="w-5 h-5" />
// 							<span>{date.toLocaleDateString()}</span>
// 						</div>
// 						<div className="flex items-center space-x-2 text-blue-800 mt-2">
// 							<Clock className="w-5 h-5" />
// 							<span>{selectedTime}</span>
// 						</div>
// 						<div className="flex items-center space-x-2 text-blue-800 mt-2">
// 							<Avatar className="w-5 h-5">
// 								<AvatarImage
// 									src={`/placeholder.svg?height=20&width=20`}
// 									alt={
// 										getLocalizedApiData(
// 											`appointments.lawyers.${selectedLawyer}.name`
// 										) || ""
// 									}
// 								/>
// 								<AvatarFallback>
// 									<User className="h-3 w-3" />
// 								</AvatarFallback>
// 							</Avatar>
// 							<span>
// 								{getLocalizedApiData(
// 									`appointments.lawyers.${selectedLawyer}.name`
// 								) || ""}
// 							</span>
// 						</div>
// 					</CardContent>
// 				</Card>
// 			)}
// 		</div>
// 	);
// }
