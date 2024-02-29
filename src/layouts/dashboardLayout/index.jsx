import { Outlet } from 'react-router-dom';
import bgImage from '../../assets/bg_img.png';
import logo from '../../assets/dashboard/logo.svg';
import profilepic from '../../assets/dashboard/profilepic.png';
import HomeIcon from '../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../assets/icons/dashboard/PlantIcon';
import SettingsIcon from '../../assets/icons/dashboard/SettingsIcon';
import TransactionIcon from '../../assets/icons/dashboard/TransactionIcon';

const DashboardLayout = () => {
  return (
    <div className="relative h-screen">
      {/* Background */}
      <div className="bg-[#30022ECC] absolute -z-10 bg-opacity-20 top-0 bottom-0 right-0 left-0 w-full">
        <img
          src={bgImage}
          className="w-screen h-screen object-fill opacity-5"
          alt=""
        />
      </div>

      {/** Layout */}
      <div className="text-white z-30 h-full flex space-x-5 mr-10">
        <div className="w-1/12 p-5 flex flex-col relative">
          <div className="pt-4">
            <img src={logo} alt="" className="bg-white p-2 w-14 h-14" />
          </div>
          <div className="p-7 bg-black bg-opacity-[34%] absolute top-[30%] flex flex-col items-center space-y-5 justify-center border rounded-xl ">
            <HomeIcon className="shadow-[#B444B0] shadow-xl bg-transparent" />
            <InvestmentIcon />
            <PlantIcon />
            <TransactionIcon />
            <SettingsIcon />
          </div>
        </div>
        <div className=" flex-1 flex-col w-full space-y-4">
          <div className="flex p-5">
            <div className="flex w-full p-3 pr-10 space-x-24 rounded-[30px] bg-black bg-opacity-[34%] justify-end items-center">
              <div className="flex space-x-6 items-center text-[#41073F] font-semibold">
                <span className="bg-white px-6 rounded-[4px] py-1">
                  Withdraw
                </span>
                <span className="bg-white px-6 rounded-[4px] py-1">
                  Deposit
                </span>
                <span className="bg-white px-6 rounded-[4px] py-1">
                  Transfer
                </span>
              </div>
              <img
                src={profilepic}
                alt=""
                className="w-14 h-14 rounded-full object-contain"
              />
            </div>
          </div>

          <div className="mx-7 h-[84vh] overflow-auto no-scrollbar  bg-black bg-opacity-[62%] rounded-r-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
