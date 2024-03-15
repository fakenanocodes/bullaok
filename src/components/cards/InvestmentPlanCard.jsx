import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { handleGenericError } from '../../config/mixin';

const InvestmentPlanCard = ({ plan, onSubmit }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    amount: yup
      .number()
      .required('amount field cannot be empty')
      .positive()
      .min(
        plan?.minimum_amount,
        `Amount must be at least ${plan?.minimum_amount}`
      )
      .max(
        plan?.maximum_amount,
        `Amount must not exceed ${plan?.maximum_amount}`
      ),
  });
  const { register, getValues, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  async function onSubmit(id) {
    const data = getValues();
    console.log(id);
    const apiData = {
      amount: data?.amount,
      plan_id: id,
    };
    setLoading(true);
    try {
      const res = await axios.post('/plans/', apiData);
      console.log(res);
      toast.success(res?.data?.message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
      setLoading(false);
      reset();
    } catch (error) {
      const errMsg = handleGenericError(error);
      toast.error(errMsg, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
      });
      setLoading(false);
      reset();
    }
  }

  setTimeout(() => {
    setError(null);
  }, 10000);
  return (
    <div className="relative bg-[#D9D9D9] text-black flex flex-col w-[300px] shadow-lg items-center p-5 px-10 space-y-10 py-10">
      <div className="text-white bg-[#41073F] p-5 px-16 border border-opacity-20 w-[80%] rounded-full shadow-2xl shadow-[#41073F] flex justify-center items-center">
        <span>{plan?.name}</span>
      </div>
      <div className="flex flex-col space-y-4">
        <span className="flex space-x-4 items-center">
          <MdDone fontSize="small" className="text-[#FFB803]" />
          <span className="text-sm font-medium">
            Total Profit {plan?.investment_profit_percent}%
          </span>
        </span>
        <span className="flex space-x-4 items-center">
          <MdDone fontSize="small" className="text-[#FFB803]" />
          <span className="text-sm font-medium">Duration 7 days</span>
        </span>
        <span className="flex space-x-4 items-center">
          <MdDone fontSize="small" className="text-[#FFB803]" />
          <span className="text-sm font-medium">
            Min Deposit {plan?.minimum_amount}
          </span>
        </span>
        <span className="flex space-x-4 items-center">
          <MdDone fontSize="small" className="text-[#FFB803]" />
          <span className="text-sm font-medium">
            Max Deposit {plan?.maximum_amount}
          </span>
        </span>
        <span className="flex space-x-4 items-center">
          <MdDone fontSize="small" className="text-[#FFB803]" />
          <span className="text-sm font-medium">
            Referral Bonus {plan?.referral_profit_percent}%
          </span>
        </span>
      </div>
      <div className="space-y-2">
        <label className="text-sm text-[#676467] font-medium">
          Enter Amount
        </label>
        <input
          type="number"
          name="amount"
          {...register('amount', {
            min: plan?.minimum_amount,
            max: plan?.maximum_amount,
          })}
          id=""
          className="border-none"
        />
      </div>
      <button
        onClick={() => handleSubmit(onSubmit(plan?.id))}
        className="bg-[#41073F] w-[80%] p-3 px-5 -bottom-6 rounded-xl border border-white border-opacity-30 text-white absolute"
      >
        {loading ? (
          <CircularProgress size={10} style={{ color: 'white' }} />
        ) : (
          'Proceed with investment'
        )}
      </button>
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default InvestmentPlanCard;
