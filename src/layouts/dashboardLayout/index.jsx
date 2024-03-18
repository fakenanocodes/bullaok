import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { Cookies } from 'react-cookie';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import logo from '../../assets/dashboard/logo.svg';
import HomeIcon from '../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../assets/icons/dashboard/PlantIcon';
import TransactionIcon from '../../assets/icons/dashboard/TransactionIcon';
import LogoutIcon from '../../components/utils/icons/LogoutIcon';
import useAuthentication from '../../hooks/useAuthentication';
import DashboardSidebar from './components/Sidebar';

const options = ['Withdraw', 'Deposit', 'Transfer'];
const icons = [
  { icon: <HomeIcon />, name: 'Home', path: '' },
  { icon: <InvestmentIcon />, name: 'KYC', path: 'kyc' },
  {
    icon: <PlantIcon />,
    name: 'Investment Plans',
    path: 'plan',
  },
  {
    icon: <TransactionIcon />,
    name: 'Transactions',
    path: 'investment/running',
  },
  { icon: <LogoutIcon />, name: 'Logout' },
];
const DashboardLayout = () => {
  const cookie = new Cookies();
  const { data } = useSWR('user/');
  const profile = data?.profile;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);

  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const { isLoggedIn, isLoading } = useAuthentication();
  if (isLoading) {
    return (
      <div className="flex justify-center ">
        <CircularProgress color="secondary" thickness={10} size={18} />
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; //Create a prompt here
  }
  const Api = 'https://django-bulloak-finance-production.up.railway.app';

  const logoutOption = () => {
    navigate('/');
    cookie.remove(`bk_access`);
    cookie.remove(`bk_user`);
    window.location.reload();
  };

  const icons = [
    { icon: <HomeIcon />, name: 'Home', path: '' },
    {
      icon: <InvestmentIcon />,
      name: 'Card Application',
      path: 'card-application',
    },
    {
      icon: <PlantIcon />,
      name: 'Investment Plans',
      path: 'plan',
    },
    {
      icon: <TransactionIcon />,
      name: 'Running Investment',
      path: 'investment/running',
    },
    { icon: <LogoutIcon />, name: 'Logout' },
  ];
  return (
    <div className="relative bg-custom-bg bg-opacity-20 bg-cover bg-center bg-no-repeat min-h-screen">
      {/** Layout */}
      <div className="text-white  lg:flex lg:flex-row flex flex-col lg:mr-10 w-full bg-opacity-95 min-h-screen">
        <div className="lg:w-1/12 lg:p-5 lg:flex-col flex relative ">
          {/** Mobile Header */}
          <div className="lg:hidden bg-white w-full py-4 left-0 flex justify-between items-center px-5">
            <img src={logo} alt="" className="bg-white p-2 w-14 h-14" />
            <button onClick={toggleMenu}>
              <MenuIcon className="text-black" fontSize="large" />
            </button>
          </div>
          <div
            onClick={() => navigate('/')}
            className="pt-4 hidden lg:flex cursor-pointer"
          >
            <img src={logo} alt="" className="bg-white p-2 w-14 h-14" />
          </div>
          <DashboardSidebar />
        </div>
        <div className="lg:flex-1 flex-col lg:space-y-4 ">
          <div className="lg:p-5 hidden lg:flex">
            <div className="flex w-full p-3 pr-10 space-x-24 rounded-[30px] bg-black bg-opacity-[34%] justify-end items-center">
              <div className="flex space-x-3 items-center text-[#41073F] font-semibold">
                {options?.map((option, index) => (
                  <span
                    key={index}
                    className={` cursor-pointer ${
                      activeOption === index
                        ? 'border-white p-3 rounded-lg border'
                        : ''
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
              <img
                src={Api + profile?.image}
                alt=""
                className="w-[70px] h-[70px] rounded-[50%]  cursor-pointer"
                onClick={() => navigate('/dashboard/profile')}
              />
            </div>
          </div>
          <div className="lg:mx-7 h-[100vh] no-scrollbar lg:h-[80vh] relative overflow-auto bg-[#000]/60  ">
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
                  {icons?.map((item, idx) => (
                    <>
                      {item.name === 'Logout' ? (
                        <div
                          onClick={logoutOption}
                          className="flex space-x-4 items-center hover:bg-white hover:text-[#575757] p-2"
                        >
                          {item?.icon}
                          <span className="text-lg font-semibold ">
                            {item?.name}
                          </span>
                        </div>
                      ) : (
                        <Link to={item?.path} key={idx} className="text-white">
                          <div className="flex space-x-4 items-center hover:bg-white hover:text-[#575757] p-2">
                            {item?.icon}
                            <span className="text-lg font-semibold ">
                              {item?.name}
                            </span>
                          </div>
                        </Link>
                      )}
                    </>
                  ))}
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
