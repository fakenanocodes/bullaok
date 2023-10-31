import React from 'react';
import data from '../../data/benefit.json';
export default function Benefits() {
  return (
    <div className="text-[#fff]">
      <div className="w">
        <h2 className="text-center text-4xl">
          The benefits of a margin trading account​
        </h2>
        <hr className="w-12 border-5" />
      </div>
      <div className="grid grid-cols-3 gap-x-9 gap-y-7 w-3/6  m-auto">
        {data.map((item, index) => (
          <div className=" text-[#000] w-64 text-center p-5 flex flex-col bg-[#fff] rounded-lg items-center">
            <img src={item.icon} className="w-24 h-auto " alt="" />
            <h3 className="mt-3">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
