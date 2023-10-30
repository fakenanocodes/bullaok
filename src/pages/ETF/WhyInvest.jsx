import React from 'react';

export default function WhyInvest() {
  return (
    <section className="bg-[#fff] flex flex-col items-center py-8">
      <div className="title w-2/5 mt-[50px]">
        <h2 className="font-bold text-[50px] text-center">
          Why invest in ETFs?
        </h2>
        <p className="text-center mt-3">
          With Webull’s zero commission* platform, combining the diversification
          of mutual funds, and the liquidity of stock trading, ETFs can be a
          low-cost approach that offers a variety of benefits.
        </p>
      </div>
      <div className="items flex mt-10 w-2/3 text-center  justify-between">
        <div className="box w-1/5 flex flex-col gap-3 justify-center items-center">
          <img src="/target.png" className="w-28 h-auto " alt="" />
          <h3 className="font-bold text-xl">Targeted Exposure</h3>
          <p>
            ETFs allow you to invest in a sector, industry, index, or even a
            country. Hedge or partially offset risk in your portfolio.
          </p>
        </div>
        <div className="box w-1/5 flex flex-col gap-3 text-center justify-center items-center">
          <img src="/diverse.png" className="w-28 h-auto " alt="" />
          <h3 className="font-bold text-xl">Diversification</h3>
          <p>
            An ETF can spread across a range of investment classes, sectors, and
            countries.
          </p>
        </div>
        <div className="box flex flex-col justify-center gap-3 text-center items-center w-1/5">
          <img src="/choose.png" className="w-28 h-auto " alt="" />
          <h3 className="font-bold text-xl">Choose what you want</h3>
          <p className="text-md">
            Webull’s zero commission may help you build your portfolio that
            meets your objectives.
          </p>
        </div>
      </div>
    </section>
  );
}
