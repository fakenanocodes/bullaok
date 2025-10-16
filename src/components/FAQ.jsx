import about_bg from '../assets/about/about_bg.png';
import Maindashboard_layoutt from '../components/MainLayout';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function FAQ() {
  const {data: faq} = useSWR('/faqs')
  let objArr = []

  // const hash = window.location.hash.substring(1);
  // useEffect(() => {
  //   if (hash) {
  //     const target = document.getElementById(hash);
  //     if (target) {
  //       setTimeout(() => {
  //         target.scrollIntoView({ behavior: "smooth", block: "start" });
  //       }, 300);
  //     }
  //   }
  // }, [hash]);
  
  return (
      <Maindashboard_layoutt>
        <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[90vh]">
          <img src={about_bg} alt="" className="w-full h-full object-cover" />
          <div className="absolute flex flex-col justify-center items-center sm:items-start gap-12 lg:gap-20 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-16 xl:pl-48">
            <p className="laviossa text-[3rem] font-bold md:w-[30rem]">
              FAQ<sub>s</sub>
            </p>
            <p className="laviossa text-xl md:w-[30rem] tracking-[1px] text-center sm:text-left">
              Here’s what people ask about us. 
            </p>
          </div>
        </div >
        <div className='p-10 flex flex-col gap-5'>
          {faq?.length === 0
          ?
          <div className='h-[40vh] flex justify-center items-center'>
            <i className='text-[grey] text-[18px] tracking-[3px]'>No data</i>
          </div>
          :
          faq?.map((item,index)=>(
            <div className='' key={index} id={`footer-${index + 1}`}>
              <p className='font-[600] font-[Montserrat]'><span className=' text-[35px] laviossa text-[#8E0789] capitalize'>{item?.question[0]}</span><span>{item?.question.slice(1)}</span></p>
              <p className='font-[Montserrat] mt-5 border-[1.4px] border-[rgb(215,71,210)] p-5'>{item?.answer}</p>
          </div>
          ))}
        </div>

        <section className="px-5 lg:px-12 xl:px-40 py-20 mt-[5rem] flex flex-col items-center gap-7 bg-[#8e07894d]">
        <p className="laviossa text-3xl text-center leading-normal text-[#8E0789]">
          Trusted by some of the biggest companies
        </p>

        <div className="flex items-center justify-center gap-7">
          <div className="h-16 w-16 rounded-[50%] bg-[#8E0789]"></div>
          <div className="h-16 w-16 rounded-[50%] bg-[#8E0789]"></div>
          <div className="h-16 w-16 rounded-[50%] bg-[#8E0789]"></div>
          <div className="h-16 w-16 rounded-[50%] bg-[#8E0789]"></div>
        </div>
      </section>
      </Maindashboard_layoutt>
  );
}
