import { Rating } from '@mui/material';
import React, { useState } from 'react';
import useSWR from 'swr';
import BrokerModal from '../components/modal/BrokerModal';

export default function Broker() {
  const [openModal, setOpenModal] = useState(false);
  const [selectBroker, selectedBrokers] = useState([]);
  const { data, isLoading } = useSWR('/broker/brokers/');

  const onSelect = (id) => {
    const selectedBroker = data?.find((item) => item.id === id);
    selectedBrokers(selectedBroker);
    setOpenModal(true);
  };
  console.log(data);
  const [value, setValue] = React.useState(2);

  return (
    <div className="flex font-[poppins]">
      <div className="brokersbg bg-[#D2C2D2] h-[100vh] hidden xl:block py-8 p-4 text-center">
        <h2 className="text-3xl text-center my-5 font-bold">Broker Matchup</h2>
        <p className="text-center my-5">
          Please select the <span className="text-[#8E0789]">broker</span> for
          your preferred <span className="text-[#8E0789]">investment</span>{' '}
        </p>
        <p>You can only choose one permanent broker</p>
      </div>

      <div className="w-full xl:p-8 p-0  ">
        <div className="bg-[#8E0789] h-8 xl:hidden block "></div>
        <div className="block xl:hidden py-8 p-2  text-center">
          <h2 className="text-3xl  text-center my-5 font-bold">
            Broker Matchup
          </h2>
          <p className="text-center my-5">
            Please select the{' '}
            <span className="text-[#8E0789] font-bold">broker</span> for your
            preferred{' '}
            <span className="text-[#8E0789] font-bold">investment</span>{' '}
          </p>
          <p>You can only choose one permanent broker</p>
        </div>
        <h2 className="xl:text-3xl p-2 text-2xl xl:font-bold font-semibold my-4 ">
          Brokers
        </h2>

        <div className="grid grid-cols-3 p-2 gap-y-8 ">
          {data?.map((item, idx) => (
            <div
              className="flex items-center space-x-5 xl:flex-row lg:flex-row flex-col border"
              key={idx}
            >
              <img
                src={item?.image}
                alt=""
                className="xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  rounded-[50%] "
              />
              <div className="flex flex-col items-start space-y-1 ">
                <h2 className="xl:text-2xl lg:text-2xl text-xs">
                  {item?.name}
                </h2>
                <p className="xl:text-xl lg:text-xl text-xs">
                  {item?.regulator}
                </p>
                <Rating name="read-only" value={value} readOnly size="small" />
                <button
                  onClick={() => onSelect(item.id)}
                  className="xl:text-2xl lg:text-2xl text-xs"
                >
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
          //   openModal={openModal}
          brokers={selectBroker}
        />
      )}
    </div>
  );
}
