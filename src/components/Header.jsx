import React from 'react';
import frame1 from '../img/Frame (1).svg';
import frame from '../img/Frame.svg';
const Header = () => {
  return (
    <div>
        <div className='flex ml-16 px-4 mt-4 flex-row justify-start items-center text-zinc-500 '>
            <img src={frame} alt="none" />
            <img src={frame1} alt="none" />
            <h3>Flashcard</h3>
            <img src={frame1} alt="none" />
            <h3>Mathematics</h3>
            <img src={frame1} alt="none" />
            <div className='font-semibold text-blue-900'>
                Relation and Function
            </div>
        </div>
        <div className=" text-blue-900 ml-16 px-4 text-2xl my-4 font-bold ">Relations and Functions ( Mathematics )</div>
    </div>
  )
}

export default Header