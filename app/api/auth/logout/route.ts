import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Sesión cerrada" });

  // Borramos las cookies
  response.cookies.set("sb-access-token", "", {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "strict",
    maxAge: 0,
  });

  response.cookies.set("sb-refresh-token", "", {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "strict",
    maxAge: 0,
  });

  return response;
}
