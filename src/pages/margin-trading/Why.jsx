import React from 'react';
import WhyTable from '../../components/common/WhyTable';
import tableData from '../../data/marginTable.json';
import data from '../../data/table2.json';
export default function Why() {
  return (
    <section className="bg-[#fff] py-8">
      <div className="text-[#000] py-9 lg:w-2/4 w-full px-2  text-center mx-auto">
        <h2 className="lg:text-4xl text-xl font-bold mt-4">
          Why choose Bulloak for margin trading?​
        </h2>
        <img src="line.png" className="w-12 mx-auto mt-5" alt="" />

        <h3 className="font-bold my-3">Simple and straightforward pricing​</h3>
        <p>
          A lower margin rate means a lower cost to borrow. Our interest rates
          are lower based on the amount of your margin balance.
        </p>
      </div>
      <WhyTable tableData={tableData} />

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 lg:divide-x divide-y lg:divide-y-0   lg:w-2/4 w-full  mt-9 mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-72 gap-4 flex flex-col lg:items-start items-center py-5 lg:py-0  mx-auto "
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
