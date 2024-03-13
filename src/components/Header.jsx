import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';
import EmailIcon from './utils/icons/EmailIcon';
import HomePageIcon from './utils/icons/HomePageIcon.png';
// import HomePageIcon from './utils/icons/HomePageIcon';
import { Cookies } from 'react-cookie';
import BluetoothIcon from './utils/icons/BluetoothIcon';
import PhoneIcon from './utils/icons/PhoneIcon';
import DropDownMenu from './utils/reusables/DropDownMenu';

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

  return (
    <div className="w-full flex justify-between items-center py-5 px-5 lg:px-10 xl:px-20 bg-[#41073F] shadow-md fixed z-40 top-0 left-0">
      <div
        onClick={() => navigate('/')}
        className="font-semibold text-white z-40 cursor-pointer "
      >
        <img src={HomePageIcon} className="w-14 bg-white py-1" />
      </div>
      <div className="flex items-center gap-5">
        <p
          onClick={() => {
            scrollToTop();
            navigate('/');
          }}
          className="font-semibold text-white text-sm cursor-pointer"
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
      <div className="flex items-center gap-7">
        <div onClick={() => navigate('/history')} className="cursor-pointer">
          <BluetoothIcon />
        </div>
        <div onClick={() => navigate('/about')} className="cursor-pointer">
          <PhoneIcon />
        </div>
        <div onClick={() => navigate('/about')} className="cursor-pointer">
          <EmailIcon />
        </div>
        {/* <div className="cursor-pointer">
          <ProfileIcon />
        </div> */}
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
    </div>
  );
};

export default Header;
