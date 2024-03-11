import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../../assets';
import PackageCard from '../../components/Dashboard/PackageCard';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  datasets: [
    {
      data: [40, 50, 10],
      backgroundColor: ['#6699FC', '#F324EC', '#0E0C6D'],
    },
  ],
};

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

const DashboardHome = () => {
  const { data, isLoading } = useSWR('/plans/categories/');
  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="space-y-3 h-full no-scrollbar overflow-auto p-5">
      <div className="w-full flex gap-8">
        <div className="border rounded-sm bg-[#0C0000] border-white border-opacity-40 w-3/5 h-72 p-5 pl-16 flex flex-col space-y-8">
          <span className="text-[#868383] text-lg">Current Balance</span>
          <div className="flex flex-col space-y-8 relative">
            <div className="flex items-center space-x-4">
              <span className="text-white text-5xl font-extrabold">
                $ 1,474.91
              </span>

              <div className=" shadow-xl  flex items-center space-x-2 p-2 px-8 font-bold rounded-md shadow-[#8E0789] bg-[#8E0789]">
                <ArrowDropUpIcon className="text-[#52B570] bg-white rounded-full w-32 h-32" />
                <span>25.69%</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold text-[#52B570] text-xl">
                + $ 301.93
              </span>
              <span className="font-bold -top-2 ml-4 bg-transparent rounded-md border border-white border-opacity-20 shadow-xl drop-shadow-xl p-1 px-2 text-xs">
                24h
              </span>
            </div>
          </div>
        </div>
        <div className="border  flex flex-col justify-center space-y-5 bg-[#0C0000] items-center pb-10 border-white border-opacity-40  flex-1">
          <div style={{ width: '150px', height: '150px' }}>
            <Doughnut data={chartData} option={options} />
          </div>
          <div className="flex space-x-2">
            <div className="flex flex-col justify-center items-center">
              <span className="flex space-x-2">
                <FiberManualRecordIcon className="text-[#6699FC]" />
                <span>Crypto</span>
              </span>
              <span className="text-[#868383]">$7,886</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="flex space-x-2">
                <FiberManualRecordIcon className="text-[#F324EC]" />
                <span>Real estate</span>
              </span>
              <span className="text-[#868383]">$7,886</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="flex space-x-2">
                <FiberManualRecordIcon className="text-[#0E0C6D]" />
                <span>Cannabis</span>
              </span>
              <span className="text-[#868383]">$7,886</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="w-full flex px-3 justify-between">
          <span className="font-semibold">All Investment</span>
          <span
            className="text-[#F5C249] cursor-pointer"
            onClick={() => {
              navigate('/dashboard/investment/packages');
            }}
          >
            See all
          </span>
        </div>
        <div className="flex items-center gap-4">
          {data?.map((investmentPackage, index) => (
            <PackageCard
              id={investmentPackage.id}
              label={investmentPackage?.name}
              imgUrl={imageUrls[investmentPackage?.name]}
              key={index}
            />
          ))}
        </div>
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
          <div className="w-full space-y-1">
            <div className="flex justify-between px-10 py-2 bg-[#924E8F]">
              <span>Name</span>
              <span className="pr-12">Detail</span>
              <span className="pr-12">Date</span>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex justify-between px-10 py-4  bg-[#BB9FB3] bg-opacity-[38%]">
                <span className="flex items-center gap-2">
                  <span className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
                    <FiberManualRecordIcon className="text-[#6B5F6B] rounded-full" />
                  </span>
                  Real estate
                </span>
                <span>You invested $578,8933 on real estate plan</span>
                <span>January 25th... 15:03PM</span>
              </div>
              <div className="flex justify-between px-10 py-4 bg-[#BB9FB3] bg-opacity-[38%]">
                <span className="flex items-center gap-2">
                  <span className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
                    <FiberManualRecordIcon className="text-[#732220] rounded-full" />
                  </span>
                  Real estate
                </span>
                <span>You invested $578,8933 on real estate plan</span>
                <span>January 25th... 15:03PM</span>
              </div>
              <div className="flex justify-between px-10 py-4 bg-[#BB9FB3] bg-opacity-[38%]">
                <span className="flex items-center gap-2">
                  <span className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
                    <FiberManualRecordIcon className="text-[#FFB803] rounded-full" />
                  </span>
                  Real estate
                </span>
                <span>You invested $578,8933 on real estate plan</span>
                <span>January 25th... 15:03PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
