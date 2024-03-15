import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import RunningInvestmentRow from '../../components/Dashboard/RunningInvestmentRow';

const RunningInvestment = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useSWR('/plans/all');
  console.log('running investments ==>', data);
  return (
    <div className="flex space-y-4 flex-col p-10 ">
      <div>
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">Running Investments</span>
        <span className="text-[#6E7781] flex items-center space-x-1 bg-[#F6F8FA] py-3 rounded-lg shadow-sm px-3">
          <FilterListIcon fontSize="small" />
          <div className="group relative">
            <span className="text-sm">Filter notifications</span>
            <div className="group-hover:flex hidden absolute flex-col -right-3 top-10 bg-white z-10 px-5 py-3 shadow-lg space-y-3">
              <span>Name</span>
              <span>Date</span>
              <span>Type</span>
              <span>Size</span>
            </div>
          </div>
        </span>
      </div>
      <table className="w-full border-separate border-spacing-y-3">
        <thead className="">
          <tr className="bg-[#E5C8E4] shadow-[#E5C8E4] shadow-sm text-black py-4">
            <th>PLAN</th>
            <th>INVESTED DATE</th>
            <th>AMOUNT</th>
            <th>MATURITY DATE</th>
            <th>PROFIT</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map(
            (
              {
                category,
                created,
                investment_profit_percent,
                amount,
                number_of_days,
                referral_profit_percent,
              },
              index
            ) => (
              <RunningInvestmentRow
                key={index}
                created={created}
                category={category}
                referral_profit_percent={referral_profit_percent}
                number_of_days={number_of_days}
                investment_profit_percent={investment_profit_percent}
                amount={amount}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RunningInvestment;
