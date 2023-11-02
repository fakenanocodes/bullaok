import React from 'react';

export default function How() {
  return (
    <section className="bg-[#fff]">
      <h2 className="text-4xl text-center text-[#550952] font-bold py-8 ">
        How it works
      </h2>
      <p className="text-center font-bold text-xs lg:text-md w-2/3 mx-auto lg:w-full">
        Pick any eligible US stock or ETF and decide how much you want to
        invest.
        <br />
        <span className="text-[#550952]">It's that easy.</span>
      </p>

      <div className="flex lg:flex-row flex-col justify-center bg-white shadow-xl lg:w-2/3 w-full mx-auto items-center px-3 gap-7 mt-9 rounded-t-[50px]">
        <img src="portfolio.png" className="lg:w-2/6 w-ful h-1/3" alt="" />
        <img src="stockChart.png" className="lg:w-2/6 w-full h-1/3" alt="" />
      </div>
    </section>
  );
}
