import React, { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import angleLeft from '../../../assets/angleLeft.svg';
import angleRight from '../../../assets/angleRight.svg';
import searchIcon from '../../../assets/searchIcon.svg';
import table_icon from '../../../assets/table_icon.png';
import ReceiptModal from '../../../components/modal/ReceiptModal';

const HistoryPage = () => {
  const { data: transaction } = useSWR('/transaction/');
  let [currentPage, setCurrentPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [idNum, setIdNum] = useState('');
  let [searchVal, setSearchVal] = useState('');
  let [arr, setArr] = useState(transaction);
  const [date, setDate] = useState('');

  useEffect(() => setArr(transaction), [transaction]);

  console.log('---', arr);

  let num = 10;
  let page_num = useMemo(
    () =>
      Number.isInteger(arr?.length / num)
        ? arr?.length / num
        : Math.floor(arr?.length / num) + 1,
    [arr]
  );

  let dataArr = useMemo(
    () => arr?.slice(currentPage * num, num * (currentPage + 1)),
    [arr, currentPage]
  );

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const filterbyDate = () => {
    let dateVal = `${new Date(date).getMonth() + 1} ${new Date(date).getFullYear()}`;
    let dateArr = transaction?.filter((data) => {
      let tipTime = `${new Date(data.created).getMonth() + 1} ${new Date(data.created).getFullYear()}`;
      return tipTime.includes(dateVal);
    });

    setArr(dateArr);
  };

  const searchHandler = () => {
    let data = transaction?.filter((data) => data.transaction_type.includes(searchVal));
    setArr(data);
  };

  const pageHandler = (e) => {
    if (e.target.id === 'next' && currentPage < page_num - 1) {
      setCurrentPage(++currentPage);
    } else if (e.target.id === 'back' && currentPage > 0) {
      setCurrentPage(--currentPage);
    }
  };

  const timeHandler = (timestamp) => {
    const time = new Date(timestamp);

    return `${time.getDay()} ${time.toLocaleString('en-US', { month: 'long' })} at ${time.toLocaleTimeString()}`;
  };

  const receiptHandler = (data)=>{
    setIdNum(data)
    console.log(open);
  }
  useEffect(()=>{setOpen(()=>true);},[idNum])
  console.log(idNum);
  
  return (
    <div className=" h-fit no-scrollbar bg-[#fff] p-4 text-gray-700 overflow-scroll relative bg-bl">
      <div className="flex items-center justify-between">
        <span className="text-[rgba(0,0,0,0.7)] font-[600]">
          <span className="hidden sm:inline">Transaction</span> History
        </span>
        <div className="rounded-[10px] bg-[#f4e6f3] w-fit flex items-center sm:pr-3">
          <input
            type="search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
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
          value={date}
          onChange={(e) => {
            dateHandler(e);
            filterbyDate();
          }}
          className="rounded-[10px] w-fit text-[12px] sm:w-[200px] h-[30px] pr-3 border-[1.5px] outline-[1px] outline-[none!important] focus:border-[rgba(0,0,0,0.5)!important]"
        />
      </div>
      <table className="table-auto my-4">
        <thead className="relative text-[#FFB803] text-[10px] sm:text-[16px] left-0 sm:left-[40px]">
          <tr>
            <th>Description</th>
            <th>Reciept</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataArr?.map((data, index) => (
            <tr className="relative mt-4 text-[12px]  left-0 sm:left-[40px] border-y">
              <td className=''>
                <img
                  src={table_icon}
                  alt="table_icon"
                  className="w-[20px] bg-purple-500 h-[20px] sm:block absolute left-[-30px] top-3"
                />
                <div className="flex flex-col">
                  <span className="hidden sm:block">{data?.description}</span>
                  <small className="block">{timeHandler(data?.created)}</small>
                </div>
              </td>
              <td>
              {data.transaction_type === "transfer" && (
                <div>
                  <span 
                  onClick={()=>receiptHandler(data?.id)}
                  className='text-green-600 font-semibold cursor-pointer active:px-4 active:py-1.5 border border-green-600 py-2 px-5 rounded-xl'>View</span>
                  { open && idNum === data?.id && (
                    <ReceiptModal
                      type={'Transfer'}
                      address1={data?.profile?.user?.email}
                      usdtAmount={Number(data?.usdt_amount)?.toFixed(1)}
                      amount={Number(data?.usdt_amount)?.toFixed(1)}
                      dateTime={data?.created}
                      open={open}
                      closeFunc={setOpen}
                    />
                  )}
                </div>
              )}
              </td>
              <td className="relative">
                <span
                  className={` absolute  left-4 w-3 h-3 rounded-[50%]   ${data.transaction_type === 'withdraw' ? 'bg-[#F324EC]' : data.transaction_type === 'deposit' ? 'bg-[#0E0C6D]' : 'bg-[#FFB803]'}`}
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
      <div className="w-full bg-[#e5e5e5] sm:bg-[rgba(0,0,0,0)] py-3 fixed bottom-0 left-0 pr-5 sm:sticky flex justify-end text-[#8e0789] font-[500] gap-3 items-center">
        <span className=" flex gap-3 text-[12px] font-[400]">
          <b className="bg-[#ddb5dc] px-5 py-[1px] rounded-[5px] font-">
            {currentPage + 1}
          </b>
          of <b className="font-[500]">{page_num}</b>
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
