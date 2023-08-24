import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#3fe291] w-full py-[50px]'>
        <div className='max-w-[1240px] py-[70px] mx-auto text-center  font-bold  '>
        <div className='  text-xl md:text-4xl md:p-[24px]'>
            Learn With Us
        </div>
        <div className='text-white text-2xl md:text-[80px] md: p-[24px] '>Growth With Us.</div>
        <div className=' text-[20px] md:text-[50px] text-purple-900 md:p-[24px]'>Learn -
        <Typed
        className='pl-3'
        strings={['Er HAyat Jahangir Khan Software Developer','Web Development','MERN Devrlopment']}
        typeSpeed={100}
        loop={true}
        
        />
            </div>
            <button className='bg-black text-white p-3 rounded'>GET STARTED</button>
        </div>
      
    </div>
  )
}
