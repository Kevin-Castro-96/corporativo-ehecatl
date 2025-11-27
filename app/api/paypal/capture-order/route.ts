// /app/api/paypal/capture-order/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { orderID } = await req.json();

  const clientId = process.env.PAYPAL_CLIENT_ID!;
  const secret = process.env.PAYPAL_SECRET!;

  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

  const response = await fetch(
    `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderID}/capture`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
