import { cookies } from "next/headers";
import { createClient } from "@supabase/supabase-js";

export async function getUser() {
  const cookieStore = await cookies(); // 👈 AWAIT AQUÍ

  const access_token = cookieStore.get("sb-access-token")?.value;
  const refresh_token = cookieStore.get("sb-refresh-token")?.value;

  if (!access_token) return { user: null };

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: false,
      }
    }
  );

  const { data: { user }, error } = await supabase.auth.getUser(access_token);

  return { user };
}
