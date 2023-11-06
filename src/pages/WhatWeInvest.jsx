import React from 'react';
import Layout from '../components/Layout';

export default function WhatWeInvest() {
  const chartData = [
    {
      bg_color: '#8E0789',
      title: 'Crypto',
      rate: '30%',
    },
    {
      bg_color: '#FFB803',
      title: 'Stock',
      rate: '30%',
    },
    {
      bg_color: '#FF03A9',
      title: 'Cannabis',
      rate: '30%',
    },
    {
      bg_color: '#B3B3CB',
      title: 'Forest',
      rate: '30%',
    },
    {
      bg_color: '#41073F',
      title: 'REAL ESTATE Forest',
      rate: '30%',
    },
    {
      bg_color: '#F24129',
      title: 'ETFs',
      rate: '30%',
    },
  ];
  return (
    <Layout>
      <header
        className="flex flex-col lg:flex-row px-8 items-center  justify-center md:gap-16 gap-8 py-[90px]  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url('bck.png')`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#30022E] opacity-80"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className=" w-full relative z-20 flex flex-col items-center gap-7">
          <h2 className="lg:text-6xl text-3xl text-[#fff] font-bold font-[laviosaa]  text-center">
            What we invest in
          </h2>
        </div>
      </header>

      <main className="bg-[#fff]">
        <section
          className="flex flex-col lg:flex-row px-8 items-center  justify-center md:gap-16 gap-8 py-[90px]   bg-cover bg-center bg-no-repeat  w-full relative"
          style={{
            backgroundImage: `url('invest_bg.png')`,
          }}
        >
          <img src="chart.png" alt="" />
          <div className="flex flex-col gap-3">
            {chartData.map((item) => (
              <div className="flex  items-center gap-3" key={item.title}>
                {/* <div
                  className={`box rounded-[50%] bg-[${item.bg_color}] h-12 w-12`}
                ></div> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="53" height="53" viewBox="0 0 53 53" fill="none">
  <circle cx="26.5" cy="26.5" r="26.5" fill={item.bg_color}/>
</svg>
                <div className="flex items-center gap-8">
                  <h2>{item.title}</h2> <span>{item.rate}</span>{' '}
                </div>
              </div>
            ))}
          </div>
        </section>
        <div>
          <p>
            Bulloak financial management makes it possible for you to achieve
            your financial purpose in life and live the lifestyle you’ve always
            craved for. By investing in Real Estate, Forex, Crypto Currency,
            Stocks, and Cannabis, we guarantee our clients substantial monthly
            profit for two years. We are a purpose-driven company, bound
            together by our commitment to what we do and how we work together.
            We come to this business from many different perspectives, but we
            all hold common values that we bring to our work. We are constantly
            engaged in research and development. This is a necessity in the
            world of relentlessly changing global financial markets. By
            utilizing our group of experts in all aspect of investment, we can
            carefully identify investment opportunities that can generate
            maximum profit for our client over a long period. Our team of
            licensed fiduciary advisors understands that every investor is
            unique. With the dynamic tools used by both you and your financial
            advisor, we are able to identify and alert you to opportunities so
            you can act on them.
          </p>
        </div>
      </main>
    </Layout>
  );
}
