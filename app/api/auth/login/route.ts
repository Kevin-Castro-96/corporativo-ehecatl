import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { email, password } = await req.json();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });

  // Guardamos la sesión en cookie http-only
  const response = NextResponse.json({ message: "Login correcto" });

  response.cookies.set("sb-access-token", data.session.access_token, {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "strict",
  });

  response.cookies.set("sb-refresh-token", data.session.refresh_token, {
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "strict",
  });

  return response;
}
