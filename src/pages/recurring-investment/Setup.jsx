import React from 'react';

export default function Setup() {
  return (
    <section className="bg-[#fff] flex flex-col font-bold py-9 gap-7 justify-center items-center">
      <h2 className="text-4xl">
        Set up a <span className="text-[#41073F]">recurring investment </span>{' '}
        schedule today!
      </h2>
      <p>
        Don't let short-term market fluctuations affect your long-term goals.
      </p>
      <img src="start.png" className="w-1/5 h-auto" alt="" />
      <button className="bg-[#41073F] p-3 text-white rounded-lg px-9 text-2xl">
        Open an Account
      </button>
    </section>
  );
}
