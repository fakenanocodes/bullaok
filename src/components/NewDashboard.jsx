import React from 'react';
import dashBoard from '../assets/dashBoard.png';
import table_icon from '../assets/table_icon.png';
import { useState } from 'react';
import {Bar,Doughnut,Pie} from 'react-chartjs-2'
import {Chart as ChartJS, plugins} from 'chart.js/auto'
// import plugin from 'tailwindcss';

const  NewDashboard = () => {
  const accountAnalyticsData = [
    {
      title: 'Total Balance',
      amount: 2474.91,
      percentage: '50%',
      color: '#FFB803',
    },
    {
      title: 'Trading Balance',
      amount: 1274.91,
      percentage: '30%',
      color: '#F324EC',
    },
    {
      title: 'Avaliable Balance',
      amount: 1174.91,
      percentage: '20%',
      color: '#0E0C6D',
    },
  ];
  const [doughnut,setDoughnut] = useState({
    // labels: accountAnalyticsData.map(data => data.title),
    datasets: [{
      data: accountAnalyticsData.map(data => data.amount),
      backgroundColor: accountAnalyticsData.map(data => data.color),
      borderWidth:0,
      // boxShadow: '2 2 yellow',
    }]
  })
  // const tr
  
  const transactionHistoryData = [
    {
      description: 'From main account',
      Withdrawal: 456,
      Transfer: 132,
      Deposit: 732,
      date: 'Jan',
    },
    {
      description: 'alfredjosh@gmail.com',
      Withdrawal: 326,
      Transfer: 986,
      Deposit: 657,
      date: 'Feb',
    },
    {
      description: 'fredrickleo@gmail.com',
      Withdrawal: 856,
      Transfer: 620,
      Deposit: 724,
      date: 'March',
    },
    {
      description: 'From main account',
      Withdrawal: 264,
      Transfer: 132,
      Deposit: 465,
      date: 'April',
    },
    {
      description: 'From main account',
      Withdrawal: 456,
      Transfer: 132,
      Deposit: 732,
      date: 'May',
    },
    {
      description: 'alfredjosh@gmail.com',
      Withdrawal: 326,
      Transfer: 986,
      Deposit: 657,
      date: 'June',
    },
    {
      description: 'fredrickleo@gmail.com',
      Withdrawal: 856,
      Transfer: 620,
      Deposit: 724,
      date: 'July',
    },
    {
      description: 'From main account',
      Withdrawal: 264,
      Transfer: 132,
      Deposit: 465,
      date: 'Aug',
    },
    {
      description: 'From main account',
      Withdrawal: 456,
      Transfer: 132,
      Deposit: 732,
      date: 'Sep',
    },
    {
      description: 'alfredjosh@gmail.com',
      Withdrawal: 326,
      Transfer: 986,
      Deposit: 657,
      date: 'Oct',
    },
    {
      description: 'fredrickleo@gmail.com',
      Withdrawal: 856,
      Transfer: 620,
      Deposit: 724,
      date: 'Nov',
    },
    {
      description: 'From main account',
      Withdrawal: 264,
      Transfer: 132,
      Deposit: 465,
      date: 'Dec',
    },
  ];

  const [barChart, setBarChart] = useState({
    labels: transactionHistoryData.map((data) => data.date),
    datasets: [
      {
        label: "Withdrawal",
        data: transactionHistoryData.map((data) => data.Withdrawal),
        backgroundColor: '#F324EC',
        borderRadius:10,
        hoverOffset: 25,
      },
      {
        label: "Deposit",
        data: transactionHistoryData.map((data) => data.Deposit),
        backgroundColor:'#FFB803',
        borderRadius:10,
        hoverOffset: 25,
      },
      {
        label: "Transfer",
        data: transactionHistoryData.map((data) => data.Transfer),
        backgroundColor: '#0E0C6D',
        borderRadius:10,
        hoverOffset: 25,
      },
    ],
  });
  const [option,setOptions] = useState({
    plugins:{
      legend:{
        display: false
      }
    },
    scales:{
      y:{
        grid:{
          color: 'white',
          borderDash: [5,5],
        }
      },
      x:{
        grid:{
          display: false
        }
      }
    },
  })
  ChartJS.defaults.line='white'
  ChartJS.defaults.color= 'white'
  return (
    <section className="">
      <article>
        <h2 className="font-semibold text-[25px] pb-2">Dashboard</h2>
        <h5>Welcome Back, John Doe</h5>
        <p className="text-sm text-[#A6A6A6]">
          Here’s what’s happening on your account.
        </p>
      </article>
      <div className="my-4 grid grid-cols-3 gap-6">
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Total Balance
          </p>
          <h2 className="font-extrabold text-[25px] flex items-center gap-5 h-[40px] ">
            $2,474.91
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center">
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
          <h4 className="text-[#47A663] flex gap-4 items-center">
            + $301.93 <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Total Balance
          </p>
          <h2 className="font-extrabold text-[25px] flex items-center gap-5 h-[40px] ">
            $1,274.91
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center">
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
          <h4 className="text-[#47A663] flex gap-4 items-center">
            + $301.93 <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Total Balance
          </p>
          <h2 className="font-extrabold text-[25px] flex items-center gap-5 h-[40px] ">
            $1,174.91
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center">
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
          <h4 className="text-[#F42424] flex gap-4 items-center">
            + $301.93 <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>
      </div>
      <div className="bg-[#000000] rounded-[10px]">
        <h4 className="pt-6 pl-4"> Account Analytics</h4>
        <div className="my-4 grid grid-cols-4   h-[180px] place-content-center">
          {accountAnalyticsData.map((data, index) => (
            <article key={index} className="px-10 py-2 rounded-[10px]">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-[20px] relative">
                <span
                  className={`inline-block w-[16px] h-[16px] bg-[${data.color}] rounded-[50%] absolute left-[-25px] top-2  `}
                ></span>
                {data.title}
              </p>
              <h2 className="font-bold text-[18px] flex items-center gap-5 h-[40px] ">
                {data.amount}
              </h2>
              <h4 className="text-[#4A4A4A] flex gap-4 items-center">
                {data.percentage}
              </h4>
            </article>
          ))}
          <div className='flex justify-center items-center -translate-y-[15%]  w-full'>
            <Doughnut data={doughnut}/>
          </div>
        </div>
      </div>
      <div className="gridClass ">
        <aside className="bg-[#000000] px-4 py-2 rounded-[10px]">
          <table className="w-full">
            <tbody>
              <tr className="flex justify-between ">
                <td className=" not_affected">Transaction Analytics</td>
                <td className="relative text-[13px] not_affected">
                  <span
                    className={`inline-block w-[12px] h-[12px] bg-[#F324EC] rounded-[50%] absolute left-[-15px] top-4  `}
                  ></span>
                  Withdrawal
                </td>
                <td className="relative text-[13px] not_affected ">
                  <span
                    className={`inline-block w-[12px] h-[12px] bg-[#0E0C6D] rounded-[50%] absolute left-[-15px] top-4   `}
                  ></span>
                  Deposit
                </td>
                <td className="relative text-[13px] not_affected">
                  <span
                    className={`inline-block w-[12px] h-[12px] bg-[#FFB803] rounded-[50%] absolute left-[-15px] top-4 `}
                  ></span>
                  Transfer
                </td>

                <td className="not_affected">
                  <select className="text-white border-[0.96px] border-[#FFFFFF] rounded-[9.55px] bg-transparent text-[12px]">
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
          <Bar data={barChart} options={option}/>
        </aside>
        <aside className="bg-[#000000] px-4 py-2 rounded-[10px]">
          <article className="flex justify-between">
            <h4 className=" text-white text-sm">Investment Plans</h4>
            <button className=" text-sm text-[#FFB803]">More</button>
          </article>
          <h1 className="text-[25px] text-white my-4 font-extrabold">CHARTS</h1>
        </aside>
      </div>
      <div className=" bg-[#000000] p-4  rounded-[12px] mt-4">
        <article className="flex justify-between text-white">
          <h4>Transaction History</h4>

          <button className=" w-[184px] h-[52px] rounded-md border border-[#FFB803] text-[#FFB803] hover:bg-[#FFB803] hover:text-white text-sm ">
            More
          </button>
        </article>

        <table class="table-auto my-4">
          <thead className="text-[#FFB803]">
            <tr>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistoryData.map((data, index) => (
              <tr className="relative mt-4 text-[12px]">
                <td>
                  <img
                    src={table_icon}
                    alt="table_icon"
                    className="w-[20px] h-[20px] inline-block absolute left-[20px] top-3"
                  />
                  {data.description}
                  <small className="block">{data.date}</small>
                </td>
                <td className="relative">
                  <span
                    className={` absolute  left-4 w-3 h-3 rounded-[50%]  ${data.type === 'Withdrawal' ? 'bg-[#F324EC]' : `${data.type === 'Deposit' ? 'bg-[#0E0C6D]' : 'bg-[#FFB803]'}`}`}
                  >
                    {' '}
                  </span>
                  {data.type}
                </td>
                <td>{data.amount}</td>
                <td
                  className={`${data.status === 'Completed' ? 'text-[#50E01E]' : `${data.status === 'Pending' ? 'text-[#0978F2]' : 'text-[#E91616]'}`}`}
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
