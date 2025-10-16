// Broker.jsx
import { Alert, CircularProgress, Rating } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { RxAvatar } from 'react-icons/rx';
import { TbSend } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import BrokerModal from '../components/modal/BrokerModal';
import { handleGenericError } from '../config/mixin';
import { toggleBrokerStatus } from '../store/reducers/brokerReducer';

export default function Broker() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // object currently being previewed in the modal (not yet confirmed)
  const [previewBroker, setPreviewBroker] = useState(null);

  // object confirmed/selected by the user (used for submit)
  const [confirmedBroker, setConfirmedBroker] = useState(null);

  // raw list of brokers from SWR
  const { data: brokers } = useSWR('/broker/brokers/');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // redux state (if needed elsewhere)
  const brokerState = useSelector((state) => state.broker.broker);

  // constants
  const previewRatingValue = 4;

  // open preview modal for a broker
  const onSelect = (id) => {
    const found = brokers?.find((item) => item?.id === id) ?? null;

    setPreviewBroker(found);
    setIsModalOpen(true);
  };

  // user confirms a broker inside the modal (or via UI)
  const handleConfirmBroker = (id) => {
    const found = brokers?.find((item) => item?.id === id) ?? null;
    if (!found) {
      setError('Selected broker not found');
      return;
    }

    setConfirmedBroker(found);
    setPreviewBroker(null);
    setIsModalOpen(false);
  };

  // submit confirmed broker to backend
  async function submitBroker() {
    if (!confirmedBroker) {
      setError('Please select a broker before proceeding');
      return;
    }

    setError(null);
    setSuccess(null);

    try {
      setIsSubmitting(true);

      const payload = { broker: confirmedBroker.id };

      await axios.post(`/broker/user-broker/`, payload);

      dispatch(toggleBrokerStatus(true));
      setSuccess('Broker selected successfully');

      // small delay so user sees success then navigate
      setTimeout(() => {
        navigate('/dashboard');
      }, 700);
    } catch (err) {
      const errMsg = handleGenericError(err);
      setError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  }

  // clear alerts after some time
  useEffect(() => {
    if (!error && !success) return;
    const t = setTimeout(() => {
      setSuccess(null);
      setError(null);
    }, 4000);
    return () => clearTimeout(t);
  }, [error, success]);

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
      
      <div className="w-full xl:p-8 p-0 flex flex-col items-center mb-20">
        <div className="bg-[#8E0789] h-8 xl:hidden block" />

        <div className="block xl:hidden py-8 p-2 text-center">
          <h2 className="text-3xl text-center my-5 font-bold">Broker Matchup</h2>
          <p className="text-center my-5">
            Please select the <span className="text-[#8E0789] font-bold">broker</span> for your preferred <span className="text-[#8E0789] font-bold">investment</span>
          </p>
          <p>You can only choose one permanent broker</p>
        </div>

        <h2 className="xl:text-3xl p-2 text-2xl xl:font-bold font-semibold my-4">Brokers</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center grid-cols-1 p-2 gap-y-8 gap-x-6">
          {brokers?.map((item) => (
            <div className="flex p-4 rounded-lg xl:flex-row lg:flex-row flex-col" key={item.id}>
              <div className="flex items-start space-x-3">
                {item?.image ? (
                  <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full object-cover" />
                ) : (
                  <RxAvatar className="w-24 h-24 rounded-full" />
                )}

                <div className="flex flex-col items-start space-y-1">
                  <div className="flex items-center gap-4">
                    <h2 className="lg:text-lg font-medium text-xs">{item?.name}</h2>
                    <TbSend className="text-[#8E0789]" />
                  </div>

                  <p className="lg:text-lg text-gray-500 text-xs">{item?.regulator}</p>

                  <Rating
                    name={`rating-${item.id}`}
                    value={previewRatingValue}
                    readOnly
                    size="small"
                    sx={{ color: '#8E0789' }}
                  />

                  <button
                    onClick={() => onSelect(item.id)}
                    className={`lg:text-lg text-sm border hover:scale-95 transition-all duration-150 px-10 py-2 rounded-md ${previewBroker?.id === item?.id? 'text-[#47AB18] border-[#47AB18]' : confirmedBroker?.id === item.id ? 'text-white bg-[#47AB18]' : 'border-[#8E0789] text-[#8E0789]'}`}
                    type="button"
                  >
                    {confirmedBroker?.id === item.id ? 'Selected' : 'Select'}
                  </button>

                  {error && <Alert severity="error">{error}</Alert>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Proceed button appears when a broker is confirmed */}
        {confirmedBroker && (
          <div className="mt-6 w-full self-end flex justify-center">
            <button
              onClick={submitBroker}
              className="bg-[#8E0789] w-2/3 m-auto py-6 text-white p-2 px-4 mt-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? <CircularProgress sx={{ color: 'white' }} size={20} /> : 'Proceed'}
            </button>
          </div>
        )}
      </div>

      {/* Global Alerts */}
      {error && <Alert severity="error" className="fixed bottom-4 right-4">{error}</Alert>}
      {success && <Alert severity="success" className="fixed bottom-4 right-4">{success}</Alert>}

      {/* Preview modal */}
      {isModalOpen && previewBroker && (
        <BrokerModal
          setOpenModal={setIsModalOpen}
          selectedBroker={previewBroker}
          brokers={previewBroker}
          handleSelectBroker={handleConfirmBroker}
        />
      )}
    </div>
  );
}
