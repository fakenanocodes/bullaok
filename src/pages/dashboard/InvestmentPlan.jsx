import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import InvestmentPlanCard from '../../components/cards/InvestmentPlanCard';

const InvestmentPlan = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const id = urlSearchParams.get('id');
  const { data, isLoading } = useSWR(`plans/category/${id}/plans/`);
  console.log(data);
  const navigate = useNavigate();

  return (
    <div className="p-10">
      <div className="flex items-center space-x-5">
        <KeyboardBackspaceIcon
          fontSize="large"
          onClick={() => {
            navigate(-1);
          }}
          className="cursor-pointer"
        />
        <span className="font-semibold text-lg">CRYPTO CURRENCY</span>
      </div>
      <div className="p-8 xl:space-x-5 space-y-9 xl:space-y-0 flex xl:flex-row flex-col justify-center items-center">
        {data?.map((plan, index) => (
          <InvestmentPlanCard plan={plan} key={index} />
        ))}
      </div>
    </div>
  );
};

export default InvestmentPlan;
