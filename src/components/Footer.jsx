import React from 'react'
import th from "../assets/Image/th.jpg"
import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';



export default function Footer() {
  return (
    <div className=' bg-[#0062ff] p-4'>
      <div className='max-w-[auto] mx-auto md:grid grid-cols-4 gap-10 '>
      <div className='    '>
      <div className=' ml-7'><img src={th} width="30%" /></div>
      <p className='mt-4 text-white'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. In cumque quis pariatur ipsam ad repudiandae assumenda doloremque, perferendis nemo! Sapiente earum repellendus, </p>
      <div className='flex flex-row gap-7 mt-4'>
      <a href="https://github.com/HAYATJAHANGIRKHAN 	" target="_blank" >
        <FaGithub size={30} />
      </a>
      <a href="http://www.linkedin.com/in/hayat-jahangir-khan     " target="_blank" >
        <FaLinkedin size={30} />
      </a>
      <a href="Khanhayat6005@gmail.com     " target="_blank" >
        <FaEnvelope size={30} />
      </a>
     
    </div>


         </div>
         
      <div className=' mt-10   '>
       
       <h1 className='font-bold mb-3  '>Solution</h1>
       <ul className='text-white  '>
       <li className='mb-5'>Analytics</li>
       <li className='mb-5'>Marketing </li>
       <li className='mb-5'>Commerce</li>
       <li className='mb-5'>Insights</li>
       </ul>
         </div>
      
      <div className=' mt-10  '>
       <h1 className='font-bold mb-3  '>Solution</h1>
       <ul className='text-white  '>
       <li className='mb-5'>Analytics</li>
       <li className='mb-5'>Marketing </li>
       <li className='mb-5'>Commerce</li>
       <li className='mb-5'>Insights</li>
       </ul>
         </div>
      <div className=' mt-10  '>
       <h1 className='font-bold mb-3  '>Solution</h1>
       <ul className='text-white  '>
       <li className='mb-5'>Analytics</li>
       <li className='mb-5'>Marketing </li>
       <li className='mb-5'>Commerce</li>
       <li className='mb-5'>Insights</li>
       </ul>
         </div>
       


         </div>
         
      </div>
    
  )
}
