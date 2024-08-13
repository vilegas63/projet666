"use client";
import { coverBookOfWisdom } from '@/app/(assets)'
import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import getStripe from './stripe';
import { Elements } from '@stripe/react-stripe-js';

function page() {
    const [totalAmount, setTotalAmount] = useState(0)
    const [clientSecret, setClientSecret] = useState("");
    const getSecret = async () => {
    const url = `/api/checkout`;
    const secret = await fetch(url, {
        method: "POST",
        body: JSON.stringify([])
    });
    return secret;
  };
    useEffect(() => {
            getSecret()
        .then(res => {
            return res.json();
        })
        .then(res => {
            setClientSecret(res.clientSecret);
            setTotalAmount(res.amount);
        })
    }, []);
    const stripePromise = getStripe(); // Utilisez getStripe au lieu de loadStripe directement
    const appearance = { theme: "stripe" };
    const options = { clientSecret, appearance };
    if (totalAmount > 0) {
        console.log("total prix: ", totalAmount);
    }
  return (
    <div className='my-[6rem] lg:w-[50%] w-[95%] mx-auto flex flex-col'>
        <div className="w-full bg-white gap-5 grid grid-cols-[30%_70%] p-3 rounded-[1rem]">
            <div className="w-full">
                <img src={coverBookOfWisdom.src} alt="couverture" className='rounded-[1rem] object-cover object-center w-full h-full' />
            </div>
            <div className="w-full flex flex-col gap-3">
                <h2 className="font-black text-[1.3rem] lg:text-[1.5rem]">
                    Le livre De La Sagesse
                </h2>
                <div>
                    <span className="text-blue-500 font-black">€ 30</span>
                </div>
            </div>
        </div>
        <div className="w-full">
            {
                clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                <CheckoutForm totalAmount={totalAmount} />
            </Elements>
                )
            }
        </div>
    </div>
  )
}

export default page