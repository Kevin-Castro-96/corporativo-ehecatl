import { cookies } from "next/headers";
import { supabase } from "./supabase";

export async function getSession(req?: Request) {
  let cookieStore;

  // Para API Routes
  if (req) cookieStore = (req as any).cookies;
  else cookieStore = cookies();

  const token = cookieStore.get("session")?.value;

  if (!token) return null;

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data?.user) return null;

  // Obtener datos extras desde tabla "users"
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  return {
    id: data.user.id,
    email: data.user.email,
    role: profile?.role,
    name: profile?.name,
    lastname: profile?.lastname,
    phone: profile?.phone,
    avatar_url: profile?.avatar_url,
  };
}
