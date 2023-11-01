import React from 'react';
import WhyTable from '../../components/common/WhyTable';
import tableData from '../../data/marginTable.json';
import data from '../../data/table2.json';
export default function () {
  return (
    <section className="bg-[#fff] py-8">
      <div className="text-[#000] py-9 w-2/4  text-center mx-auto">
        <h2 className="text-4xl font-bold mt-4">
          Why choose Bulloak for margin trading?​
        </h2>
        <img src="line.png" className='w-12 mx-auto mt-5' alt="" />

        <h3 className="font-bold my-3">Simple and straightforward pricing​</h3>
        <p>
          A lower margin rate means a lower cost to borrow. Our interest rates
          are lower based on the amount of your margin balance.
        </p>
      </div>
      <WhyTable tableData={tableData} />

      <div className="grid grid-cols-3 gap-3 divide-x w-2/4 mt-9 mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-72 gap-4 flex flex-col items-start  mx-auto"
          >
            <img src={item.icon} className="w-12 h-auto " alt="" />
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
