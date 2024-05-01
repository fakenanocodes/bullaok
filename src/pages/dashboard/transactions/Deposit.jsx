import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
// import { Cookies } from 'react-cookie';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiTether, SiXrp } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import DepositModal from '../../../components/modal/DepositModal';
import DepositIcon from '../../../components/utils/icons/DepositIcon';
import LeftMoveIcon from '../../../components/utils/icons/LeftMoveIcon';
import DepositSuccess from './DepositSuccess';
import MobileDepostTable from './MobileDepositeTab';

const Deposit = () => {
  const [dropDown, setDropDown] = useState(false);
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
  const { data: user } = useSWR(`/user/`);

  // console.log('WALLET ADD', depositWallet);

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

  console.log('userData', depositWallet);

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

  const Wallets = [
    {
      name: 'bitcoin',
      value: 'BTC',
      icon: <FaBitcoin className="text-yellow-300" />,
    },
    {
      name: 'ethereum',
      value: 'ETH',
      icon: <FaEthereum className="text-[#e2e2e6]" />,
    },
    {
      name: 'litecoin',
      value: 'LTC',
      icon: <SiLitecoin className="text-[#A6A9AA]" />,
    },
    {
      name: 'tether',
      value: 'USDT',
      icon: <SiTether className="text-[#26A17B]" />,
    },
    {
      name: 'ripple',
      value: 'XRP',
      icon: <SiXrp className="text-[#FF6633]" />,
    },
  ];
  const [depositAccount, setDepositAccount] = useState(Wallets[0]);
  const availableBalance = useMemo(
    () => user?.profile?.available_balance,
    [user]
  );

  return (
    <div className=" h-[100%] no-scrollbar bg-white p-4 text-gray-700 overflow-scroll relative 00">
       <div className="py-3 px-20">
        <span className="text-3xl tracking-wider font-medium">
          New Deposit
        </span>
      </div>
      <div className="absolute left-0 right-0 border-b-2 border-b-gray-300"></div>
      {/* {openSuccess && (
        <DepositSuccess
          wallet={wallet}
          amount={amount}
          defaultWallet={depositWallet?.usdt_address}
          walletTypes={walletTypes}
          setOpenSuccess={setOpenSuccess}
        />
      )} */}

      <div>

      <div className="flex justify-between py-10 px-20 border-b-2 border-b-gray-300 items-end">
          <div className="space-y-8">
            <span className="font-semibold text-lg">From</span>
            <div className="flex flex-col gap-4">
              <span className="text-[#4A4A4A] font-medium">Select Account</span>
              <div className="relative" onMouseLeave={() => setDropDown(false)}>
                <button
                  onClick={() => setDropDown(!dropDown)}
                  className="bg-[#8E0789] p-4 w-[28vw] rounded-lg flex justify-between"
                >
                  <div className="flex gap-2 items-center">
                    {depositAccount?.icon}
                    <span className="text-white">
                      {depositAccount?.value}
                    </span>
                  </div>
                  {dropDown ? (
                    <ArrowDropUpIcon className="text-white" />
                  ) : (
                    <ArrowDropDownIcon className="text-white" />
                  )}
                </button>
                {dropDown && (
                  <div className="absolute transition-all duration-1000 top-[58px] right-0 left-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-200 shadow-lg rounded-lg space-y-2">
                    {Wallets?.map((wallet, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDepositAccount(wallet);
                          setDropDown(false);
                        }}
                        className="flex gap-2  items-center justify-start p-4 hover:bg-[#8E0789] w-full hover:rounded-lg hover:text-white"
                      >
                        {wallet?.icon}
                        <span onClick={(e) => setWallet(e.target.textContent)} className='w-full h-full text-left'>{wallet?.value}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 pb-5 w-[28vw]">
            <span className="text-[#4A4A4A] font-medium">Account detail</span>
            <span className="text-lg font-bold">
              Available Balance:{' '}
              <span className="text-xl font-bold pl-8">
                ${availableBalance}
              </span>
            </span>
          </div>
        </div>

        <div className="py-10 px-20 space-y-10">
          <span className="text-lg font-bold">To</span>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <span>Deposit Account Name</span>
              <input
                type="text"
                className="w-[28vw] rounded-lg p-3 border-[#8E0789]"
                value={user?.profile?.full_name}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>Deposit Wallet Address</span>
              <input
                type="text"
                className="w-[28vw] rounded-lg p-3  border-[#8E0789]"
                value={wallet || depositWallet?.usdt_address}
                onChange={(e) => setWalletAdress(e.target.value)}
                // value={receiverDetail?.walletAddress}
                // onChange={(e) =>
                //   setReceiverDetail({
                //     ...receiverDetail,
                //     walletAddress: e.target.value,
                //   })
                // }
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span>Deposit Amount</span>
            <input
              type="text"
              className="w-[28vw] rounded-lg p-3  border-[#8E0789]"
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


        <div className="w-full flex justify-center items-center gap-8 pt-5">
            <button className="bg-[#8E0789] bg-opacity-30 px-16 font-semibold  py-3 rounded-lg">
              Cancel
            </button>
            <button
              onClick={handleOpenModel}
              className="bg-[#8E0789] py-3 text-white rounded-lg px-8 font-semibold"
            >
              Make Deposit
            </button>
            {/* <Modal
              open={openModal}
              onClose={() => setOpenModal(false)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="flex-col flex space-y-5 font-poppins">
                  <div className="w-full flex justify-between">
                    <span className="text-xl font-semibold">Withdrawal</span>
                    <button onClick={() => setOpenModal(false)}>
                      <CloseIcon className="text-[#8E0789]" />
                    </button>
                  </div>
                  <div className=" w-full">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm ">
                          Withdrawal Wallet Address
                        </span>
                        <input
                          type="text"
                          className="rounded-lg p-3  border-[#8E0789]"
                          value={receiverDetail?.walletAddress}
                          disabled
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm ">Withdrawal amount</span>
                        <input
                          type="text"
                          className="rounded-lg p-3  border-[#8E0789]"
                          value={receiverDetail?.amount}
                          disabled
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="text-sm ">Enter account password</span>
                        <input
                          type="password"
                          className="rounded-lg p-3  border-[#8E0789]"
                          value={withdrawalPrompt?.password}
                          onChange={(e) =>
                            setWithdrawalPrompt({
                              ...withdrawalPrompt,
                              password: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="absolute left-5">
                      <Checkbox
                        checked={withdrawalPrompt?.sendReceiptToEmail}
                        onChange={() =>
                          setWithdrawalPrompt({
                            ...withdrawalPrompt,
                            sendReceiptToEmail:
                              !withdrawalPrompt?.sendReceiptToEmail,
                          })
                        }
                      />
                      <span className="text-sm">
                        Send receipt to email address
                      </span>
                    </div>
                    <div className="absolute bottom-8 right-10 space-x-10">
                      <button
                        onClick={() => setOpenModal(false)}
                        className="border-[#8E0789] border p-2 text-sm font-medium rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={confirmWithdrawal}
                        className="bg-[#8E0789] px-4 py-2 text-white text-sm font-medium rounded-md"
                      >
                        {loading ? (
                          <CircularProgress color="inherit" size={15} />
                        ) : (
                          'Confirm Withdrawal'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal> */}
          </div>








        {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}
        <div className="flex flex-col gap-10 pb-24">
          
          
          
          <div className="md:flex md:justify-between md:w-[48%] text-xl items-center">
            {/* <div className=" text-red-600 font-semibold mb-28 md:mb-0">
              You are depositing ${usdtAmount || '0.00'}
            </div> */}
            <div className="md:hidden flex justify-between text-sm">
              
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
