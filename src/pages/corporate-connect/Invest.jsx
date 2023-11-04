import React from 'react';

export default function Invest() {
  const data = [
    {
      title: 'Provide information. ',
      content: 'Deliver YOUR corporate message directly to retail investors',
      img: 'provide.png',
    },
    {
      title: 'Share insight.',
      content:
        'Post content where it will be viewed by highly engaged Bulloak retail investors',
      img: 'share.png',
    },
    {
      title: 'Answer questions.',
      content:
        'Build a relationship by acknowledging the concerns of an underserved pocket of retail investors',
      img: 'answer.png',
    },
  ];

  return (
    <section
      className="flex flex-col bg-white gap-3  px-8 items-center justify-center bg-transparent   py-9  bg-cover bg-center bg-no-repeat  w-full relative"
      style={{
        backgroundImage: `url('corporate.png')`,
      }}
    >
      <h2 className="lg:text-4xl text-xl font-bold">
        Invest in your Investors
      </h2>
      <p className="text-xl font-bold text-gray-400 lg:w-1/4 w-full text-center ">
        Build a community and foster relationships with current and potential
        investors on an app with over{' '}
        <span className="text-black mb-8">35m downloads</span>
      </p>
      <div className="flex flex-col lg:flex-row justify-center my-[100px] gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg lg:w-1/5 w-full p-3 h-96 flex flex-col justify-between items-center gap-4"
          >
            <div>
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <p className="mt-4">{item.content}</p>
            </div>
            <img src={item.img} className="w-28 h-auto mb-8" alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
