import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import HomeIcon from '../../../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../../../assets/icons/dashboard/PlantIcon';
import SettingsIcon from '../../../../assets/icons/dashboard/SettingsIcon';
import TransactionIcon from '../../../../assets/icons/dashboard/TransactionIcon';

const DashboardSidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const icons = [
    { icon: <HomeIcon />, id: 'home', path: '' },
    { icon: <InvestmentIcon />, id: 'investment', path: 'investment' },
    { icon: <PlantIcon />, id: 'plant', path: 'plant' },
    { icon: <TransactionIcon />, id: 'transaction', path: 'transaction' },
    { icon: <SettingsIcon />, id: 'settings', path: 'settings' },
  ];

  return (
    <div className="p-7 bg-black bg-opacity-[34%] absolute top-[30%] flex-col hidden lg:flex items-center space-y-5 justify-center border rounded-xl ">
      {icons.map((item) => (
        <Link to={item.path} key={item.id}>
          <div
            onClick={() =>
              setActiveIcon(item.id === activeIcon ? null : item.id)
            }
            className={`cursor-pointer ${
              item.id === activeIcon ? 'shadow-[#B444B0] shadow-xl' : ''
            }`}
          >
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DashboardSidebar;
