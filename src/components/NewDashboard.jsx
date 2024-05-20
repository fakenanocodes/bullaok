import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto';
import { useEffect, useMemo, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import dashBoard from '../assets/dashBoard.png';
import table_icon from '../assets/table_icon.png';

const NewDashboard = () => {
  const navigate = useNavigate();
  const { data: transaction } = useSWR('/transaction/');
  const { data: balances } = useSWR('/user/balances/');

  const accountAnalyticsData = useMemo(
    () => [
      {
        title: 'Total Balance',
        amount: balances?.total_balance,
        percentage: '50%',
        color: '#FFB803',
      },
      {
        title: 'Trading Balance',
        amount: balances?.trading_balance,
        percentage: '30%',
        color: '#F324EC',
      },
      {
        title: 'Avaliable Balance',
        amount: balances?.available_balance,
        percentage: '20%',
        color: '#0E0C6D',
      },
    ],
    [balances]
  );
  const doughnut = {
    // labels: accountAnalyticsData.map(data => data.title),
    datasets: [
      {
        data: accountAnalyticsData.map((data) => data.amount),
        backgroundColor: accountAnalyticsData.map((data) => data.color),
        borderWidth: 0,
        // boxShadow: '2 2 yellow',
      },
    ],
  }
  const [userProfile, setUserProfile] = useState({});
  console.log('USER PROFILE', userProfile);

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

  const [barChart] = useState({
    labels: transactionHistoryData.map((data) => data.date),
    datasets: [
      {
        label: 'Withdrawal',
        data: transactionHistoryData.map((data) => data.Withdrawal),
        backgroundColor: '#F324EC',
        borderRadius: 10,
        borderWidth: 2,
      },
      {
        label: 'Deposit',
        data: transactionHistoryData.map((data) => data.Deposit),
        backgroundColor: '#FFB803',
        borderRadius: 10,
        borderWidth: 2,
      },
      {
        label: 'Transfer',
        data: transactionHistoryData.map((data) => data.Transfer),
        backgroundColor: '#0E0C6D',
        borderRadius: 10,
        borderWidth: 2,
      },
    ],
  });
  const [option] = useState({
    responsive: true,
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'white',
          borderDash: [5, 5],
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  });
  ChartJS.defaults.line = 'white';
  ChartJS.defaults.color = 'white';

  window.addEventListener('resize', () => {
    doughnut.resize();
    barChart.resize();
  });
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/user/');
      console.log('RESPONSE', response);

      setUserProfile(response.data.profile);
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

  window.addEventListener('resize', () => {
    doughnut.resize();
    barChart.resize();
  });

  return (
    <section className="p-4">
      <article>
        <h2 className="font-semibold text-[25px] pb-2">Dashboard</h2>
        <h5>Welcome Back, John Doe</h5>
        <p className="text-sm text-[#A6A6A6]">
          Here’s what’s happening on your account.
        </p>
      </article>
      <div className="my-4 grid  grid-cols-1 md:grid-cols-3 gap-8">
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Total Balance
          </p>
          <h2 className="font-extrabold  text-sm sm:text-[25px] flex items-center gap-5 h-[40px]  justify-between ">
            ${balances?.total_balance ? balances.total_balance : 0}
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center">
              <span className="">
                <img
                  src={dashBoard}
                  alt="dashBoard"
                  className="w-[10px] h-[10px] inline"
                />
              </span>
              {balances && balances?.total_balance / 1000}%{' '}
              {/* To be changed */}
            </button>
          </h2>
          {/* <h4 className="text-[#47A663] flex gap-4 items-center text-[10px] sm:text-[16px]">
            + $301.93 <s pan className="text-[10px] text-white">24h</s>
          </h4> */}
        </article>
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Trading Balance
          </p>
          <h2 className="font-extrabold text-sm sm:text-[25px]  flex items-center gap-5 h-[40px]  justify-between ">
            ${balances?.trading_balance ? balances.trading_balance : 0}
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center">
              <span className="">
                <img
                  src={dashBoard}
                  alt="dashBoard"
                  className="w-[10px] h-[10px] inline"
                />
              </span>
              {balances && balances?.trading_balance / 1000}%
            </button>
          </h2>
          {/* <h4 className="text-[#47A663] flex gap-4 items-center text-[10px] sm:text-[16px]">
            + $301.93 <span className="text-[10px] text-white">24h</span>
          </h4> */}
        </article>
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Avaliable Balance
          </p>
          <h2 className="font-extrabold text-sm sm:text-[25px] flex items-center gap-5 h-[40px] justify-between ">
            ${balances?.available_balance ? balances?.available_balance : 0}
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center">
              <span className="">
                <img
                  src={dashBoard}
                  alt="dashBoard"
                  className="w-[10px] h-[10px] inline"
                />
              </span>
              {balances && balances?.available_balance / 1000}%
            </button>
          </h2>
          {/* <h4 className="text-[#F42424] flex gap-4 items-center text-[10px] sm:text-[16px]">
            + $301.93 <span className="text-[10px] text-white">24h</span>
          </h4> */}
        </article>
      </div>
      <div className="bg-[#000000] rounded-[10px] px-5 lg:my-4 space-y-10 lg:pb-6">
        <h4 className="pt-5 pl-4"> Account Analytics</h4>
        <div className="gap-3 flex items-center justify-center">
          <div className="lg:flex-1 lg:flex-row justify-between flex xs:flex-col">
            <article className="px-10 py-2 rounded-[10px] text-[12px] sm:text-sm">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm sm:text-[20px] relative">
                <span
                  className={`inline-block  w-[8px] sm:w-[16px] h-[8px] sm:h-[16px]  rounded-[50%] absolute left-[-25px] top-2  `}
                ></span>
                Total Balance
              </p>
              <h2 className="font-bold  text-[12px] sm:text-[18px] flex items-center gap-5 h-[40px] ">
                ${balances?.total_balance ? balances.total_balance : 0}
              </h2>
              <h4 className="text-[#4A4A4A] flex gap-4 items-center">
                {/* {data.percentage} */}
              </h4>
            </article>
            <article className="px-10 py-2 rounded-[10px] text-[12px] sm:text-sm">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm sm:text-[20px] relative">
                <span
                  className={`inline-block  w-[8px] sm:w-[16px] h-[8px] sm:h-[16px]  rounded-[50%] absolute left-[-25px] top-2  `}
                ></span>
                Trading Balance
              </p>
              <h2 className="font-bold  text-[12px] sm:text-[18px] flex items-center gap-5 h-[40px] ">
                ${balances?.trading_balance ? balances.trading_balance : 0}
              </h2>
              <h4 className="text-[#4A4A4A] flex gap-4 items-center">
                {/* {data.percentage} */}
              </h4>
            </article>
            <article className="px-10 py-2 rounded-[10px] text-[12px] sm:text-sm">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm sm:text-[20px] relative">
                <span
                  className={`inline-block  w-[8px] sm:w-[16px] h-[8px] sm:h-[16px]  rounded-[50%] absolute left-[-25px] top-2  `}
                ></span>
                Available Balance
              </p>
              <h2 className="font-bold  text-[12px] sm:text-[18px] flex items-center gap-5 h-[40px] ">
                ${balances?.available_balance ? balances.available_balance : 0}
              </h2>
              <h4 className="text-[#4A4A4A] flex gap-4 items-center">
                {/* {data.percentage} */}
              </h4>
            </article>
          </div>
          <div className="flex justify-center items-center -translate-y-[15%] w-[150px]   ">
            <Doughnut className="" data={doughnut} />
          </div>
        </div>
      </div>
      <div className="gridClass">
        <div className="bg-[#000000] px-4 py-2 rounded-[10px] lg:w-full w-[99%] mt-4 lg:mt-0">
          <table className="w-full">
            <tbody>
              <tr className="flex justify-evenly items-center gap-2 ">
                <td className=" not_affected  text-[10px] sm:text-sm hidden lg:flex">
                  Transaction Analytics
                </td>
                <td className="relative not_affected text-[10px] sm:text-sm">
                  <span
                    className={`inline-block w-[6px] sm:w-[12px] h-[6px] sm:h-[12px] bg-[#F324EC] rounded-[50%] absolute left-[-15px] top-4  `}
                  ></span>
                  Withdrawal
                </td>
                <td className="relative not_affected  text-[10px] sm:text-sm">
                  <span
                    className={`inline-block w-[6px] sm:w-[12px] h-[6px] sm:h-[12px] bg-[#0E0C6D] rounded-[50%] absolute left-[-15px] top-4   `}
                  ></span>
                  Deposit
                </td>
                <td className="relative not_affected text-[10px] sm:text-sm">
                  <span
                    className={`inline-block w-[6px] sm:w-[12px] h-[6px] sm:h-[12px] bg-[#FFB803] rounded-[50%] absolute left-[-15px] top-4 `}
                  ></span>
                  Transfer
                </td>

                <td className="not_affected">
                  <select className="text-white border-[0.96px] border-[#FFFFFF] rounded-[9.55px] bg-transparent text-[10px] sm:text-sm">
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
          <Bar data={barChart} options={option} />
        </div>
        <div className="bg-[#000000] px-4 py-2 rounded-[10px] flex flex-col gap-12">
          <article className="flex justify-between">
            <h4 className=" text-white text-sm">Investment Plans</h4>
            <button className=" text-sm text-[#FFB803]">More</button>
          </article>
          <article className="flex flex-col gap-10 pb-5">
            <div className="flex gap-[15px]">
              <p className="bg-[#9b9bef] text-[#0a07ff] text-[15px] font-[600] w-[40px] h-[35px] rounded-[50%] flex justify-center items-center whitespace-nowrap">
                A
              </p>
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="w-fit flex flex-col">
                    <p className="font-bold text-[14px]">Assets</p>
                    <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                      20% interest rate
                    </span>
                  </div>
                  <div className="w-fit flex flex-col">
                    <p className="font-bold text-[14px]">$4,000.00</p>
                    <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                      April 2023
                    </span>
                  </div>
                </div>
                <div className="w-full h-[8px] rounded-[5px] bg-[#9b9bef]">
                  <div className="h-full rounded-[5px] w-[20%] bg-[purple]"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-[15px]">
              <p className="bg-[#989650] text-[#585500] text-[15px] font-[600] w-[40px] h-[35px] rounded-[50%] flex justify-center items-center">
                R
              </p>
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="w-fit flex flex-col">
                    <p className="font-bold text-[14px]">Real Estate</p>
                    <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                      50% interest rate
                    </span>
                  </div>
                  <div className="w-fit flex flex-col">
                    <p className="font-bold text-[14px]">$4,000.00</p>
                    <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                      June 2023
                    </span>
                  </div>
                </div>
                <div className="w-full h-[8px] rounded-[5px] bg-[#989650]">
                  <div className="h-full rounded-[5px] w-[50%] bg-[purple]"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-[15px]">
              <p className="bg-[#9feaa6] text-[#07320b] text-[15px] font-[600] w-[40px] h-[35px] rounded-[50%] flex justify-center items-center">
                C
              </p>
              <div className="w-full flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="w-fit flex flex-col">
                    <p className="font-bold text-[14px]">Crypto</p>
                    <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                      15% interest rate
                    </span>
                  </div>
                  <div className="w-fit flex flex-col">
                    <p className="font-bold text-[14px]">$2,000.00</p>
                    <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                      July 2023
                    </span>
                  </div>
                </div>
                <div className="w-full h-[8px] rounded-[5px] bg-[#9feaa6]">
                  <div className="h-full rounded-[5px] w-[15%] bg-[purple]"></div>
                </div>
              </div>
            </div>
          </article>
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
          <tbody>
            {transaction?.map((data, index) => (
              <tr
                key={index}
                className="relative mt-4 text-[12px]  left-0 sm:left-[40px]"
              >
                <td>
                  <img
                    src={table_icon}
                    alt="table_icon"
                    className="w-[20px] h-[20px] sm:inline-block absolute left-[-30px] top-3 hidden sm:block"
                  />
                  <div className="flex flex-col">
                    <span className="hidden sm:block">{data.description}</span>
                    <span>12.57pm</span>
                    {/* <small className="block">{data.date}</small> */}
                  </div>
                </td>
                <td className="relative">
                  <span
                    className={` absolute  left-4 w-3 h-3 rounded-[50%]   ${data.transaction_type === 'withdrawal' ? 'bg-[#F324EC]' : data.transaction_type === 'deposit' ? 'bg-[#0E0C6D]' : 'bg-[#FFB803]'}`}
                  >
                    {''}
                  </span>
                  {data.type}
                </td>
                <td>{parseFloat(data.usdt_amount)?.toFixed(2)}</td>
                <td
                  className={
                    data.verified === true
                      ? 'text-[#50E01E]'
                      : data.verified === false
                        ? 'text-[orangered] font-semibold'
                        : 'text-[#0978F2]'
                  }
                >
                  {data.verified === true
                    ? 'Completed'
                    : data.verified === false
                      ? 'Failed'
                      : 'Pending...'}
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
