import HomeIcon from '../../../../assets/icons/dashboard/HomeIcon';
import InvestmentIcon from '../../../../assets/icons/dashboard/InvestmentIcon';
import PlantIcon from '../../../../assets/icons/dashboard/PlantIcon';
import SettingsIcon from '../../../../assets/icons/dashboard/SettingsIcon';
import TransactionIcon from '../../../../assets/icons/dashboard/TransactionIcon';

const DashboardSidebar = () => {
  return (
    <div className="p-7 bg-black bg-opacity-[34%] absolute top-[30%] flex-col hidden lg:flex items-center space-y-5 justify-center border rounded-xl ">
      <HomeIcon className="shadow-[#B444B0] shadow-xl bg-transparent" />
      <InvestmentIcon />
      <PlantIcon />
      <TransactionIcon />
      <SettingsIcon />
    </div>
  );
};

export default DashboardSidebar;
