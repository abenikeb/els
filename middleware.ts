import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const session = request.cookies.get("session");

	// Redirect to login if no session exists for protected routes
	if (
		!session &&
		(request.nextUrl.pathname.startsWith("/appointments") ||
			request.nextUrl.pathname.startsWith("/profile"))
	) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/appointments/:path*",
		"/profile/:path*",
		"/lawyer/:path*",
		"/admin/:path*",
	],
};
