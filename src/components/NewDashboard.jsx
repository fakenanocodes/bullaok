import React from 'react';
import dashBoard from '../assets/dashBoard.png';
import table_icon from '../assets/table_icon.png';

const NewDashboard = () => {
  const accountAnalyticsData = [
    {
      title: 'Total Balance',
      amount: '$ 2,474.91',
      percentage: '50%',
      color: '#FFB803',
    },
    {
      title: 'Trading Balance',
      amount: '$ 1,274.91',
      percentage: '30%',
      color: '#F324EC',
    },
    {
      title: 'Avaliable Balance',
      amount: '$ 1,174.91',
      percentage: '20%',
      color: '#0E0C6D',
    },
  ];
  const transactionHistoryData = [
    {
      description: 'From main account',
      type: 'Withdrawal',
      amount: '-$132',
      status: 'Completed',
      date: '25 April at 09:30 am',
    },
    {
      description: 'alfredjosh@gmail.com',
      type: 'Deposit',
      amount: '+$986',
      status: 'Pending',
      date: '25 April at 09:30 am',
    },
    {
      description: 'fredrickleo@gmail.com',
      type: 'Transfer',
      amount: '+$620',
      status: 'Failed',
      date: '25 April at 14:30',
    },
    {
      description: 'From main account',
      type: 'Withdrawal',
      amount: '-$132',
      status: 'Completed',
      date: '25 April at 16:30',
    },
  ];
  const transactionAnalytics=[
    {
      title: 'Withdrawal',
     
      color: '#FFB803',
    },
    {
      title: 'Deposit',
     
      color: '#F324EC',
    },
    {
      title: 'Transfer',
      color: '#0E0C6D',
    },
  ]
  return (
    <section className="px-6 py-4 h-full no-scrollbar overflow-auto min-w-[450px]">
      <article className="font-poppins">
        <h2 className="font-semibold text-[25px] pb-2">Dashboard</h2>
        <h5>Welcome Back, John Doe</h5>
        <p className="text-sm text-[#A6A6A6]">
          Here’s what’s happening on your account.
        </p>
      </article>
      <div className="my-4 flex flex-wrap gap-6 font-poppins">
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px] flex-grow">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Total Balance
          </p>
          <h2 className="font-extrabold  text-sm sm:text-[25px] flex items-center gap-5 h-[40px] justify-between ">
            $2,474.91
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center custom_box-shadow font-[inter] inter-font">
              <span className="">
                <img
                  src={dashBoard}
                  alt="dashBoard"
                  className="w-[10px] h-[10px] inline"
                />
              </span>
              25.69%
            </button>
          </h2>
          <h4 className="text-[#47A663] flex gap-4 items-center text-[10px] sm:text-sm">
            + $301.93{' '}
            <span className="text-[10px] text-white inter-font inter-font">
              24h
            </span>
          </h4>
        </article>
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px] flex-grow">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Trading Balance
          </p>
          <h2 className="font-extrabold text-sm sm:text-[25px] flex items-center gap-6 h-[40px] justify-between ">
            $1,274.91
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center custom_box-shadow inter-font">
              <span className="">
                <img
                  src={dashBoard}
                  alt="dashBoard"
                  className="w-[10px] h-[10px] inline"
                />
              </span>
              25.69%
            </button>
          </h2>
          <h4 className="text-[#47A663] flex gap-4 items-center text-[10px] sm:text-sm">
            + $301.93 <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px] flex-grow">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Avaliable Balance
          </p>
          <h2 className="font-extrabold text-sm sm:text-[25px] flex items-center gap-5 h-[40px] justify-between ">
            $1,174.91
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center custom_box-shadow inter-font">
              <span className="">
                <img
                  src={dashBoard}
                  alt="dashBoard"
                  className="w-[10px] h-[10px] inline"
                />
              </span>
              25.69%
            </button>
          </h2>
          <h4 className="text-[#F42424] flex gap-4 items-center text-[10px] sm:text-sm">
            + $301.93{' '}
            <span className="text-[10px] text-white inter-font">24h</span>
          </h4>
        </article>
      </div>
      <div className="bg-[#000000] rounded-[10px] font-poppins">
        <h4 className="pt-6 pl-4"> Account Analytics</h4>
        <div className="my-4 grid grid-cols-1 sm:grid-cols-4  h-fit sm:h-[180px] place-content-center">
          {accountAnalyticsData.map((data, index) => (
            <article key={index} className="px-10 py-2 rounded-[10px]">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm sm:text-[20px] relative">
                <span
                  className={`inline-block w-[8px] sm:w-[16px] h-[8px] sm:h-[16px] bg-[${data.color}] rounded-[50%] absolute left-[-25px] top-2  `}
                ></span>
                {data.title}
              </p>
              <h2 className="font-bold text-sm sm:text-[18px] flex items-center gap-5 h-[40px] ">
                {data.amount}
              </h2>
              <h4 className="text-[#4A4A4A] flex gap-4 items-center text-sm sm:text-[16px]">
                {data.percentage}
              </h4>
            </article>
          ))}
          <h1 className="text-[25px] text-white">CHARTS</h1>
        </div>
      </div>
      <div className="gridClass font-poppins ">
        <aside className="bg-[#000000] px-4 py-2 rounded-[10px]">
          <table className="">
            <tbody>
              <tr className="">
                <td className="not_affected text-[10px] sm:text-sm">
                  Transaction Analytics
                </td>
                {transactionAnalytics.map((data, index) => (
                  <td className="relative not_affected text-[10px] sm:text-sm">
                    <span
                      className={`inline-block  w-[6px] sm:w-[12px] h-[6px] sm:h-[12px] bg-[${data.color}] rounded-[50%] absolute  left-[-10px] sm:left-[-15px]  top-8 sm:top-7 `}
                    ></span>
                    {data.title}
                  </td>
                ))}

                <td className="not_affected">
                  <select className="text-white border-[0.96px] border-[#FFFFFF] rounded-[9.55px] bg-transparent text-[10px] sm:text-sm jakarta-font">
                    <option value="2023" selected>
                      2023
                    </option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <h1 className="font-extrabold text-[30px]">CHARTS</h1>
        </aside>
        <aside className="bg-[#000000] px-4 py-2 rounded-[10px]">
          <article className="flex justify-between flex-wrap">
            <h4 className=" text-white  text-[11px] sm:text-sm">
              Investment Plans
            </h4>
            <button className=" text-[11px] sm:text-sm text-[#FFB803]">
              More
            </button>
          </article>
          <h1 className="text-[25px] text-white my-4 font-extrabold">CHARTS</h1>
        </aside>
      </div>
      <div className=" bg-[#000000] p-4  rounded-[12px] mt-4">
        <article className="flex justify-between text-white gap-4 text-[11px] sm:text-sm">
          <h4>Transaction History</h4>

          <button className=" w-[60px] sm:w-[184px]  h-[30px] sm:h-[52px] rounded-md border border-[#FFB803] text-[#FFB803] hover:bg-[#FFB803] hover:text-white ">
            More
          </button>
        </article>

        <table class="table-auto my-4 font-poppins">
          <thead className="text-[#FFB803] relative left-0 sm:left-[40px]">
            <tr className="text-[12px] sm:text-[16px]">
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="relative left-0 sm:left-[40px]">
            {transactionHistoryData.map((data, index) => (
              <tr className="relative mt-4  text-[10px] sm:text-sm">
                <td>
                  <img
                    src={table_icon}
                    alt="table_icon"
                    className="w-[20px] h-[20px] hidden sm:inline-block absolute left-[-20px] top-3"
                  />
                  {data.description}
                  <small className="block">{data.date}</small>
                </td>
                <td className="relative">
                  <span
                    className={` absolute  left-[-10px] w-3 h-3 rounded-[50%] top-[25px]  ${data.type === 'Withdrawal' ? 'bg-[#F324EC]' : `${data.type === 'Deposit' ? 'bg-[#0E0C6D]' : 'bg-[#FFB803]'}`}`}
                  >
                    {' '}
                  </span>
                  {data.type}
                </td>
                <td>{data.amount}</td>
                <td
                  className={` inter-font ${data.status === 'Completed' ? 'text-[#50E01E]' : `${data.status === 'Pending' ? 'text-[#0978F2]' : 'text-[#E91616]'}`}`}
                >
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default NewDashboard;
