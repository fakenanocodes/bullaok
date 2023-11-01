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
                What’s the difference between margin and cash accounts ?
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
                  A cash account is a type of brokerage account in which the
                  investor must pay the full amount for securities purchased.
                  <br />
                  <br />A margin account is a brokerage account which allows
                  investors to leverage the funds and securities they already
                  own to purchase additional securities. It provides a great
                  opportunity to leverage your investment to help increase your
                  return. At the same time, it has the risks of magnifying your
                  losses.
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
                What are the rules for margin trading?
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
                While margin trading provides more trading opportunities,
                understanding the rules and potential risks is essential before
                you start.​
                <br />
                <br />
                If you like to day trade, you probably want to keep your equity
                value (crypto not included) above $25,000. This is because when
                you’re flagged as a Pattern Day Trader (PDT) and your equity
                value dips below $25,000, an Equity Maintenance (EM) call may
                occur.
                <br />
                <br />
                ​ Another important thing to understand is buying power. This
                determines how much you can spend. There are two types of buying
                power:​
                <br />
                <br />
                - Day Trade Buying Power (DTBP) refers to the funds you have
                available to place trades on a given trading day. It is often 4x
                your equity value.
                <br />
                <br />
                ​ - Overnight Buying Power (ONBP) refers to the funds you have
                available to hold positions overnight. It is often 2x your
                equity value.​
                <br />
                <br />
                This means you cannot use all of your DTBP and hold the position
                overnight. You may trigger margin calls related to buying power.
                Read the rest of our course to learn more about margin calls.​
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
                How do I know which stocks I can trade with leverage?
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
                1) Go to the “Watchlist” tab on the main screen.
                <br />
                <br />
                ​ 2) Look up a stock of your choice and tap on it.
                <br />
                <br />
                ​ 3) Check to see if there is a dollar icon on the top right.
                <br />
                <br />
                4) If there is, tap the icon and you will see the maximum
                leverage on this stock.​
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
