import React from 'react'
import { cap1, cap2, cap3, coverBookOfWisdom } from '../(assets)'

function page() {
  return (
    <div className=' flex gap-[3rem] flex-col items-center mb-[5rem] '>
        <div className='w-full h-[300px] lg:h-[500px] overflow-hidden relative flex items-center justify-center mt-4'>
            <div className="w-full h-full absolute z-[-3]">
                <img src={coverBookOfWisdom.src} alt="hero image" className='w-full h-full object-cover object-center' />
            </div>
            <div className="w-full h-full bg-black absolute opacity-[0.4] z-[0]  "></div>
            <div className="flex flex-col items-center text-center z-[2]">
                <h1 className=' font-black lg:text-[3rem] text-[2rem] text-white'>
                    Le Livre De La Sagesse (PDF)
                </h1>
            </div>
        </div>
        
        <div className="w-[70%] flex items-center justify-center">
            <div className="flex items-center justify-center gap-5 bg-gray-200 py-2 h-[7rem] overflow-y-hidden overflow-x-scroll">
                <a className="block" href={cap1.src} data-lightbox="image-gallery">
                    <img src={cap1.src} alt="apperçue" />
                </a>
                <a className="block" href={cap2.src} data-lightbox="image-gallery">
                    <img src={cap2.src} alt="apperçue" />
                </a>
                <a className="block" href={cap3.src} data-lightbox="image-gallery">
                    <img src={cap3.src} alt="apperçue" />
                </a>
            </div>
        </div>
        <div className="w-[90%] lg:w-[70%] flex flex-col gap-5">
            <article className='w-full'>
                Dans ce document vous allez plonger dans les mystères les plus profonds avec notre document unique qui révèle et explique les secrets cachés derrière les symboles anciens, les concepts spirituels et les mystères de l'univers. Découvrez comment ces éléments interconnectés peuvent transformer votre perception du monde et élever votre conscience.
            </article>
            <p className=' flex items-center gap-[2rem]'>
                <span className='text-blue-500 font-black text-[2rem]'>€ 30</span>
                <span className=' text-gray-400 line-through text-[1.7rem]'> € 55</span>
            </p>
            <a href='/le-livre-de-la-sagesse/checkout' className='text-white font-black bg-yellow text-center p-5 rounded-[2rem]'>
                Obtenir
            </a>
        </div>
    </div>
  )
}

export default page