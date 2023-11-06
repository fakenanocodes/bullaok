import { useState } from 'react';

function OptionFAQDropdown() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false); // Close other dropdowns
    setIsOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false); // Close other dropdowns
    setIsOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen1(false); // Close other dropdowns
    setIsOpen2(false);
  };

  return (
    <div className="w-[90%] my-0 mx-auto">
      <button
        onClick={toggleDropdown1}
        className="flex justify-between w-full  border border-gray-300 shadow-sm px-4 py-8 bg-white text-sm font-medium text-gray-700  focus:outline-none "
      >
        What is an Option?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen1 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen1 && (
        <div className=" mt-2  shadow-lg bg-white  ring-black ring-opacity-5">
          {/* Dropdown content here */}
          <div className="py-1">
            An option is a contract between a buyer and a seller. It gives the
            buyers (the owner or holder of the option) the opportunity to buy or
            sell the underlying asset at a specific strike price prior to or on
            a specified date. Options can provide investors with more
            opportunities than traditional equity buy/sell strategies.
          </div>
        </div>
      )}

      <button
        onClick={toggleDropdown2}
        className="inline-flex justify-between w-full border border-gray-300 shadow-sm px-4 py-8 bg-white text-sm font-medium text-gray-700 focus:outline-none "
      >
        What are the Advantages and Risks of Options?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen2 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen2 && (
        <div className="  mt-2  shadow-lg bg-white  ring-black ring-opacity-5">
          {/* Dropdown content here */}
          <div className="py-1">
            <ol>
              <li>
                {' '}
                Options are cost efficient with great leveraging power. As such,
                an investor can obtain an option position similar to a stock
                position without actually trading the stocks themselves, but
                with much more volatility risk.{' '}
              </li>
              <li>
                {' '}
                Options are a popular way to hedge your positions, but when not
                properly understood by investors they can pose a high risk of
                loss.{' '}
              </li>
              <li>
                {' '}
                Options have the potential to deliver higher percentage returns
                and losses.{' '}
              </li>
              <li>
                Options provide a strategic alternative to just investing in
                equity. There are many ways to use options to recreate synthetic
                positions; however, there are many risks associated with trading
                options and educating yourself is very important.
              </li>
            </ol>
          </div>
        </div>
      )}

      <button
        onClick={toggleDropdown3}
        className="inline-flex justify-between w-full  border border-gray-300 shadow-sm px-4 py-8 bg-white text-sm font-medium text-gray-700  focus:outline-none"
      >
        Can I trade complex option strategies on Webull’s desktop?
        <svg
          className={`w-5 h-5 ml-2 transition-transform transform ${
            isOpen3 ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen3 && (
        <div className=" mt-2  shadow-lg bg-white  ring-black ring-opacity-5">
          {/* Dropdown content here */}
          <div className="py-1">
            Yes. Advanced options strategies can be traded on the desktop
            version, mobile app, and the web version. 1) Download the latest
            Desktop version 2) Open the option chain of a specific symbol 3)
            Select the strategy or strategies you wish to employ on the top
            left. You can change the option strategy in the mobile app on the
            bottom left-hand side of the page when viewing the options chain.
          </div>
        </div>
      )}
    </div>
  );
}

export default OptionFAQDropdown;
