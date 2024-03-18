import { ClickAwayListener, Rating } from '@mui/material';
import React, { useState } from 'react';
import CancelIcon from '../utils/reusables/CancelIcon';

export default function BrokerModal({
  setOpenModal,
  handleSelectBroker,
  selectedBroker,
  brokers,
}) {
  //   console.log(brokers);

  const [value, setValue] = useState(2);

  return (
    <div className=" fixed top-0 left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
      <ClickAwayListener onClickAway={() => setOpenModal(false)}>
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
              className={`w-[100px] h-[100px] object-contain rounded-[50%] ${
                selectedBroker ? 'border-2 border-green-500' : '' // Apply border-green-500 if broker is selected
              }`}
            />
            <div className=" flex flex-col items-start space-y-1 ">
              <h2 className="xl:text-3xl text-xl">{brokers?.name}</h2>
              <p className="xl:text-2xl text-xl">{brokers?.regulator}</p>
            </div>
          </div>
          <Rating
            name="read-only"
            value={value}
            readOnly
            size="small"
            sx={{ color: '#8E0789' }}
          />

          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold ">Experience & Expertise:</h3>
            <p>{brokers?.years_of_experience} years</p>
          </div>
          <div className="flex flex-col gap-3 mt-5">
            <h3 className="text-xl font-semibold ">
              Why Choose John as Your Investment Broker?
            </h3>
            <p>{brokers?.investment}</p>
          </div>
          <div className="flex justify-between gap-5 mt-5">
            <button
              className="p-2 px-4 rounded-md border border-[#8E0789] "
              onClick={() => setOpenModal(false)}
            >
              Cancel
            </button>
            <button
              onClick={() => handleSelectBroker(brokers?.id)}
              className="bg-[#8E0789] text-white p-2 px-4 rounded-md"
            >
              Select as broker
            </button>
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
}
