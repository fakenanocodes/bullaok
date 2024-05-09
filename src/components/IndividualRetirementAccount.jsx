import React from 'react';

const IndividualRetirementAccount = () => {
  const retirementData = [
    {
      title: 'Total Balance',
      amount: '$ 0.00',
    },
    {
      title: 'Savings Balance',
      amount: '$ 0.00',
    },
    {
      title: 'Retirement Balance',
      amount: '$ 0.00',
    },
  ];
  return (
    <section className=" h-full px-6 font-poppins">
      <div className="flex gap-5  my-6 flex-col sm:flex-row  ">
        <article>
          <h2 className="font-semibold text-white ">
            Individual Retirement Account (IRA)
            <p className=" text-[#A6A6A6]">
              Estimate your retirement savings and track your progress towards
              your financial goal
            </p>
          </h2>
        </article>
        <div className="">
          <article className=" flex flex-col sm:flex-row  gap-4 font-semibold text-sm text-white">
            <button className=" w-full sm:w-[184px] h-[52px] rounded-md border border-[#8E0789] hover:bg-[#8E07894D] ">
              Withdraw
            </button>
            <button className="text-white bg-[#8E0789]  w-full sm:w-[184px] h-[52px] rounded-md text-sm  ">
              Deposit
            </button>
          </article>
        </div>
      </div>
      <div className="flex  justify-between flex-wrap gap-4 my-4">
        {retirementData.map((data, index) => (
          <article
            key={index}
            className="text-white bg-[#000000] px-4 rounded-[9.48px] h-[200px] flex-grow"
          >
            <h4 className="opacity-[61%] font-medium text-sm py-4">
              {data.title}
            </h4>
            <h1 className="font-extrabold">{data.amount}</h1>
          </article>
        ))}
      </div>
      <div className="bg-[#000000] w-full sm:w-[67%] rounded-2xl p-4 my-4 h-[300px]">
        <article className="flex justify-between items-center pb-10">
          <h4>Activity</h4>
          <button className=" w-[57px] h-[20px] rounded-md border-[0.75px] border-[#8C89B480] text-[#AEABD8]  px-2 text-sm">
            Month
          </button>
        </article>
        <article className="flex flex-col sm:flex-row justify-between items-center">
          <h1>CHARTS</h1>
          <button className="  w-full sm:w-[40%] h-[47px] rounded-md border-[0.75px] border-[#8C89B480] text-[#AEABD8]  px-2 text-sm ">
            View all activity
          </button>
        </article>
      </div>
      <div className="w-full bg-[#000000] p-4  rounded-[12px]">
        <article className="flex justify-between text-white">
          <h4>Transaction History</h4>

          <button className=" w-[184px] h-[52px] rounded-md border border-[#FFB803] text-[#FFB803] hover:bg-[#FFB803] hover:text-white ">
            More
          </button>
        </article>
        <table className="my-6 table-auto ">
          <thead className="text-[#FFB803]">
            <tr className="">
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr className="">
              <td>Deposit</td>
              <td>Deposit</td>
              <td>$ 0.00</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default IndividualRetirementAccount;
