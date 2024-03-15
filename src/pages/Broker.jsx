import React, { useState } from 'react';
import BrokerModal from '../components/modal/BrokerModal';
import { brokers } from '../data/client';

export default function Broker() {
  const [openModal, setOpenModal] = useState(false);
const [selectBroker, selectedBrokers] = useState([])
  const onSelect = (id) => {
    const selectedBroker = brokers.find((item) => item.id === id);
    selectedBrokers(selectedBroker)
    setOpenModal(true);
  };

  return (
    <div className="flex font-[poppins]">
      <div className="brokersbg bg-[#D2C2D2] h-[100vh] py-8 p-4 text-center">
        <h2 className="text-3xl text-center my-5 font-bold">Broker Matchup</h2>
        <p className="text-center my-5">
          Please select the <span className="text-[#8E0789]">broker</span> for
          your preferred <span className="text-[#8E0789]">investment</span>{' '}
        </p>
        <p>You can only choose one permanent broker</p>
      </div>
      <div className="w-full  p-8 ">
        <h2 className="text-3xl font-bold my-4">Brokers</h2>

        <div className="grid xl:grid-cols-3 gap-y-8 grid-cols-1">
          {brokers?.map((item, idx) => (
            <div className="flex items-center space-x-5" key={idx}>
              <img
                src={item.image}
                alt=""
                className="w-[100px] h-[100px] object-contain rounded-[50%] "
              />
              <div className=" flex flex-col items-start space-y-1 ">
                <h2 className="text-3xl">{item.title}</h2>
                <p className="text-2xl">{item.role}</p>
                <button onClick={() => onSelect(item.id)} className="text-2xl">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModal && (
        <BrokerModal
          setOpenModal={setOpenModal}
          openModal={openModal}
          brokers={selectBroker}
        />
      )}
    </div>
  );
}
