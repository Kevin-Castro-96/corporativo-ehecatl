// /app/api/paypal/create-order/route.ts

import { NextResponse } from "next/server";

export async function POST() {
  const clientId = process.env.PAYPAL_CLIENT_ID!;
  const secret = process.env.PAYPAL_SECRET!;

  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

  const response = await fetch(
    "https://api-m.sandbox.paypal.com/v2/checkout/orders",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "10.00",
            },
          },
        ],
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
