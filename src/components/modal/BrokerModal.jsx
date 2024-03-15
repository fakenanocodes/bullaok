import { CircularProgress, ClickAwayListener } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { handleGenericError } from '../../config/mixin';
import CancelIcon from '../utils/reusables/CancelIcon';

export default function BrokerModal({ handleSubmit, setOpenModal, brokers }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  console.log(brokers);
  async function submit() {
    setLoading(true);
    try {
      axios.post('/brokers/create').then((res) => {
        console.log(res);
        setLoading(false);
        setSuccess(res?.message);
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
  }, 5000);
  return (
    <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
      <ClickAwayListener onClickAway={() => setOpenModal(false)}>
        <div
          onSubmit={handleSubmit}
          className="bg-white h-3/5 w-[90%] md:w-3/5 max-w-[750px] rounded-lg p-[40px] my-6 relative"
        >
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
              <h2 className="text-3xl">{brokers.title}</h2>
              <p className="text-2xl">{brokers.role}</p>
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
              onClick={handleSubmit}
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
