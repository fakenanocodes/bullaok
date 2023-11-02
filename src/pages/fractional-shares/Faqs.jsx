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
    <section className="bg-[#fff] py-6">
      <div className="mx-auto text-center w-full lg:w-1/4 my-5 lg:py-7 py-2">
        <h2 className="text-[#000] lg:text-4xl text-2xl font-bold lg:my-5 my-1">
          <span className="text-[#41073F]">FAQs </span>
        </h2>
      </div>
      <div className="lg:w-3/6 w-full mx-auto lg:mt-8 mt-0">
        <div id="accordionExample5 lg:mt-8 mt-2">
          <div class="rounded-t-lg  dark:border-neutral-600 dark:bg-neutral-800 px-4">
            <h2 className="mb-0 " id="headingOne5">
              <button
                class="group font-bold shadow-lg lg:text-lg text-xs lg:py-9 py-1 rounded-[20px] relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-target="#collapseOne5"
                aria-expanded="true"
                aria-controls="collapseOne5"
                onClick={() => toggleAccordion(1)}
              >
                What is fractional share investing?
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
              class="!visible my-5 rounded-[20px]"
              data-te-collapse-item
              data-te-collapse-show
              aria-labelledby="headingOne5"
            >
              <div class="px-5 py-4 flex flex-col gap-4 text-gray-500 font-bold text-xs lg:text-lg">
                <p className="">
                  A fractional share is when you own less than one whole share
                  of a company. Buying fractional shares is a way to invest in
                  popular stocks without being dependent on matching the share
                  price. There is a minimum of 0.00001 shares per order and a
                  purchase quantity of $5 to own a portion of the stock or ETF.
                </p>
              </div>
            </div>
          </div>
          <div class=" border-t-0   dark:bg-neutral-800 px-4">
            <h2 class="mb-0" id="headingTwo5">
              <button
                class="group font-bold lg:text-lg shadow-lg text-xs relative lg:py-9 py-1 rounded-[20px] mt-4 flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseTwo5"
                aria-expanded="false"
                aria-controls="collapseTwo5"
                onClick={() => toggleAccordion(2)}
              >
                How do I trade fractional shares?
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
              } hidden  my-5 rounded-[20px] text-gray-500  font-bold`}
              data-te-collapse-item
              aria-labelledby="headingTwo5"
            >
              <div class="px-5 py-4 lg:text-md text-xs lg:text-lg">
                Trading fractional shares is as simple as submitting a regular
                order. Look out for the fractional share indicator at the top of
                a stock page to see if fractional shares are available for that
                stock or ETF. There is a minimum of 0.00001 shares per order and
                a purchase quantity of $5 to own a portion of the stock or ETF.
              </div>
            </div>
          </div>
          <div class="rounded-b-lg dark:border-neutral-600 dark:bg-neutral-800 px-4">
            <h2 class="mb-0" id="headingThree5">
              <button
                class="group font-bold  lg:text-lg text-xs relative shadow-lg lg:py-9 py-1 rounded-[20px] mt-4 flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseThree5"
                aria-expanded="false"
                aria-controls="collapseThree5"
                onClick={() => toggleAccordion(3)}
              >
                Which stocks are fractional shares available for?
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
              class="!visible hidden  my-5 rounded-[20px]"
              data-te-collapse-item
              aria-labelledby="headingThree5"
            >
              <div class="px-5 py-4 text-xs lg:text-lg text-gray-500 font-bold">
                Fractional shares are available for equities and ETFs. The list
                of available symbols is subject to change.
              </div>
            </div>
          </div>
          <div class="rounded-b-lg dark:border-neutral-600 dark:bg-neutral-800 px-4">
            <h2 class="mb-0" id="headingFour5">
              <button
                class="group font-bold  lg:text-lg text-xs relative shadow-lg lg:py-9 py-1 rounded-[20px] mt-4 flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target="#collapseFour5"
                aria-expanded="false"
                aria-controls="collapseFour5"
                onClick={() => toggleAccordion(3)}
              >
                How do I sell my fractional shares?
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
              id="collapseFour5"
              class="!visible hidden  my-5 rounded-[20px]"
              data-te-collapse-item
              aria-labelledby="headingFour5"
            >
              <div class="px-5 py-4 text-xs lg:text-lg text-gray-500 font-bold">
                You can find your fractional share position in your main account
                screen. To do a trade or look at additional information for the
                position, tap or right-click on the position. Now you will be
                able to liquidate or add on to your position. There is a minimum
                of 0.00001 shares per order for closing fractional share
                positions. The rule of $5 minimum doesn't work for closing
                fractional share positions.
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center my-7 font-bold lg:text-2xl text-xs ">
        See more <a href="#"> Fractional Shares FAQs {'>'}</a>
      </p>
    </section>
  );
}
