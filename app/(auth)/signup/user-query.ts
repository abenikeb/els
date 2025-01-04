import axios from "@/configs/axios";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/configs/query-client";

export const useCreateUserMutation = () =>
	useMutation((userInput: any) => axios.post("users", userInput), {
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});

export const useVerifyUserMutation = () =>
	useMutation((otpInput: any) => axios.post("users/verify", otpInput), {
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["users"],
			});
		},
	});
