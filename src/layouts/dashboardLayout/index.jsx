import { CloseOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { Cookies } from 'react-cookie';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import logo from '../../assets/dashboard/logo.svg';
import HomeIcon from '../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../assets/icons/dashboard/PlantIcon';
import TransactionIcon from '../../assets/icons/dashboard/TransactionIcon';
import NavigationModalTable from '../../components/Dashboard/NavigationModalTable';
import LogoutIcon from '../../components/utils/icons/LogoutIcon';
import useAuthentication from '../../hooks/useAuthentication';
import DashboardSidebar from './components/Sidebar';
import IraIcon from '../../assets/icons/dashboard/IraIcon';
import Profile from '../../assets/icons/dashboard/Profile';

let menus = [null, 'Make a', 'Pending', 'Completed', 'All'];

const options = ['Withdraw', 'Deposit', 'Transfer'];

const DashboardLayout = () => {
  const cookie = new Cookies();
  const { data } = useSWR('user/');
  const profile = data?.profile;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const [open, setOpen] = useState(false);
  const [currentNavigationMenu, setCurrentNavigationMenu] = useState(null);

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

  const handleNavigationMenu = (value) => {
    const valueArray = value?.split(',');

    // if () {
    //   menus = menus.filter((menu) => menu !== '');
    // }
    console.log(valueArray[0]);
    if (valueArray[0] === 'Make a') {
      navigate(`/dashboard/${valueArray[1].toLowerCase()}`);
    } else if (valueArray[0] !== '') {
      console.log(valueArray[0]);
      setOpen(true);
      setCurrentNavigationMenu(valueArray);
    }
  };

  if (!isLoggedIn) {
    return null; //Create a prompt here
  }
  const Api = 'https://django-bulloak-finance-production.up.railway.app';

  const logoutOption = () => {
    cookie.remove(`bk_access`);
    cookie.remove(`bk_user`);  
    navigate('/');
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
    {
      icon: <IraIcon />,
      name: 'IRA',
      path: 'ira',
    },
    {
      icon: <Profile />,
      name: 'Profile',
      path: '/dashboard/profile',
    },
    { icon: <LogoutIcon />, name: 'Logout' },
  ];
  
  const profileImage =
    profile?.image ===
    'https://django-bulloak-finance-production.up.railway.app/media/r.jpg'
      ? 'https://via.placeholder.com/300'
      : Api + profile?.image;
  // console.log(profileImage);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 600,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  const closeModal = () => {
    setOpen(false);
    setCurrentNavigationMenu(null);
  };

  return (
    <div className="relative overflow-hidden bg-custom-bg bg-opacity-20 bg-cover bg-center bg-no-repeat min-h-screen">
      {currentNavigationMenu && (
        <Modal
          open={open}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="font-poppins flex flex-col space-y-4">
              <div className="flex justify-between font-medium">
                {currentNavigationMenu[0]} {currentNavigationMenu[1]}
                <button onClick={closeModal}>
                  <CloseOutlined className="text-[#41073F] rounded-md shadow-lg" />
                </button>
              </div>
              <NavigationModalTable
                currentNavigationMenu={currentNavigationMenu}
              />
            </div>
          </Box>
        </Modal>
      )}

      {/** Layout */}
      <div className="text-white  lg:flex lg:flex-row flex flex-col lg:mr-10 w-full bg-opacity-95 min-h-screen">
        <div className="lg:w-1/12 lg:p-5 lg:flex-col flex relative ">
          {/** Mobile Header */}
          <div className="lg:hidden bg-white w-full py-4 left-0 flex justify-between items-center px-5">
            <img
              src={logo}
              alt=""
              className="bg-white p-2 w-14 h-14"
              onClick={() => navigate('/')}
            />
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
          <DashboardSidebar logout={logoutOption} />
        </div>
        <div className="lg:flex-1 flex-col lg:space-y-4 ">
          <div className="lg:p-5 flex lg:flex">
            <div className="flex lg:w-full px-1 p-3  sm:space-x-10 rounded-[30px] bg-black bg-opacity-[34%] sm:justify-end items-center">
              <div className=" flex gap-2 pr-2 items-center text-[#41073F] font-semibold">
                <span
                  className={` cursor-pointer ${
                    activeOption === 0
                      ? 'border-white p-3 rounded-lg border'
                      : ''
                  }`}
                  onClick={() => {
                    setActiveOption(0);
                    navigate(`/dashboard/history`);
                  }}
                >
                  <p className="bg-white px-3 sm:px-6 rounded-[4px] py-1 hidden sm:inline">
                    <span className='hidden sm:inline'>Transaction </span>History
                  </p>
                </span>
                {options?.map((option, index) => (
                  <select
                    key={index}
                    className="p-1 rounded-md w-[calc(100%/3)] text-[12px] sm:text-md sm:w-fit space-y-2"
                    defaultValue={JSON.stringify([menus[0], option])}
                    onChange={(e) => handleNavigationMenu(e.target.value)}
                  >
                    {menus?.map((menu, index) => (
                      <option
                        key={index}
                        className="py-2 font-poppins text-[10px]"
                        value={[menu, option]}
                      >
                        {menu} {''} {option}
                      </option>
                    ))}
                  </select>
                ))}

                
              </div>
          
              <div className="hidden sm:block pr-2">
                <Avatar
                  src={profileImage}
                  sx={{ height: 70, width: 70 }}
                  className="cursor-pointer"
                  onClick={() => navigate('/dashboard/profile')}
                />
              </div>
            </div>
          </div>
          <div className="lg:mx-7 h-[100vh] no-scrollbar lg:h-[80vh] relative overflow-auto bg-[#000]/60  rounded-xl my-3">
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
                <div className="flex space-y-0 flex-col">
                  {icons?.map((item, idx) => (
                    <>
                      {item.name === 'Logout' ? (
                        <div
                          onClick={()=>logoutOption()}
                          className="flex space-x-4 items-center cursor-pointer hover:bg-white hover:text-[#575757] p-2"
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
