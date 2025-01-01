"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, MapPin, CalendarIcon, User } from "lucide-react";

export default function Appointments() {
	const { t, apiData, getLocalizedApiData } = useLanguage();
	const [date, setDate] = useState<Date | undefined>(new Date());
	const [selectedTime, setSelectedTime] = useState<string | undefined>();
	const [selectedLawyer, setSelectedLawyer] = useState<string | undefined>();

	const handleBookAppointment = () => {
		if (date && selectedTime && selectedLawyer) {
			// Here you would typically make an API call to book the appointment
			console.log("Booking appointment:", {
				date,
				time: selectedTime,
				lawyer: selectedLawyer,
			});
			alert(t("appointments.bookingSuccess"));
		} else {
			alert(t("appointments.bookingError"));
		}
	};

	return (
		<div className="space-y-8 bg-gray-50 p-6 rounded-lg">
			<h2 className="text-3xl font-bold text-blue-900">
				{t("appointments.title")}
			</h2>
			<Tabs defaultValue="calendar" className="w-full">
				<TabsList className="grid w-full grid-cols-2 mb-6">
					<TabsTrigger value="calendar">
						{t("appointments.tabs.calendar")}
					</TabsTrigger>
					<TabsTrigger value="lawyers">
						{t("appointments.tabs.lawyers")}
					</TabsTrigger>
				</TabsList>
				<TabsContent value="calendar">
					<div className="grid gap-6 md:grid-cols-2">
						<Card className="shadow-md">
							<CardHeader>
								<CardTitle className="text-blue-900">
									{t("appointments.dateSelection.title")}
								</CardTitle>
								<CardDescription>
									{t("appointments.dateSelection.description")}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Calendar
									mode="single"
									selected={date}
									onSelect={setDate}
									className="rounded-md border border-blue-200"
								/>
							</CardContent>
						</Card>
						<Card className="shadow-md">
							<CardHeader>
								<CardTitle className="text-blue-900">
									{t("appointments.details.title")}
								</CardTitle>
								<CardDescription>
									{t("appointments.details.description")}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<label className="block text-sm font-medium mb-1 text-blue-900">
										{t("appointments.details.timeLabel")}
									</label>
									<Select value={selectedTime} onValueChange={setSelectedTime}>
										<SelectTrigger className="w-full">
											<SelectValue
												placeholder={t("appointments.details.timeLabel")}
											/>
										</SelectTrigger>
										<SelectContent>
											{apiData.appointments.availableTimes.map((time: any) => (
												<SelectItem key={time} value={time}>
													{time}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1 text-blue-900">
										{t("appointments.details.lawyerLabel")}
									</label>
									<Select
										value={selectedLawyer}
										onValueChange={setSelectedLawyer}>
										<SelectTrigger className="w-full">
											<SelectValue
												placeholder={t("appointments.details.lawyerLabel")}
											/>
										</SelectTrigger>
										<SelectContent>
											{apiData.appointments.lawyers.map((lawyer: any) => (
												<SelectItem key={lawyer.id} value={lawyer.id}>
													{getLocalizedApiData(
														`appointments.lawyers.${lawyer.id}.name`
													)}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</CardContent>
							<CardFooter>
								<Button
									className="w-full bg-blue-600 hover:bg-blue-700 text-white"
									onClick={handleBookAppointment}>
									{t("appointments.button")}
								</Button>
							</CardFooter>
						</Card>
					</div>
				</TabsContent>
				<TabsContent value="lawyers">
					<ScrollArea className="h-[500px] rounded-md border border-blue-200 p-4">
						{apiData.appointments.lawyers.map((lawyer: any) => (
							<Card
								key={lawyer.id}
								className="mb-4 shadow-md hover:shadow-lg transition-shadow duration-200">
								<CardHeader>
									<div className="flex items-center space-x-4">
										<Avatar className="h-12 w-12">
											<AvatarImage
												src={`/placeholder.svg?height=48&width=48`}
												alt={
													getLocalizedApiData(
														`appointments.lawyers.${lawyer.id}.name`
													) || ""
												}
											/>
											<AvatarFallback>
												<User className="h-6 w-6" />
											</AvatarFallback>
										</Avatar>
										<div>
											<CardTitle className="text-blue-900">
												{getLocalizedApiData(
													`appointments.lawyers.${lawyer.id}.name`
												)}
											</CardTitle>
											<CardDescription>
												{getLocalizedApiData(
													`appointments.lawyers.${lawyer.id}.specialization`
												)}
											</CardDescription>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-gray-600 mb-4">
										{getLocalizedApiData(
											`appointments.lawyers.${lawyer.id}.bio`
										)}
									</p>
									<div className="flex space-x-2">
										<Badge
											variant="secondary"
											className="bg-blue-100 text-blue-800">
											<Clock className="w-3 h-3 mr-1" />
											{getLocalizedApiData(
												`appointments.lawyers.${lawyer.id}.availability`
											)}
										</Badge>
										<Badge
											variant="secondary"
											className="bg-blue-100 text-blue-800">
											<MapPin className="w-3 h-3 mr-1" />
											{getLocalizedApiData(
												`appointments.lawyers.${lawyer.id}.location`
											)}
										</Badge>
									</div>
								</CardContent>
								<CardFooter>
									<Button
										className="w-full bg-blue-600 hover:bg-blue-700 text-white"
										onClick={() => setSelectedLawyer(lawyer.id)}>
										{t("appointments.selectLawyer")}
									</Button>
								</CardFooter>
							</Card>
						))}
					</ScrollArea>
				</TabsContent>
			</Tabs>
			{date && selectedTime && selectedLawyer && (
				<Card className="bg-blue-50 border-blue-200 shadow-md mt-6">
					<CardHeader>
						<CardTitle className="text-blue-900">
							{t("appointments.summary.title")}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center space-x-2 text-blue-800">
							<CalendarIcon className="w-5 h-5" />
							<span>{date.toLocaleDateString()}</span>
						</div>
						<div className="flex items-center space-x-2 text-blue-800 mt-2">
							<Clock className="w-5 h-5" />
							<span>{selectedTime}</span>
						</div>
						<div className="flex items-center space-x-2 text-blue-800 mt-2">
							<Avatar className="w-5 h-5">
								<AvatarImage
									src={`/placeholder.svg?height=20&width=20`}
									alt={
										getLocalizedApiData(
											`appointments.lawyers.${selectedLawyer}.name`
										) || ""
									}
								/>
								<AvatarFallback>
									<User className="h-3 w-3" />
								</AvatarFallback>
							</Avatar>
							<span>
								{getLocalizedApiData(
									`appointments.lawyers.${selectedLawyer}.name`
								) || ""}
							</span>
						</div>
					</CardContent>
				</Card>
			)}
		</div>
	);
}
