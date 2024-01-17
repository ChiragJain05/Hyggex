import React from 'react'
import frame5 from '../img/Frame (5).svg'
const FAQs = () => {
  return (
    <div>
        <div className='bg-gradient-to-t from-blue-600 via-blue-750 to-blue-950 text-3xl inline-block text-transparent bg-clip-text font-bold my-8 px-8'> FAQ</div>
        <div className='flex flex-col gap-8 px-4 mx-4 my-8 mb-96'>
            <div className='flex flex-row items-center justify-between rounded-xl border border-blue-600 p-3 mr-96 min-w-96'>
                <div className='text-zinc-800 text-base font-semibold'>Can education flashcards be used for all age groups?</div>
                <div className='hover:cursor-pointer'><img src={frame5} alt="" /></div>
            </div>
            <div className='flex flex-row items-center justify-between rounded-xl border border-blue-600 p-3 mr-96 min-w-96'>
                <div  className='text-zinc-800 text-base font-semibold'>How do education flashcards work?</div>
                <div className='hover:cursor-pointer'><img src={frame5} alt="" /></div>
            </div>
            <div className='flex flex-row items-center justify-between rounded-xl border border-blue-600 p-3 mr-96 min-w-96'>
                <div  className='text-zinc-800 text-base font-semibold'>Can education flashcards be used for test preparation?</div>
                <div className='hover:cursor-pointer'><img src={frame5} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default FAQs;