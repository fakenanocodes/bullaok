import { ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { BiTransferAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import SlideModal from '../../../../components/modal/SlideModal';

const IraPaymentModal = ({ setIraFunds, isIraFunds }) => {
  const { data: user, mutate, isLoading } = useSWR(`/user/`);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState('');


  const [switcher, setSwitcher] = useState("toIRA");

  const switchHandler = () => {
    setSwitcher(prev => prev === "toIRA" ? "fromIRA" : "toIRA");
  }
  
  const availableBalanceUser = useMemo(
    () => user?.profile,
    [user]
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!amount || amount === 0) {
      toast.error('Please enter an amount');
      setLoading(false);
      return;
    } else if (isNaN(amount) || Number(amount) <= 0) {
      toast.error('Please enter a valid amount');
      setLoading(false);
      return;
    } else if (switcher === "toIRA" && Number(amount) > availableBalanceUser?.available_balance) {
      toast.error('Insufficient balance in main account');
      setLoading(false);
      return;
    } else if (switcher === "fromIRA" && Number(amount) > availableBalanceUser?.ira_balance) {
      toast.error('Insufficient balance in IRA account');
      setLoading(false);
      return;
    } 
    try {
      if (switcher === 'toIRA') {
        await axios.post('user/ira/deposit/', { amount: String(amount) });
        await mutate();
        toast.success('Deposit to IRA successful');
      } else {
        await axios.post('user/ira/withdraw/', { amount: String(amount) });
        await mutate();
        toast.success('Withdrawal to main account successful');
      }
      setAmount('');
      setSwitcher('toIRA');
    } catch (error) {
      console.error(error);
      const errMsg = error?.response?.data?.detail || 'Operation failed';
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };


const closeModal = () => {
  setSwitcher("toIRA");
  setAmount('');
  setIraFunds(false);
}
  
if (!isIraFunds) return null;

  return (
    <SlideModal 
      setIraFunds={closeModal} 
      isIraFunds={isIraFunds}
      title={switcher === "toIRA" ? "Fund IRA Account" : "Withdraw from IRA"}
    >
       <div className='pb-10 px-4'>
      <div className="lg:flex-row flex-col flex justify-between md:gap-5 items-center lg:space-y-0 py-10 lg:px-20 border-b border-b-gray-300">
          <div className="space-y-8 w-full">
            <p className="font-semibold text-lg hidden md:block">From</p>
            <div className="flex md:flex-col flex-nowrap w-full">
                <button
                    className="bg-[#8E0789] p-4 w-fit md:w-full rounded-l-lg md:rounded-bl-none md:rounded-t-lg flex justify-center cursor-default"
                >
                <span className="text-white whitespace-nowrap">{ switcher === "toIRA" ? "Main Account" : "IRA Account"}</span>
                </button>
                <button
                  className="bg-[rgba(142,7,138,0.11)] border border-[#8E0789] p-4 w-full rounded-r-lg md:rounded-tr-none md:rounded-b-lg flex justify-center cursor-default"
                >
                    <span className="text-[#4A4A4A] font-semibold">${switcher === "toIRA" ? availableBalanceUser?.available_balance : availableBalanceUser?.ira_balance}</span>
                </button>
            </div>
          </div>
    
          <div className="space-y-8 hidden md:block">
            <span></span>
            <div className='flex flex-col items-center justify-center'>
                <p 
                    className='text-base font-semibold text-[#8E0789] border border-[#8E0789] px-7 py-2 rounded-md cursor-pointer active:scale-95 transition-all duration-200 active:bg-[#8e078a21]'
                    onClick={switchHandler} 
                >
                    switch
                </p>
                <BiTransferAlt className='text-[#8E0789] text-2xl' />
            </div>
          </div>
              
            <BiTransferAlt className='text-[#8E0789] text-3xl rotate-90 block md:hidden translate-y-5' />

          <div className="flex flex-col space-y-8 pb-5 justify-center w-full items-end">
            <p className="text-[#4A4A4A] font-bold text-lg text-end hidden md:block">To</p>
            <div className="flex md:flex-col flex-nowrap w-full">
                <button 
                    className="bg-[#8E0789] p-4 w-fit md:w-full rounded-l-lg md:rounded-bl-none md:rounded-t-lg flex justify-center cursor-default"
                >
                    <span className="text-white whitespace-nowrap">{switcher === "toIRA" ? "IRA Account" : "Main Account"}</span>
                </button>
                <button
                    className="bg-[rgba(142,7,138,0.11)] border border-[#8E0789] p-4 w-full rounded-r-lg md:rounded-tr-none md:rounded-b-lg flex justify-center cursor-default"
                >
                <span className="text-[#4A4A4A] font-semibold">${switcher === "toIRA" ? availableBalanceUser?.ira_balance : availableBalanceUser?.available_balance}</span>
                </button>
            </div>
          </div>

            <p 
                className='text-base font-semibold text-[#8E0789] border border-[#8E0789] px-7 py-2 rounded-md cursor-pointer active:scale-95 transition-all duration-200 active:bg-[#8e078a21] block md:hidden'
                onClick={switchHandler} 
            >
                switch
            </p>
        </div>

        <div className="py-10 px-0 lg:px-20 space-y-10">
              
          <div className="flex flex-col gap-2 w-full lg:w-fit">
            <span>{switcher === "toIRA" ? "Funding" : "Transfer"} Amount</span>
            <input
              type="text"
              className="w-full lg:w-[28vw] rounded-lg p-3  border-[#8E0789]"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 pt-5">
          <button 
            className="bg-[#8E0789] bg-opacity-30 px-16 font-semibold  py-3 rounded-lg w-full lg:w-fit"
            onClick={closeModal}
          >
            Cancel 
          </button>
          <button
            onClick={(e)=>submitHandler(e)}
            className="bg-[#8E0789] py-3 text-white rounded-lg px-8 font-semibold w-full lg:w-fit"
          >
            {loading || isLoading ? "Processing..." : `Make ${switcher === "toIRA" ? "Deposit" : "Withdrawal"}`}
          </button>
        </div>

          
      </div>
    </SlideModal>
    
  );
};
export default IraPaymentModal;