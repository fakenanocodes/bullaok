import React from 'react';
import Layout from '../components/Layout';

export default function WhatWeInvest() {
  const chartData = [
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
      title: 'Forestry',
      rate: '30%',
    },
    {
      bg_color: '#41073F',
      title: 'REAL ESTATE',
      rate: '30%',
    },
    {
      bg_color: '#F24129',
      title: 'ETFs',
      rate: '30%',
    },
  ];

  const invest = [
    {
      icon: 'cannabis_icon.png',
      title: 'Cannabis',
      link: '#',
    },
    {
      icon: 'stock_icon.png',
      title: 'Stock',
      link: '#',
    },
    {
      icon: 'estate_icon.png',
      title: 'Real Estate',
      link: '#',
    },
    {
      icon: 'crypto_icon.png',
      title: 'Crypto',
      link: '#',
    },
    {
      icon: 'forex_icon.png',
      title: 'Forex Trading',
      link: '#',
    },
    {
      icon: 'cannabis_icon.png',
      title: 'ETFs',
      link: '#',
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <circle cx="26.5" cy="26.5" r="26.5" fill={item.bg_color} />
                </svg>
                <div className="flex items-center lg:gap-8 gap-3  text-[#460644] font-bold font-[montserrat] lg:text-4xl text-lg">
                  <h2>{item.title}</h2> <span>{item.rate}</span>{' '}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section
          className="lg:px-[150px] px-5 py-8  w-full bg-cover py-8 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('invest_bg.png')`,
          }}
        >
          <div className=" mx-auto leading-loose lg:text-xl text-md font-[poppins] ">
            <p className=" leading-loose">
              Bulloak financial management makes it possible for you to achieve
              your financial purpose in life and live the lifestyle you’ve
              always craved for. By investing in Real Estate, Forex, Crypto
              Currency, Stocks, and Cannabis, we guarantee our clients
              substantial monthly profit for two years. We are a purpose-driven
              company, bound together by our commitment to what we do and how we
              work together. We come to this business from many different
              perspectives, but we all hold common values that we bring to our
              work. We are constantly engaged in research and development. This
              is a necessity in the world of relentlessly changing global
              financial markets. By utilizing our group of experts in all aspect
              of investment, we can carefully identify investment opportunities
              that can generate maximum profit for our client over a long
              period. Our team of licensed fiduciary advisors understands that
              every investor is unique. With the dynamic tools used by both you
              and your financial advisor, we are able to identify and alert you
              to opportunities so you can act on them.
            </p>
          </div>

          <div className="flex lg:flex-row flex-col-reverse justify-between items-center mt-6">
            <p className="lg:w-1/3 w-full leading-loose lg:text-xl text-md font-[poppins]">
              After a client has successfully registered, verified and made a
              deposit into his or her account, we carefully allocate the funds
              and analyze the markets, define the most attractive asset
              categories and then select which assets to add to your portfolio,
              such as cryptocurrencies, stocks, REITs, cannabis or others. Over
              time, the client portfolio changes according to our vision of the
              market. In this way we can protect ourselves from market
              fluctuations and volatility. The goal of portfolio management is
              to maximize profits, but also minimize risks. It's a balancing act
              to get the return investor's need without taking undue risk. This
              is accomplished through careful analysis of asset allocation,
              diversification, and regularly scheduled rebalancing in some
              portfolio management styles.
            </p>
            <img src="chart_step.png" alt="" />
          </div>
        </section>
        <section
          className="bg-cover py-8 bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('invest_bg.png')`,
          }}
        >
          <h2 className="text-[#8E0789] font-bold font-[laviosaa] text-center text-4xl">
            What we Invest in
          </h2>
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:w-2/3 w-full mx-auto gap-3 mt-7">
            {invest.map((item, index) => (
              <div
                ke={index}
                className="flex flex-col items-center gap-4 w-full lg:w-2/3 "
              >
                <div className="flex flex-col items-center gap-4   p-9 w-80 bg-[#8E0789]">
                  <img src={item.icon} className="w-12 h-auto" alt="" />
                  <h2 className="text-[36px] text-[#fff] font-[laviosaa]">
                    {item.title}
                  </h2>
                </div>
                <a
                  href={item.link}
                  className="uppercase font-[montserrat] text-[#000]"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
