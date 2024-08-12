import React from 'react';
import { SiGmail } from "react-icons/si";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <div className="relative w-screen">
        <div className='flex bg-white flex-col w-full absolute bottom-0 '>
            <div className="w-full">
                <div className="flex w-fit mx-auto items-center justify-self-center gap-6">
                <a href="mailto:eveilg.revelation@gmail.com" className=' inline-flex items-center gap-3'>
                    <SiGmail />
                    <span>eveilg.revelation@gmail.com</span>
                </a>
                <a href="https://www.tiktok.com/@eveil_g?_t=8omnY5OHNE8&_r=1" className=' inline-flex items-center gap-3'>
                    <FaTiktok />
                    <span>eveil_g</span>
                </a>
            </div>
            </div>
            <div className="w-full bg-black">
                <div className="bg-black w-fit mx-auto z-[55] text-white text-center py-1 text-[0.6rem] ">
                Powered By <span className=' font-black'>EVEIL G</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer