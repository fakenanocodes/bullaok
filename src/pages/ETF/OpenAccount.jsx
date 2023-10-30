import React from 'react';

export default function OpenAccount() {
  return (
    <section className="py-9 flex flex-col items-center gap-9">
      <div>
        <h2 className="text-center text-[#fff] text-5xl font-bold mt-5 mb-10">
          Over 3,300 ETFs available on the Webull App
        </h2>
      </div>
      <div className="w-2/3 m-auto mt-5 flex flex-col items-center">
        <hr className="w-full mt-5" />
        <div className="grid grid-cols-3 divide-x py-8 justify-center items-center">
          <div className="bx text-[#fff] text-center px-3">
            <h3 className="text-3xl mb-4 font-bold">Fund Profile</h3>
            <p>
              Fund profile, dvidend, split record, and net asset value record
            </p>
          </div>
          <div className="bx text-center  text-[#fff] px-3">
            <h3 className="text-3xl mb-4 font-bold">Asset Allocation</h3>
            <p>
              Fund profile, dvidend, split record, and net asset value record
            </p>
          </div>
          <div className="bx text-center px-3 text-[#fff]">
            <h3 className="text-3xl mb-4 font-bold">Fund Profile</h3>
            <p>
              Fund profile, dvidend, split record, and net asset value record
            </p>
          </div>
        </div>
        <hr className="w-full " />
        <button className="bg-[#fff] p-5 rounded-lg font-bold mt-7">
          Open an account
        </button>
      </div>
      <img src="/etf.png" className="h-auto w-2/4 " alt="" />
      <div className="discover flex items-center justify-center gap-8 mt-9">
        <img src="etfsingle.png" className="h-auto w-80" alt="" />
        <div className="block text-[#fff] w-2/5">
          <h2 className="font-bold text-3xl">
            Discover the ETF that is right for you with ETF Lists
          </h2>
          <p className="w-80 mt-4 text-2xl text-[#D4D4D4]">
            ETF lists give you real-time top performing ETFs in each industry at
            a glance. Explore your options and align with your objectives more
            efficiently.
          </p>
        </div>
      </div>
      <div className="profile flex items-center flex-row-reverse justify-center gap-8 mt-9">
        <img src="etf_profile.png" className="h-auto w-80" alt="" />
        <div className="block text-[#fff] w-2/5">
          <h2 className="font-bold text-3xl">
            A deeper dive into the fund: <br />
            ETF Profile
          </h2>
          <p className=" mt-4 text-2xl text-[#D4D4D4]">
            See the details of each ETFs and explore more than 3,300 ETFs that
            best fit your objectives!
          </p>
        </div>
      </div>
    </section>
  );
}
