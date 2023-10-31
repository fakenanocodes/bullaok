import React from 'react';

export default function Header() {
  return (
    <section className="flex flex-col lg:flex-row px-8 items-center justify-center md:gap-16 gap-8 py-9  ">
      <div className="flex text-center md:text-start flex-col gap-10 text-[#fff] md:items-start items-center w-full lg:w-1/4 items-start">
        <h1 className="font-bold md:text-[70px] text-5xl  text-center md:text-start mt-9 text-[#fff]">
          In-depth
          <br /> ETF Trading <br />
          with Webull
        </h1>
        <p className="">
          Webull’s charting tools, granular data, and independent analysis aim
          to empower investors through various platforms and different operating
          systems.
        </p>
        <p>On Webull, do it all with zero commission.</p>
        <img src="/companies.png" alt="" />
        <button className="bg-[#000] hidden md:block rounded-lg p-4 w-64 font-bold text-2xl">
          Get Started
        </button>
      </div>
      <img src="/mobile.png" className="h-auto w-full md:w-1/3" alt="" />
      <button className="bg-[#000]  rounded-lg md:hidden text-[#fff]  p-2 w-64 font-bold text-2xl">
        Get Started
      </button>
    </section>
  );
}
