import React from 'react';
import Layout from '../components/Layout';

export default function Investment() {
  return (
    <Layout>
      <header
        className="flex flex-col lg:flex-row px-8 items-center  justify-center md:gap-16 gap-8 py-[190px]  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url('bck.png')`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#30022E] opacity-80"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className="lg:w-3/4 w-full relative z-20 flex flex-col items-center gap-7">
          <h2 className="lg:text-6xl text-3xl text-[#fff] font-bold  text-center">
            Our investment approach relies on facts, not guesswork.
          </h2>
          <button className="uppercase border text-[#fff] mt-8 bg-transparent lg:px-9 px-3 font-bold py-3">
            Get started
          </button>
        </div>
      </header>
      <main className="w-full bg-[#fff] ">
        <section className="bg-[#CDA1CB]/10 lg:px-[100px] px-5">
          <div className="lg:w-3/4 w-full mx-auto py-8">
            <h2 className="lg:text-3xl text-xl text-black">
              Explore our diverse range of investment packages tailored to meet
              your financial goals. Whether you're aiming for short-term gains
              or long-term wealth accumulation, our expertly crafted investment
              packages offer a secure and strategic path to a prosperous future.{' '}
            </h2>
          </div>

          <div className="flex lg:flex-row flex-col  justify-center my-8 w-full">
            <img src="finance.png" className="lg:w-2/4" alt="" />
            <h2 className="lg:text-5xl text-3xl text-black font-bold ">
              Investment Packages: <br /> Your Key to Financial <br /> Growth
            </h2>
          </div>
        </section>

        <section className=" py-8 bg-[#fff] w-full lg:px-[100px] px-5">
          <div className="flex lg:flex-row flex-col-reverse items-center gap-8">
            <div className="flex flex-col lg:w-2/5 w-full gap-4 lg:items-start text-black">
              <h2 className="lg:text-4xl text-3xl font-bold text-center lg:text-start ">
                Forex Trading
              </h2>
              <p className="text-2xl leading-loose">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you're aiming for short- term
                gains or long-term wealth accumulation, our expertly crafted
                investment packages offer a secure and strategic path to a
                prosperous future.{' '}
              </p>
              <button className="border shadow-lg bg-transparent border-[#AC09A6] lg:text-[27px] text-xl lg:px-8 px-4 font-bold py-4 ">
                Read more
              </button>
            </div>
            <img src="forex.png" className="lg:w-2/4 w-full  h-auto" alt="" />
          </div>
        </section>

        <section className=" bg-[#CDA1CB]/10 py-8 lg:px-[100px] px-5">
          <div className="flex lg:flex-row flex-col items-center gap-8 opacity-100">
            <img src="estate.png" className="lg:w-2/4 w-full h-auto" alt="" />
            <div className="flex flex-col lg:w-2/5 w-full gap-4 lg:items-start text-black">
              <h2 className="lg:text-4xl text-3xl font-bold  text-center lg:text-start  ">
                REAL ESTATE
              </h2>
              <p className="text-2xl leading-loose">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you're aiming for short- term
                gains or long-term wealth accumu lation, our expertly crafted
                investment packages offer a secure and strategic path to a
                prosperous future.{' '}
              </p>
              <button className="border shadow-lg bg-transparent border-[#AC09A6] lg:text-[27px] text-xl lg:px-8 px-4 px-8 font-bold py-4 ">
                Read more
              </button>
            </div>
          </div>
        </section>
        <section className=" py-8 lg:px-[100px] px-5">
          <div className="flex items-center flex-col-reverse lg:flex-row gap-8 opacity-100">
            <div className="flex flex-col gap-4 lg:w-2/5 w-full lg:items-start text-black">
              <h2 className="lg:text-4xl text-3xl font-bold uppercase  text-center lg:text-start ">
                Crypto
              </h2>
              <p className="text-2xl leading-loose">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you're aiming for short- term
                gains or long-term wealth accumu lation, our expertly crafted
                investment packages offer a secure and strategic path to a
                prosperous future.{' '}
              </p>
              <button className="border shadow-lg bg-transparent border-[#AC09A6] lg:text-[27px] text-xl lg:px-8 px-4 uppercase  px-8 font-bold py-4 ">
                Read more
              </button>
            </div>
            <img src="crypto.png" className="lg:w-2/4  h-auto" alt="" />
          </div>
        </section>
        <section className="bg-[#CDA1CB]/10  py-8 lg:px-[100px] px-5">
          <div className="flex flex-col lg:flex-row items-center gap-8 opacity-100">
            <img src="nfts.png" className="lg:w-2/4  h-auto" alt="" />

            <div className="flex flex-col gap-4 lg:w-2/5 w-full  lg:items-start text-black">
              <h2 className="lg:text-4xl text-3xl  text-center lg:text-start font-bold uppercase">ETFs</h2>
              <p className="text-2xl leading-loose">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you're aiming for short- term
                gains or long-term wealth accumu lation, our expertly crafted
                investment packages offer a secure and strategic path to a
                prosperous future.{' '}
              </p>
              <button className="border shadow-lg bg-transparent border-[#AC09A6] lg:text-[27px] text-xl lg:px-8 px-4 uppercase  px-8 font-bold py-4 ">
                Read more
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#fff]  py-8 lg:px-[100px] px-5">
          <div className="flex lg:flex-row flex-col-reverse items-center gap-8 opacity-100">
            <div className="flex  flex-col gap-4 lg:w-2/5 w-full  lg:items-start text-black">
              <h2 className="lg:text-4xl text-3xl  text-center lg:text-start font-bold uppercase">
                Stocks
              </h2>
              <p className="text-2xl leading-loose">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you're aiming for short- term
                gains or long-term wealth accumu lation, our expertly crafted
                investment packages offer a secure and strategic path to a
                prosperous future.{' '}
              </p>
              <button className="border shadow-lg bg-transparent border-[#AC09A6] lg:text-[27px] text-xl lg:px-8  uppercase  px-8 font-bold py-4 ">
                Read more
              </button>
            </div>
            <img src="stocks.png" className="lg:w-2/4  h-auto" alt="" />
          </div>
        </section>
        <section className="bg-[#CDA1CB]/10  py-8 lg:px-[100px] px-5">
          <div className="flex flex-col lg:flex-row items-center gap-8 opacity-100">
            <img src="assets.png" className="lg:w-2/4 w-full  h-auto" alt="" />

            <div className="flex flex-col gap-4 lg:w-2/5 w-full  lg:items-start text-black">
              <h2 className="lg:text-4xl text-3xl text-center lg:text-start font-bold uppercase">
                Assets
              </h2>
              <p className="text-2xl leading-loose">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you're aiming for short- term
                gains or long-term wealth accumu lation, our expertly crafted
                investment packages offer a secure and strategic path to a
                prosperous future.{' '}
              </p>
              <button className="border shadow-lg bg-transparent border-[#AC09A6] lg:text-[27px] text-xl lg:px-8  uppercase  px-8 font-bold py-4 ">
                Read more
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#fff]  py-8 lg:px-[100px] px-5">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 opacity-100">
            <div className="flex flex-col gap-4 lg:w-2/5 w-full  lg:items-start text-black">
              <h2 className="lg:text-4xl text-3xl text-center lg:text-start font-bold uppercase">
                Cannabis
              </h2>
              <p className="text-2xl leading-loose">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you're aiming for short- term
                gains or long-term wealth accumu lation, our expertly crafted
                investment packages offer a secure and strategic path to a
                prosperous future.{' '}
              </p>
              <button className="border shadow-lg bg-transparent border-[#AC09A6] lg:text-[27px] text-xl lg:px-8  uppercase  px-8 font-bold py-4 ">
                Read more
              </button>
            </div>
            <img src="cannabis.png" className="lg:w-2/4  h-auto" alt="" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
