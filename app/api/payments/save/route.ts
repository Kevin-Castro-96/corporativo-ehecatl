import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { email, amount, paypal_id, status } = await req.json();

  const { error } = await supabase.from("payments").insert({
    email,
    amount,
    paypal_id,
    status,
    created_at: new Date(),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
