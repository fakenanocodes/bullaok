import { ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
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

  const [transferDetails, setTransferDetails] = useState({
    email: '',
    usdt_amount: 0,
  });
  const [available_balance, setAvailableBalance] = useState(0);
  //Function that fetches user profile
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('/user/');
      console.log('RESPONSE', response);
      setAvailableBalance(response.data.profile.available_balance);
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  //Input handler
  const inputHandler = (e) => {
    setTransferDetails({
      ...transferDetails,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);

  let userData = {
    email: '',
    usdt_amount: '0',
  };

  const inputDetails = [
    {
      name: 'Payee Name',
      type: 'text',
      placeholder: 'John Doe',
    },
    {
      name: 'Payee Email Address',
      type: 'email',
      placeholder: 'johndoe@gmail.com',
    },
    {
      name: 'Transfer Amount',
      type: 'number',
      placeholder: '$0.00',
    },
  ];
  function validateEmail(email) {
    // Regular expression pattern for validating email addresses
    const  pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return pattern.test(email);
  }


  const formSubmissionHandler = async (e) => {
    e.preventDefault();
    if (!validateEmail(transferDetails.email)) {
      toast.error('Invalid email address');
      return;
    }

    try {
      const response = await axios.post('/transfer/', transferDetails);
      console.log('RESPONSE', response);
      toast.success(
        <pre className="inter-font">
          <strong>Success</strong>
          <p>{response}</p>
        </pre>
      );
    } catch (error) {
      if (error) toast.error(
        <pre className='inter-font'>
          <strong>Error</strong>
          <p>{error.response.data}</p>
        </pre>
      );
    } finally {
      setOpenModel(false);
    }
    setTransferDetails()
     setTransferDetails({
       ...transferDetails,
       email: '',
        usdt_amount: 0,
     });
  };

  return (
    <section className=" h-[100%] bg-white no-scrollbar  text-gray-700 relative overflow-y-scroll rounded-[20px] font-poppins">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 text-sm font-medium gap-12">
          <article className="font-medium">
            <h4 className="text-[#4A4A4A] py-4">Select Account</h4>
            <button className="bg-[#8E0789] rounded-[10px] h-[66px]  w-full sm:w-[70%] text-white">
              My main account
            </button>
          </article>
          <article>
            <p className="py-7 text-[#4A4A4A]">Account Details</p>
            <h2 className="text-[#000000] font-semibold">
              Avaliable balance: <span>{available_balance}</span>
            </h2>
          </article>
        </div>
      </div>
      <div className="px-10 mx-4 my-4">
        <h4 className="font-medium text-[#000000]">To</h4>
        <form className="grid  grid-cols-1 sm:grid-cols-2">
          {inputDetails.map((input, index) => (
            <label
              key={index}
              className="text-[#4A4A4A] text-sm block py-2 font-medium"
            >
              {input.name}
              <input
                type={input.type}
                className="block w-full sm:w-[70%] border rounded-[10px] p-2 focus:border-[#8E0789] my-2"
                placeholder={input.placeholder}
                onChange={(e) => {
                  if (input.name === 'Transfer Amount') {
                    setAmount(e.target.value);
                  } else {
                    setEmailAdress(e.target.value);
                  }
                }}
              />
            </label>
          ))}
        </form>
      </div>
      <div className="flex justify-center">
        <article className="flex flex-col sm:flex-row gap-4 font-semibold text-sm">
          <button className="text-[#000000] bg-[#8E07894D] w-[100%] h-[55px] rounded-md">
            Cancel
          </button>
          <button
            className="text-white bg-[#8E0789] w-[244px] h-[55px] rounded-md text-sm "
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
              <form onSubmit={formSubmissionHandler}>
                <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
                  Payee email address
                  <input
                    type="email"
                    className="block w-full border rounded-[10px] p-2 focus:border-[#8E0789] my-2 placeholder:#1C1F27 font-normal "
                    placeholder="johndoe@gmail.com"
                    value={transferDetails.email}
                    name="email"
                    onChange={(e) => inputHandler(e)}
                    required
                  />
                </label>
                <label className="text-[#4A4A4A] text-sm block py-2 font-medium">
                  Transfer Amount
                  <input
                    type="number"
                    className="block w-full border rounded-[10px] p-2 focus:border-[#8E0789] my-2"
                    min={0}
                    placeholder="$0.00"
                    name="usdt_amount"
                    onChange={(e) => inputHandler(e)}
                    value={transferDetails.usdt_amount}
                    required
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
                <div className="flex justify-center sm:justify-end items-end mt-4 ">
                  <article className="flex flex-col sm:flex-row gap-4 font-semibold text-sm">
                    <button className="text-[#000000]  w-full sm:w-[100px] h-[51px] rounded-md border border-[#8E0789] hover:bg-[#8E07894D] ">
                      Cancel
                    </button>
                    <button
                      className="text-white bg-[#8E0789]  w-[172px] h-[51px] rounded-md text-sm "
                      onClick={() => setOpenModel(true)}
                    >
                      Confirm transfer
                    </button>
                  </article>
                </div>
              </form>
            </div>
          </ClickAwayListener>
        </div>
      )}
    </section>
  );
};
export default Transfer;
