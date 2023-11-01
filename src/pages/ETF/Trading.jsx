// import React from 'react';

export default function Trading() {
  return (
    <section className="bg-[#fff] flex flex-col items-center py-8 ">
      <div className="mt-[50px] w-4/5 md:w-full">
        <h2 className="font-bold md:text-[50px] text-2xl text-center">
          Trading platforms tailored to your needs
        </h2>
        <p className="text-center mt-3 ">
          Bulloak provides a comprehensive range of trading and investing
          features across iOS, Android, Mac, Windows, and Web with a
          user-friendly interface.
        </p>
        <img
          src="desktop.png"
          className="h-auto md:w-2/3 w-full m-auto mt-[90px]"
          alt=""
        />
      </div>
      <section className="mt-9 w-full">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 lg:gap-4 h-3/4 py-8 items-center px-8 justify-center m-auto lg:w-4/5 md:w-full w-full">
          <div
            className="bg-cover bg-center bg-no-repeat h-80 md:w-80 w-full relative"
            style={{
              backgroundImage: `url('/box1.png')`,
            }}
          >
            <div className="mt-end text-[#fff] text-center absolute px-8 bottom-10 ">
              <h3 className="font-bold">3,300+ tradable ETFs</h3>
              <p className="mt-5">
                Explore over 3,300 EFTs in detail, find the right fit that meets
                your objectives
              </p>
            </div>
          </div>
          <div
            className=" bg-cover bg-center bg-no-repeat h-80 md:w-80 w-full relative"
            style={{
              backgroundImage: `url('/box2.png')`,
            }}
          >
            <div className="text-[#fff] text-center absolute px-8 bottom-10 ">
              <h3 className="font-bold">Granular Market Data</h3>
              <p className="mt-5">
                Insightful market data to help you make informed decisions
              </p>
            </div>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat h-80 md:w-80 w-full relative"
            style={{
              backgroundImage: `url('/box3.png')`,
            }}
          >
            <div className="text-[#fff] text-center absolute px-8 bottom-10 ">
              <h3 className="font-bold">Immersive Charting</h3>
              <p className="mt-5">
                Including functions like compare, place trade, and more!
              </p>
            </div>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat h-80 md:w-80 w-full relative"
            style={{
              backgroundImage: `url('/box4.png')`,
            }}
          >
            <div className="text-[#fff] text-center absolute px-8 bottom-10 ">
              <h3 className="font-bold">Zero commission*, No hidden fee</h3>
              <p className="mt-5">
                Zero commission trade on ETFs, stocks and options
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
