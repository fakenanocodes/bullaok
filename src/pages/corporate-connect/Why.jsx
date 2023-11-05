import React from 'react';

export default function Why() {
  const data = [
    {
      title: 'STAY UP-TO-DATE',
      content:
        'Stay informed with the most recent news, updates, and more from the companies you follow! ',
      img: 'data.png',
    },
    {
      title: 'NEVER MISS AN UPDATE',
      content:
        'Receive instant notifications whenever verified company profiles share new content.',
      img: 'update.png',
    },
    {
      title: 'MAKE YOUR OPINION COUNT',
      content:
        'Take advantage of the Q&A feature to directly ask questions to the participating companies.',
      img: 'opinion.png',
    },
    {
      title: 'BUILD YOUR COMMUNITY',
      content:
        'Engage with fellow investors by voting on the questions you want to see answered.',
      img: 'build.png',
    },
  ];
  return (
    <section className="bg-white py-8">
      <h2 className="font-bold text-center my-5 uppercase text-xl px-4 lg:px-0 lg:text-4xl">
        WHY Bulloak CORPORATE CONNECT?
      </h2>

      <div className="grid lg:grid-cols-2  grid-cols-1 px-4 lg:px-0 w-full lg:w-2/3 mx-auto mt-8 gap-8">
        {data.map((item, index) => (
          <div key={index} className="flex gap-4 lg:w-2/3 w-full">
            <img src={item.img} className="w-20 h-16" alt="" />
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
