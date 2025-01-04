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
	env: {
		NEXTAUTH_URL: process.env.NEXTAUTH_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
	},
	reactStrictMode: true,
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
	experimental: {
		esmExternals: "loose",
	},
	swcMinify: true,
	async rewrites() {
		return [
			{
				source: "/api/v1/:path*",
				destination: `${API_URL}/api/v1/:path*`,
			},
		];
	},
};

export default nextConfig;
