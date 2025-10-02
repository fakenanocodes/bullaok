import { ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import CancelIcon from '../../../components/utils/icons/CancelIcon';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiTether, SiXrp } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import ReceiptModal from '../../../components/modal/ReceiptModal';

const Deposit = () => {
  const [dropDown, setDropDown] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [successPage, setSuccessPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCoin, setSelectedCoin] = useState('bitcoin');
  const [walletTypes, setWalletTypes] = useState('BTC');
  const [usdtAmount, setUsdtAmount] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);

  const { data: user } = useSWR(`/user/`);
  const { data: walletAddress } = useSWR('/walletaddress/');

  console.log("wallet",walletAddress);
  
  const navigate = useNavigate();

  const Wallets = [
    { name: 'bitcoin', value: 'BTC', icon: <FaBitcoin className="text-yellow-300" /> },
    { name: 'ethereum', value: 'ETH', icon: <FaEthereum className="text-[#e2e2e6]" /> },
    { name: 'litecoin', value: 'LTC', icon: <SiLitecoin className="text-[#A6A9AA]" /> },
    { name: 'tether', value: 'USDT', icon: <SiTether className="text-[#26A17B]" /> },
    { name: 'ripple', value: 'XRP', icon: <SiXrp className="text-[#FF6633]" /> },
  ];

  const [depositAccount, setDepositAccount] = useState(Wallets[0]);

// walletMock
  const walletMock = {
    BTC: walletAddress?.bitcoin_address,
    ETH: walletAddress?.ethereum_address, // Fixed typo here
    LTC: walletAddress?.litecoin_address,
    USDT: walletAddress?.usdt_address,
    XRP: walletAddress?.xrp_address,
  };

  // 🔁 Coin Conversion (with fix for USDT)
  useEffect(() => {
    async function convertToUSD(coin, amount) {
      if (!amount || isNaN(amount)) {
        setUsdtAmount('');
        return;
      }

      try {
        // if (coin === 'tether') {
        //   setUsdtAmount(amount); // Direct 1:1 for USDT
        //   return;
        // }

        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data[coin]) {
          throw new Error(`Coin ${coin} not found`);
        }

        const price = data[coin].usd;
        const usdEquivalent = amount / price;
        coin === 'tether'? setUsdtAmount(usdEquivalent.toFixed(2)) : setUsdtAmount(usdEquivalent.toFixed(5));
      } catch (error) {
        console.error('Conversion error:', error);
        setUsdtAmount('');
      }
    }

    convertToUSD(selectedCoin, amount);
  }, [selectedCoin, amount]);

  const userData = {
    amount: usdtAmount,
    wallet_type: walletTypes,
    wallet_address: wallet || walletMock?.USDT,
    usdt_amount: amount,
  };

  const handleDeposit = () => {
    if (amount) {
      setOpenModel(true);
    } else {
      toast.error('Deposit amount is required');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/deposit/', userData);
      setLoading(false);
      toast.success('Deposit successful');
      setOpenModel(false);
      setSuccessPage(true);
      setOpenSuccess(!openSuccess);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const availableBalance = useMemo(
    () => user?.profile?.available_balance,
    [user]
  );

  const handleCopyWallet = (walletAddress) => {
    navigator.clipboard.writeText(walletAddress);
    toast.success("wallet address copied to clipboard");
  };
  return (
    <div className=" h-[100%] no-scrollbar bg-white p-4 text-gray-700 overflow-scroll relative 00">
      <div className="py-3 px-20">
        <span className="text-3xl tracking-wider font-medium">New Deposit</span>
      </div>
      <div className="absolute left-0 right-0 border-b-2 border-b-gray-300"></div>

      <div>
      <div className="lg:flex-row flex-col flex justify-between space-y-5 lg:space-y-0 py-10 lg:px-20 border-b-2 border-b-gray-300">
          <div className="space-y-8">
            <span className="font-semibold text-lg">From</span>
            <div className="flex flex-col gap-4">
              <span className="text-[#4A4A4A] font-medium">Select Account</span>
                <div className="relative" onMouseLeave={() => setDropDown(false)}>
                  <button
                    onClick={() => setDropDown(!dropDown)}
                    className="bg-[#8E0789] p-4 w-full lg:w-[28vw] rounded-lg flex justify-between"
                  >
                    <div className="flex gap-2 items-center">
                      {depositAccount?.icon}
                      <span className="text-white">{depositAccount?.value}</span>
                    </div>
                    {dropDown ? (
                      <ArrowDropUpIcon className="text-white" />
                    ) : (
                      <ArrowDropDownIcon className="text-white" />
                    )}
                  </button>
                  {dropDown && (
                <div className="absolute top-[58px] right-0 left-0 bg-white border border-gray-200 shadow-lg rounded-lg space-y-2 z-50">
                  {Wallets.map((wallet, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDepositAccount(wallet);
                        setWallet(walletMock[wallet.value]);
                        setSelectedCoin(wallet.name);
                        setWalletTypes(wallet.value);
                        setDropDown(false);
                      }}
                      className="flex gap-2 items-center justify-start p-4 hover:bg-[#8E0789] w-full hover:rounded-lg hover:text-white"
                    >
                      {wallet.icon}
                      <span>{wallet.value}</span>
                    </button>
                  ))}
                </div>
              )}
                </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 pb-5 justify-center ">
            <span className="text-[#4A4A4A] font-medium">Account detail</span>
            <span className="flex text-lg font-bold">
              Available Balance:{' '}
              <span className="text-xl font-bold pl-8">
                ${availableBalance}
              </span>
            </span>
          </div>
        </div>

        <div className="py-10 px-0 lg:px-20 space-y-10">
          <span className="text-lg font-bold">To</span>
          <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 justify-between items-center">
            <div className="flex flex-col gap-2 w-full lg:w-fit">
              <span>Deposit Account Name</span>
              <input
                type="text"
                className="w-fuul lg:w-[28vw] rounded-lg p-3 border-[#8E0789]"
                value={user?.profile?.full_name}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2 w-full lg:w-fit">
              <span>Deposit Wallet Address</span>
              <div className="flex gap-2 w-full lg:w-fit">
                <input
                  type="text"
                  className="w-full lg:max-w-[28vw] rounded-lg p-3  border-[#8E0789]"
                  value={wallet || walletMock?.BTC}
                  disabled
                />
                <button 
                  type='button'
                  className='rounded-lg p-3 border  border-[#8E0789] w-fit whitespace-nowrap hover:scale-95 transition-all duration-300'
                  onClick={() => handleCopyWallet(wallet || walletMock?.BTC)}
                >
                  copy Address
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full lg:w-fit">
            <span>Deposit Amount</span>
            <input
              type="text"
              className="w-full lg:w-[28vw] rounded-lg p-3  border-[#8E0789]"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              // value={receiverDetail?.amount}
              // onChange={(e) =>
              // setReceiverDetail({
              //   ...receiverDetail,
              //   amount: Number(e.target.value),
              // })
              // }
            />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-8 pt-5">
          <button className="bg-[#8E0789] bg-opacity-30 px-16 font-semibold  py-3 rounded-lg w-full lg:w-fit">
            Cancel
          </button>
          <button
            onClick={()=>handleDeposit()}
            className="bg-[#8E0789] py-3 text-white rounded-lg px-8 font-semibold w-full lg:w-fit"
          >
            Make Deposit
          </button>
        </div>

       
      </div>
      {openModel && (
        <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
          <ClickAwayListener onClickAway={() => setOpenModel(false)}>
            <div className="bg-white h-fit-content w-[90%] md:w-3/5 max-w-[500px] p-4 my-6 relative rounded-[15px]">
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-semibold">Deposit</p>
                <div
                  className="cursor-pointer"
                  onClick={() => setOpenModel(false)}
                >
                  <CancelIcon />
                </div>
              </div>
              <article>
                <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
                  Deposit wallet address
                  <input
                    type="text"
                    className="block w-full border rounded-[10px] p-2 focus:border-[#8E0789] my-2 placeholder:#1C1F27 font-normal "
                    value={wallet || walletMock?.BTC}
                    disabled
                  />
                </label>
                <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
                  Deposit Amount
                  <input
                    type="number"
                    className="block w-full border rounded-[10px] p-2 focus:border-[#8E0789] my-2"
                    min={0}d
                    value={amount}
                    disabled
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
                  <input type="checkbox" className="rounded-[4px]" />
                  Send receipt to email address
                </label>
              </article>
              <div className="flex justify-end items-end h-[6vmax]">
                <article className="flex gap-4 font-semibold text-sm">
                  <button className="text-[#000000]  w-[100px] h-[32px] rounded-md border border-[#8E0789] hover:bg-[#8E07894D] "
                  onClick={() => setOpenModel(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-[#8E0789]  w-[172px] h-[32px] rounded-md text-sm "
                    onClick={(e) => handleSubmit(e)}
                  >
                    Confirm transfer
                  </button>
                </article>
              </div>
            </div>
          </ClickAwayListener>
        </div>
      )}

      {/* Transaction reciept */}
      {successPage && (
        <ReceiptModal
        type={'Deposit'}
        // address1={'nhfjeknhrhhnfjjfjjejfejejjijrjjirgn'}
        address2={wallet || walletMock?.BTC}
        amount={amount}
        usdtAmount={usdtAmount}
        open={successPage}
        closeFunc={setSuccessPage}
        walletType = {walletTypes}
        obj={()=>setAmount("")}
      />
      )}
    </div>
  );
};
export default Deposit;
