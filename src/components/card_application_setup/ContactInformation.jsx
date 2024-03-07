import { useState } from 'react';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';
import { useSelector, useDispatch } from 'react-redux';
import { setCardInformation } from '../../store/reducers/card_reducer';

const ContactInformation = () => {
  const cardInformation = useSelector((state) => state.card.cardInformation);
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
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
  };

  console.log('🙂', cardInformation);

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
        value={
          cardInformation ? cardInformation?.firstName : inputValue.firstName
        }
      />
      <CardInputComponent
        label={'Last Name'}
        handleChange={handleChange}
        name="lastName"
        value={
          cardInformation ? cardInformation?.lastName : inputValue.lastName
        }
      />
      <CardInputComponent
        label={'Phone Number'}
        handleChange={handleChange}
        name="phoneNumber"
        value={
          cardInformation
            ? cardInformation?.phoneNumber
            : inputValue.phoneNumber
        }
      />

      <div className="flex items-center gap-5">
        <button className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm">
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
