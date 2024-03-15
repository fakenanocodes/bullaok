import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';
import account_icon from '../assets/account_icon.svg';
import fund_icon from '../assets/fund_icon.svg';
import trade_icon from '../assets/trade_icon.svg';
import StockStepsCard from './utils/cards/StockStepsCard';

const StockSteps = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="px-5 lg:px-10 xl:px-20 py-[3rem] my-[3rem] bg-gray-100">
      <p className="text-4xl font-bold tracking-wide text-[#1A2433] text-center">
        {title ? title : 'Ready to start trading? Get Started in 3 easy steps'}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 my-[4rem]">
        <StockStepsCard
          image={account_icon}
          step={'1'}
          title={'Apply for an account'}
          description={'Fill out our simple application form'}
        />
        <StockStepsCard
          image={fund_icon}
          step={'2'}
          title={'Fund your account'}
          description={'Fund your account with any amount'}
        />
        <StockStepsCard
          image={trade_icon}
          step={'3'}
          title={'Start trade'}
          description={
            'Start trading on our platforms through web, mobile or desktop'
          }
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate('/register');
            scrollToTop();
          }}
          className="text-white font-bold text-xl py-5 px-7 bg-[#8E0789] rounded-lg"
        >
          Open An Account
        </button>
      </div>
    </div>
  );
};

export default StockSteps;
