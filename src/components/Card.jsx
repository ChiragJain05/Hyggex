import React from 'react'
import frame2 from '../img/Frame (2).svg';
import frame3 from '../img/Frame (3).svg';
import vector from '../img/Vector.svg';
import vector1 from '../img/Vector (1).svg';
import vector2 from '../img/Vector (2).svg';
import vector3 from '../img/Vector (3).svg';

const Card = () => {
  return (
    <div>
        <ul className='flex flex-row items-center justify-center gap-10 mt-8 text-xl text-zinc-500'>
            <div className='text-blue-950 font-semibold border-b-2 py-2 border-blue-950 '>
                <li>Study</li>
            </div>
            <li className='hover:cursor-pointer'>Quiz</li>
            <li className='hover:cursor-pointer'>Test</li>
            <li className='hover:cursor-pointer'>Game</li>
            <li className='hover:cursor-pointer'>Others</li>
        </ul>
        <div className='flex justify-center items-center mt-8 text-white '>
            <div className='h-96 w-96 px-96 bg-gradient-to-bl from-blue-900 via-blue-900 to-blue-600 rounded-3xl relative '>
                <div>
                    <img src={frame2} alt="none" className=' absolute top-8 left-8 z-10 hover:cursor-pointer' />
                </div>
                <div>
                    <img src={frame3} alt="none" className=' absolute top-8 right-8 z-10 hover:cursor-pointer' />
                </div>
                <div className='absolute text-center top-48 left-58  -translate-y-1/2 -translate-x-1/2 text-4xl font-bold'>
                9 + 6 + 7x - 2x - 3
                </div>
            </div>
        </div>
        <div className=' flex items-center justify-center gap-32 my-8'>
            <div>
                <img src={vector} alt="" className='hover:cursor-pointer' />
            </div>
            <div className='flex justify-center items-center gap-10'>
                <img src={vector1} alt="" className='hover:cursor-pointer' />
                <div className='font-bold text-blue-950 text-2xl'>
                    01/10
                </div>
                <img src={vector2} alt="" className='hover:cursor-pointer'/>
            </div>
            <div>
                <img src={vector3} alt="" className='hover:cursor-pointer'/>    
            </div>            
         </div>
    </div>
  )
}

export default Card;