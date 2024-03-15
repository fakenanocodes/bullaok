import { Alert, CircularProgress, ClickAwayListener } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Cookies } from 'react-cookie';
import { handleGenericError } from '../../config/mixin';
import CancelIcon from '../utils/reusables/CancelIcon';

export default function BrokerModal({ setOpenModal, brokers }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  //   console.log(brokers);
  const cookies = new Cookies();
  const user = cookies.get('bk_user');

  async function submit() {
    setLoading(true);
    try {
      const data = {
        user: user?.id,
        broker: brokers?.id,
      };
      axios.post('/broker/user-broker/' + data).then((res) => {
        console.log(res);
        setLoading(false);
        // setSuccess(res?.message);
      });
    } catch (err) {
      console.log(err);
      const errMsg = handleGenericError(err);
      setError(errMsg);
      setLoading(false);
    }
  }

  setTimeout(() => {
    setSuccess(null);
    setError(null);
  }, 6000);

  //   const handleSelectBroker = (broker) => {
  //     setSelectedBroker(broker);
  //   };

  return (
    <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
      <ClickAwayListener onClickAway={() => setOpenModal(false)}>
        {/* {error && (
          <Alert severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        )} */}
        {/* {success && (
          <Alert severity="success" sx={{ width: '100%' }}>
            {success}
          </Alert>
        )} */}
        <div className="bg-white h-3/5 w-[90%] md:w-3/5 max-w-[750px] rounded-lg p-[40px] my-6 relative">
          <div className="flex justify-end">
            <div className="cursor-pointer" onClick={() => setOpenModal(false)}>
              <CancelIcon />
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <img
              src={brokers.image}
              alt=""
              className="w-[100px] h-[100px] object-contain rounded-[50%] "
            />
            <div className=" flex flex-col items-start space-y-1 ">
              <h2 className="text-3xl">{brokers?.name}</h2>
              <p className="text-2xl">{brokers?.regulator}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold ">Experience & Expertise:</h3>
            <p>{brokers.experience}</p>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold ">
              Why Choose John as Your Investment Broker?
            </h3>
            <p>{brokers.investment}</p>
          </div>
          <div className="flex gap-5 mt-5">
            <button
              className="p-2 px-4 rounded-md border border-[#8E0789] "
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button
              onClick={submit}
              className="bg-[#8E0789] text-white p-2 px-4 rounded-md"
            >
              {loading ? (
                <CircularProgress sx={{ color: 'white' }} size={20} />
              ) : (
                'Select as Broker '
              )}
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}
