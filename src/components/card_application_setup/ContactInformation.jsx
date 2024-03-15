import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetCardInformation, setCardInformation } from '../../store/reducers/card_reducer';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const ContactInformation = ({ handleNext }) => {
  const navigate = useNavigate()
  const [error, setError] = useState(false);
  const cardInformation = useSelector((state) => state.card.cardInformation);
  const [inputValue, setInputValue] = useState({
    firstName: cardInformation?.firstName || '',
    lastName: cardInformation?.lastName || '',
    phoneNumber: cardInformation?.phoneNumber || '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const storeCardInfo = () => {
    console.log('done');
    dispatch(setCardInformation(inputValue));
    if (
      !inputValue?.firstName ||
      !inputValue?.lastName ||
      !inputValue?.phoneNumber
    ) {
      setError(true);
      toast.error('Please complete your personal details', {
        autoClose: 2000,
      });
      return;
    }
    handleNext(1);
  };
  console.log('🙂', cardInformation);
  const handleCancel = () => {
    navigate(-1)
    dispatch(resetCardInformation())
    handleNext(0)
  }

  return (
    <div className="py-3 px-14">
      <p className="text-sm md:text-base lg:text-xl text-black font-[poppins]">
        Contact Information
      </p>

      {/* <form className="mt-[1.5rem] flex flex-col gap-5"> */}
      <CardInputComponent
        label={'First Name'}
        handleChange={handleChange}
        name="firstName"
        value={inputValue.firstName}
        error={error}
      />
      <CardInputComponent
        label={'Last Name'}
        handleChange={handleChange}
        name="lastName"
        value={inputValue.lastName}
        error={error}
      />
      <CardInputComponent
        label={'Phone Number'}
        handleChange={handleChange}
        name="phoneNumber"
        value={inputValue.phoneNumber}
        error={error}
      />

      <div className="flex items-center gap-5">
        <button onClick={handleCancel} className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm">
          Cancel
          <CancelIcon />
        </button>

        <button
          onClick={storeCardInfo}
          className="h-[2.4rem] flex items-center gap-2 px-3 py-2 text-sm bg-[#41073F] border border-[#41073F] text-white font-semibold rounded-sm"
        >
          Next
          <ForwardArrowIcon />
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default ContactInformation;
