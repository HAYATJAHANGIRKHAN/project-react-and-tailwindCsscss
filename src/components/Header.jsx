import React, { useState } from 'react'
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import th from "../assets/Image/th.jpg"


export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#0062ff] p-4'>
      <div className='max-w-[1240px] py-[17px]  pr-[100px] items-center  flex justify-between  max-auto'>
        <div className=' ml-7'><img src={th} width="30%" /></div>
        {
          toggle ?
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
            :
            <AiFillCloseCircle onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
        }
        <ul className=' hidden  md:flex gap-10 text-white cursor-pointer text-lg   '>
          <li className=' hover:text-orange-900 '   >
            Home
          </li>
          <li  className=' hover:text-orange-900 '  >
            Company
          </li>
          <li  className=' hover:text-orange-900 '  >
            Resourse
          </li>
          <li  className=' hover:text-orange-900 '  >
            About
          </li>
          <li  className=' hover:text-orange-900 '  >
            Contact
          </li>
        </ul>
        {/* responsive menu  */}
        <ul
          className={`duration-700   md:hidden w-full h-screen fixed text-white bg-[black] top-[100px] ${
            toggle ? 'left-[0]' : 'left-[100%]'
          }`}
        >
          <li className='p-3'   >
            Home
          </li>
          <li className='p-3'>
            Company
          </li>
          <li className='p-3'>
            Resourse
          </li>
          <li className='p-3'>
            About
          </li>
          <li className='p-3'>
            Contact
          </li>
        </ul>
      </div>

    </div>
  )
}
