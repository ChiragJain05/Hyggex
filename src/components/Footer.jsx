import React from 'react'
import frame4 from '../img/Frame (4).svg'
import logoWhite from '../img/logo-white.png'
const Footer = () => {
  return (
    <div className='flex flex-row items-center justify-between px-8 my-8'>
        <div className='flex flex-row items-center justify-center gap-4'>
            <img src={logoWhite} alt="" className='h-12 w-12 rounded-full shadow-3xl shadow-blue-950 hover:cursor-pointer' />
            <div>
                <div className='text-xs text-zinc-500'>Published by</div>
                <div className='text-2xl text-blue-950  font-medium'>Hygge<span className=' font-extrabold '>X</span></div>
            </div>
        </div>
        <div className='flex flex-row items-center justify-center gap-2'>
            <img src={frame4} alt="" className='hover:cursor-pointer'/>
            <div className='text-blue-950 font-semibold text-xl'>Create Flashcard</div>
        </div>
    </div>
  )
}

export default Footer;