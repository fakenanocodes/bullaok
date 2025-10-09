import React,{ useEffect, useMemo, useState } from 'react';
import useSWR, { mutate } from 'swr';
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS, plugins} from 'chart.js/auto'
import DashBoardHistory from '../DashBoardHistory';
import { useNavigate } from 'react-router-dom';

const IndividualRetirementAccount = () => {
  const { data: user } = useSWR(`/user/`);

  
  const isMobileWidth = window.innerWidth < 640;

  useEffect(() => {
    mutate();
  },[user])

  const availableBalanceUser = useMemo(
    () => user?.profile,
    [user]
  );

  const totalBalance = Number(availableBalanceUser?.available_balance) + Number(availableBalanceUser?.ira_balance);

  const remainingBalance = Number(availableBalanceUser?.available_balance);
  const retirementBalance = Number(availableBalanceUser?.ira_balance);

  const retirementData = [
    {
      title: 'Total Balance',
      amount: `$ ${totalBalance || 0.00}`,
    },
    {
      title: 'Remaining Balance',
      amount: `$ ${remainingBalance || 0.00}`,
      percentage: `${((remainingBalance / totalBalance) * 100).toFixed(2)}%`,
    },
    {
      title: 'Retirement Balance',
      amount: `$ ${retirementBalance || 0.00}`,
      percentage: `${((retirementBalance / totalBalance) * 100).toFixed(2)}%`,
    },
  ];

  const doughnutData = [
    {
      title: 'Remaining Balance',
      amount: Number(availableBalanceUser?.available_balance),
      color: '#f324ec',
    },
    {
      title: 'Retirement Balance',
      amount: Number(availableBalanceUser?.ira_balance),
      color: '#0e0c6d',
    },
  ];
  const [doughnut,setDoughnut] = useState({
    datasets: [{
      data: doughnutData.map(data => data.amount),
      backgroundColor: doughnutData.map(data => data.color),
      borderWidth:0,
    }]
  })
  const [option,setOptions] = useState({
    responsive:true,
    maintainAspectRatio: true,
    rotation: -90,
    circumference: 180,
    cutoutPercentage: 70,
    style: {
      width: '150px'
    },
    legend: {
      display: false,
      position: 'bottom'
    }
  })
  return (
    <section className=" h-full px-6 font-poppins">
      <div className="flex gap-10 items-center justify-between px-5  my-6 flex-col sm:flex-row  ">
        <article>
          <h2 className="font-semibold text-white ">
            Individual Retirement Account (IRA)
            <p className=" text-[#A6A6A6]">
              Estimate your retirement savings and track your progress towards
              your financial goal
            </p>
          </h2>
        </article>
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
        <div className="flex justify-between items-center pb-5">
          <h4>Activity</h4>
          <button className=" w-[57px] h-[20px] rounded-md border-[0.75px] border-[#8C89B480] text-[#AEABD8]  px-2 text-sm">
            Month
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center relative h-fit py-3 md:px-10 overflow-hidden">
            <div className='w-fit h-fit flex flex-col items-center pb-4 justify-center transform translate-y-[-20%] md:translate-y-[-10%]relative'>
              {
                user?.profile && (
                  <div className='w-[12rem] h-[9.5rem] md:w-[12rem] md:h-44'>
                <Doughnut data={doughnut} options={option} className='h-full'/> 
              </div>
                )
              }
              <div className='flex justify-between w-full absolute bottom-0 -translate-x-[10%] md:-translate-x-[5%]'>
                <div  className='flex flex-col justify-center items-center'>
                  <div className='flex items-center flex-col justify-center mt-5'>
                    <p className='w-[10px] h-[10px] bg-[#f324ec] rounded-[50%]'></p>
                    <p className='font-[300] text-[13px]'>{retirementData[1]?.title?.split(" ")[0]}</p>
                  </div>
                  <p className='font-[500] text-[13px]'>{retirementData[1].percentage}</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className='flex items-center flex-col justify-center mt-5'>
                    <p className='w-[10px] h-[10px] bg-[#0e0c6d] rounded-[50%]'></p>
                    <p className='font-[300] text-[13px]'>{retirementData[2]?.title?.split(" ")[0]}</p>
                  </div>
                  <p className='font-[500] text-[13px]'>{retirementData[2].percentage}</p>
                </div>
              </div>

             </div>
        </div>
      </div>
      <div className=" bg-[#000000] p-4  rounded-[12px] mt-4">
        <article className="flex justify-between text-white text-[12px] sm:text-lg">
          <h4>Transaction History</h4>
        </article>

        <table className="table-auto my-4">
          <thead className="relative text-[#FFB803] text-[10px] sm:text-[16px] left-0 sm:left-[40px]">
            <tr>
              <th>Description</th>
              {!isMobileWidth && <th>Type</th>}
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <DashBoardHistory slice={7} isFilter/>
        </table>
      </div>
    </section>
  );
};

export default IndividualRetirementAccount;
