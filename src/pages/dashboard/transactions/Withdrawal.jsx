import { useMemo, useState } from 'react';
// import { Cookies } from 'react-cookie';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, CircularProgress, Modal } from '@mui/material';
import axios from 'axios';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiTether, SiXrp } from 'react-icons/si';
import { toast } from 'react-toastify';
import useSWR from 'swr';

const Withdrawal = () => {
  const [openModal, setOpenModal] = useState(false);
  // const { data: withdraws } = useSWR(`/withdraw/`);
  const { data: user } = useSWR(`/user/`);
  const [loading, setLoading] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [receiverDetail, setReceiverDetail] = useState({
    walletAddress: '',
    amount: 0,
  });
  const [withdrawalPrompt, setWithdrawalPrompt] = useState({
    password: '',
    sendReceiptToEmail: false,
  });
  const [usdtEquivalent, setUsdtEquivalent] = useState(0);

  console.log(user);

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
  const [withdrawalAccount, setWithdrawalAccount] = useState(Wallets[0]);

  const availableBalance = useMemo(
    () => user?.profile?.available_balance,
    [user]
  );

  const makeWithdrawal = () => {
    if (receiverDetail?.amount === 0) {
      toast.error('Enter an amount', {
        hideProgressBar: false,
        autoClose: 2000,
        position: 'top-right',
      });
      return
    }
    if (availableBalance < receiverDetail?.amount) {
      toast.error('Insufficient Balance', {
        hideProgressBar: false,
        autoClose: 2000,
        position: 'top-right',
      });
      return
    } else {
      setOpenModal(true);
    }
  };

  const convertUsdToUsdt = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd'
      );

      setUsdtEquivalent(response?.data?.tether?.usd);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmWithdrawal = () => {
    try {
      setLoading(true);
      convertUsdToUsdt();
      const usdtToFiveDecimalPlace = (
        usdtEquivalent * receiverDetail?.amount
      ).toFixed(5);
      axios
        .post('/withdraw/', {
          amount: receiverDetail?.amount?.toString(),
          wallet_type: withdrawalAccount?.value,
          wallet_address: receiverDetail?.walletAddress,
          usdt_amount: usdtToFiveDecimalPlace.toString(),
        })
        .then(() =>
          toast.success('Your transaction has been filled', {
            hideProgressBar: false,
            autoClose: 2000,
            position: 'top-right',
          })
        )
        .catch((err) => {
          console.log(err);
          toast.error('Your transaction has been declined', {
            position: 'top-right',
            hideProgressBar: false,
            autoClose: 2000,
          });
        });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('hello');
      toast.error('Your transaction has been declined', {
        hideProgressBar: false,
        autoClose: 2000,
        position: 'top-right',
      });
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '42%',
    height: 500,
    borderRadius: 4,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className=" h-[100%] no-scrollbar bg-white p-8 text-gray-700 overflow-scroll relative rounded-xl font-poppins">
      <div className="py-3 px-20">
        <span className="text-3xl tracking-wider font-medium">
          New Withdrawal
        </span>
      </div>
      <div className="absolute left-0 right-0 border-b-2 border-b-gray-300"></div>
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
                    {withdrawalAccount?.icon}
                    <span className="text-white">
                      {withdrawalAccount?.value}
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
                          setWithdrawalAccount(wallet);
                          setDropDown(false);
                        }}
                        className="flex gap-2  items-center justify-start p-4 hover:bg-[#8E0789] w-full hover:rounded-lg hover:text-white"
                      >
                        {wallet?.icon}
                        <span>{wallet?.value}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* <select className="bg-[#8E0789] text-white outline-none rounded-xl p-4 w-[30vw]">
                <option className="text-white pl-12">
                  <span>JTC</span>
                </option>
                <option>Ethereum</option>
              </select> */}
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
              <span>Withdrawal Account Name</span>
              <input
                type="text"
                className="w-[28vw] rounded-lg p-3 border-[#8E0789]"
                value={user?.profile?.full_name}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>Withdrawal Wallet Address</span>
              <input
                type="text"
                className="w-[28vw] rounded-lg p-3  border-[#8E0789]"
                value={receiverDetail?.walletAddress}
                onChange={(e) =>
                  setReceiverDetail({
                    ...receiverDetail,
                    walletAddress: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>Withdrawal Amount</span>
            <input
              type="text"
              className="w-[28vw] rounded-lg p-3  border-[#8E0789]"
              value={receiverDetail?.amount}
              onChange={(e) =>
                setReceiverDetail({
                  ...receiverDetail,
                  amount: Number(e.target.value),
                })
              }
            />
          </div>
        {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}

          <div className="w-full flex justify-center items-center gap-8 pt-5">
            <button className="bg-[#8E0789] bg-opacity-30 px-16 font-semibold  py-3 rounded-lg">
              Cancel
            </button>
            <button
              onClick={makeWithdrawal}
              className="bg-[#8E0789] py-3 text-white rounded-lg px-8 font-semibold"
            >
              Make Withdrawal
            </button>
            <Modal
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
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Withdrawal;
