import React, { useEffect, useState } from 'react';
// Initialization for ES Users
import { Tab, initTE } from 'tw-elements';

export default function How() {
  initTE({ Tab });
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabTitles = [
    {
      title: 'Find the company with the magnifying glass on the home page',
      content: 'Select desired company from the list',
      tabContent: 'findcompany.png',
    },
    {
      title: 'Search for the "Corporate Connect" entrance banner',
      content: 'Find it under the "FEEDS" or  "COMPANY" tab',
      tabContent: 'banner.png',
    },
    {
      title: 'Find the company with the magnifying glass on the home page',
      content: 'Select desired company from the list',
      tabContent: 'yzt.png',
    },
    {
      title: 'Follow your favorite companies',
      content:
        'Simply tap the "FOLLOW" button to receive notifications whenever the company publishes new content',
      tabContent: 'yzt.png',
    },
  ]; // Add more tab titles as needed

  const showTabContent = (index) => {
    setActiveTabIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabTitles.length);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <section className="bg-white flex md:block flex-col items-center justify-center py-7 relative">
      <div className="  w-full lg:w-4/6  mt-10  mx-auto flex flex-col items-center justify-center">
        <div className=" lg:w-3/5 mr-auto w-full p-4  ">
          <h2 className="font-bold text-2xl lg:text-4xl my-4">
            How do you use Bulloak's <br /> Corporate Connect?
          </h2>
          <p className="text-black font-semibold text-xl lg:text-2xl">
            Look up participating companies to follow!
          </p>
          <ul id=" relative ">
            <div className="lg:h-3/5 h-2/5 bg-gray-300   absolute w-2 z-0"></div>
            {tabTitles.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer mt-8 pl-4 mb-4 px-4 lg:h-24  ${
                  activeTabIndex === index
                    ? 'relative z-1 border-indigo-500 my-3 border-l-8 font-bold text-gray-800'
                    : ''
                }`}
                onClick={() => showTabContent(index)}
              >
                <p className="my-3 text-lg lg:text-2xl">{item.title}</p>
                <p className="my-3 text-lg lg:text-2xl">{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-8 w-[50%] lg:hidden block ">
          {tabTitles.map((item, index) => (
            <div
              key={index}
              id={`tabContent${index}`}
              className={` ${activeTabIndex === index ? 'csr105' : ''} mb-4`}
              style={{ display: activeTabIndex === index ? 'block' : 'none' }}
            >
              <img
                src={item.tabContent}
                className="h-auto lg:w-2/5 w-full"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:block absolute -right-[50px] lg:top-[80px] p-4 overflow-y-auto">
        {tabTitles.map((item, index) => (
          <div
            key={index}
            id={`tabContent${index}`}
            className={`csr104 ${
              activeTabIndex === index ? 'csr105' : ''
            } mb-4`}
            style={{ display: activeTabIndex === index ? 'block' : 'none' }}
          >
            <img src={item.tabContent} className="h-auto w-2/5" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
