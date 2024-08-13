import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_LIVE_SECRET_KEY);

export async function POST(req) {
    const payementIntent = await stripe.paymentIntents.create({
        amount: 3000,
        currency: "eur",
        automatic_payment_methods: {
            enabled: true,
        }
    });
    return NextResponse.json({
        clientSecret:  payementIntent.client_secret,
        amount: 3000
    });
}