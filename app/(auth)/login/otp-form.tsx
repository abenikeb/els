"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { useVerifyUserMutation } from "../signup/user-query";

const otpSchema = z.object({
	otp: z.string().length(6, "Please enter a valid 6-digit code"),
	email: z.string().email(),
});

type OTPFormValues = z.infer<typeof otpSchema>;

export default function OTPForm({ open, setOpen, email }: any) {
	const { mutate: verifyOtp } = useVerifyUserMutation();
	const router = useRouter();
	const [error, setError] = useState(null);

	const form = useForm<OTPFormValues>({
		resolver: zodResolver(otpSchema),
		defaultValues: {
			otp: "",
			email: "",
		},
	});

	useEffect(() => {
		form.setValue("email", email);
	}, [email]);

	const onSubmit = (values: OTPFormValues) => {
		// Handle OTP verification here
		verifyOtp(values, {
			onSuccess(data, variables, context) {
				router.push("/login");
			},
			onError(error: any, variables, context) {
				console.log("🚀 ~ onSubmit ~ error:", error.response.data.message);
				setError(error.response.data.message);
			},
		});
		console.log("OTP submitted:", values.otp);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent
				className="sm:max-w-[425px]"
				onPointerDownOutside={(e) => e.preventDefault()}>
				<DialogHeader>
					<DialogTitle>Verification Required</DialogTitle>
					<DialogDescription>
						Please enter the 6-digit code sent to your device.
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="otp"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div className="flex justify-center">
											<InputOTP
												value={field.value}
												onChange={field.onChange}
												maxLength={6}>
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
													<InputOTPSlot index={2} />
													<InputOTPSlot index={3} />
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</div>
									</FormControl>
									{error && <p>{error}</p>}

									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="flex justify-between">
							<Button
								variant="ghost"
								onClick={() => form.reset()}
								type="button">
								Clear
							</Button>
							<Button type="submit">
								{form.formState.isSubmitting ? "Verifying..." : "Verify"}
							</Button>
						</div>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
