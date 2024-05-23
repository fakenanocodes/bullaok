import React,{ useState } from 'react';
import useSWR from 'swr';
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS, plugins} from 'chart.js/auto'
import DashBoardHistory from '../DashBoardHistory';
import { useNavigate } from 'react-router-dom';

const IndividualRetirementAccount = () => {
  const navigate = useNavigate();
  const { data: user } = useSWR(`/user/deposit/`);
  console.log(user)
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

  // data for the doughnuts
  const doughnutData = [
    {
      title: 'Saving balance',
      amount: 2474.91,
      percentage: '55%',
      color: '#f324ec',
    },
    {
      title: 'REtirement balance',
      amount: 1274.91,
      percentage: '25%',
      color: '#0e0c6d',
    },
  ];
  const [doughnut,setDoughnut] = useState({
    datasets: [{
      data: doughnutData.map(data => data.amount),
      backgroundColor: doughnutData.map(data => data.color),
      borderWidth:0,
      // boxShadow: '2 2 yellow',
    }]
  })
  const [option,setOption] = useState({
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
        <div className="flex justify-between items-center pb-5">
          <h4>Activity</h4>
          <button className=" w-[57px] h-[20px] rounded-md border-[0.75px] border-[#8C89B480] text-[#AEABD8]  px-2 text-sm">
            Month
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center relative h-fit py-3 md:px-10 overflow-hidden">
            <div className='w-fit h-fit flex flex-col items-center pb-4 justify-center transform translate-y-[-20%] md:translate-y-[-10%]relative'>
              <div className='w-[12rem] h-[9.5rem] md:w-[12rem] md:h-44'>
                <Doughnut data={doughnut} options={option} className='h-full'/> 
              </div>

              <div className='flex justify-between w-full absolute bottom-0'>
                {/* {doughnutData.map((obj,index)=>{
                  return (<div key={index}>
                    <div className='flex gap-2 items-center'>
                      <p className={`w-[10px] h-[10px] bg-[${obj.color}] rounded-[50%]`}></p>
                      <p className='font-[300] text-[13px]'>{obj.title}</p>
                    </div>
                    <p className='font-[500] text-[13px]'>{obj.percentage}</p>
                  </div>)
                })} */}
                <div>
                  <div className='flex gap-2 items-center'>
                    <p className='w-[10px] h-[10px] bg-[#f324ec] rounded-[50%]'></p>
                    <p className='font-[300] text-[13px]'>Savings</p>
                  </div>
                  <p className='font-[500] text-[13px]'>55%</p>
                </div>
                <div>
                  <div className='flex gap-2 items-center'>
                    <p className='w-[10px] h-[10px] bg-[#0e0c6d] rounded-[50%]'></p>
                    <p className='font-[300] text-[13px]'>Savings</p>
                  </div>
                  <p className='font-[500] text-[13px]'>25%</p>
                </div>
              </div>
              {/* The percentage at th middle */}
              <span className='absolute text-white font-[600] top-[60%] transform translate-x-[-40%] translate-y-[-40%] left-[40%] md:left-[50%] md:translate-x-[-50%]'>75%</span>
            </div>
            <button className="  w-full sm:w-[40%] h-[47px] rounded-md border-[0.75px] border-[#8C89B480] text-[#AEABD8]  px-2 text-sm">
              View all activity
            </button>
        </div>
      </div>
      <div className=" bg-[#000000] p-4  rounded-[12px] mt-4">
        <article className="flex justify-between text-white text-[12px] sm:text-lg">
          <h4>Transaction History</h4>
          <button
            className="  w-[92px] sm:w-[184px] h-[30px] sm:h-[52px] rounded-md border border-[#FFB803] text-[#FFB803] hover:bg-[#FFB803] hover:text-white  text-[12px] sm:text-sm "
            onClick={() => {
              // setActiveOption(0);
              navigate(`/dashboard/history`);
            }}
          >
            More
          </button>
        </article>

        <table className="table-auto my-4">
          <thead className="relative text-[#FFB803] text-[10px] sm:text-[16px] left-0 sm:left-[40px]">
            <tr>
              <th>Description</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <DashBoardHistory/>
        </table>
      </div>
    </section>
  );
};

export default IndividualRetirementAccount;
