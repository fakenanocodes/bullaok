import { ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
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

const Deposit = () => {
  const [openModel, setOpenModel] = useState(false);
  const [showMobileTable, setShowMobileTable] = useState(false);
  const [wallet, setWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('');
  const [walletAddress, setWalletAdress] = useState('');
  const [walletTypes, setWalletTypes] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const { data: deposits } = useSWR(`/deposit/`);
  const { data: depositWallet } = useSWR('/walletaddress/');
  console.log('DEPOSIT', deposits);
  console.log('DEPOSIT WALLET', depositWallet);

  const walletType = ['litecoin', 'ripple', 'ethereum', 'bitcoin', 'tether'];

  let walletMock = {
    bitcoin_address: 'BTCwrtewt3ertrwert',
    litecoin_address: 'LTCdfgerty4565tetert',
    xrp_address: 'XRPrterytrjyukgkhjl',
    etherum_address: 'ETHytertdgyuthftdhr',
    usdt_address: 'USDTdfhfyufdhdfydrhfhhg',
  };

  useEffect(() => {
    if (wallet == walletMock.litecoin_address) {
      setSelectedCoin(walletType[0]);
      setWalletTypes('LTC');
    } else if (wallet == walletMock.xrp_address) {
      setSelectedCoin(walletType[1]);
      setWalletTypes('XRP');
    } else if (wallet == walletMock.etherum_address) {
      setSelectedCoin(walletType[2]);
      setWalletTypes('ETH');
    } else if (wallet == walletMock.bitcoin_address) {
      setSelectedCoin(walletType[3]);
      setWalletTypes('BTC');
    } else if (wallet == walletMock.usdt_address) {
      setSelectedCoin(walletType[4]);
      setWalletTypes('USDT');
    }
  }, [wallet]);

  console.log('SELECTED COIN', selectedCoin);

  //code to get USDT_AMOUNT
  //these are the coins will need to pass depending on the coin you selected
  //[litecoin, ripple, ethereum, bitcoin, tether]
  // Function to convert a coin amount to USD using CoinGecko API
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

      return `${usdEquivalent.toFixed(2)} USD`; // Return formatted USD amount
    }
    setUsdtAmount(convertToUSD(selectedCoin, amount));
  }, [wallet, amount]);

  // Function to convert USD amount to a coin equivalent
  async function convertToCoin(coin, usdAmount) {
    // First convert USD to BTC to use existing 'convertToUSD' function
    const btcEquivalent = await convertToUSD(coin, usdAmount);

    // Extract BTC amount from the formatted string
    const btcAmount = parseFloat(btcEquivalent.split(' ')[0]);

    // Calculate coin equivalent based on the USD price of the coin
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
    const response = await fetch(url);
    const data = await response.json();

    // Check if coin exists in the data
    if (!data[coin]) {
      throw new Error(`Coin ${coin} not found in API response`);
    }
    console.log(data);
    const price = data[coin]?.usd; // Get USD price per coin
    const coinEquivalent = usdAmount / price; // Calculate coin equivalent

    return `${coinEquivalent.toFixed(8)} ${coin}`; // Return formatted coin amount with 8 decimal places
  }

  async function convertCoinToCoin(fromCoin, toCoin, amount) {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${fromCoin},${toCoin}&vs_currencies=usd`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Check if coins exist in the data
    if (!data[fromCoin] || !data[toCoin]) {
      throw new Error(
        `Coins ${fromCoin} or ${toCoin} not found in API response`
      );
    }

    // Get USD prices per coin
    const fromCoinPrice = data[fromCoin].usd;
    const toCoinPrice = data[toCoin].usd;

    // Calculate conversion rate (toCoin price per 1 unit of fromCoin)
    const conversionRate = toCoinPrice / fromCoinPrice;

    // Calculate equivalent amount in the target coin
    const targetAmount = amount * conversionRate;

    return `${targetAmount.toFixed(8)} ${toCoin}`; // Return formatted target coin amount with 8 decimal places
  }
  // Example usage
  // (async () => {
  //   try {
  //     const usdEquivalent = await convertToUSD('tether', 1);
  //     console.log(usdEquivalent); // Output: 1999250.00 USD

  //     const btcEquivalent = await convertToCoin('tether', 1000);
  //     console.log(btcEquivalent);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // })();

  //items to send
  let userData = {
    amount,
    wallet_type: walletTypes,
    wallet_address: wallet,
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
              <label>Deposit wallet</label>
              <select
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
              >
                {/* const walletType = ['USDT', 'LTC', 'BTC', 'XRP', 'ETH']; */}
                {/* {walletType.map((type, idx) => (
                  <option
                    key={idx}
                    value={type}
                    className="cursor-pointer flex gap-3"
                  >
                    {type}
                  </option>
                ))} */}
                <option value={walletMock.usdt_address}>USDT</option>
                <option value={walletMock.litecoin_address}>LTC</option>
                <option value={walletMock.bitcoin_address}>BTC</option>
                <option value={walletMock.xrp_address}>XRP</option>
                <option value={walletMock.etherum_address}>ETH</option>
              </select>
            </div>
            {/* <div className="flex flex-col md:w-[50%]">
              <label>Asset destination</label>
              <input
                type="text"
                value={usdtAmount}
                onChange={(e) => setUsdtAmount(e.target.value)}
                className="rounded-lg px-6 border-2 py-4"
              />
            </div> */}
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
                value={wallet}
                // onChange={(e) => setWalletAdress(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="lkjhyiu878yfs44r42323sccdf"
              />
            </div>

            <div className="flex flex-col md:hidden mb-12 md:mb-0">
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
            <div className="hidden md:flex flex-col md:w-[50%] mb-12 md:mb-0">
              <label>Deposit amount</label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="text"
                className="rounded-lg px-6 border-2 py-4"
                placeholder="0.00 $"
              />
            </div>
            <div className="md:hidden flex flex-col ">
              <label>Deposit wallet address</label>
              <input
                value={wallet}
                //onChange={(e) => setWalletAdress(e.target.value)}
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
                <label htmlFor="asset">Asset</label>
                <div>
                  {/* <DollaIcon /> */}
                  <input
                    value={selectedCoin}
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
