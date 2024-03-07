import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../../assets';
import Chart from '../../assets/dashboard/chart.svg';
import HistoryRow from '../../components/Dashboard/HistoryRow';
import PackageCard from '../../components/Dashboard/PackageCard';
import DashboardEmptyContainer from '../../components/empty/DashboardEmptyContainer';

const imageUrls = {
  Assets: images.assets,
  'Real Estate': images.estate,
  Crypto: images.crypto,
  Forex: images.forex,
  Cannabis: images.cannabis,
};

const colors = ['#6B5F6B', '#33FF57', '#5733FF']; // Add more colors as needed

const DashboardHome = () => {
  const { data, isLoading } = useSWR('/plans/categories/');
  const { data: history, isLoading: historyLoading } = useSWR('plans/history');

  const navigate = useNavigate();
  console.log(data);
  return (
    <div className="space-y-3 h-full no-scrollbar overflow-auto p-5">
      <div className="w-full flex xl:flex-row flex-col gap-8">
        <div className="border rounded-sm bg-[#0C0000] border-white border-opacity-40 xl:w-3/5 w-full h-72 p-5 pl-16 flex flex-col space-y-8">
          <span className="text-[#868383] text-lg">Current Balance</span>
          
          <div className="flex flex-col space-y-8 relative">
            <div className="flex items-center space-x-4">
              <span className="text-white text-5xl font-extrabold">
                $ 1,474.91
              </span>

              <div className=" shadow-xl   shadow-[#8E0789]/50 flex items-center space-x-2 p-2 px-8 font-bold rounded-md shadow-[#8E0789] bg-[#8E0789]">
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
        <div className="border  flex flex-col justify-center bg-[#0C0000] items-center pb-10 border-white border-opacity-40  flex-1">
          <img src={Chart} alt="" className="w-44 h-44" />
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
          {history?.length === 0 ? (
            <>
              <DashboardEmptyContainer
                message={'Your investment history is empty'}
              />
            </>
          ) : (
            <>
              <div className="w-full space-y-1">
                <div className="flex justify-between px-10 py-2 bg-[#924E8F]">
                  <span>Name</span>
                  <span className="pr-12">Detail</span>
                  <span className="pr-12">Date</span>
                </div>
                <div className="flex flex-col space-y-1">
                  {history?.slice(0, 3).map((item, idx) => (
                    <HistoryRow
                      key={idx}
                      item={item}
                      idx={idx}
                      colors={colors}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
