import { NextRequest, NextResponse } from "next/server";

const COOKIE = "enteg_auth";
const PASSWORD = "123enteg";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Passwort-Seite und API-Route selbst sind immer erreichbar
  if (pathname.startsWith("/login") || pathname.startsWith("/api/login")) {
    return NextResponse.next();
  }

  const auth = req.cookies.get(COOKIE)?.value;
  if (auth === PASSWORD) {
    return NextResponse.next();
  }

  const loginUrl = req.nextUrl.clone();
  loginUrl.pathname = "/login";
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
