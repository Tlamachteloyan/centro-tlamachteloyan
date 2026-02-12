import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "mxn",
            product_data: {
              name: "Donación - Centro Comunitario Tlamachteloyan",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/donaciones?success=true",
      cancel_url: "http://localhost:3000/donaciones?cancel=true",
    });

    return NextResponse.json({ url: session.url });

  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json({ error: "Error creando sesión" }, { status: 500 });
  }
}
