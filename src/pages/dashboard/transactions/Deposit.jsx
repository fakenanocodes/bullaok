import { useState } from 'react';
import CancelIcon from '../../../components/utils/icons/CancelIcon';
import DepositIcon from '../../../components/utils/icons/DepositIcon';
import DollaIcon from '../../../components/utils/icons/DollaIcon';

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

const Deposit = () => {
  const [openModel, setOpenModel] = useState(false);

  // const handleSubmit = () => {};

  return (
    <div className=" h-[100%] bg-white rounded-xl p-4 text-gray-700 overflow-scroll">
      <div className=" text-2xl font-bold my-3 mb-5">Deposit</div>
      <div>
        {/* <img src="/build.png" />
        <img src="/shares.png" /> */}
        <div className="flex flex-col gap-10 pb-24">
          <div className="flex gap-10  font-semibold">
            <div className="flex flex-col w-[50%]">
              <label>Source wallet</label>
              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>main</option>
                <option>BTC</option>
              </select>
            </div>

            <div className="flex flex-col w-[50%]">
              <label>Asset destination</label>

              <select type="text" className="rounded-lg px-6 border-2 py-4">
                <DollaIcon />
                <option>
                  <img src="/build.png" width={20} />
                  $1,474.91
                </option>
                <option>
                  <img src="/btc" /> BTC
                </option>
              </select>
            </div>
          </div>
          <div className=" w-[48%] items-center gap-5 relative grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <DepositIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          <div className="flex gap-10 font-semibold">
            <div className="flex flex-col w-[50%]">
              <label>Deposit wallet addresst</label>
              <input
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="yourmail@gmail.com"
              />
            </div>
            <div className="flex flex-col w-[50%]">
              <label>Deposit amount</label>
              <input
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="0.00 $"
              />
            </div>
          </div>
          <div className="flex justify-between w-[48%] text-xl items-center">
            <div className=" text-red-600 font-semibold">
              You are depositing $0.00
            </div>
            <button
              onClick={() => setOpenModel(true)}
              className="bg-[#352F84] py-2 text-white px-4 rounded-[5px]"
            >
              Send payment
            </button>
          </div>
        </div>
      </div>
      <div className="border shadow-md">
        <div className="bg-[#8E0789] text-white p-3 text-2xl font-semibold">
          Deposit History
        </div>
        <div className="flex justify-between w-[90%] ml-10">
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Date
          </div>
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Amount
          </div>
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Email address
          </div>
          <div className="m-2 p-2 px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            Status
          </div>
          <select className="m-2 p-2 bg-[rgb(249,249,250)] shadow drop-shadow-lg border-none px-7">
            <option className="">sort</option>
          </select>
        </div>
        <div>
          {trans.map((tran, idx) => (
            <div className="flex justify-between w-[90%] text-xs ">
              <div className="font-bold mx-12 py-3 ">{tran.Date}</div>
              <div className="py-3 w-5 -mx-5 ">{tran.Amount}</div>
              <div className="py-3  mx-24 w-24">{tran.Email}</div>
              <div className="py-3 w-16 -mx-10">{tran.Status}</div>
              <div className="w-36"></div>
            </div>
          ))}
        </div>
      </div>
      {/* model for depositing */}
      {openModel && (
        <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
          <div className="bg-white h-3/5 w-3/5 max-w-[500px] p-4 my-6 relative">
            <div className="flex justify-between">
              <p className="text-lg text-gray-600 font-semibold">Deposit</p>
              <div
                className="cursor-pointer"
                onClick={() => setOpenModel(false)}
              >
                <CancelIcon />
              </div>
            </div>
            <div className="py-5">
              <label>Asset destination</label>
              <div className="flex gap-3 border-2 w-full rounded-md p-2 px-4">
                <DollaIcon />
                <p>$1,474.91</p>
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
                Confirm deposit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Deposit;
