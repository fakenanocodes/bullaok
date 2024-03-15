import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import InvestmentPlanCard from '../../components/cards/InvestmentPlanCard';

const InvestmentPlan = () => {
  const { data, isLoading } = useSWR('/plans/all');
  const [categories, setCategories] = useState([]);

  // const { data, isLoading } = useSWR(`plans/category/${id}/plans/`);
  console.log(data);
  const navigate = useNavigate();
  const plansIds = data?.map((item) => item.id);
  console.log('Plans ==> ', data, plansIds);
  useEffect(() => {
    const fetchCategories = async () => {
      if (plansIds.length > 0) {
        const categoryData = [];

        await Promise.all(
          plansIds.map((id) =>
            axios.get(`/plans/category/${id}/plans/`).then((res) => {
              categoryData.push(res?.data);
              setCategories(res?.data);
              console.log(res);
            })
          )
        );
        // Merge and flatten the array
        setCategories(categoryData.flat());
      }
    };

    fetchCategories();
  }, []);
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
        <span className="font-semibold text-lg">Investment Plans</span>
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
