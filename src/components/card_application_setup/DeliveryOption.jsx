import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetCardInformation, setCardInformation } from '../../store/reducers/card_reducer';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const DeliveryOption = ({handleNext}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const cardInformation = useSelector((state) => state.card.cardInformation);
  const [inputValue, setInputValue] = useState({
    zipCode: cardInformation?.zipCode || '',
    city: cardInformation?.city || '',
    area: cardInformation?.area || '',
  });

  const handleChange = (e) => {
    console.log(inputValue);
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const userData = {
    first_name: cardInformation?.firstName,
    middle_name: cardInformation?.lastName,
    phone_number: cardInformation?.phoneNumber,
    currency: cardInformation?.currency,
    card_type: cardInformation?.type,
  }
  const createCard = async () => {
    try {
      dispatch(setCardInformation({ ...cardInformation, ...inputValue }));
      if (
        !inputValue?.zipCode ||
        !inputValue?.city ||
        !inputValue?.area
        ) {
          setError(true);
          toast.error('Please complete your personal details', {
            autoClose: 2000,
          });
          return;
        }
        setIsLoading(true)
      const response = await axios.post('/card/api/create_card/', userData);
      setIsLoading(false)
      console.log('RESPONSE', response);
      setInputValue({
        zipCode: '',
        city: '',
        area: '',
      });
      toast.success('success');
      dispatch(resetCardInformation());
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    navigate(-1)
    dispatch(resetCardInformation())
    handleNext(0)
  }

  return (
    <div className="py-3 px-14">
      <p className="text-sm md:text-base lg:text-xl text-black font-[poppins]">
        Delivery Option
      </p>

      {/* <form className="mt-[1.5rem] flex flex-col gap-3"> */}
      <div className="flex justify-between items-center gap-5 w-full">
        <div className="w-full">
          <CardInputComponent
            handleChange={handleChange}
            label={'Zip code'}
            name="zipCode"
            value={inputValue.zipCode}
            error={error}
            required
          />
        </div>
        <div className="w-full">
          <CardInputComponent
            handleChange={handleChange}
            label={'City'}
            name="city"
            value={inputValue.city}
            error={error}
            required
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-5 w-full">
        <div className="w-[49%]">
          <CardInputComponent
            handleChange={handleChange}
            label={'Area'}
            name="area"
            value={inputValue.area}
            error={error}
            required
          />
        </div>
      </div>

      <div className="flex items-center gap-5 mt-5">
        <button onClick={handleCancel} className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm">
          Cancel
          <CancelIcon />
        </button>

        <button
          onClick={createCard}
          className="h-[2.4rem] flex items-center gap-2 px-3 py-2 text-sm bg-[#41073F] border border-[#41073F] text-white font-semibold rounded-sm"
        >
          {isLoading ? (
            <CircularProgress sx={{ color: 'white' }} thickness={6} size={18} />
          ) : (
            <>
              Next
              <ForwardArrowIcon />
            </>
          )}
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default DeliveryOption;
