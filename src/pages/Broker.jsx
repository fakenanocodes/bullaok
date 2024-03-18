import { CircularProgress, Rating } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { TbSend } from 'react-icons/tb';
import useSWR from 'swr';
import BrokerModal from '../components/modal/BrokerModal';
import useAuthentication from '../hooks/useAuthentication';

export default function Broker() {
  const [openModal, setOpenModal] = useState(false);
  const [selectBroker, selectedBrokers] = useState([]);
  const [selectBrokerList, selectedBrokerList] = useState({});
  const { data } = useSWR('/broker/brokers/');
  const [selectedBroker, setSelectedBroker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [value, setValue] = React.useState(2);

  const onSelect = (id) => {
    const selectedBroker = data?.find((item) => item.id === id);
    selectedBrokers(selectedBroker);
    setOpenModal(true);
  };
  const handleSelectBroker = (id) => {
    const selectedBrokerItems = data?.find((item) => item?.id === id);
    if (id === selectedBrokerItems.id) {
      setSelectedBroker(true);
    }
    selectedBrokerList(selectedBrokerItems);
  };

  async function submitBroker() {
    try {
      setLoading(true);
      const data = {
        broker: selectBrokerList?.id,
      };
      axios.post(`/broker/user-broker/`, data).then((res) => {
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

  const { isLoggedIn, isLoading } = useAuthentication();
  console.log(isLoggedIn);
  if (isLoading) {
    return (
      <div className="flex justify-center ">
        <CircularProgress color="secondary" thickness={10} size={18} />
      </div>
    );
  }

  if (!isLoggedIn) {
    return null; //Create a prompt here
  }
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

      <div className="w-full xl:p-8 p-0  flex flex-col   ">
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

        <div className="grid xl:grid-cols-3 grid-cols-1 p-2 gap-y-8 ">
          {data?.map((item, idx) => (
            <div
              className="flex items-center space-x-5 xl:flex-row lg:flex-row flex-col "
              key={idx}
            >
              <img
                src={item?.image}
                alt=""
                className={`xl:w-[100px] xl:h-[100px] lg:w-[100px] lg:h-[100px] w-[50px] h-[50px]  rounded-[50%] ${selectBrokerList?.id === item?.id ? 'border-4 border-[#47AB18]' : ''} `}
              />
              <div className="flex flex-col items-start space-y-1 ">
                <div className="flex items-center gap-4">
                  <h2 className="xl:text-2xl lg:text-2xl text-xs">
                    {item?.name}
                  </h2>
                  <TbSend className="text-[#8E0789]" />
                </div>
                <p className="xl:text-xl lg:text-xl text-xs">
                  {item?.regulator}
                </p>
                <Rating
                  name="read-only"
                  value={value}
                  readOnly
                  size="small"
                  sx={{ color: '#8E0789' }}
                />
                <button
                  onClick={() => onSelect(item.id)}
                  className={`xl:text-2xl lg:text-2xl text-xs ${selectBrokerList.id === item.id ? 'text-[#47AB18]' : ''}  `}
                >
                  {selectBrokerList.id === item.id ? 'Selected' : 'Select'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {selectedBroker && (
          <button
            onClick={submitBroker}
            className={`bg-[#8E0789] w-2/3 m-auto py-6 text-white p-2 px-4 mt-auto `}
          >
            {loading ? (
              <CircularProgress sx={{ color: 'white' }} size={20} />
            ) : (
              'Proceed'
            )}
          </button>
        )}
      </div>

      {openModal && (
        <BrokerModal
          setOpenModal={setOpenModal}
          selectedBroker={selectedBroker}
          brokers={selectBroker}
          handleSelectBroker={handleSelectBroker}
        />
      )}
    </div>
  );
}
