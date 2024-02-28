import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Chart from '../../assets/dashboard/chart.svg';
import assetImage from '../../assets/dashboard/investment/assets.png';
import cryptoImage from '../../assets/dashboard/investment/crypto.png';
import forexImage from '../../assets/dashboard/investment/forex.png';
import realEstateImage from '../../assets/dashboard/investment/realestate.png';
import PackageCard from '../../components/dashboard/PackageCard';
import useMedia from '../../hooks/useMedia';

const investments = [
  {
    label: 'Assets',
    imgUrl: assetImage,
  },
  {
    label: 'Crypto',
    imgUrl: realEstateImage,
  },
  {
    label: 'Crypto',
    imgUrl: cryptoImage,
  },
  {
    label: 'Forex',
    imgUrl: forexImage,
  },
];

const DashboardHome = () => {
  const isSmallScreen = useMedia('(max-width: 600px)');

  return (
    <div className="lg:space-y-3 h-full overflow-auto lg:p-5">
      <div className="w-full flex lg:flex lg:flex-row flex-col lg:gap-8">
        <div className="border-0 lg:border rounded-md bg-[#0C0000] border-white border-opacity-20 p-5  w-full lg:w-3/5 lg:h-72 lg:p-5 lg:pl-16 space-y-4">
          <div className="lg:hidden flex justify-center items-center space-x-3">
            <button className="bg-white px-4 text-[#41073F] font-semibold p-2 rounded-md">
              Withdraw
            </button>
            <button className="bg-white px-4 text-[#41073F] font-semibold p-2 rounded-md">
              Deposit
            </button>
            <button className="bg-white px-4 text-[#41073F] font-semibold p-2 rounded-md">
              Transfer
            </button>
          </div>
          <div className="flex flex-col lg:space-y-8 space-y-2 border lg:border-0 p-3 rounded-lg">
            <span className="text-[#868383] lg:text-lg font-bold">
              Current Balance
            </span>
            <div className="flex flex-col lg:space-y-8 relative space-y-3">
              <div className="flex items-center space-x-4">
                <span className="text-white lg:text-2xl text-4xl font-extrabold">
                  $ 1,474.91
                </span>
                <div className="hidden lg:flex shadow-lg items-center space-x-2 p-2 px-8 font-bold rounded-md shadow-[#8E0789] bg-[#8E0789]">
                  <ArrowDropUpIcon className="text-[#52B570] bg-white rounded-full w-32 h-32" />
                  <span>25.69%</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 justify-between ">
                <div className="flex space-x-4">
                  <span className="font-bold text-[#52B570] text-xl">
                    + $ 301.93
                  </span>
                  <span className="font-bold -top-2 ml-4 bg-transparent rounded-md border border-white border-opacity-20 shadow-xl drop-shadow-xl p-1 px-2 text-xs">
                    24h
                  </span>
                </div>
                <div className="lg:hidden flex shadow-md items-center space-x-2 p-1 px-2 font-bold rounded-md shadow-[#8E0789] bg-[#8E0789]">
                  <ArrowDropUpIcon className="text-[#52B570] bg-white rounded-full w-8 h-8 " />
                  <span className="text-xs font-bold">25.69%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:border  rounded-md  flex lg:flex-col justify-center  bg-[#0C0000] bg-opacity-50  items-center pb-10 lg:border-white border-0 lg:border-opacity-20  flex-1 flex-row lg:pt-0 pt-10">
          <div className="justify-center items-start lg:hidden flex flex-col space-y-5">
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
          <img src={Chart} alt="" className="lg:w-44 lg:h-44 w-52 h-52" />
          <div className="space-x-2 lg:flex hidden">
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
      <div className="space-y-3 pt-4 lg:pt-0 bg-[#0C0000] bg-opacity-[80%]">
        <div className="w-full flex px-3 justify-between">
          <span className="font-semibold">All Investment</span>
          <span className="text-[#F5C249]">See all</span>
        </div>
        <div className="flex justify-between gap-4 px-2 lg:px-0">
          {isSmallScreen
            ? investments
                ?.slice(0, 3)
                .map((investment, index) => (
                  <PackageCard
                    label={investment?.label}
                    imgUrl={investment?.imgUrl}
                    key={index}
                  />
                ))
            : investments.map((investment) => (
                // eslint-disable-next-line react/jsx-key
                <PackageCard
                  label={investment?.label}
                  imgUrl={investment?.imgUrl}
                />
              ))}
        </div>
        <div className="flex flex-col w-full space-y-2 bg-[#0C0000] bg-opacity-[80%] px-2">
          <div className="flex justify-end">
            <span className="text-[#F5C249]">View all History</span>
          </div>
          <table className="w-full border-separate border-spacing-y-3">
            <thead className="w-full">
              <tr className="flex  lg:justify-between space-x-3 lg:space-x-0 lg:px-10 py-2 bg-[#924E8F]">
                <th className="w-[100px] lg:text-lg text-xs">Name</th>
                <th className="w-[130px] lg:text-lg text-xs">Detail</th>
                <th className="text-xs lg:text-lg">Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="flex space-y-1 flex-col">
              <tr className="flex lg:justify-between lg:px-10 p-2 py-4 bg-[#BB9FB3] bg-opacity-[38%]">
                <td className="w-[100px] lg:w-[150px]">
                  <span className="flex items-center gap-2 text-xs lg:text-lg">
                    <span className="bg-white w-4 h-4 flex justify-center items-center rounded-full">
                      <FiberManualRecordIcon className="text-[#6B5F6B] rounded-full p-1" />
                    </span>
                    Real estate
                  </span>
                </td>
                <td className="text-center text-xs lg:text-lg lg:w-fit w-[130px]">
                  <span>You invested $578,8933 on real estate plan</span>
                </td>
                <td className="text-center text-xs lg:text-lg">
                  <span>January 25th...</span>
                </td>
                <td className="text-xs lg:text-lg">
                  <span>15:03PM</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
