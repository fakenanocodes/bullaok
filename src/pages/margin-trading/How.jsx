import React from 'react';
import { BsChevronDown, BsFillArrowRightCircleFill } from 'react-icons/bs';
export default function How() {
  const data = [
    {
      img: 'open.png',
      icon: 'one.png',
      text: 'Open a Bulloak brokerage account.',
    },
    {
      img: 'open.png',
      icon: 'two.png',
      text: 'When choosing an account type, select Margin.',
    },
    {
      icon: 'three.png',
      img: 'open.png',
      text: 'Fund your account with at least $2,000 in cash or transfer the equivalent value of marginable securities.',
    },
    {
      icon: 'four.png',
      img: 'open.png',
      text: 'Keep a minimum of 25% of your total account value as equity at all times.​',
    },
  ];
  return (
    <section className=" bg-[#fff] py-9 mt-9">
      <div className="mx-auto text-[#000] mt-8 w-2/3">
        <h2 className="font-bold text-4xl text-center my-4">
          How trading securities on margin works​
        </h2>

        <div className="grid grid-cols-2 items-center justify-between  mx-auto">
          <div className="grid gap-2  w-5/6">
            {data.map((item) => (
              <>
                <div className="flex items-center gap-5 p-9   relative h-24 bg-gradient-to-r from-[#41073F] to-white-500 w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 ">
                  <img
                    src={item.icon}
                    className="absolute -top-8  -left-5 w-12 h-auto"
                    alt=""
                  />
                  <img src={item.img} className=" w-12 h-auto" alt="" />
                  <p className='font-bold'>{item.text}</p>
                </div>

                <BsChevronDown
                  style={{
                    color: '#000',
                    width: 'fit',
                    margin: 'auto',
                    fontSize: '24px',
                  }}
                />
              </>
            ))}
          </div>
          <img src="title.png" className='w-4/6 h-auto' alt="" />
          {/* <div className="block">
</div> */}
        </div>

        <button className="bg-[#fff] rounded-lg text-[#3774FE] flex items-center gap-2 ">
          <BsFillArrowRightCircleFill /> <span>Get Started</span>{' '}
        </button>
      </div>

      {/* <img src="/line.png" className="w-12 mx-auto mt-3 mb-8" alt="" /> */}
    </section>
  );
}
