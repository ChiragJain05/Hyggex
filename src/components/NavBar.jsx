import React from 'react';
import logo from '../img/logo.png';

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-24  px-14 py-3">
        <div className='flex flex-row justify-center items-center  left-0 top-0'>
            <img src={logo} alt="none" className='h-18 w-20 hover:cursor-pointer ' />
            <h1 className='text-2xl text-blue-950  font-medium'>Hygge<span className=' font-extrabold '>X</span> </h1>
        </div>
        <div className="text-neutral-700  ">
            <ul className="flex items-center py-3 gap-x-10">
                <li className=" font-medium   hover:cursor-pointer">
                    Home
                </li>
                <li className="font-medium   hover:cursor-pointer">
                    flipcards
                </li>
                <li className=" font-medium  hover:cursor-pointer ">
                    content
                </li>
                <li className="font-medium hover:cursor-pointer  ">
                    FAQs
                </li>
                <li className='font-medium hover:cursor-pointer text-white px-10 py-3 bg-gradient-to-b from-blue-950 to-blue-800 rounded-3xl justify-center items-center gap-2.5 flex'>
                    Login
                </li>
            </ul>

        </div>
    </div>
  )
}

export default NavBar;