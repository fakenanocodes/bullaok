import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/dashboard/logo.svg';
import profilepic from '../../assets/dashboard/profilepic.png';
import HomeIcon from '../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../assets/icons/dashboard/PlantIcon';
import DashboardSidebar from './components/Sidebar';

const DashboardLayout = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative bg-custom-bg bg-opacity-20 bg-cover bg-center bg-no-repeat min-h-screen">
      {/** Layout */}
      <div className="text-white bg-[#30022ECC] lg:flex lg:flex-row flex flex-col lg:mr-10 w-full bg-opacity-95 min-h-screen">
        <div className="lg:w-1/12 lg:p-5 lg:flex-col flex relative ">
          {/** Mobile Header */}
          <div className="lg:hidden bg-white w-full py-4 left-0 flex justify-between items-center px-5">
            <img src={logo} alt="" className="bg-white p-2 w-14 h-14" />
            <button onClick={toggleMenu}>
              <MenuIcon className="text-black" fontSize="large" />
            </button>
          </div>
          <div className="pt-4 hidden lg:flex">
            <img src={logo} alt="" className="bg-white p-2 w-14 h-14" />
          </div>
          <DashboardSidebar />
        </div>
        <div className="lg:flex-1 flex-col lg:space-y-4 ">
          <div className="lg:p-5 hidden lg:flex">
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
          <div className="lg:mx-7 h-[100vh] lg:h-[80vh] relative overflow-auto lg:bg-black bg-opacity-[62%] ">
            <Outlet />
          </div>
        </div>
        <div>
          <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={toggleMenu}
          >
            <div
              className={`absolute inset-y-0 right-0 w-80 bg-[#0C0000] shadow-lg transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex flex-col p-8 space-y-4 ">
                <button onClick={toggleMenu} className="flex justify-end">
                  <CloseIcon fontSize="large" />
                </button>
                <div className="flex space-y-8 flex-col">
                  <div className="flex space-x-4 items-center hover:bg-white hover:text-[#575757] p-2">
                    <HomeIcon />
                    <span className="text-lg font-semibold ">Home</span>
                  </div>
                  <div className="flex space-x-4 items-center  hover:bg-white hover:text-[#575757] p-2">
                    <InvestmentIcon />
                    <span className="text-lg font-semibold">
                      Investment Packages
                    </span>
                  </div>
                  <div className="flex space-x-4 items-center  hover:bg-white hover:text-[#575757] p-2">
                    <PlantIcon />
                    <span className="text-lg font-semibold">
                      Investment Plans
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
