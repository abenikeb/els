/** @type {import('next').NextConfig} */
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const nextConfig = {
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	reactStrictMode: true,
	env: {
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "package.ethiolegalshield.com",
				port: "",
				pathname: "/uploads/**",
			},
		],
	},
	// experimental: {
	// 	esmExternals: "loose",
	// },
	// swcMinify: true,

	async rewrites() {
		console.log(API_URL);
		
		if (process.env.NODE_ENV === "development") {
		  return [
			{
			  source: "/api/v1/:path*",
			  destination: `${API_URL}/api/v1/:path*`,
			},
		  ];
		} else if (process.env.NODE_ENV === "production") {
		  return [
			{
			  source: "/api/v1/:path*",
			  destination: `${API_URL}/api/v1/:path*`, // Use your production API URL here
			},
		  ];
		}
		
		// Return an empty array for any other environment (like testing)
		return [];
	  }
	  
};

export default nextConfig;
