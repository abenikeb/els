export interface Specialist {
	id: string;
	givenName: string;
	fatherName: string;
	mobileNumber: string;
	email: string;
	type: string;
	createdAt: string;
	updatedAt: string;
}

export interface Appointment {
	id: string;
	customerId: string;
	specialistId: string;
	scheduledAt: string;
	status: "PENDING" | "CONFIRMED" | "CANCELLED";
	notes: string | null;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
	customer: {
		id: string;
		givenName: string;
		fatherName: string;
		mobileNumber: string;
		email: string;
		type: string;
	};
	specialist: Specialist;
}
