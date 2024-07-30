import about_bg from '../assets/about/about_bg.png';
import info_img from '../assets/about/info_img.png';
import info_img2 from '../assets/about/info_img2.png';
import Maindashboard_layoutt from '../components/MainLayout';
import { useState } from 'react';
export default function FAQ() {
  let name = 'Johson'
  
  return (
      <Maindashboard_layoutt>
        <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[90vh]">
          <img src={about_bg} alt="" className="w-full h-full object-cover" />
          <div className="absolute flex flex-col justify-center items-center sm:items-start gap-12 lg:gap-20 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-16 xl:pl-48">
            <p className="laviossa text-[3rem] font-bold md:w-[30rem]">
              FAQ<sub>s</sub>
            </p>
            <p className="laviossa text-xl md:w-[30rem]">
              Here’s what people ask about us. 
            </p>
          </div>
        </div>
        <p className={`before:content-["${name[0]}"]  before:font-[600] before:text-[35px]`}>{name.slice(1)}</p>
        {}
        <div className='h-10'></div>
      </Maindashboard_layoutt>
  );
}
