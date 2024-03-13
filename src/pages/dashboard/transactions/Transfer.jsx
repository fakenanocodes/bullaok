import { ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import CancelIcon from '../../../components/utils/icons/CancelIcon';
import DollaIcon from '../../../components/utils/icons/DollaIcon';
import LeftMoveIcon from '../../../components/utils/icons/LeftMoveIcon';
import DirectArrowIcon from '../../../components/utils/icons/directArrowIcon';
import MobileTransferTable from './MobileTransferTab';

const Transfer = () => {
  const [openModel, setOpenModel] = useState(false);
  const [showMobileTable, setShowMobileTable] = useState(false);
  const [checkInput, setCheckInput] = useState(false);
  const { data: transfers } = useSWR(`/transfer/`);

  const { data: user } = useSWR(`/user/`);

  const [amount, setAmount] = useState('');
  const [emailAddress, setEmailAdress] = useState('');
  // const [usdtAmount, setUsdtAmount] = useState(user.profile.available_balance);
  const navigate = useNavigate();
  // console.log('CHECKER', usdtAmount);

  const walletType = ['USDT', 'LTC', 'BTC', 'XRP', 'ETH'];

  let userData = {
    amount,
    email: emailAddress,
    usdt_amount: amount,
  };

  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/transfer/', userData);
      console.log('RESPONSE', response);
      toast.success('success');
      setOpenModel(false);
    } catch (error) {
      console.log('ERROR', error);
      if (error) toast.error('failed, check your details and try again');
      setOpenModel(false);
    }
  };

  const handleValidEmail = () => {
    if (emailAddress && amount) {
      setOpenModel(true);
    } else {
      setCheckInput(true);
    }
  };

  return (
    <div className=" h-[100%] bg-white no-scrollbar p-4 text-gray-700 relative overflow-y-scroll">
      <div className=" text-2xl font-bold my-3 mb-10 grid grid-cols-3 gap-12 items-center ">
        <div className="md:hidden cursor-pointer " onClick={() => navigate(-1)}>
          <LeftMoveIcon />
        </div>
        Transfer
      </div>
      <div>
        <div className="flex flex-col gap-10 pb-24">
          <div className="md:flex gap-10  font-semibold">
            <div className="flex flex-col md:w-full relative">
              <label>Asset</label>
              <div className="flex ">
                <input
                  type="text"
                  value={user?.profile?.available_balance}
                  // onChange={(e) => setUsdtAmount(e.target.value)}
                  className="rounded-lg p-14 border-2 py-4 md:w-[48%] w-full"
                />
                <div className="absolute top-10 left-4">
                  <DollaIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:w-[48%] items-center gap-5 relative md:grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <DirectArrowIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          <div className="md:flex gap-10 font-semibold">
            <div className="flex flex-col md:w-[50%] mb-12 md:mb-0">
              <label>Transfer amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className={`rounded-lg px-6 border-2 py-4 ${
                  checkInput && 'border-red-600'
                }`}
                placeholder="0.00 $"
              />
            </div>
            <div className="md:hidden flex justify-center m-12 ">
              <DirectArrowIcon />
            </div>
            <div className="flex flex-col md:w-[50%] ">
              <label>Recipient email address</label>
              <input
                value={emailAddress}
                onChange={(e) => setEmailAdress(e.target.value)}
                type="email"
                className={`rounded-lg px-6 border-2 py-4 ${
                  checkInput && 'border-red-600'
                }`}
                placeholder="youremail@email.com"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between md:w-[48%] text-xl items-center">
            <div className=" text-red-600 font-semibold mb-28 md:mb-0">
              You are transferring ${amount || '0.00'}
            </div>
            <button
              onClick={handleValidEmail}
              className="hidden md:flex bg-[#352F84] py-2 text-white text-[18px] px-4 rounded-[5px]"
            >
              Send payment
            </button>
            <div className="md:hidden flex justify-between text-sm">
              <button
                onClick={() => setShowMobileTable(!showMobileTable)}
                className="border-2 border-red-700 px-6 rounded-md py-4"
              >
                Transfer History
              </button>
              <button
                onClick={handleValidEmail}
                className="bg-[#352F84] text-white rounded-md px-6 py-4"
              >
                Send payment
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* mobile table */}
      <MobileTransferTable
        transfers={transfers}
        showMobileTable={showMobileTable}
      />

      <div className={`hidden md:block border shadow-md`}>
        <div className="bg-[#8E0789] text-white p-3 md:text-2xl font-semibold w-full">
          Transfer History
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
        </div>
        <div>
          {transfers?.map((transfer, idx) => (
            <div className="flex justify-between md:w-[90%]  md:ml-10 text-xs ">
              <div className="py-3 font-bold my-2   ">
                <div className="md:flex gap-2">
                  <p>{transfer?.created?.split('T')[0]}</p>
                  <p>{transfer?.created?.split('T')[1]?.split('.')[0]}</p>
                </div>
              </div>
              <div className="py-3 my-2 md:px-10 ">{transfer?.usdt_amount}</div>
              <div className="py-3 my-2 md:px-10">{transfer?.email}</div>
              <div className="py-3  my-2 md:px-10">{'USDT'}</div>
              <div className="py-3 my-2  md:px-10">
                {transfer?.usdt_amount ? 'Success' : 'Failed'}
              </div>
              {/* <div className="w-36"></div> */}
            </div>
          ))}
        </div>
      </div>

      {openModel && (
        <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
          <ClickAwayListener onClickAway={() => setOpenModel(false)}>
            <div className="bg-white h-3/5 w-[90%] md:w-3/5 max-w-[500px] p-4 my-6 relative">
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-semibold">Transfer</p>
                <div
                  className="cursor-pointer"
                  onClick={() => setOpenModel(false)}
                >
                  <CancelIcon />
                </div>
              </div>
              <div className="py-5">
                <label htmlFor="asset">Recipient email</label>
                <div>
                  {/* <DollaIcon /> */}
                  <input
                    value={emailAddress}
                    placeholder="youremail@email.com"
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
                  Confirm transfer
                </button>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
};
export default Transfer;
