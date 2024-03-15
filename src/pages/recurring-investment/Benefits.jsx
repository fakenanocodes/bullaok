import React from 'react';

export default function Benefits() {
  const data = [
    {
      img: 'growth.png',
      title: 'Steady portfolio growth',
      text: 'Recurring investments ensure you spread your investments over time, allowing you to grow your portfolio with new funds consistently.',
    },
    {
      img: 'risky.png',
      title: 'Better managed risks ',
      text: 'Recurring investments can help manage the impacts and risks of a volatile market. Spreading out your investments can potentially smooth out the ups and downs of the market.      ',
    },
    {
      img: 'investing.png',
      title: 'More disciplined investing',
      text: 'Focus on long-term accumulation by investing with discipline regardless of market conditions. By setting up recurring investments, the amount you invest is predetermined and not based on emotion.      ',
    },
  ];
  return (
    <section className="bg-[#fff] p-9">
      <h2 className="font-bold my-9 text-center lg:text-4xl">
        {' '}
        <span className="text-[#41073F]">Main Benefits</span> of Recurring
        Investment
      </h2>
      <div className="flex lg:flex-row flex-col justify-between lg:w-3/5 w-full gap-6 mx-auto ">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7FAFC] lg:w-1/3 w-full text-center lg:text-start px-8 py-6 mt-8 "
          >
            <img
              src={item.img}
              className="w-24 -mt-[55px] mb-5 m-auto h-auto"
              alt=""
            />
            <h2 className="font-bold lg:text-2xl text-xl  mb-4 ">
              {item.title}
            </h2>
            <p className="text-gray-500 text-xs lg:text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
