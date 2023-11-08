import React from 'react';
import { images } from '../assets';
import Layout from '../components/Layout';
import { brokerData, teamData } from '../data/team';

export default function Team() {
  return (
    <Layout>
      <header
        className="relative flex flex-col lg:flex-row px-8 items-center bg-[#fff]  justify-center md:gap-16 gap-8 bg-transparent lg:h-96 lg:py:0 py-8  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url(${images.team_bg})`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#30022E] opacity-80"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className=" lg:px-[150px] px-2 text-center w-full relative z-20 text-[#fff] flex flex-col lg:items-start gap-7">
          <h2 className="lg:text-6xl text-3xl  font-bold font-[laviossa]  ">
            The Team
          </h2>
          <p className="font-[laviossa] lg:text-[27px] text-[14px]  lg:mt-[100px] ">
            Meet the guys that make it all work
          </p>
        </div>
      </header>

      <main className="bg-[#fff]">
        <section className='p-3'>
          <h2 className="lg:w-2/3 w-full mx-auto font-[montserrat] lg:text-3xl text-[14px] py-8">
            <span className="text-[#8E0789] font-[laviossa] lg:text-[69px] text-[21px]">
              A{' '}
            </span>{' '}
            little intro to the awesome team at Bulloak Finance Management.
            They're a group of finance experts who are passionate about helping
            people achieve their financial goals. These talented individuals
            work together to provide top-notch financial services and support to
            clients like you.
          </h2>

          <div className="grid grid-cols-2 lg:w-2/3 w-full mx-auto gap-5">
            {teamData.map((items, index) => (
              <div className="item l:w-3/4 w-full " key={index}>
                <img src={items.image} className="lg:ml-6 ml-2 -mb-8 w-20 " alt="" />
                <div className="content border-2 p-2 border-[#8E0789] flex flex-col ">
                  <div className="flex">
                    <h3 className="mt-4 ml-4 font-[montserrat] text-[9px]">
                      {items.role}
                    </h3>
                    <p className="ml-auto font-[laviossa] lg:text-md text-[9px] ">{items.name}</p>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-[#8E0789] text-[6px] font-[montserrat]"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="">
          <div className="lg:w-2/3 w-full mx-auto mt-[90px]">
            <h2 className="lg:text-5xl text-3xl my-6 font-bold font-[laviossa]  ">
              Brokers
            </h2>
            <h2 className=" font-[montserrat] text-3xl py-8">
              <span className="text-[#8E0789] font-[laviossa] text-[69px]">
                A
              </span>{' '}
              little intro to the amazing brokers at Bulloak Finance Management.
              These brokers are experts in the financial market and play a
              crucial role in helping clients with their investments. These
              brokers at Bulloak Finance Management are dedicated to helping
              clients navigate the financial market and achieve their investment
              objectives.
            </h2>
          </div>

          <div className="grid grid-cols-2 w-2/3 mx-auto gap-5 py-[90px]">
            {brokerData?.map((items, index) => (
              <div className="item w-3/4 flex flex-col items-end " key={index}>
                <img
                  src={items.image}
                  className="mr-6 -mb-8 w-44 relative z-10 "
                  alt=""
                />
                <div className="content border-2 w-full p-2 border-[#8E0789] flex flex-col ">
                  <div className="flex flex-col ">
                    <h3 className="mt-4  font-[montserrat]">{items.role}</h3>
                    <p className="font-[laviossa]">{items.name}</p>
                  </div>
                  <a
                    href="#"
                    className="ml-auto text-[#8E0789] font-[montserrat] font-bold"
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
