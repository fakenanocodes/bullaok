import React from 'react';
import bg from '../assets/faq_bg.png';
import FaqQA from '../components/FaqQA';
import Layout from '../components/Layout';
import { servicesData } from '../data/faq';
export default function Faq() {
  return (
    <Layout>
      <header
        className="flex flex-col lg:flex-row px-8 items-center  justify-center md:gap-16 gap-8  h-screen  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#30022E] opacity-80"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className=" lg:px-[150px] px-4 text-center w-full relative z-20 text-[#fff] flex flex-col lg:items-start gap-7">
          <h2 className="lg:text-6xl text-3xl  font-bold font-[laviossa]  ">
            FAQs
          </h2>
          <p className="font-[laviossa] lg:text-[27px] text-[15px]  lg:mt-[100px] ">
            Here’s what people ask about us.{' '}
          </p>
        </div>
      </header>

      <main className="bg-[#fff] py-7">
        <FaqQA servicesData={servicesData} />
      </main>
    </Layout>
  );
}
