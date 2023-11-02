import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
export default function How() {
  const data = [
    {
      img: 'step1.png',
      title: 'Open an account',
      text: 'Sign up and fill out our application form',
    },
    {
      img: 'step2.png',
      title: 'Make a deposit',
      text: 'Fund your account with any amount',
    },
    {
      img: 'step3.png',
      title: 'Schedule now',
      text: 'Build your portfolio with recurring stock/ETF investments.',
    },
  ];
  return (
    <section className=" bg-[#fff] py-9  ">
      <div className="mx-auto text-[#000] mt-8 w-full lg:w-2/3 flex flex-col justify-center items-center ">
        <h2 className="font-bold lg:text-4xl text-2xl text-center my-4">
          How it <span className="text-[#41073F] font-bold">works</span>
        </h2>
        <p>
          For example, investors A and B decided to invest $800 each in Stock
          XYZ eight months ago. Investor A invested the total sum when the stock
          was trading at $10, holding 80 shares. In contrast, investor B set up
          a recurring investment of $100 monthly. Eight months later, he holds
          about 98 shares at an average cost per share of $8.16. Please note
          that this example is for illustrative purposes only. The value of
          securities may fluctuate.
        </p>

        <img src="works.png" className="mt-5" alt="" />

        <p>You can access recurring investments in three steps.</p>

        <div className="flex justify-between mt-8 border border-red-500 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#F7FAFC] px-4 w-1/4 px-9 py-4 text-center gap-3 flex flex-col justify-center items-center"
            >
              <img src={item.img} className="h-auto w-24" alt="" />
              <h3 className="font-bold text-2xl">{item.title}</h3>
              <p className="text-[#546988]">{item.text}</p>
            </div>
          ))}
        </div>
        {/* <button className="bg-[#41073F] rounded-lg text-[#fff] px-9 py-4 flex items-center gap-2 mt-6 ">
          <span>Get Started</span> <BsFillArrowRightCircleFill />
        </button> */}
      </div>
    </section>
  );
}
