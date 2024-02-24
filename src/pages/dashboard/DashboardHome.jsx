import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Chart from '../../assets/dashboard/chart.svg';

const DashboardHome = () => {
  return (
    <div className="text-white">
      <div className="w-full flex gap-8">
        <div className="border rounded-sm bg-[#0C0000] border-white border-opacity-40 w-3/5 h-72 p-5 pl-16 flex flex-col space-y-8">
          <span className="text-[#868383] text-lg">Current Balance</span>
          <div className="flex flex-col space-y-8 relative">
            <div className="flex items-center space-x-4">
              <span className="text-white text-5xl font-extrabold">
                $ 1,474.91
              </span>

              <div className=" flex items-center space-x-2 p-2 px-8 font-bold rounded-md shadow-[#8E0789] bg-[#8E0789]">
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
    </div>
  );
};

export default DashboardHome;
