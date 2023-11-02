import React, { useState } from 'react';
// Initialization for ES Users
import { AiFillMinusCircle } from 'react-icons/ai';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { Collapse, initTE } from 'tw-elements';
export default function Faqs() {
  initTE({ Collapse });
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="mx-auto text-center w-full lg:w-1/4 my-5 py-7">
        <h2 className="text-[#fff] text-4xl mt-5">FAQs</h2>
        <img src="line.png" className="w-12 mx-auto mt-3" alt="" />
      </div>
      <div className="lg:w-3/6 w-full mx-auto mt-8">
        <div id="accordionExample5">
          <div class="rounded-t-lg  dark:border-neutral-600 dark:bg-neutral-800">
            <h2 className="mb-0 " id="headingOne5">
              <button
                class="group font-bold  lg:text-lg text-sm py-9 rounded-[20px] relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-target="#collapseOne5"
                aria-expanded="true"
                aria-controls="collapseOne5"
                onClick={() => toggleAccordion(1)}
              >
                How do you fund recurring investment schedules?
                <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  {isCollapsed ? (
                    <AiFillMinusCircle />
                  ) : (
                    <BsFillPlusCircleFill />
                  )}
                </span>
              </button>
            </h2>
            <div
              id="collapseOne5"
              class="!visible bg-[#EFF3F694] my-5 rounded-[20px]"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="headingOne5"
            >
              <div class="px-5 py-4 flex flex-col gap-4 text-[#fff]">
                <video
                  class=""
                  controls=""
                  width="100%"
                  height="100%"
                  poster="https://u1sweb.webullfinance.com/oas/74771407c8cf4ae4a178c1eced67b3a0.jpg"
                  src="https://u1sweb.webullfinance.com/oas/d1f3fb412c4a48de91e538ab85aa0a73.mp4"
                  playsinline=""
                ></video>
                <p className="hidden lg:block">
                  There are two ways to fund a recurring investment schedule.
                  <br />
                  1. Through Webull buying power. When you choose this payment
                  method, it deducts funds from the settled funds in your
                  account.
                  <br />
                  2. Through bank account. Add a bank account through ACH first
                  and automatic transfers will be initiated 3 days ahead of the
                  next investment date.
                </p>
                <a href="" className="text-center">
                  {' '}
                  Learn More {'>'}
                </a>
              </div>
            </div>
          </div>
          <div class=" border-t-0   dark:bg-neutral-800">
            <h2 class="mb-0" id="headingTwo5">
              <button
                class="group font-bold lg:text-lg text-sm relative py-9 rounded-[20px] mt-4 flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={() => toggleAccordion(2)}
              >
                At what frequency can you set a recurring investment?
                <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  {isCollapsed ? (
                    <AiFillMinusCircle />
                  ) : (
                    <BsFillPlusCircleFill />
                  )}
                </span>
              </button>
            </h2>
            <div
              id="collapseTwo5"
              //   class="!visible hidden"
              class="!visible "
              className={`${
                isCollapsed ? '!visible' : ''
              } hidden bg-[#EFF3F694] my-5 rounded-[20px] text-[#fff]`}
              data-te-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div class="px-5 py-4 lg:text-md text-sm">
                The below options are available.
                <br />
                1. Every trading day
                <br />
                2. Every Week (appoint a specific date)
                <br />
                3. Every Two Weeks (appoint a specific date)
                <br />
                4. Every Month (appoint a specific date)
              </div>
            </div>
          </div>
          <div class="rounded-b-lg dark:border-neutral-600 dark:bg-neutral-800">
            <h2 class="mb-0" id="headingThree5">
              <button
                class="group font-bold  lg:text-lg text-sm relative shadow-xl py-9 rounded-[20px] mt-4 flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseThree5"
                aria-expanded="false"
                aria-controls="collapseThree5"
                onClick={() => toggleAccordion(3)}
              >
                What should you know before you start?
                <span class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  {isCollapsed ? (
                    <AiFillMinusCircle />
                  ) : (
                    <BsFillPlusCircleFill />
                  )}
                </span>
              </button>
            </h2>
            <div
              id="collapseThree5"
              class="!visible hidden bg-[#EFF3F694] my-5 rounded-[20px]"
              data-te-collapse-item
              aria-labelledby="headingThree5"
            >
              <div class="px-5 py-4 text-[#fff]">
                1. Recurring investments are available for cash, margin, and IRA
                accounts.
                <br />
                2. You can make a recurring investment schedule for stocks/ETFs
                that support fractional shares trading (inverse, leveraged, or
                volatility ETFs are not supported)
                <br />
                3. Stocks/ETFs will be purchased with settled cash in cash/IRA
                accounts and with cash balance in margin accounts.
                <br />
                4. The minimum amount set in each schedule is $5 and the maximum
                amount is $25,000.
                <br />
                5. You can only make one recurring investment schedule for each
                asset. A total of 5 recurring investment schedules are allowed
                for each account.
                <br />
                6. Each schedule can only be modified once a day. If you choose
                to pay through bank account, you can only modify the investment
                amount, not the frequency of the schedule. 7. Orders are placed
                automatically at about 1:30 pm ET on regular trading days. If
                the market closes earlier, orders are placed at 10:30 am ET. For
                non-trading days, orders will be placed on the following
                business day around 1:30 pm ET.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
