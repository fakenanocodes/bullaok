import React from 'react';
import { BsDot } from 'react-icons/bs';

export default function Risks() {
  const data = [
    'Trading losses may be greater than the value of the initial investment',
    'Leveraged investments incur greater losses and risks',
    'Additional costs from margin interest charges',
    'Potential margin calls or liquidation of securities',
    'Short selling loss can be infinite, and the security borrowing fee can change suddenly',
  ];
  return (
    <section className="w-full bg-[#fff]">
      <div className="text-[#000] py-[100px] lg:w-3/5 w-full   mx-auto text-center">

      <h2 className="font-bold lg:text-4xl text-2xl px-8">
        Understand the risks of margin trading​
      </h2>
      <p className=" lg:text-xl text-sm lg:mt-9 mt-2 font-semibold">
        It's important to understand the potential risks associated with margin
        trading before you begin.​
      </p>
      <img src="/line.png" className="w-12 mx-auto mt-3 mb-8" alt="" />
      <ul className="lg:w-2/3 mx-auto w-full px-2  text-[#000] ">
        {data.map((item) => (
          <li className="px-1 py-2 bg-gray-300 mt-4 lg:text-lg text-[12px] px-9 rounded-[20px] flex items-center">
            <BsDot /> <span>{item} </span>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
