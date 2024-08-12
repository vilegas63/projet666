"use client";
import { coverBookOfWisdom } from '@/app/(assets)';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
function page(urlParams) {
    const pi = urlParams.searchParams.payment_intent;
    const [isAuthorized, setIsAuthorized] = useState(false);
    const pageUrl = window.location.href;
    const checkAuthorization = () => {
        const url = "/api/auth/?payment_intent=" + pi;
        fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            setIsAuthorized(res);
        })
    }
    useEffect(() => {
      checkAuthorization();
    }, [])
    

  return (
    <div className='w-full h-screen flex justify-center items-center'>
        {isAuthorized && (<DownloadComponent paymentIntent={pi} pageUrl={pageUrl} />) || (<UnAuthorizedComponent />)}
    </div>
  )
}

const DownloadComponent = ({paymentIntent, pageUrl}) => {
    const [isCopy, setIsCopy] = useState(false);
    const url = `/api/download?payment_intent=${paymentIntent}`;
    const copy = () => {
        navigator.clipboard.writeText(pageUrl)
        .then(() => {
            setIsCopy(true);
        });
    }
    return (
        <div className=' bg-white p-4 flex flex-col w-[95%] lg:w-[30%] gap-3 rounded-[1rem] '>
            <div className="w-full">
                <img src={coverBookOfWisdom.src} alt="cover" className=' object-center rounded-[1rem] object-cover w-full h-full' />
            </div>
            <h2 className=' font-black text-[1.5rem]'>
                Le Livre de la Sagesse (PDF)
            </h2>
            <a href={url} className=' font-black rounded-[1rem] bg-blue-600 text-white text-center p-3'>Télécharger</a>
            <div className="my-5 text-red-500 text-[0.8rem] ">
                Si le téléchargement ne démarre pas, copiez le lien de téléchargement en cliquant sur le bouton orange ci-dessous puis ouvrez le dans un autre navigateur comme chrom, firefox ou safari. ce lien est valide pendant 2 heures. Si vous n'y parvenez toujours pas contactez-nous sur à l'aide de coordonnées présent en bas de page 
            </div>
            <div className='flex flex-col-reverse gap-2 items-center flex-wrap'>
                <div className=" text-[0.6rem] text-blue-600 w-full whitespace-wrap break-all" >
                    {pageUrl}
                </div>
                <button onClick={() => {copy()}} className={`${isCopy && " bg-green-600 " || " bg-yellow "}flex items-center gap-3 p-3 transition-[200ms] justify-center rounded-[1rem] text-white `}>
                    <span>Copier</span>
                    {isCopy && (<FaCheckCircle />) || (<IoCopyOutline />)}
                </button>
            </div>
        </div>
    )
}
const UnAuthorizedComponent = () => {
    return (
        <div>Vérification...</div>
    )
}

export default page