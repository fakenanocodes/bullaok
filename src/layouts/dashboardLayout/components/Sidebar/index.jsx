import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import HomeIcon from '../../../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../../../assets/icons/dashboard/PlantIcon';
import IraIcon from '../../../../assets/icons/dashboard/IraIcon';
import LogoutIcon from '../../../../components/utils/icons/LogoutIcon';

const DashboardSidebar = ({ logout }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  const icons = [
    { icon: <HomeIcon />, name: 'home', path: '' },
    { icon: <InvestmentIcon />, name: 'investment', path: 'card-application' },
    { icon: <PlantIcon />, name: 'plans', path: 'plan' },
    {
      icon: <IraIcon />,
      name: 'ira',
      path: 'ira',
    },
    { icon: <LogoutIcon />, name: 'logout' },
  ];

  return (
    <div className="p-7 bg-black bg-opacity-[34%] absolute top-[30%] flex-col hidden lg:flex items-center space-y-9 justify-center border rounded-xl ">
      {icons?.map((item) => (
        <>
          {item.name === 'logout' ? (
            <div
              onClick={() => {
                setActiveIcon(item.name === activeIcon ? null : item.name);
                logout && logout();
              }}
              className={`cursor-pointer ${
                item.name === activeIcon ? 'shadow-[#B444B0] shadow-xl' : ''
              }`}
            >
              {item.icon}
            </div>
          ) : (
            <Link to={item.path} key={item.name}>
              <div
                onClick={() =>
                  setActiveIcon(item.name === activeIcon ? null : item.name)
                }
                className={`cursor-pointer ${
                  item.name === activeIcon ? 'shadow-[#B444B0] shadow-xl' : ''
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
