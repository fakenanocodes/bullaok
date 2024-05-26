import { useMemo, useState } from 'react';
// import { Cookies } from 'react-cookie';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, CircularProgress, Modal } from '@mui/material';
import axios from 'axios';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiTether, SiXrp } from 'react-icons/si';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import SuccessIcon from '../../../components/utils/icons/SuccessIcon';

const Withdrawal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [successPage, setSuccessPage] = useState(false);
  // const { data: withdraws } = useSWR(`/withdraw/`);
  const { data: user } = useSWR(`user/`);
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
      return;
    }
    if (availableBalance < receiverDetail?.amount) {
      toast.error('Insufficient Balance', {
        hideProgressBar: false,
        autoClose: 2000,
        position: 'top-right',
      });
      return;
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

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector('.receipt'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
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
        .then(() => {
          toast.success('Your transaction has been filled', {
            hideProgressBar: false,
            autoClose: 2000,
            position: 'top-right',
          });
          setOpenModal(false);
          setSuccessPage(true);
        })
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
    height: '80%', // Change to auto for responsiveness
    maxHeight: '500px', // Maintain max height for larger screens
    borderRadius: 4,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '@media (max-width: 768px)': {
      width: '80%', // Adjust width for smaller screens
      height: '80%', // Remove max height constraint
    },
  };

  const recieptData = [
    {
      title: 'Withdrawal Wallet Address',
      detail: 'OxF6Hgj6JIo690M...',
    },
    {
      title: 'Transaction Date',
      detail: '24/05/2024, 13:22:14',
    },
    {
      title: 'Transaction Type',
      detail: 'Withdrawal',
    },
    {
      title: 'Destination Wallet Address',
      detail: 'OxF6Hgj6JIo690M...',
    },
    {
      title: 'Amount',
      detail: '0.00 USD',
    },
  ];

  return (
    <div className=" h-[100%] no-scrollbar bg-white p-8 text-gray-700 overflow-scroll relative rounded-xl font-poppins">
      <div className="py-3 lg:px-20">
        <span className="lg:text-3xl text-lg tracking-wider font-medium">
          New Withdrawal
        </span>
      </div>
      <div className="absolute left-0 right-0 border-b-2 border-b-gray-300"></div>
      <div className="lg:flex-row flex-col flex justify-between space-y-5 lg:space-y-0 py-10 lg:px-20 border-b-2 border-b-gray-300 items-end">
        <div className="lg:space-y-8 space-y-3 flex flex-col w-full">
          <span className="font-semibold text-lg">From</span>
          <div className="flex flex-col gap-4 w-full">
            <span className="text-[#4A4A4A] font-medium">Select Account</span>
            <div className="relative " onMouseLeave={() => setDropDown(false)}>
              <button
                onClick={() => setDropDown(!dropDown)}
                className="bg-[#8E0789] p-4 lg:w-[28vw] w-full rounded-lg flex justify-between"
              >
                <div className="flex gap-2 items-center">
                  {withdrawalAccount?.icon}
                  <span className="text-white">{withdrawalAccount?.value}</span>
                </div>
                {dropDown ? (
                  <ArrowDropUpIcon className="text-white" />
                ) : (
                  <ArrowDropDownIcon className="text-white" />
                )}
              </button>
              {dropDown && (
                <div className="absolute transition-all duration-1000 top-[58px] right-0 left-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-200 shadow-lg rounded-lg space-y-2 lg:w-[28vw] w-full">
                  {Wallets?.map((wallet, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setWithdrawalAccount(wallet);
                        setDropDown(false);
                      }}
                      className="flex gap-2 items-center justify-start p-4 hover:bg-[#8E0789] w-full hover:rounded-lg hover:text-white"
                    >
                      {wallet?.icon}
                      <span>{wallet?.value}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 lg:space-y-8 pb-5 lg:w-[28vw] w-full">
          <span className="text-[#4A4A4A] font-medium">Account detail</span>
          <span className="text-lg font-bold">
            Available Balance:{' '}
            <span className="text-xl font-bold pl-8">
              ${availableBalance === undefined ? '0' : availableBalance}
            </span>
          </span>
        </div>
      </div>
      <div className="py-10 lg:px-20 lg:space-y-10 space-y-6">
        <span className="text-lg font-bold">To</span>
        <div className="flex space-y-5 flex-col w-full">
          <div className="flex justify-between items-center lg:flex-row flex-col space-y-5">
            <div className="flex flex-col gap-2 w-full">
              <span>Withdrawal Account Name</span>
              <input
                type="text"
                className="lg:w-[28vw] w-full rounded-lg p-3 border-[#8E0789]"
                value={user?.profile?.full_name}
                disabled
              />
            </div>
            <div className="flex flex-col gap-2  w-full">
              <span>Withdrawal Wallet Address</span>
              <input
                type="text"
                className="lg:w-[28vw] w-full rounded-lg p-3  border-[#8E0789]"
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
              className="lg:w-[28vw] w-full rounded-lg p-3  border-[#8E0789]"
              value={receiverDetail?.amount}
              onChange={(e) =>
                setReceiverDetail({
                  ...receiverDetail,
                  amount: Number(e.target.value),
                })
              }
            />
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-8 pt-5 lg:flex-row flex-col">
          <button className="bg-[#8E0789] bg-opacity-30 px-16 font-semibold  py-3 rounded-lg lg:w-[30%] w-full">
            Cancel
          </button>
          <button
            onClick={makeWithdrawal}
            className="bg-[#8E0789] py-3 text-white rounded-lg px-8 font-semibold lg:w-[30%] w-full"
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
                  <div className="absolute lg:bottom-8 bottom-6 lg:right-8 right-0 lg:justify-end justify-center items-start w-full space-x-10 flex lg:flex-row ">
                    <button
                      onClick={() => setOpenModal(false)}
                      className="border-[#8E0789] border p-2 text-sm font-medium rounded-md"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmWithdrawal}
                      className="bg-[#8E0789] lg:p-2 p-[10px] text-white text-sm font-medium rounded-md"
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

          {/* The transaction reciept  */}
          {successPage && (
            <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
              {/* Recipt box */}
              <div className="bg-white w-[95%] h-fit-content sm:w-[60%] md:w-3/5 max-w-[380px] p-4 my-6 relative rounded-[15px]">
                <div className="flex justify-center">
                  <SuccessIcon />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col items-center">
                    <p className="font-[500] text-black">
                      Transaction Success!
                    </p>
                    <p className="text-[13px]">
                      Your withdrawal has been successfully done
                    </p>
                  </div>

                  <p className="text-[12px]">Total Withdrawal</p>
                  <p className="text-black font-[500] flex gap-2">
                    <span className="text-[#8E0789]">0.00</span>BTC
                  </p>

                  {/* Transaction details */}
                  <table>
                    {recieptData?.map((data, index) => (
                      <tr key={index} className="h-fit p-0 font-[500]">
                        <td className="text-[12px] py-2 ">{data?.title}</td>
                        <td
                          className={`text-[12px] text-[${data.title === 'Amount' ? '#8E0789' : 'rgba(7, 7, 7, 0.7)'}] flex justify-end py-2`}
                        >
                          {data?.detail}
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
                <div className="flex justify-end items-end h-[6vmax]">
                  <article className="flex gap-4 font-semibold text-sm">
                    <button
                      className=" w-[100px] h-[32px] rounded-md text-[#8E0789] font-[700]"
                      onClick={() => {
                        handleCaptureClick();
                        setSuccessPage(false);
                      }}
                    >
                      Download
                    </button>
                    <button className="text-white bg-[#8E0789]  w-[80px] h-[32px] rounded-md text-sm ">
                      Share
                    </button>
                  </article>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Withdrawal;
