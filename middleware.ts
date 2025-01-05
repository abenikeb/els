import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

async function verifyJwt(token: string, secret: string): Promise<boolean> {
	try {
		await jwtVerify(token, new TextEncoder().encode(secret));
		return true;
	} catch (error) {
		console.error("JWT verification error:", error);
		return false;
	}
}

export async function middleware(request: NextRequest) {
	const jwtToken = request.cookies.get("jwtToken")?.value;
	const isAuthPage =
		request.nextUrl.pathname.startsWith("/login") ||
		request.nextUrl.pathname.startsWith("/register");

	let isAuthenticated = false;

	if (jwtToken) {
		isAuthenticated = await verifyJwt(jwtToken, process.env.SECRET_KEY!);
		console.log({ isAuthenticated });
	}

	// console.log({ isAuthenticated, jwtToken });

	// Redirect authenticated users away from login/register pages
	if (isAuthPage) {
		if (isAuthenticated) {
			return NextResponse.redirect(new URL("/", request.url));
		}
		return NextResponse.next();
	}

	// Protect specific routes
	const protectedRoutes = ["/profile", "/appointments"];
	const isProtectedRoute = protectedRoutes.some((route) =>
		request.nextUrl.pathname.startsWith(route)
	);

	if (isProtectedRoute) {
		if (!isAuthenticated) {
			const loginUrl = new URL("/login", request.url);
			loginUrl.searchParams.set("callbackUrl", request.url);
			return NextResponse.redirect(loginUrl);
		}
		return NextResponse.next();
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/profile/:path*", "/appointments/:path*", "/login", "/register"],
};
