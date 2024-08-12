import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { headers } from 'next/headers';

export async function GET(req) {
    const url = new URL(req.url);
    const paymentIntent = url.searchParams.get('payment_intent');
    const headersList = headers();
    const hostUrl = "https://" + headersList.get("host");

    if (!paymentIntent) {
        return NextResponse.json({ success: false, message: "Paramètre payment_intent manquant" });
    }

    // Simule la vérification, remplace par la logique réelle.
    const isAuthorized = await verifyPaymentIntent(paymentIntent, hostUrl);

    if (!isAuthorized) {
        return NextResponse.json({ success: false, message: "Accès refusé" });
    }

    // Chemin du fichier PDF dans le dossier sécurisé
    const filePath = path.join(process.cwd(), 'protected', 'book.pdf');
    
    // Lire le fichier
    const fileBuffer = fs.readFileSync(filePath);

    // Définir les headers pour le téléchargement
    return new Response(fileBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="le-livre-de-la-sagesse.pdf"',
        },
    });
}

// Fonction de vérification
async function verifyPaymentIntent(paymentIntent, hostUrl) {
    const url = hostUrl + "/api/auth/?payment_intent=" + paymentIntent;
    const checkAuthorization = await fetch(url);
    const isAuthorized = await checkAuthorization.json();
    return isAuthorized;
}
