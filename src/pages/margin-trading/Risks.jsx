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
    <section className="text-[#fff] mt-[100px] w-3/5 mx-auto text-center">
      <h2 className="font-bold text-4xl ">
        Understand the risks of margin trading​
      </h2>
      <p className="text-gray-300 text-xl mt-9 font-semibold">
        It's important to understand the potential risks associated with margin
        trading before you begin.​
      </p>
      <img src="/line.png" className="w-12 mx-auto mt-3 mb-8" alt="" />
      <ul className="w-2/3 mx-auto  text-[#000] ">
        {data.map((item) => (
          <li className="px-1 py-2 bg-gray-300 mt-4 rounded-[20px] flex items-center">
            <BsDot /> <span>{item} </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
