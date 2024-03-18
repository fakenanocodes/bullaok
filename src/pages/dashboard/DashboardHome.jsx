import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { MdFiberManualRecord } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../../assets';
import BtcCoinWidget from '../../components/Dashboard/BtcCoinWidget';
import CryptoCharts from '../../components/Dashboard/CryptoCharts';
import EthCoinWidget from '../../components/Dashboard/EthCoinWidget';
import HistoryRow from '../../components/Dashboard/HistoryRow';
import LiteCoinWidget from '../../components/Dashboard/LiteCoinWIdget';
import InvestmentPlanCard from '../../components/cards/InvestmentPlanCard';
import DashboardEmptyContainer from '../../components/empty/DashboardEmptyContainer';
import useCurrencyFormatter from '../../hooks/useCurrencyFormatter';
import { setUserKyc } from '../../store/reducers/transact_reducer';
import CoinBlocksMarquee from '../../components/widget/CoinBlocksMarquee';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  legend: {
    position: 'right', // This will position the legend on the right side of the chart
    display: 'flex',
    labels: {
      boxWidth: 10, // This will set the width of the box that wraps the label text
      fontSize: 12, // This will set the font size of the label text
      padding: 10, // This will set the padding around the label text
    },
  },
};

const imageUrls = {
  Assets: images.assets,
  'Real Estate': images.estate,
  Crypto: images.crypto,
  Forex: images.forex,
  Cannabis: images.cannabis,
};

const colors = ['#6B5F6B', '#33FF57', '#5733FF']; // Add more colors as needed
const navOptions = ['Withdraw', 'Deposit', 'Transfer'];

const DashboardHome = () => {
  const { data, isLoading } = useSWR('/plans/all');
  const { data: user } = useSWR('/user/');
  const { data: history, isLoading: historyLoading } = useSWR('plans/history');
  const { data: chartDatas } = useSWR(
    'plans/get-user-investment-amount-by-category/'
  );

  const chartData = {
    datasets: [
      {
        data: chartDatas?.map((item) => item?.total_investment_amount),
        backgroundColor: ['#6699FC', '#F324EC', '#0E0C6D'],
      },
    ],
  };

  const [activeOption, setActiveOption] = useState(null);
  const dispatch = useDispatch();

  const isChartDataAvailable = chartDatas && chartDatas.length === 0;

  const navigate = useNavigate();
  console.log(user);
  const [showAmount, setShowAmount] = useState(true);
  const { data: userKyc } = useSWR('/kyc/');
  dispatch(setUserKyc(userKyc));

  const handleVisibilityToggle = () => {
    setShowAmount(!showAmount);
  };
  const formattedAmount = useCurrencyFormatter(
    user?.profile?.available_balance
  );
  const formattedBookBalance = useCurrencyFormatter(
    user?.profile?.book_balance
  );

  const colors = [
    '#6699FC',
    '#F324EC',
    '#0E0C6D',
    '#FF5733',
    '#33FF57',
    '#5733FF',
    '#FFC249',
  ];

  return (
    <div className="space-y-3 h-full no-scrollbar overflow-auto p-5">
      <div className="flex space-x-3 items-center justify-center w-full xl:hidden lg:hidden md:hidden py-7 text-[#41073F] font-semibold">
        {navOptions?.map((option, index) => (
          <span
            key={index}
            className={` cursor-pointer ${
              activeOption === index ? 'border-white p-3 rounded-lg border' : ''
            }`}
            onClick={() => {
              setActiveOption(index);
              navigate(`/dashboard/${option.toLowerCase()}`);
            }}
          >
            <p className="bg-white px-6 rounded-[4px] py-1">{option}</p>
          </span>
        ))}
      </div>
      <div className="w-full flex xl:flex-row flex-col gap-8">
        <div className="border xl:rounded-sm rounded-[40px] bg-[#0C0000] border-white border-opacity-40 xl:w-3/5 w-full xl:h-86 p-5 xl:pl-16  flex flex-col xl:space-y-8 ">
          <div className="flex items-center gap-4">
            <span className="text-gray-300 text-lg">Current Balance</span>
            <div
              className="cursor-pointer text-2xl"
              onClick={handleVisibilityToggle}
            >
              {showAmount ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </div>
          </div>
          <div className="flex flex-col xl:space-y-8 space-y-1 relative">
            <div className="flex items-center space-x-4">
              <input
                type={showAmount ? 'text' : 'password'}
                value={formattedAmount ? formattedAmount : 0.0}
                className="text-white xl:text-5xl  text-3xl w-full font-extrabold border-none bg-transparent focus:outline-none"
                readOnly
              />
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-[#52B570] text-xl">
                {user?.profile?.live_profit}
              </span>
              <span className="font-bold -top-2 ml-4 bg-transparent rounded-md border border-white border-opacity-20 shadow-xl drop-shadow-xl p-1 px-2 text-xs">
                live profit
              </span>
            </div>
            <div className="flex  justify-start w-full flex-col ">
              <span className="text-gray-300 text-lg">Book Balance</span>
              <span className="font-bold  bg-transparent  shadow-xl drop-shadow-xl  text-xl">
                {formattedBookBalance}
              </span>
            </div>
          </div>
        </div>
        <div className="border  flex flex-col justify-center space-y-5 bg-[#0C0000] items-center pb-10 border-white border-opacity-40  flex-1">
          {!isChartDataAvailable ? (
            <>
              <div style={{ width: '150px', height: '150px' }}>
                <Doughnut data={chartData} option={options} />
              </div>
              <div className="flex space-x-2">
                {chartDatas?.map((item, index) => (
                  <div key={index} className="flex flex-col xl:space-x-2">
                    <span className="flex items-center gap-1">
                      <MdFiberManualRecord style={{ color: colors[index] }} />
                      <span>{item?.category_name}</span>
                    </span>
                    <span className="text-[#868383]">
                      {Number(item?.total_investment_amount).toLocaleString(
                        'en-US',
                        {
                          style: 'currency',
                          currency: 'USD', // Change to your desired currency
                        }
                      )}{' '}
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div>
              <DashboardEmptyContainer message={'No Data Available'} />
            </div>
          )}
        </div>
      </div>
      <div className="grid xl:grid-cols-3 grid-cols-1  w-full ">
        <div className="col-span-2 bg-[#fff]/70">
          <CryptoCharts />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <EthCoinWidget />
        </div>
      </div>
      <div className="flex">
        <CoinBlocksMarquee />
      </div>
      <div className="space-y-3">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-end">
            <span
              className="text-[#F5C249] cursor-pointer"
              onClick={() => {
                navigate('/dashboard/investment/history');
              }}
            >
              View all History
            </span>
          </div>
          {history?.length === 0 ? (
            <>
              <DashboardEmptyContainer
                message={'Your investment history is empty'}
              />
            </>
          ) : (
            <>
              <div className=" space-y-1 text-white">
                <TableContainer>
                  <Table
                    sx={{ minWidth: 650, color: 'white' }}
                    aria-label="simple table"
                  >
                    <TableHead sx={{ background: '#924E8F', color: 'white' }}>
                      <TableRow>
                        <TableCell sx={{ color: 'white' }}>Name</TableCell>
                        <TableCell align="left" sx={{ color: 'white' }}>
                          Details
                        </TableCell>
                        <TableCell align="center" sx={{ color: 'white' }}>
                          Date
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody sx={{ mt: 4 }}>
                      {history?.slice(0, 3)?.map((row, idx) => (
                        <HistoryRow
                          key={idx}
                          row={row}
                          idx={idx}
                          colors={colors}
                        />
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
