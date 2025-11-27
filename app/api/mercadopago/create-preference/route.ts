import { NextResponse } from "next/server";
import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN!,
});

export async function POST() {
  try {
    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: "premium-30-days", 
            title: "Servicio de IA Premium",
            quantity: 1,
            unit_price: 10.0,
          },
        ],
        back_urls: {
          success: "https://tu-dominio.com/pago-exitoso",
          failure: "https://tu-dominio.com/pago-fallido",
          pending: "https://tu-dominio.com/pago-pendiente",
        },
        auto_return: "approved",
      },
    });

    return NextResponse.json({
      init_point: preference.init_point,
      id: preference.id,
    });
  } catch (error) {
    console.error("Error Mercado Pago:", error);
    return NextResponse.json(
      { error: "No se pudo crear la preferencia" },
      { status: 500 }
    );
  }
}
