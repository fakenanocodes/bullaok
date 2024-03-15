import React from 'react';
import { images } from '../../assets';
import useCurrencyFormatter from '../../hooks/useCurrencyFormatter';
import formatDateWithSuffix from '../../hooks/useDateFormatter';

const imageUrls = {
  Assets: images.assets,
  'Real Estate': images.estate,
  Crypto: images.crypto,
  Forex: images.forex,
  Cannabis: images.cannabis,
};
export default function RunningInvestmentRow({
  category,
  created,
  number_of_days,
  investment_profit_percent,
  referral_profit_percent,
  amount,
}) {
  const originalDate = new Date(created);
  const formattedDate = formatDateWithSuffix(originalDate);
  const validateAmount = amount !== null ? useCurrencyFormatter(amount) : 0;
  return (
    <tr className=" bg-[#2F2525] my-5 rounded-xl">
      <td className=" gap-2 text-center">
        <div className="flex items-center justify-center text-center ">
          <div className="flex justify-start items-center gap-4 w-[180px] ">
            <img
              src={imageUrls[category?.name]}
              alt=""
              className="w-16 h-16 rounded-full"
            />
            <span>{category?.name}</span>
          </div>
        </div>
      </td>
      <td className="gap-2 py-4 text-center">
        <div className="flex flex-col">
          <span>{formattedDate}</span>
        </div>
      </td>
      <td className="text-center  py-4">
        <span className="font-bold text-xl"> {validateAmount}</span>
      </td>
      <td className="text-center  py-4">
        <span>{number_of_days} days</span>
      </td>
      <td className="text-center py-4 ">
        <div className="flex flex-col">
          <span className="font-bold">+ ${investment_profit_percent}</span>
          <span className="text-[#47A663] font-semibold">
            {referral_profit_percent}%
          </span>
        </div>
      </td>
      <td>
        <span>...</span>
      </td>
    </tr>
  );
}
