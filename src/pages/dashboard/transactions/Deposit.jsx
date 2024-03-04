import { ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
// import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import CancelIcon from '../../../components/utils/icons/CancelIcon';
import DepositIcon from '../../../components/utils/icons/DepositIcon';
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
    Status: 'Pending...',
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
    Status: 'Pending...',
  },
  {
    Date: '10-02-2024 12:38:42',
    Amount: '200.00',
    Email: 'bulloakfoxfinance@gmail.com',
    Asset: '$',
    Status: 'Failed',
  },
];

// const cookie = new Cookies();
// cookie.set(
//   'access_token',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5NjI2NTE3LCJpYXQiOjE3MDk1MTg1MTcsImp0aSI6ImU2MDMyY2IyNWRjMjRkYjk4YzgyOWE2NTJmZTlmZTM1IiwidXNlcl9pZCI6MTE2LCJmaXJzdF9uYW1lIjoiIiwiZW1haWwiOiJhc2RAYXNkLmNvbSIsInVzZXJfbmFtZSI6ImFzZDEiLCJpZCI6MTE2fQ.5uuFnO_1ppzyRPlWYzPxgqZisd92AyKTAMtoJWaHDDs'
// );
const Deposit = () => {
  const [openModel, setOpenModel] = useState(false);
  const [showMobileTable, setShowMobileTable] = useState(false);
  const { data: deposits } = useSWR(`/deposit/`);
  console.log('DEPOSIT', deposits);

  const [wallet, setWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAdress] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');

  const walletType = ['USDT', 'LTC', 'BTC', 'XRP', 'ETH'];

  // console.log(wallet);
  // console.log(amount);
  // console.log(walletAddress);
  // console.log(usdtAmount);

  let userData = {
    amount,
    wallet_type: wallet,
    wallet_address: walletAddress,
    usdt_amount: usdtAmount,
  };

  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/deposit/', userData);
      console.log('RESPONSE', response.data);
      toast.success('success');
      setOpenModel(false);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" h-[100%] bg-white p-4 text-gray-700 overflow-scroll relative">
      <div className=" text-2xl font-bold my-3 mb-10 grid grid-cols-3 gap-12 items-center ">
        <div className="md:hidden ">
          <LeftMoveIcon />
        </div>
        Deposit
      </div>
      <div>
        <div className="flex flex-col gap-10 pb-24">
          <div className="md:flex gap-10  font-semibold">
            <div className="flex flex-col md:w-[50%] mb-10 md:mb-0">
              <label>Source wallet</label>
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
              >
                {walletType.map((type, idx) => (
                  <option
                    key={idx}
                    value={type}
                    className="cursor-pointer flex gap-3"
                  >
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col md:w-[50%]">
              <label>Asset destination</label>
              <input
                type="text"
                value={usdtAmount}
                onChange={(e) => setUsdtAmount(e.target.value)}
                className="rounded-lg px-6 border-2 py-4"
              />
              {/* <select type="text" className="rounded-lg px-6 border-2 py-4">
                <option>$1,474.91</option>
                <option>BTC</option>
              </select> */}
            </div>
          </div>
          <div className="hidden md:w-[48%] items-center gap-5 relative md:grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <DepositIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          <div className="md:flex gap-10 font-semibold">
            <div className="flex flex-col md:w-[50%] mb-12 md:mb-0">
              <label>Deposit amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="0.00 $"
              />
            </div>
            <div className="md:hidden flex justify-center m-12 ">
              <DepositIcon />
            </div>
            <div className="flex flex-col md:w-[50%] ">
              <label>Deposit wallet address</label>
              <input
                value={walletAddress}
                onChange={(e) => setWalletAdress(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                // placeholder="lkjhyiu878yfs44rs"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between md:w-[48%] text-xl items-center">
            <div className=" text-red-600 font-semibold mb-28 md:mb-0">
              You are depositing $0.00
            </div>
            <button
              onClick={() => setOpenModel(true)}
              className="hidden md:flex bg-[#352F84] py-2 text-white px-4 rounded-[5px]"
            >
              Make deposit
            </button>
            <div className="md:hidden flex justify-between text-sm">
              <button
                onClick={() => setShowMobileTable(!showMobileTable)}
                className="border-2 border-red-700 px-6 rounded-md py-4"
              >
                Deposit History
              </button>
              <button
                onClick={() => setOpenModel(true)}
                className="bg-[#352F84] text-white rounded-md px-6 py-4"
              >
                Make deposit
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
          Deposit History
        </div>
        <div className="flex justify-between md:w-[90%] md:ml-10 text-sm ">
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm ">
            DATE
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            AMOUNT
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            EMAIL ADDRESS
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            ASSET
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            STATUS
          </div>
          {/* <select className="m-2 md:p-2 bg-[rgb(249,249,250)] shadow drop-shadow-lg border-none px-7 hidden md:block">
            <option className="">Sort</option>
          </select> */}
        </div>
        <div>
          {deposits?.map((deposit, idx) => (
            <div className="flex justify-between md:w-[90%]  md:ml-10 text-xs ">
              <div className="py-3 font-bold my-2   ">
                <div className="md:flex gap-2">
                  <p>{deposit?.created?.split('T')[0]}</p>
                  <p>{deposit?.created?.split('T')[1].split('.')[0]}</p>
                </div>
              </div>
              <div className="py-3 my-2 md:px-10 ">
                {deposit?.amount.split('.')[0]}
              </div>
              <div className="py-3 my-2 md:px-10">
                {deposit?.profile?.user?.email}
              </div>
              <div className="py-3  my-2 md:px-10">{deposit?.wallet_type}</div>
              <div className="py-3 my-2  md:px-10">
                {deposit?.verified
                  ? 'Success'
                  : !deposit?.verified
                  ? 'Pending...'
                  : 'Failed'}
              </div>
              {/* <div className="w-36"></div> */}
            </div>
          ))}
        </div>
      </div>
      {openModel && (
        <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
          <ClickAwayListener onClickAway={() => setOpenModel(false)}>
            <div
              onSubmit={handleSubmit}
              className="bg-white h-3/5 w-[90%] md:w-3/5 max-w-[500px] p-4 my-6 relative"
            >
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
                <label htmlFor="asset">Asset destination</label>
                <div>
                  {/* <DollaIcon /> */}
                  <input
                    value={usdtAmount}
                    placeholder="$1,474.91"
                    className="border-2 w-full rounded-md p-2 px-4"
                    id="asset"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="amount">Amount</label>
                <div className="">
                  <input
                    value={amount}
                    className="mb-32 w-full border-2 p-2 px-4 rounded-md"
                    placeholder="0.00"
                    id="amount"
                  />
                </div>
              </div>
              <div className="flex gap-5 absolute right-4">
                <button
                  className="p-2 px-4 rounded-md border"
                  onClick={() => setOpenModel(false)}
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  className="bg-[#352F84] text-white p-2 px-4 rounded-md"
                >
                  Confirm deposit
                </button>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
};
export default Deposit;
