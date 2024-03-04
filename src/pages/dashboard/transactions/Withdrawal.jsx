import { ClickAwayListener } from '@mui/material';
import { useState } from 'react';
import useSWR from 'swr';
import CancelIcon from '../../../components/utils/icons/CancelIcon';
import DollaIcon from '../../../components/utils/icons/DollaIcon';
import WithdrawIcon from '../../../components/utils/icons/WithdrawIcon';

import LeftMoveIcon from '../../../components/utils/icons/LeftMoveIcon';

let trans = [
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'helenmaike@gmail.com',
    Asset: '$',
    Status: 'Succeed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'ndubes@gmail.com',
    Asset: '$',
    Status: 'Pending ...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'bulloakfoxfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'helenmaike@gmail.com',
    Asset: '$',
    Status: 'Succeed',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'ndubes@gmail.com',
    Asset: '$',
    Status: 'Pending ...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'bulloakfoxfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
];

const Withdrawal = () => {
  const [openModel, setOpenModel] = useState(false);
  const [showMobileTable, setShowMobileTable] = useState(false);
  const { data } = useSWR(`/withdraw/`);
  console.log(data);

  return (
    <div className=" h-[100%] bg-white p-4 text-gray-700 overflow-scroll relative">
      <div className=" text-2xl font-bold my-3 mb-10 grid grid-cols-3 gap-12 items-center ">
        <div className="md:hidden ">
          <LeftMoveIcon />
        </div>
        Withdrawal
      </div>
      <div>
        <div className="flex flex-col gap-10 pb-24">
          <div className="md:flex gap-10  font-semibold">
            <div className="flex flex-col md:w-[50%] mb-10 md:mb-0">
              <label>Source wallet</label>
              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>main</option>
                <option>BTC</option>
              </select>
            </div>
            <div className="flex flex-col md:w-[50%]">
              <label>Asset destination</label>
              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>$1,474.91</option>
                <option>BTC</option>
              </select>
            </div>
          </div>
          <div className="hidden md:w-[48%] items-center gap-5 relative md:grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <WithdrawIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          <div className="md:flex gap-10 font-semibold">
            <div className="flex flex-col md:w-[50%] mb-12 md:mb-0">
              <label>Withdrawal amount</label>
              <input
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="0.00 $"
              />
            </div>
            <div className="md:hidden flex justify-center m-12 ">
              <WithdrawIcon />
            </div>
            <div className="flex flex-col md:w-[50%] ">
              <label>Withdrawal wallet address</label>
              <input
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="yourmail@gmail.com"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between md:w-[48%] text-xl items-center">
            <div className=" text-red-600 font-semibold mb-28 md:mb-0">
              You are withdrawing $0.00
            </div>
            <button
              onClick={() => setOpenModel(true)}
              className="hidden md:flex bg-[#352F84] py-2 text-white px-4 rounded-[5px]"
            >
              Make withdrawal
            </button>
            <div className="md:hidden flex justify-between text-sm">
              <button
                onClick={() => setShowMobileTable(!showMobileTable)}
                className="border-2 border-red-700 px-6 rounded-md py-4"
              >
                Withdrawal History
              </button>
              <button
                onClick={() => setOpenModel(true)}
                className="bg-[#352F84] text-white rounded-md px-6 py-4"
              >
                Make withdrawal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${
          showMobileTable ? `block` : `hidden`
        } md:block border shadow-md`}
      >
        <div className="bg-[#8E0789] text-white p-3 md:text-2xl font-semibold">
          Withdrawal History
        </div>
        <div className="flex justify-between md:w-[90%] md:ml-10 text-sm md:text-lg">
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Date
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Amount
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Email address
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Status
          </div>
          <select className="m-2 md:p-2 bg-[rgb(249,249,250)] shadow drop-shadow-lg border-none px-7 hidden md:block">
            <option className="">Sort</option>
          </select>
        </div>
        <div>
          {trans.map((tran, idx) => (
            <div className="flex justify-between md:w-[90%] text-xs ">
              <div className="font-bold md:mx-12 mr-14 py-3 ">{tran.Date}</div>
              <div className="py-3 w-5 -mx-5 ">{tran.Amount}</div>
              <div className="py-3  mx-24 w-24">{tran.Email}</div>
              <div className="py-3 w-16 md:-mx-10 -mr-24">{tran.Status}</div>
              <div className="w-36"></div>
            </div>
          ))}
        </div>
      </div>
      {openModel && (
        <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
          <ClickAwayListener onClickAway={() => setOpenModel(false)}>
            <div className="bg-white h-3/5 w-[90%] md:w-3/5 max-w-[500px] p-4 my-6 relative">
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-semibold">
                  Withdrawal
                  </p>
              </div>
              <div className="py-5">
                <label>Asset destination</label>
                <div className="flex gap-3 border-2 w-full rounded-md p-2 px-4">
                  <DollaIcon />
                </div>
              </div>
              <div>
                <p>Amount</p>
                <div className="mb-32 w-full border-2 p-2 px-4 rounded-md">
                  <p>$0.00</p>
                </div>
              </div>
              <div className="flex gap-5 absolute right-4">
                <button
                  className="p-2 px-4 rounded-md border"
                  onClick={() => setOpenModel(false)}
                >
                  Cancel
                </button>
                <button className="bg-[#352F84] text-white p-2 px-4 rounded-md">
                  Confirm withdrawal
                </button>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
};
export default Withdrawal;
