import React, { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import table_icon from '../src/assets/table_icon.png';

const DashBoardHistory = () => {
  const { data: transaction } = useSWR('/transaction/');
  let [arr, setArr] = useState();


  useEffect(() => setArr(transaction), [transaction]);


  let dataArr = useMemo(() => arr?.slice(0, 4), [arr]);


  const timeHandler = (timestamp) => {
    const time = new Date(timestamp);

    return `${time.getDay()} ${time.toLocaleString('en-US', { month: 'long' })} at ${time.toLocaleTimeString()}`;
  };

  return (
    <tbody>
      {dataArr?.map((data, index) => (
        <tr
          key={index}
          className="relative mt-4 text-[12px]  left-0 sm:left-[40px]"
        >
          <td>
            <img
              src={table_icon}
              alt="table_icon"
              className="w-[20px] h-[20px] sm:inline-block absolute left-[-30px] top-3 hidden "
            />
            <div className="flex flex-col">
              <span className="hidden sm:block">{data.description}</span>
              <small className="block">{timeHandler(data.created)}</small>
            </div>
          </td>
          <td className="relative">
            <span
              className={` absolute  left-4 w-3 h-3 rounded-[50%]   ${data.transaction_type === 'withdrawal' ? 'bg-[#F324EC]' : data.transaction_type === 'deposit' ? 'bg-[#0E0C6D]' : 'bg-[#FFB803]'}`}
            >
              {''}
            </span>
            {data.type}
          </td>
          <td>{parseFloat(data.usdt_amount)?.toFixed(2)}</td>
          <td
            className={
              data.verified === true
                ? 'text-[#50E01E]'
                : data.verified === false
                  ? 'text-[orangered] font-semibold'
                  : 'text-[#0978F2]'
            }
          >
            {data.verified === true
              ? 'Completed'
              : data.verified === false
                ? 'Failed'
                : 'Pending...'}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default DashBoardHistory;
