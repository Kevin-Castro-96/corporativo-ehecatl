import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function getSession() {
  const cookieStore = await cookies(); // ⬅️ ESTA ES LA SOLUCIÓN

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  // Obtener sesión actual (usa cookies automáticamente)
  const { data: { session }, error } = await supabase.auth.getSession();

  if (!session) {
    return { session: null, user: null };
  }

  return {
    session,
    user: session.user,
  };
}
