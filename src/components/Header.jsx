import BluetoothIcon from './utils/icons/BluetoothIcon';
import DropdownIcon from './utils/icons/DropdownIcon';
import EmailIcon from './utils/icons/EmailIcon';
import PhoneIcon from './utils/icons/PhoneIcon';
import ProfileIcon from './utils/icons/ProfileIcon';

// bg-[#30022ECC]
const Header = () => {
  return (
    <div className="w-full flex justify-between items-center py-5 px-5 lg:px-10 xl:px-20 bg-[#41073F] shadow-xl fixed top-0 left-0 z-50">
      <p className="font-semibold text-white">Logo</p>
      <div className="flex items-center gap-5">
        <p className="font-semibold text-white text-sm cursor-pointer">Home</p>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-semibold text-white text-sm">Who We Are</p>
          <DropdownIcon />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-semibold text-white text-sm">What We Do</p>
          <DropdownIcon />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <p className="font-semibold text-white text-sm">Trading</p>
          <DropdownIcon />
        </div>
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
