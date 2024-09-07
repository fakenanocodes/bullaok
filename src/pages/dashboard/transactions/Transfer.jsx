import { ClickAwayListener } from '@mui/material';
import axios from 'axios';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import CancelIcon from '../../../components/utils/icons/CancelIcon';
import SuccessIcon from '../../../components/utils/icons/SuccessIcon';
import MobileTransferTable from './MobileTransferTab';
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';
import ReceiptModal from '../../../components/modal/ReceiptModal';

const Transfer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [successPage, setSuccessPage] = useState(false);
  const [open, close] = useState(false);
  const [showMobileTable] = useState(false);
  const { data: transfers } = useSWR(`/transfer/`);
  const { data: user } = useSWR(`user/`)

  const [transferDetails, setTransferDetails] = useState({
    name: '',
    email: '',
    usdt_amount: 0,
  });

    const availableBalance = useMemo(
      () => user?.profile?.available_balance,
      [user]
    );


  //Input handler
  const inputHandler = (e) => {
    setTransferDetails({
      ...transferDetails,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(transferDetails)


  const inputDetails = [
    {
      title: 'Payee Name',
      name: 'name',
      type: 'text',
      placeholder: 'John Doe',
    },
    {
      title: 'Payee Email Address',
      name: 'email',
      type: 'email',
      placeholder: 'johndoe@gmail.com',
    },
    {
      title: 'Transfer Amount',
      name: 'usdt_amount',
      type: 'number',
      placeholder: '$0.00',
    },
  ];

  const formSubmissionHandler = async (e) => {
    e.preventDefault()
    setOpenModal(false)
    try {
      const response = await axios.post('/transfer/', transferDetails);
      console.log('RESPONSE', response);
      toast.success(
        <pre className="inter-font">
          <strong>Success</strong>
          <p>{response?.data}</p>
        </pre>
      );
    setSuccessPage(!successPage);
    } catch (error) {
      if (error)
        console.log('error',error);
        
        toast.error(
          <pre className="inter-font">
            <strong>Error</strong>
            <p>{error?.response?.data?.email[0]}</p>
          </pre>
        );
    } finally {
      setOpenModal(false);
    }
    // setTransferDetails();
    // setTransferDetails({
    //   ...transferDetails,
    //   email: '',
    //   usdt_amount: 0,
    // });
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
              Avaliable balance: <span>${availableBalance == undefined ? '0' : availableBalance}</span>
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
              {input.title}
              <input
                type={input.type}
                name={input.name}
                className="block w-full sm:w-[70%] border rounded-[10px] p-2 focus:border-[#8E0789] my-2"
                placeholder={input.placeholder}
                onChange={inputHandler}
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
            onClick={() => {
              setOpenModal(true)
            }}
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

      {openModal && (
        <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
            <div className="bg-white h-fit-content w-[90%] md:w-3/5 max-w-[500px] p-4 my-6 relative rounded-[15px]">
              <div className="flex justify-between">
                <p className="text-lg text-gray-600 font-semibold">Transfer</p>
                <div
                  className="cursor-pointer"
                  onClick={() => setOpenModal(false)}
                >
                  <CancelIcon />
                </div>
              </div>
              <div>
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
                    required
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
                      onClick={formSubmissionHandler}
                    >
                      Confirm transfer
                    </button>
                  </article>
                </div>
              </div>
            </div>
        </div>
      )}

      {/* The transaction reciept  */}
      {successPage && (
        <ReceiptModal
          type={'transfer'}
          address1={transferDetails.email}
          // address2={transferDetails.email}
          amount={transferDetails.usdt_amount}
          usdtAmount={Number(transferDetails.usdt_amount).toFixed(1)}
          open={successPage}
          closeFunc={setSuccessPage}
      />
      )}
    </section>
  );
};
export default Transfer;
