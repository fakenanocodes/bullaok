import { Outlet } from 'react-router-dom';
import bgImage from '../../assets/bg_img.png';
import logo from '../../assets/dashboard/logo.svg';
import profilepic from '../../assets/dashboard/profilepic.png';

const DashboardLayout = () => {
  return (
    <div className="relative h-screen">
      {/* Background */}
      <div className="bg-[#30022ECC] absolute -z-10 bg-opacity-20 top-0 bottom-0">
        <img
          src={bgImage}
          className="w-screen h-screen object-fill opacity-5"
          alt=""
        />
      </div>

      {/** Layout */}
      <div className="text-white z-30 h-full flex space-x-5 mr-10">
        <div className="bg-blue-500 w-1/12 p-5 flex flex-col relative">
          <div className="">
            <img src={logo} alt="" className="bg-white p-2 w-14 h-14" />
          </div>
          <div className="w-1/12 absolute top-[50%] bg-blue-500 flex flex-col text-xs">
            <span>Home</span>
            <span>History</span>
            <span>Seed</span>
            <span>Transaction</span>
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
          <div className=" bg-yellow-400 h-[80vh]">Content</div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
