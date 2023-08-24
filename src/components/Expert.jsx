import React from 'react'
import laptop from "../assets/Image/laptop.jpg"

export default function Expert() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
     <div className='  col-span-1 md:width-[70%] text-center'>
      <img src={laptop} alt=""  className='inline'/>
     </div>
     <div className='  col-span-1 flex flex-col justify-center'>
      <h1 className='text-yellow-700 font-bold my-2'>LEARN FROM EXPERTS</h1>
      <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, possimus voluptates sed totam optio alias quod adipisci similique eius odit dolor libero ipsa praesentium reiciendis cupiditate perspiciatis esse nulla recusandae.</p>
      <button className='w-[30%] bg-black text-white p-3 rounded'>GET STARTED</button>
     </div>
    </div>
  )
}
