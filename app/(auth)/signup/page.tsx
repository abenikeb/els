import React from "react";
import UserRegistrationForm from "./register-form";

const RegistrationPage = () => {
	return (
		<div className="flex min-h-screen items-center justify-center py-8">
			<div className="w-full">
				<UserRegistrationForm />
			</div>
		</div>
	);
};

export default RegistrationPage;
