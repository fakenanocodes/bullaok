import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import InvestmentPlanCard from '../../components/cards/InvestmentPlanCard';
import RunningInvestmentIcon from '../../assets/dashboard/investment/runninginvestment.png';

import { styled } from '@mui/material/styles';

const InvestmentPlan = () => {
  const { data, isLoading } = useSWR('/plans/all');
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();
  const plansIds = data?.map((item) => item.id);
  useEffect(() => {
    const fetchCategories = async () => {
      if (plansIds.length > 0) {
        const categoryData = [];

        await Promise.all(
          plansIds.map((id) =>
            axios.get(`/plans/category/${id}/plans/`).then((res) => {
              categoryData.push(res?.data);
              setCategories(res?.data);
            })
          )
        );
        // Merge and flatten the array
        setCategories(categoryData.flat());
      }
    };

    fetchCategories();
  }, []);

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  return (
    <div className="p-10">
      <div className="flex items-center justify-between space-x-5">
        <div className="flex">
          <KeyboardBackspaceIcon
            fontSize="large"
            onClick={() => {
              navigate(-1);
            }}
            className="cursor-pointer"
          />
          <span className="font-semibold text-lg">Investment Plans</span>
        </div>
        <LightTooltip
          title="Running Investments"
          followCursor
          arrow
          placement="top"
        >
          <img
            src={RunningInvestmentIcon}
            alt=""
            onClick={() => {
              navigate('/dashboard/investment/running');
            }}
            className="pr-15 hover:bg-[#F8DF9F] hover:shadow-2xl   hover:shadow-[#fff]/50 hover:text-black transition duration-300 ease-in-out cursor-pointer"
          />
        </LightTooltip>
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
