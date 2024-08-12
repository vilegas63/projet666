import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_TEST_SECRET_KEY);

export async function GET(req) {
    // Récupérer l'URL de la requête
    const url = new URL(req.url);
    // Récupérer le paramètre payment_intent
    const paymentIntentId = url.searchParams.get('payment_intent');

    if (!paymentIntentId) {
        return NextResponse.json(false);
    }

    try {
        // Récupérer le payment_intent depuis l'API Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        // Récupérer la date de création (en timestamp UNIX)
        const createdAt = paymentIntent.created;
        const currentTime = Math.floor(Date.now() / 1000); // Timestamp UNIX actuel en secondes

        // Vérifier si le payment_intent a été créé il y a plus de 2 heures (7200 secondes)
        const isRecent = (currentTime - createdAt) <= 7200;

        return NextResponse.json(isRecent);
    } catch (error) {
        console.error("Erreur lors de la récupération du payment_intent:", error);
        return NextResponse.json(false);
    }
}
