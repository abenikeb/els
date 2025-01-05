import axios from "axios";
import { getSession } from "next-auth/react";

const instance = axios.create({
	baseURL: "/api/v1",
	headers: {
		"Content-Type": "application/json",
	},
});

instance.interceptors.request.use(
	async (config) => {
		const session: any = await getSession();
		if (session?.user?.jwtToken) {
			config.headers["Authorization"] = `Bearer ${session.user.jwtToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
