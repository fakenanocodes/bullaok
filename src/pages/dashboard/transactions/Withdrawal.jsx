import { CircularProgress, ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import DollaIcon from '../../../components/utils/icons/DollaIcon';
import WithdrawIcon from '../../../components/utils/icons/WithdrawIcon';

import { useNavigate } from 'react-router-dom';
import LeftMoveIcon from '../../../components/utils/icons/LeftMoveIcon';
import MobileTable from './MobileTable';

const Withdrawal = () => {
  const [openModel, setOpenModel] = useState(false);
  const [showMobileTable, setShowMobileTable] = useState(false);
  const [inputWarning, setInputWarning] = useState(false);
  const navigate = useNavigate();
  const [wallet, setWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [walletAddress, setWalletAdress] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const [convertWallet, setconvertWallet] = useState('tether');
  const { data: withdraws } = useSWR(`/withdraw/`);
  const { data: user } = useSWR(`/user/`);
  const [loading, setLoading] = useState(false);
  // console.log('User', user);

  const newWallet = ['tether', 'litecoin', 'bitcoin', 'ripple', 'ethereum'];

  const walletType = ['USDT', 'LTC', 'BTC', 'XRP', 'ETH'];

  useEffect(() => {
    if (wallet == walletType[0]) {
      setconvertWallet(newWallet[0]);
    } else if (wallet == walletType[1]) {
      setconvertWallet(newWallet[1]);
    } else if (wallet == walletType[2]) {
      setconvertWallet(newWallet[2]);
    } else if (wallet == walletType[3]) {
      setconvertWallet(newWallet[3]);
    } else if (wallet == walletType[4]) {
      setconvertWallet(newWallet[4]);
    }
  }, [wallet, amount]);

  // console.log('SET WALLET', convertWallet);

  //   these are the coins will need to pass depending on the coin you selected [litecoin,ripple,ethereum,bitcoin,tether]

  // Function to convert a coin amount to USD using CoinGecko API

  // useEffect(() => {}, [convertWallet, amount]);

  let userData = {
    amount,
    wallet_type: wallet || walletType[0],
    wallet_address: walletAddress,
    usdt_amount: usdtAmount,
  };

  console.log(`User Data`, userData);
  console.log(`ConvertWallet`, convertWallet);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const convertToUSD = async (coin, amount) => {
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
      const { data } = await axios.get(url);
      // Check if coin exists in the data
      if (!data[coin]) {
        throw new Error(`Coin ${coin} not found in API response`);
      }
      const price = await data[coin].usd; // Get USD price per coin
      console.log('Coin Data', price, data);
      const usdEquivalent = amount * price; // Calculate USD equivalent
      return usdEquivalent.toFixed(2); // Return formatted USD amount
    };
    const fetchData = async () => {
      try {
        let converted = await convertToUSD(convertWallet, amount);
        // console.log('CONVERTED', converted, convertWallet);
        setUsdtAmount(converted);
      } catch (error) {
        // Handle errors if needed
        console.error('Error in fetchData:', error.message);
      }
    };
    fetchData();
    setTimeout(async () => {
      try {
        const response = await axios.post('/withdraw/', userData);
        if (response) {
          console.log('RESPONSE', response);
          setLoading(false);
          toast.success('success');
          setOpenModel(false);
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.data?.UsdtAmount == 'ou have insufficient funds') {
          toast.error('You have insufficient funds');
          setLoading(false);
          setOpenModel(false);
        } else {
          toast.error('An error occured, try again');
          setLoading(false);
          setOpenModel(false);
        }
      }
    }, 2000);
  };

  const handleOpenModal = () => {
    if (walletAddress && amount) {
      setOpenModel(true);
    } else {
      setInputWarning(true);
    }
  };

  return (
    <div className=" h-[100%] no-scrollbar bg-white p-4 text-gray-700 overflow-scroll relative">
      <div className=" text-2xl font-bold my-3 mb-10 grid grid-cols-3 gap-12 items-center ">
        <div className="md:hidden cursor-pointer" onClick={() => navigate(-1)}>
          <LeftMoveIcon />
        </div>
        Withdrawal
      </div>
      <div>
        <div className="flex flex-col gap-10 pb-24">
          <div className="md:flex gap-10  font-semibold">
            <div className="flex flex-col md:w-[50%] mb-10 md:mb-0 relative">
              <label>Source wallet</label>
              <input
                type="text"
                value={user?.profile?.available_balance}
                className="rounded-lg px-12 border-2 py-4"
              />
              <div className="absolute top-10 left-3">
                <DollaIcon />
              </div>
            </div>
            <div className="flex flex-col md:w-[50%]">
              <label>Asset destination</label>

              <select
                value={wallet || walletType[0]}
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
          </div>
          <div className="hidden md:w-[48%] items-center gap-5 relative md:grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <WithdrawIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          <div className="md:flex gap-10 font-semibold">
            {/* FIRST PART */}
            <div className="hidden md:flex flex-col md:w-[50%] ">
              <label>Withdrawal wallet address</label>
              <input
                value={walletAddress}
                onChange={(e) => setWalletAdress(e.target.value)}
                type="text"
                required
                className={`rounded-lg px-6 border-2  py-4 ${
                  inputWarning && 'border-red-600'
                }`}
                placeholder="reciever_wallet_address$lkjhyiu878yfs44rs"
              />
            </div>
            <div
              data-tooltip="We are Pennstate!"
              className="md:hidden flex flex-col md:w-[50%] mb-12 md:mb-0"
            >
              <label>Withdrawal amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className={`rounded-lg px-6 border-2 py-4 ${
                  inputWarning && 'border-red-600'
                }`}
                placeholder="0.00 $"
              />
            </div>
            <div className="md:hidden flex justify-center m-12 ">
              <WithdrawIcon />
            </div>
            {/* SECOND PART */}
            <div className="md:hidden flex flex-col md:w-[50%] ">
              <label>Withdrawal wallet address</label>
              <input
                value={walletAddress}
                onChange={(e) => setWalletAdress(e.target.value)}
                type="text"
                className={`rounded-lg px-6 border-2 py-4 ${
                  inputWarning && 'border-red-600'
                }`}
                placeholder="reciever_wallet_address$lkjhyiu878yfs44rs"
              />
            </div>
            <div
              title="enter the amount to withdraw here"
              className="hidden md:flex flex-col md:w-[50%] mb-12 md:mb-0"
            >
              <label>Withdrawal amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className={`rounded-lg px-6 border-2 py-4 ${
                  inputWarning && 'border-red-600'
                }`}
                placeholder="0.00 $"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between md:w-[48%] text-xl items-center">
            {/* <div className=" text-red-600 font-semibold mb-28 md:mb-0">
              You are withdrawing ${usdtAmount || '0.00'}
            </div> */}
            <button
              title="Click here to proceed"
              onClick={handleOpenModal}
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
                onClick={handleOpenModal}
                className="bg-[#352F84] text-white rounded-md px-6 py-4"
              >
                Make withdrawal
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile table */}
      <MobileTable
        withdraws={withdraws}
        showMobileTable={showMobileTable}
        address={'WALLET'}
      />
      <div className={`hidden md:block border shadow-md`}>
        <div className="bg-[#8E0789] text-white p-3 md:text-2xl font-semibold">
          Withdrawal History
        </div>

        <div className="flex justify-between md:w-[90%] md:ml-10 text-sm ">
          <div className="m-2 p-2  md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm ">
            DATE
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            AMOUNT
          </div>
          <div className="m-2 p-2 md:px-10 bg-[#F9F9FA] shadow drop-shadow-sm">
            WALLET
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
          {withdraws?.[0].map((withdraw, idx) => (
            <div
              key={idx}
              className="flex justify-between md:w-[90%]  md:ml-10 text-xs "
            >
              {/* {console.log('Inside component', withdraw)} */}
              <div className="py-3 font-bold ">
                <div className="md:flex gap-2 ml-2">
                  {/* <p>{withdraw?.created?.split('T')[0]}</p>
                  <p>{withdraw?.created?.split('T')[1]?.split('.')[0]}</p> */}
                  <p>20-04-2000</p>
                  <p>10:26</p>
                </div>
              </div>
              <div className="py-3  md:px-10 ">{withdraw?.amount}</div>
              <div className="py-3  md:px-2 w-[100px] md:w-[150px] text-ellipsis overflow-hidden whitespace-nowrap">
                {withdraw?.wallet_address}
              </div>
              <div className="py-3   md:px-10">{withdraw?.wallet_type}</div>
              <div className="py-3   md:px-10">
                {withdraw?.verified
                  ? 'Success'
                  : !withdraw?.verified
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
                <p className="text-lg text-gray-600 font-semibold">
                  Withdrawal
                </p>
              </div>
              <div className="py-5">
                <label htmlFor="asset">Asset destination</label>
                <div>
                  {/* <DollaIcon /> */}
                  <input
                    value={wallet || walletType[0]}
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
                  {loading ? (
                    <CircularProgress sx={{ color: 'white' }} size={20} />
                  ) : (
                    'Confirm Withdrawal'
                  )}
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
