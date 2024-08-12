import React from 'react';
import { sun } from '../(assets)';

function Header() {
  return (
    <header className='w-screen bg-white flex items-center justify-center p-3 z-[99] top-0 fixed'>
        <a href='/' className="w-10 h-10 ">
            <img src={sun.src} alt="logo" />
        </a>
    </header>
  )
}

export default Header