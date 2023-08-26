import React, { useState } from 'react';
import Typed from 'react-typed';




export default function Banner() {
  const backgroundStyle = {
    backgroundImage: `url(https://img.freepik.com/premium-vector/e-learning-icon-robotic-hand-innovative-online-education-internet-technology-concept_127544-106.jpg?size=626&ext=jpg&ga=GA1.1.1251616599.1693060132&semt=ais)`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='max-w-[1240px] py-[70px] mx-auto text-center font-bold' style={backgroundStyle}>
      <div className='text-xl md:text-4xl md:p-[24px]'>Learn With Us</div>
      <div className='text-white text-2xl md:text-[80px] md:p-[24px]'>Growth With Us.</div>
      <div className='text-[20px] md:text-[50px] text-zinc-950 md:p-[24px]'>
        Learn -
        <Typed
          className='pl-3'
          strings={['Er HAyat Jahangir Khan Software Developer', 'Web Development', 'MERN Devrlopment']}
          typeSpeed={100}
          loop={true}
        />
      </div>
      <button className='bg-black text-white p-3 rounded hover:bg-cyan-600 hover:text-black'>
        GET STARTED
      </button>
    </div>
  );
};
