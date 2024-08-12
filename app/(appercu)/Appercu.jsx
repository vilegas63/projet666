import React from 'react'
import { coverBookOfWisdom } from '../(assets)'
import Link from 'next/link'

function Appercu() {
  return (
    <div className='w-full my-[2rem] flex gap-[2rem] flex-col items-center justify-center'>
        <h2 className=' font-black text-[2rem] '>
            Documents
        </h2>
        <div className="flex flex-col bg-white lg:w-[40%] w-[90%] gap-[1rem] rounded-[1rem] overflow-hidden p-3 ">
            <img src={coverBookOfWisdom.src} alt="" className='h-full w-full rounded-[1rem] object-cover object-center'/>
            <h3 className='font-black text-[1.4rem]'>
                Le Livre De La Sagesse (PDF)
            </h3>
            <h4 className='font-black text-[1.4rem] text-blue-700'>
                € 30
            </h4>
            <Link href="/le-livre-de-la-sagesse" className=' bg-yellow text-center font-black p-5 rounded-[2rem] text-white'>
                Consulter
            </Link>
        </div>
    </div>
  )
}

export default Appercu