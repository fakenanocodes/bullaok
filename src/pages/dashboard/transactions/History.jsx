import React, { useMemo, useState } from 'react';
import useSWR from 'swr';
import angleLeft from '../../../assets/angleLeft.svg';
import angleRight from '../../../assets/angleRight.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import table_icon from '../../../assets/table_icon.png';

const HistoryPage = () => {
  const { data: transaction } = useSWR('/transaction/');
  let [currentPage, setCurrentPage] = useState(0);
  let [searchVal, setSearchVal] = useState('');

  let num = 3
  let page_num = useMemo(
    () =>Number.isInteger(transaction?.length/num)? transaction?.length / num :  Math.floor(transaction?.length / num) + 1,
    [transaction]
  );
  let [dataArr,setDataArr] = useState(transaction?.slice(currentPage * num, num * (currentPage + 1)));
  
  let data = transaction.filter(data => data.transaction_type.includes(searchVal))
  const searchHandler = ()=>{
    setDataArr(data)
 }
  const pageHandler = (e) => {
    if (e.target.id === 'next' && currentPage < page_num - 1) {
      setCurrentPage(++currentPage);
    } 
    else if(e.target.id === 'back' && currentPage > 0 ) {
      setCurrentPage(--currentPage);
    }
  };
  
  // console.log(searchVal);
  return (
    <div className=" h-[100%] no-scrollbar bg-white p-4 text-gray-700 overflow-scroll relative bg-bl">
      <div className="flex items-center justify-between">
        <span className="text-[rgba(0,0,0,0.7)] font-[600]">
          <span className="hidden sm:inline">Transaction</span> History
        </span>
        <div className="rounded-[10px] bg-[#f4e6f3] w-fit flex items-center sm:pr-3">
          <input
            type="search"
            value={searchVal}
            onChange={(e)=>setSearchVal(e.target.value)}
            placeholder="search..."
            className="bg-[inherit] border-none outline-none rounded-[10px] w-[100px] h-[30px] sm:w-[150px] text-[13px]"
          />
          <img
            src={searchIcon}
            alt="search icon"
            className="hidd w-[25px] sm:block"
            onClick={searchHandler}
          />
        </div>
        <input
          type="date"
          className="rounded-[10px] w-fit text-[12px] sm:w-[200px] h-[30px] pr-3 border-[1.5px] outline-[1px] outline-[none!important] focus:border-[rgba(0,0,0,0.5)!important]"
        />
      </div>
      <table className="table-auto my-4">
        <thead className="relative text-[#FFB803] text-[10px] sm:text-[16px] left-0 sm:left-[40px]">
          <tr>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          { dataArr === ''? <h1>Search not found</h1> : dataArr?.map((data, index) => (
            <tr className="relative mt-4 text-[12px]  left-0 sm:left-[40px] border-y">
              <td>
                <img
                  src={table_icon}
                  alt="table_icon"
                  className="w-[20px] h-[20px] sm:inline-block absolute left-[-30px] top-3 hidden"
                />
                <div className="flex flex-col">
                  <span className="hidden sm:block">{data.description}</span>
                  <span>12.57pm</span>
                  <small className="block">{data.date}</small>
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
      </table>
      <div className="w-full flex justify-end text-[#8e0789] font-[500] gap-3 items-center">
        <span className=" flex gap-3 text-[12px] font-[400]">
          <b className="bg-[#ddb5dc] px-5 py-[1px] rounded-[5px] font-">
            {currentPage + 1}
          </b>
          of <b className="font-[500]">{page_num}</b> pages{' '}
        </span>
        <div className="flex gap-1">
          <img
            src={angleLeft}
            alt=""
            id="back"
            onClick={(e) => pageHandler(e)}
            className="cursor-pointer w-[8px] active:w-[7px]"
          />
          <img
            src={angleRight}
            alt=""
            id="next"
            onClick={(e) => pageHandler(e)}
            className="cursor-pointer w-[8px] active:w-[7px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;