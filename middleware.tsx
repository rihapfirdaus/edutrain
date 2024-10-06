import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isStillAuthorized } from "./libs/helpers/sessionHelper";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const authToken = req.cookies.get("accessToken")?.value;
  const isAuth = authToken ? true : false;

  // Halaman yang hanya bisa diakses oleh pengguna yang belum login
  const publicRoutesForGuests = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/reset-password",
  ];

  // Halaman yang hanya bisa diakses oleh pengguna yang sudah login
  const protectedRoutesForAuth = [
    "/cart",
    "/training/history",
    "/webinar/history",
    "/workshop/history",
    "/transaction",
    "/notification",
    "/profile",
  ];

  // Jika pengguna belum login, tapi mencoba mengakses halaman protected, redirect ke halaman login
  if (
    !isAuth &&
    protectedRoutesForAuth.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Jika pengguna sudah login, validasi token
  if (isAuth && !(await isStillAuthorized(authToken as string))) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // Lanjutkan request jika tidak ada masalah
  return NextResponse.next();
}

// Konfigurasi matcher untuk path yang dipantau oleh middleware
export const config = {
  matcher: [
    "/",
    "/auth/login",
    "/auth/register",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/cart",
    "/notification",
    "/notification/:path",
    "/training/history/:path*",
    "/webinar/history/:path*",
    "/workshop/history/:path*",
    "/transaction/:path*",
    "/profile",
  ],
};
