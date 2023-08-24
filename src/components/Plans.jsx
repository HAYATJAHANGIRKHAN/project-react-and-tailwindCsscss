import React from 'react'
import single from "../assets/Image/single.png"
import double from "../assets/Image/double.png"
import triple from "../assets/Image/triple.png"

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6'>
      
        <div className=' border border-black shadow-xl h-[500px] my-2 hover:scale-105 duration-500  '>
         <div className=' flex justify-center'> 
          <img src={single} alt=""  className='h-10 ' /> 
          </div>
          <div>
          <h3 className=' font-bold  ml-[110px] my-4'>     Web development </h3>
          <p className='font-bold text-2xl ml-[40%]' >$149</p>
          <p className='ml-[100px] my-4'> Lorem ipsum dolor sit </p>
          <p className='ml-[20% my-4'> Lorem ipsum dolor sit. </p>
          <p className='my-4 ml-[30%]'> Lorem ipsum dolor sit </p>
          </div>
        </div>
        <div className='shadow-xl h-[500px] my-2 bg-gray-100 hover:scale-105 duration-500 flex justify-center'>
          <img src={double} alt="" className='h-10 ' />
          <div>
          <h3 className=' font-bold  ml-[110px] my-4'>     Web development </h3>
          <p className='font-bold text-2xl ml-[40%]' >$149</p>
          <p className='ml-[100px] my-4'> Lorem ipsum dolor sit </p>
          <p className='ml-[20% my-4'> Lorem ipsum dolor sit. </p>
          <p className='my-4 ml-[30%]'> Lorem ipsum dolor sit </p>
          </div>
        </div>
        <div className='shadow-xl h-[500px] my-2 hover:scale-105 duration-500 flex justify-center'>
        <img src={triple} alt="" className='h-10' />

        <div>
          <h3 className=' font-bold  ml-[110px] my-4'>     Web development </h3>
          <p className='font-bold text-2xl ml-[40%]' >$149</p>
          <p className='ml-[100px] my-4'> Lorem ipsum dolor sit </p>
          <p className='ml-[20% my-4'> Lorem ipsum dolor sit. </p>
          <p className='my-4 ml-[30%]'> Lorem ipsum dolor sit </p>
          </div>
        </div>
               
      </div>
    </div>
  )
}

