import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
export default function Header() {
  return (
    <section
      className="flex flex-col text-white  px-8 items-center justify-center md:gap-16 gap-8 py-9  bg-cover bg-center bg-no-repeat  w-full relative"
      style={{
        backgroundImage: `url('connect_bg.png')`,
      }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="uppercase font-bold">Bulloak Corporate Connect:</h1>
        <p>A direct line of communication between investors and companies.</p>
        <button className="flex items-center text-[#550952] p-4 rounded-xl font-bold mt-6 ">
          {' '}
          <span> Get in touch today!</span>{' '}
          <BsArrowRight style={{ color: '#550952' }} />
        </button>
      </div>
      <div className="flex gap-6 justify-center items-center w-2/4">
        <div className="flex gap-4 bg-gray-300 p-3 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 ">
          <img src="investors.png" className="w-24 h-auto" alt="" />
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">FOR INVESTORS:</h2>
            <p>
              Get up to date news, reports and more directly from listed
              companies
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-gray-300 p-3 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50">
          <img src="investors.png" className="w-24 h-auto" alt="" />
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">FOR LISTED COMPANIES:</h2>
            <p>
              Get up to date news, reports and more directly from listed
              companies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
