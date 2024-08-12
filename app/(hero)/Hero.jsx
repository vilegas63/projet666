import React from 'react'
import { heroImg } from '../(assets)'

function Hero() {
  return (
    <div className='w-full h-[300px] lg:h-[500px] overflow-hidden relative flex items-center justify-center mt-4'>
        <div className="w-full h-full absolute z-[-3]">
            <img src={heroImg.src} alt="hero image" className='w-full h-full object-cover object-center' />
        </div>
        <div className="w-full h-full bg-black absolute opacity-[0.4] z-[0]  "></div>
        <div className="flex flex-col items-center text-center z-[2]">
            <h1 className=' font-black lg:text-[3rem] text-[2rem] text-white'>
                Découvrez la Sagesse Cachée
            </h1>
            <p className='text-white'>
                Accédez aux secrets spirituels et exotériques pour élever votre conscience.
            </p>
        </div>
    </div>

  )
}

export default Hero