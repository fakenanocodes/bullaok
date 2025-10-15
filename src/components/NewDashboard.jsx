import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto';
import { useEffect, useMemo, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import dashBoard from '../assets/dashBoard.png';
import table_icon from '../assets/table_icon.png';
import DashBoardHistory from '../DashBoardHistory';
import { CgArrowTopRight } from "react-icons/cg";
import { Balance } from '@mui/icons-material';
import AssetModal from '../layouts/dashboardLayout/components/AssetModal';

const NewDashboard = () => {
  const navigate = useNavigate();
  const { data: transaction } = useSWR('/transaction/');
  const { data: balances } = useSWR('/user/balances/');
  const { data: profiles } = useSWR('/user/');
  const { data: investments, isLoading: isLoadingInvestments } = useSWR('/plan/investments/');
  const [isAssetModal, setIsAssetModal] = useState(true);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const investmentData = useMemo(() => {
    return investments?.data?.map((investment, index) => ({
      id: index + 1,
      type: investment?.investment_type,
      amount: investment?.total_amount,
      rate: investment?.total_interest_rate,
    }));
  }, [investments]);

  console.log('investments', investmentData);
  
  const selectAssetHandler = (asset) => {
    setSelectedAsset(asset);
    setIsAssetModal(true);
  }
 
  const accountAnalyticsData = useMemo(
    () => [
      {
        title: 'Total Balance',
        amount: balances?.total_balance + balances?.ira_balance,
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
  };
  const [userProfile, setUserProfile] = useState({});

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

  // window.addEventListener('resize', () => {
  //   doughnut.resize();
  //   barChart.resize();
  // });
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

  // window.addEventListener('resize', () => {
  //   doughnut.resize();
  //   barChart.resize();
  // });

  return (
    <section className="p-4">
      <article>
        <h2 className="font-semibold text-[25px] pb-2">Dashboard</h2>
        <h5 className='capitalize'>Welcome Back, {profiles?.profile?.full_name
        }</h5>
        <p className="text-sm text-[#A6A6A6]">
          Here’s what’s happening on your account.
        </p>
      </article>
      <div className="my-4 grid  grid-cols-1 md:grid-cols-4 gap-8">
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Total Balance
          </p>
          <h2 className="font-extrabold  text-sm sm:text-[25px] flex items-center gap-5 h-[40px]  justify-between ">
            ${(Number(balances?.total_balance) + Number(balances?.ira_balance)).toLocaleString('en-US') || 0}
            <button className="bg-[#8E0789] w-[100px] h-[40px] text-[10px] text-[#000000] rounded-[3.73px] flex gap-1 items-center justify-center">
              <span className="">
                <img
                  src={dashBoard}
                  alt="dashBoard"
                  className="w-[10px] h-[10px] inline"
                />
              </span>
              {balances && balances?.total_balance / 1000}%{' '}
            </button>
          </h2>
          <h4 className="text-[#47A663] flex gap-4 items-center text-[10px] sm:text-[16px]">
            + {balances?.avg_per}%{' '}
            <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>

        {/* Trading balance */}
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Trading Balance
          </p>
          <h2 className="font-extrabold text-sm sm:text-[25px]  flex items-center gap-5 h-[40px]  justify-between ">
            ${balances?.trading_balance ? balances.trading_balance.toLocaleString('en-US') : 0}
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
          <h4 className="text-[#47A663] flex gap-4 items-center text-[10px] sm:text-[16px]">
            + {balances?.avg_per}%{' '}
            <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>

        {/* live profit */}
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm capitalize">
            live profit
          </p>
          <h2 className="font-extrabold text-sm sm:text-[25px]  flex items-center gap-5 h-[40px]  justify-between ">
            ${balances?.live_profit ? balances?.live_profit.toLocaleString('en-US') : 0}
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
          <h4 className="text-[#47A663] flex gap-4 items-center text-[10px] sm:text-[16px]">
            + {balances?.avg_per}%{' '}
            <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>

        {/* available balance */}
        <article className="bg-[#000000CC] px-4 py-2 rounded-[10px]">
          <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm">
            Avaliable Balance
          </p>
          <h2 className="font-extrabold text-sm sm:text-[25px] flex items-center gap-5 h-[40px] justify-between ">
            ${balances?.available_balance ? balances?.available_balance.toLocaleString('en-US') : 0}
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
          <h4 className="text-[#F42424] flex gap-4 items-center text-[10px] sm:text-[16px]">
            + {balances?.avg_per}%
            <span className="text-[10px] text-white">24h</span>
          </h4>
        </article>
      </div>
      <div className="bg-[#000000] rounded-[10px] px-5 lg:my-4 space-y-10 lg:pb-6">
        <h4 className="pt-5 pl-4"> Account Analytics</h4>
        <div className="gap-3 flex flex-col md:flex-row items-center justify-center">
          <div className="grid grid-cols-2 lg:flex-1 border-b border-b-gray-300/30 mb-5 md:border-b-0 md:mb-0 md:flex-row justify-between md:flex xs:flex-col">
            <article className="px-10 py-2 rounded-[10px] text-[12px] sm:text-sm">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm sm:text-[20px] relative">
                Total Balance
              </p>
              <h2 className="font-bold  text-[12px] sm:text-[18px] flex items-center gap-5 h-[40px] ">
                ${(Number(balances?.total_balance) + Number(balances?.ira_balance)).toLocaleString('en-US') || 0}
              </h2>
              <h4 className="text-[#4A4A4A] flex gap-4 items-center">
                {/* {data.percentage} */}
              </h4>
            </article>

            {/* trading balance */}
            <article className="px-10 py-2 rounded-[10px] text-[12px] sm:text-sm">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm sm:text-[20px] relative">
                Trading Balance
              </p>
              <h2 className="font-bold  text-[12px] sm:text-[18px] flex items-center gap-5 h-[40px] ">
                ${balances?.trading_balance ? balances.trading_balance.toLocaleString('en-US') : 0}
              </h2>
              <h4 className="text-[#4A4A4A] flex gap-4 items-center">
                {/* {data.percentage} */}
              </h4>
            </article>

            {/* Live Profit */}
            <article className="px-10 py-2 rounded-[10px] text-[12px] sm:text-sm">
              <p className="font-medium text-[#FFFFFF] opacity-[61%] text-sm sm:text-[20px] relative">
                <span
                  className={`inline-block  w-[8px] sm:w-[16px] h-[8px] sm:h-[16px]  rounded-[50%] absolute left-[-25px] top-2 capitalize
                     `}
                ></span>
                Live Profit
              </p>
              <h2 className="font-bold  text-[12px] sm:text-[18px] flex items-center gap-5 h-[40px] ">
                ${balances?.live_profit ? balances?.live_profit.toLocaleString('en-US') : 0}
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
                ${balances?.available_balance ? balances.available_balance.toLocaleString('en-US') : 0}
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
          <article className="flex justify-center">
            <h4 className=" text-white text-sm text-center">Investment Plans</h4>
            {/* <button className=" text-sm text-[#FFB803]">More</button> */}
          </article>
          <article className="flex flex-col gap-10 pb-5">

            {
              isLoadingInvestments? (
                <div className='flex flex-col items-center justify-center gap-2'>
                  <p className="text-center text-gray-500">Loading...</p>
                </div>
              ) : investmentData?.length > 0 ? (
                investmentData?.map((investment) => (
                  <div
                    className="flex gap-[15px] items-center cursor-pointer relative shadow-[1px_1px_5px_rgba(128,0,128,0.7)] p-3"
                    key={investment?.id}
                    onClick={() => selectAssetHandler(investment?.type)}
                  >
                  <p className="bg-[#9b9bef] text-[#0a07ff] text-[15px] font-[600] w-[40px] h-[35px] rounded-[50%] flex justify-center items-center whitespace-nowrap">
                    {investment?.type?.charAt(0)}
                  </p>
                  <div className="w-full flex flex-col gap-3">
                    <div className="flex justify-between">
                      <div className="w-fit flex flex-col">
                        <p className="font-bold text-[14px]">{investment?.type}</p>
                        <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                          {investment?.rate?.toFixed(1)}% interest rate
                        </span>
                      </div>
                      <div className="w-fit flex flex-col">
                        <p className="font-bold text-[14px]">${investment?.amount?.toLocaleString()}</p>
                        <span className="text-[13px] text-[rgba(255,255,255,0.7)]">
                          April 2023
                        </span>
                      </div>
                    </div>
                    <div className="w-full h-[8px] rounded-[5px] bg-[#9b9bef]">
                      <div 
                        className="h-full rounded-[5px] bg-[rgb(128,0,128)]"
                        style={{ width: `${investment?.rate?.toFixed(1)}%` }}
                      ></div>
                    </div>
                  </div>
                  <CgArrowTopRight className='absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[rgba(255,255,0,0.7)]'/>
                </div>
              ))
              ) : (
                <div className='flex flex-col items-center justify-center gap-2'>
                  <p className="text-center text-gray-500">Ooops!!</p>
                  <p className="text-center text-gray-500">No Investment Plan Found</p>
                </div>
              )
            }
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
          <DashBoardHistory />
        </table>
      </div>
      <AssetModal
        isOpen={isAssetModal}
        onClose={setIsAssetModal}
        selectedAsset={selectedAsset}
        setSelectedAsset={setSelectedAsset}
      />    
    </section>
  );
};
export default NewDashboard;