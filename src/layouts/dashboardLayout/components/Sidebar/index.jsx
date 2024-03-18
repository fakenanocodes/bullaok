import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import HomeIcon from '../../../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../../../assets/icons/dashboard/PlantIcon';
import TransactionIcon from '../../../../assets/icons/dashboard/TransactionIcon';
import LogoutIcon from '../../../../components/utils/icons/LogoutIcon';
const icons = [
  { icon: <HomeIcon />, id: 'home', path: '' },
  { icon: <InvestmentIcon />, id: 'investment', path: 'kyc' },
  { icon: <PlantIcon />, id: 'plans', path: 'investment/packages' },
  {
    icon: <TransactionIcon />,
    id: 'transaction',
    path: 'investment/running',
  },
  { icon: <LogoutIcon />, id: 'Logout' },
];

const DashboardSidebar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const cookie = new Cookies();
  const navigate = useNavigate();
  const logoutOption = () => {
    navigate('/');
    cookie.remove(`bk_token`);
    cookie.remove(`bk_user`);
    window.location.reload();
  };

  const icons = [
    { icon: <HomeIcon />, id: 'home', path: '' },
    { icon: <InvestmentIcon />, id: 'investment', path: 'card-application' },
    { icon: <PlantIcon />, id: 'plans', path: 'plan' },
    {
      icon: <TransactionIcon />,
      id: 'transaction',
      path: 'investment/running',
    },
    { icon: <LogoutIcon />, id: 'logout' },
  ];

  return (
    <div className="p-7 bg-black bg-opacity-[34%] absolute top-[30%] flex-col hidden lg:flex items-center space-y-9 justify-center border rounded-xl ">
      {icons?.map((item) => (
        <>
          {item.name === 'Logout' ? (
            <div
              onClick={() => {
                setActiveIcon(item.id === activeIcon ? null : item.id);
                logoutOption();
              }}
              className={`cursor-pointer ${
                item.id === activeIcon ? 'shadow-[#B444B0] shadow-xl' : ''
              }`}
            >
              {item.icon}
            </div>
          ) : (
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
          )}
        </>
      ))}
    </div>
  );
};

export default DashboardSidebar;
