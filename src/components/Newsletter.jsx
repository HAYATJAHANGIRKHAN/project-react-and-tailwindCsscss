import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#3fe291] p-4'>
      <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
        <div className='m-2'>
          <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
          <span className='text-white'>Sign up to our Newsletter and stay up to date.</span>
        </div >
        <div className=' m-2'>
          <input type="text"  className=' rounded mb-2 p-3 mr-2 text-slate-500 ' placeholder='Enter Email'/>
          <button className='bg-black text-white p-3 rounded'>GET STARTED</button>
          <br />
          <p className='text-white'>
            We care bout the protection of your date.Read our  <br /> <a href="" className='text-black'>Privacy Policy.</a>
          </p>
        </div>
      </div>
    </div>
  )
}
