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

  // const walletType = ['USDT', 'LTC', 'BTC', 'XRP', 'ETH'];

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
    <section className=" h-[100%] bg-white no-scrollbar  text-gray-700 relative overflow-y-scroll rounded-[20px]">
      <article className="border-b border-[#AAAAAA] pb-6 my-4 px-10 ">
        <h2 className="font-medium text-[#000000] mx-4">New Transfer </h2>
      </article>
      <div className="border-b border-[#AAAAAA] pb-8 px-10 mx-4">
        <h4
          className="font-medium text-[#000000]
"
        >
          From
        </h4>
        <div className="grid grid-cols-2 text-sm font-medium gap-12">
          <article className="font-medium">
            <h4 className="text-[#4A4A4A] py-4">Select Account</h4>
            <button className="bg-[#8E0789] rounded-[10px] h-[66px] w-[70%] text-white">
              My main account
            </button>
          </article>
          <article>
            <p className="py-7 text-[#4A4A4A]">Account Details</p>
            <h2 className="text-[#000000] font-semibold">
              Avaliable balance: <span>$1,174.91</span>
            </h2>
          </article>
        </div>
      </div>
      <div className="px-10 mx-4 my-4">
        <h4 className="font-medium text-[#000000]">To</h4>
        <article className="grid grid-cols-2">
          <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
            Payee Name
            <input
              type="text"
              className="block w-[70%] border rounded-[10px] p-2 focus:border-[#8E0789] my-2"
            />
          </label>
          <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
            Payee Email Address
            <input
              type="text"
              className="block w-[70%] border rounded-[10px] p-2 focus:border-[#8E0789] my-2"
            />
          </label>
          <label className="text-[#4A4A4A] text-sm block  font-medium">
            Transfer Amount
            <input
              type="text"
              className="block w-[70%] border rounded-[10px] focus:border-[#8E0789] my-2"
            />
          </label>
        </article>
      </div>
      <div className="flex justify-center">
        <article className="flex gap-4 font-semibold text-sm">
          <button className="text-[#000000] bg-[#8E07894D]  w-[100px] h-[32px] rounded-md">
            Cancel
          </button>
          <button
            className="text-white bg-[#8E0789]  w-[172px] h-[32px] rounded-md text-sm "
            onClick={() => setOpenModel(true)}
          >
            Send payment
          </button>
        </article>
      </div>
      {/* mobile table */}
      <MobileTransferTable
        transfers={transfers}
        showMobileTable={showMobileTable}
      />

      {openModel && (
        <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
          <ClickAwayListener onClickAway={() => setOpenModel(false)}>
            <div className="bg-white h-fit-content w-[90%] md:w-3/5 max-w-[500px] p-4 my-6 relative rounded-[15px]">
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-semibold">Transfer</p>
                <div
                  className="cursor-pointer"
                  onClick={() => setOpenModel(false)}
                >
                  <CancelIcon />
                </div>
              </div>
              <article>
                <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
                  Payee email address
                  <input
                    type="email"
                    className="block w-full border rounded-[10px] p-2 focus:border-[#8E0789] my-2 placeholder:#1C1F27 font-normal "
                    placeholder="johndoe@gmail.com"
                  />
                </label>
                <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
                  Transfer Amount
                  <input
                    type="number"
                    className="block w-full border rounded-[10px] p-2 focus:border-[#8E0789] my-2"
                    min={0}
                    /* placeholder={
                      <article className="font-semibold">
                        <span className="text-[#76809D]">0.00</span>
                        <span className="text-[#000000]">USD</span>
                      </article>
                    } */
                    placeholder={<span>Custom Placeholder</span>}
                  />
                </label>
                <label className="text-[#4A4A4A] text-sm block  font-medium">
                  Enter Account Password
                  <input
                    type="password"
                    className="block w-full border rounded-[10px] focus:border-[#8E0789] my-2 placeholder:#76809D"
                    placeholder="*****************"
                  />
                </label>
                <label className="text-[#454E68] text-sm flex  font-medium cursor-pointer gap-2 items-center">
                  <input type="checkbox" className='rounded-[4px]' />
                  Send receipt to email address
                </label>
              </article>
              <div className="flex justify-end items-end h-[6vmax]">
                <article className="flex gap-4 font-semibold text-sm">
                  <button className="text-[#000000]  w-[100px] h-[32px] rounded-md border border-[#8E0789] hover:bg-[#8E07894D] ">
                    Cancel
                  </button>
                  <button
                    className="text-white bg-[#8E0789]  w-[172px] h-[32px] rounded-md text-sm "
                    onClick={() => setOpenModel(true)}
                  >
                    Confirm transfer
                  </button>
                </article>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </section>
  );
};
export default Transfer;
