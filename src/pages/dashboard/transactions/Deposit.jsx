import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import DepositModal from '../../../components/modal/DepositModal';
import DepositIcon from '../../../components/utils/icons/DepositIcon';
import LeftMoveIcon from '../../../components/utils/icons/LeftMoveIcon';
import DepositSuccess from './DepositSuccess';
import MobileDepostTable from './MobileDepositeTab';

const Deposit = () => {
  const [openModel, setOpenModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMobileTable, setShowMobileTable] = useState(false);
  const [wallet, setWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('tether');
  const [walletTypes, setWalletTypes] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const [showNotify, setShowNotify] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const { data: deposits } = useSWR(`/deposit/`);
  const { data: depositWallet } = useSWR('/walletaddress/');
  const navigate = useNavigate();
  const walletType = ['litecoin', 'ripple', 'ethereum', 'bitcoin', 'tether'];

  console.log('WALLET ADD', depositWallet);

  // let walletMock = {
  //   bitcoin_address: 'BTCwrtewt3ertrwert',
  //   litecoin_address: 'LTCdfgerty4565tetert',
  //   xrp_address: 'XRPrterytrjyukgkhjl',
  //   etherum_address: 'ETHytertdgyuthftdhr',
  //   usdt_address: 'USDTdfhfyufdhdfydrhfhhg',
  // };

  useEffect(() => {
    if (wallet == depositWallet?.litecoin_address) {
      setSelectedCoin(walletType[0]);
      setWalletTypes('LTC');
    } else if (wallet == depositWallet?.xrp_address) {
      setSelectedCoin(walletType[1]);
      setWalletTypes('XRP');
    } else if (wallet == depositWallet?.etherum_address) {
      setSelectedCoin(walletType[2]);
      setWalletTypes('ETH');
    } else if (wallet == depositWallet?.bitcoin_address) {
      setSelectedCoin(walletType[3]);
      setWalletTypes('BTC');
    } else if (wallet == depositWallet?.usdt_address) {
      setSelectedCoin(walletType[4]);
      setWalletTypes('USDT');
    }
  }, [wallet]);

  console.log('SELECTED COIN', selectedCoin);

  useEffect(() => {
    async function convertToUSD(coin, amount) {
      console.log('SELECTED COIN', coin, 'AMOUNT', amount);
      const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
      const response = await fetch(url);
      const data = await response.json();

      // Check if coin exists in the data
      if (!data[coin]) {
        throw new Error(`Coin ${coin} not found in API response`);
      }

      const price = data[coin]?.usd; // Get USD price per coin
      const usdEquivalent = amount * price; // Calculate USD equivalent

      return usdEquivalent.toFixed(2); // Return formatted USD amount
    }
    const fetcher = async () => {
      let converted = await convertToUSD(selectedCoin, amount);
      setUsdtAmount(converted);
    };
    fetcher();
  }, [walletTypes, amount]);

  let userData = {
    amount,
    wallet_type: walletTypes || 'USDT',
    wallet_address: wallet || depositWallet?.usdt_address,
    usdt_amount: usdtAmount,
  };
  //usdtAmount

  console.log(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('/deposit/', userData);
      console.log('RESPONSE', response.data);
      setLoading(false);
      toast.success('success');
      setOpenModel(false);
      setOpenSuccess(!openSuccess);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleOpenModel = () => {
    if (amount) {
      setOpenModel(true);
    } else {
      setShowNotify(true);
    }
  };

  return (
    <div className=" h-[100%] no-scrollbar bg-white p-4 text-gray-700 overflow-scroll relative 00">
      <div className=" text-2xl font-bold my-3 mb-10 grid grid-cols-3 gap-12 items-center ">
        <div className="md:hidden cursor-pointer " onClick={() => navigate(-1)}>
          <LeftMoveIcon />
        </div>
        Deposit
        {/* <button
          onClick={() => setOpenSuccess(!openSuccess)}
          className="bg-red-500 cursor-pointer"
        >
          Temp
        </button> */}
      </div>
      {openSuccess && (
        <DepositSuccess
          wallet={wallet}
          amount={amount}
          defaultWallet={depositWallet?.usdt_address}
          walletTypes={walletTypes}
          setOpenSuccess={setOpenSuccess}
        />
      )}
      <div>
        <div className="flex flex-col gap-10 pb-24">
          <div className="md:flex gap-10  font-semibold">
            <div className="flex flex-col md:w-[50%] mb-10 md:mb-0">
              <label>Deposit wallet</label>
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
              >
                <option value={depositWallet?.usdt_address || 'Loading...'}>
                  USDT
                </option>
                <option value={depositWallet?.litecoin_address || 'Loading...'}>
                  LTC
                </option>
                <option value={depositWallet?.bitcoin_address || 'Loading...'}>
                  BTC
                </option>
                <option value={depositWallet?.xrp_address || 'Loading...'}>
                  XRP
                </option>
                <option value={depositWallet?.etherum_address || 'Loading...'}>
                  ETH
                </option>
              </select>
            </div>
          </div>
          <div className="hidden md:w-[48%] items-center gap-5 relative md:grid grid-flow-col ">
            <div className="w-auto bg-black h-[1.3px] col-span-4 "></div>
            <div className="col-span-[1px] -ml-5">
              <DepositIcon />
            </div>
            <div className="w-auto bg-black h-[1.3px]  col-span-3 -ml-16 "></div>
          </div>
          {/* for destop view */}
          <div className=" md:flex gap-10 font-semibold ">
            <div className=" hidden md:flex flex-col md:w-[50%] ">
              <label>Deposit wallet address</label>
              <input
                value={wallet || depositWallet?.usdt_address}
                // onChange={(e) => setWalletAdress(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
              />
            </div>

            <div className="flex flex-col md:hidden mb-12 md:mb-0">
              <label>Deposit amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className={`rounded-lg px-6 border-2 ${
                  showNotify && 'border-red-500'
                } py-4`}
                placeholder="0.00 $"
              />
            </div>
            <div className="md:hidden flex justify-center m-12 ">
              <DepositIcon />
            </div>
            <div className="hidden md:flex flex-col md:w-[50%] mb-12 md:mb-0">
              <label>Deposit amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                className={`rounded-lg px-6 border-2 ${
                  showNotify && 'border-red-500'
                } py-4`}
                placeholder="0.00 $"
              />
            </div>
            <div className="md:hidden flex flex-col ">
              <label>Deposit wallet address</label>
              <input
                value={wallet || depositWallet?.usdt_address}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
              />
            </div>
          </div>
          <div className="md:flex md:justify-between md:w-[48%] text-xl items-center">
            {/* <div className=" text-red-600 font-semibold mb-28 md:mb-0">
              You are depositing ${usdtAmount || '0.00'}
            </div> */}
            <button
              onClick={handleOpenModel}
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
                onClick={handleOpenModel}
                className="bg-[#352F84] text-white rounded-md px-6 py-4"
              >
                Make deposit
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileDepostTable
        deposits={deposits}
        showMobileTable={showMobileTable}
      />
      <div className={` hidden md:block border shadow-md`}>
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
            <div
              key={idx}
              className="flex justify-between md:w-[90%]  md:ml-10 text-xs "
            >
              <div className="py-3 font-bold my-2   ">
                <div className="md:flex gap-2">
                  <p>{deposit?.created?.split('T')[0]}</p>
                  <p>{deposit?.created?.split('T')[1].split('.')[0]}</p>
                </div>
              </div>
              <div className="py-3 my-2 md:px-10 ">
                {deposit?.amount?.split('.')[0]}
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
        <DepositModal
          amount={amount}
          loading={loading}
          selectedCoin={selectedCoin}
          setOpenModel={setOpenModel}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
export default Deposit;
