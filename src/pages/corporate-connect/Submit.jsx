import React, { useEffect, useState } from 'react';
// Initialization for ES Users
import { Tab, initTE } from 'tw-elements';

export default function Submit() {
  initTE({ Tab });
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabTitles = [
    {
      title: "Locate the company's Corporate Connect page",
      content: 'See above for instructions',
      tabContent: 'findcompany.png',
    },
    {
      title: 'Check out current Q&As',
      content:
        'Browse through answered and unanswered questions submitted by other investors by tapping on "Q&A"',
      tabContent: 'banner.png',
    },
    {
      title: 'Ask the company a question',
      content:
        'Tap on "POST A QUESTION" located at the bottom of the screen to submit your query!',
      tabContent: 'yzt.png',
    },
    {
      title: 'Give a question a boost',
      content:
        'Indicate your interest in similar questions you may have by "LIKING" the post.',
      tabContent: 'yzt.png',
    },
  ];

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
    <section className="bg-white py-7 relative ">
      <div className="hidden lg:block absolute left-[300px] top-[50px] p-4 overflow-y-auto ">
        {tabTitles.map((item, index) => (
          <div
            key={index}
            id={`tabContent${index}`}
            className={`csr104 ${
              activeTabIndex === index ? 'csr105' : ''
            } mb-4`}
            style={{ display: activeTabIndex === index ? 'block' : 'none' }}
          >
            <img src={item.tabContent} className="h-auto w-3/5" alt="" />
          </div>
        ))}
      </div>
      <div className=" lg:w-3/6 w-full  my-10   ml-auto  flex flex-col items-center justify-center">
        <div className=" lg:w-3/5 w-full p-4 ">
          <h2 className="font-bold text-2xl lg:text-4xl my-4">
            How do you use Bulloak's <br /> Corporate Connect?
          </h2>
          <p className="text-black font-semibold text-2xl">
            Look up participating companies to follow!
          </p>
          <ul id=" relative ">
            <div className="lg:h-4/6 h-2/5 bg-gray-300   absolute w-2 z-0"></div>
            {tabTitles.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer lg:my-8 my-0  py-2 pl-4 px-4   ${
                  activeTabIndex === index
                    ? 'relative z-1 border-indigo-500  border-l-8 font-bold text-gray-800'
                    : ''
                }`}
                onClick={() => showTabContent(index)}
              >
                <p className="lg:my-3 my-0 text-lg lg:text-2xl">{item.title}</p>
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
    </section>
  );
}
