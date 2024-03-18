import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';
import EmailIcon from './utils/icons/EmailIcon';
import HomePageIcon from './utils/icons/HomePageIcon.png';
// import HomePageIcon from './utils/icons/HomePageIcon';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Cookies } from 'react-cookie';
import BluetoothIcon from './utils/icons/BluetoothIcon';
import PhoneIcon from './utils/icons/PhoneIcon';
import DropDownMenu from './utils/reusables/DropDownMenu';
import MobileDropdown from './utils/reusables/MobileDropdown';

const navItems = [
  {
    title: 'Who We Are',
    list: [
      { name: 'About us', route: '/about' },
      { name: 'History', route: '/history' },
      { name: 'Team', route: '/team' },
    ],
  },
  {
    title: 'What We Do',
    list: [
      { name: 'We invest', route: '/services/what-we-invest' },
      { name: 'We educate', route: '/services/education' },
      { name: 'Forex', route: '/services/forex' },
      { name: 'Smart advisor', route: '/services/smart-advisor' },
      { name: 'Recurring investment', route: '/services/recurring-investment' },
    ],
  },
  {
    title: 'Trading',
    list: [
      { name: 'ETFs', route: '/etf' },
      { name: 'Stocks', route: '/stocks' },
      { name: 'OTC', route: '/otc-stock-trading' },
      { name: 'Margin Trading', route: '/margin-trading' },
      { name: 'Paper Trading', route: '/papertrading' },
    ],
  },
  {
    title: 'Investment',
    list: [
      { name: 'Invest', route: '/invest' },
      { name: 'Investment Packages', route: '/investment-packages' },
      { name: 'Recurring Investment', route: '/services/recurring-investment' },
      { name: 'IRA', route: '/ira' },
      { name: 'Fractional Shares', route: '/fractional-shares' },
      { name: 'Corporate Connect', route: '/corporate-connect' },
    ],
  },
  {
    title: 'Hub',
    list: [{ name: 'Learn', route: '/services/education' }],
  },
];

// bg-[#30022ECC]

const Header = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const userDetails = cookie.get('bk_user');
  console.log('USer', userDetails);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full flex justify-between items-center py-5 px-5 lg:px-10 xl:px-20 bg-[#41073F] shadow-md fixed z-40 top-0 left-0">
      <div
        onClick={() => navigate('/')}
        className="font-semibold text-white z-40 cursor-pointer "
      >
        <img
          onClick={() => {
            scrollToTop();
            navigate('/');
          }}
          src={HomePageIcon}
          className="w-14 bg-white py-1"
        />
      </div>
      <div className=" lg:flex md:hidden hidden items-center gap-5">
        <p
          onClick={() => {
            scrollToTop();
            navigate('/');
          }}
          className="font-semibold  text-white text-sm cursor-pointer"
        >
          Home
        </p>
        {navItems?.map((item, idx) => (
          <DropDownMenu key={idx} item={item} />
        ))}
        <p
          onClick={() => navigate('/')}
          // onClick={() => window.open('https://news.bulloak.org', '_blank')}
          className="font-semibold text-white text-sm cursor-pointer"
        >
          News
        </p>
      </div>
      <div className="xl:flex md:flex hidden items-center gap-7">
        <div onClick={() => navigate('/history')} className="cursor-pointer">
          <BluetoothIcon />
        </div>
        <div onClick={() => navigate('/about')} className="cursor-pointer">
          <PhoneIcon />
        </div>
        <div onClick={() => navigate('/about')} className="cursor-pointer">
          <EmailIcon />
        </div>

        <button
          onClick={() => {
            scrollToTop();
            userDetails ? navigate('/dashboard') : navigate('/login');
          }}
          className="border-2 border-white outline-none p-2 text-sm rounded-sm font-semibold text-white"
        >
          {userDetails ? 'Dashboard' : 'Get Started'}
        </button>
      </div>
      <button
        onClick={toggleMenu}
        className="xl:hidden lg:hidden cursor-pointer flex"
      >
        <MenuIcon className="text-white" fontSize="large" />
      </button>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        // onClick={toggleMenu}
      >
        <div
          className={`absolute inset-y-0 right-0 w-80 bg-[#0C0000] overflow-y-scroll min-h-[100vh] shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-8 space-y-4 ">
            <button onClick={toggleMenu} className="flex justify-end">
              <CloseIcon fontSize="large" className="text-white" />
            </button>
            {/* <button onClick={toggleMenu}>
                <MenuIcon className="text-black" fontSize="large" />
              </button> */}
            <div className="relative z-10 ">
              {navItems?.map((item, idx) => (
                <MobileDropdown
                  key={idx}
                  item={item}
                  userDetails={userDetails}
                />
              ))}

              <div className="flex mt-4 flex-wrap text-white items-center gap-7">
                <div
                  onClick={() => navigate('/history')}
                  className="cursor-pointer"
                >
                  <BluetoothIcon />
                </div>
                <div
                  onClick={() => navigate('/about')}
                  className="cursor-pointer"
                >
                  <PhoneIcon />
                </div>
                <div
                  onClick={() => navigate('/about')}
                  className="cursor-pointer"
                >
                  <EmailIcon />
                </div>
              </div>
              <button
                onClick={() => {
                  scrollToTop();
                  userDetails ? navigate('/dashboard') : navigate('/login');
                }}
                className="border-2 border-white mt-5 outline-none p-2 text-sm rounded-sm font-semibold text-white"
              >
                {userDetails ? 'Dashboard' : 'Get Started'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
