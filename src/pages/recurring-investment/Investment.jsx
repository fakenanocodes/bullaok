import React from 'react';

export default function Investment() {
  return (
    <section className="bg-[#F7FAFC] py-8">
      <div className="flex items-center justify-center lg:flex-row flex-col px-3 gap-4 ">
        <div className=" lg:w-1/4 w-full flex flex-col lg:items-start items-center lg:text-start text-center">
          <h2 className="lg:text-4xl text-3xl font-bold">
            What is a <br />
            <span className="text-[#41073F] font-bold">
              recurring investment?
            </span>
          </h2>
          <p className="mt-4 lg:text-lg text-sm">
            A recurring investment is a tool that allows investors to make
            investments on a regular schedule of your choice. Investors can
            choose how much and how often they'd like to invest. Market orders
            are placed based on a set schedule.
          </p>
        </div>
        <img src="phone_invest.png" className="lg:w-1/5 w-full h-auto " alt="" />
      </div>
    </section>
  );
}
