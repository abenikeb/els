import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const session = request.cookies.get("jwtToken");

	// Redirect to login if no session exists for protected routes
	if (session && request.nextUrl.pathname.startsWith("/login")) {
		return NextResponse.redirect(new URL("/", request.url));
	}

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

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//   const session = request.cookies.get('session')
//   const userRole = request.cookies.get('userRole')

//   // Redirect to login if no session exists
//   if (!session) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }

//   // Role-based access control
//   if (request.nextUrl.pathname.startsWith('/lawyer') && userRole?.value !== 'lawyer') {
//     return NextResponse.redirect(new URL('/unauthorized', request.url))
//   }

//   if (request.nextUrl.pathname.startsWith('/admin') && userRole?.value !== 'admin') {
//     return NextResponse.redirect(new URL('/unauthorized', request.url))
//   }

//   if (request.nextUrl.pathname.startsWith('/client') && userRole?.value !== 'client') {
//     return NextResponse.redirect(new URL('/unauthorized', request.url))
//   }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/lawyer/:path*', '/admin/:path*', '/client/:path*'],
// }
