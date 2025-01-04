import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
	baseURL: "/api/v1",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

axiosInstance.interceptors.request.use(
	(config) => {
		// const token = localStorage.getItem("jwtToken");
		const token = Cookies.get("jwtToken");
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);
export default axiosInstance;
