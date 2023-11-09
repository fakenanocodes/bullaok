import { useNavigate } from 'react-router-dom';
import BluetoothIcon from './utils/icons/BluetoothIcon';
import DropdownIcon from './utils/icons/DropdownIcon';
import EmailIcon from './utils/icons/EmailIcon';
import PhoneIcon from './utils/icons/PhoneIcon';
import ProfileIcon from './utils/icons/ProfileIcon';
import DropDownMenu from './utils/reusables/DropDownMenu';

const navItems = [
  {
    title: 'Who We Are',
    list: [
      { name: 'History', route: '/history' },
      { name: 'About us', route: '/about' },
      { name: 'Team', route: '/team' },
    ],
  },
  {
    title: 'What We Do',
    list: [
      { name: 'We invest', route: '/what-we-invest' },
      { name: 'We educate', route: '/education' },
      { name: 'Smart advisor', route: '/smart-advisor' },
      { name: 'Recurring investment', route: '/recurring-investment' },
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
];

// bg-[#30022ECC]
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center py-5 px-5 lg:px-10 xl:px-20 bg-[#41073F] shadow-md fixed z-40 top-0 left-0">
      <p className="font-semibold text-white">Logo</p>
      <div className="flex items-center gap-5">
        <p
          onClick={() => navigate('/')}
          className="font-semibold text-white text-sm cursor-pointer"
        >
          Home
        </p>
        {navItems?.map((item, idx) => (
          <DropDownMenu key={idx} item={item} />
        ))}
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-semibold text-white text-sm">Investment</p>
          <DropdownIcon />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-semibold text-white text-sm">Hub</p>
          <DropdownIcon />
        </div>
      </div>
      <div className="flex items-center gap-7">
        <div className="cursor-pointer">
          <BluetoothIcon />
        </div>
        <div className="cursor-pointer">
          <PhoneIcon />
        </div>
        <div className="cursor-pointer">
          <EmailIcon />
        </div>
        <div className="cursor-pointer">
          <ProfileIcon />
        </div>
        <button className="border-2 border-white outline-none p-2 text-sm rounded-sm font-semibold text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
