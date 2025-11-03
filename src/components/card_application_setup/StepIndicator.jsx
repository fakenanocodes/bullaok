import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setCardStep } from '../../store/reducers/card_reducer';

const items = [0, 1, 2, 3, 4];
const titles = [
  'Contact information',
  'Personal data',
  'Currency & Card',
  'Security data',
  'Delivery options',
];

const StepIndicator = ({ chatStep }) => {
  const dispatch = useDispatch();
  const cardInformation = useSelector((state) => state.card.cardInformation);
  const [error, setError] = useState(false);

  const navigateSteps = (step) => {
    if (step === 0) {
      if (cardInformation?.firstName && cardInformation?.lastName && cardInformation?.phoneNumber) {
        dispatch(setCardStep(step));
      } else {
        setError(true);
        toast.error('Please complete your personal details', {
        autoClose: 2000,
      });
      }
    } else if (step === 1) {
      if (cardInformation?.currency) {
        dispatch(setCardStep(step));
      } else {
        toast.error('Please select your currency', {
        autoClose: 2000,
      });
      }
    } else if (step === 2) {
      if (cardInformation?.type) {
        dispatch(setCardStep(step));
      } else {
        toast.error('Please select your card type', {
        autoClose: 2000,
      });
      }
    } else if (step === 3) {
      if (cardInformation?.nameOnCard && cardInformation?.controlQuestion && cardInformation?.controlAnswer && cardInformation?.secretWord) {
        dispatch(setCardStep(step));
      } else {
        setError(true);
        toast.error('Please complete your personal details', {
        autoClose: 2000,
      });
      }
    } else if (step === 4) {
      if (cardInformation?.zipCode && cardInformation?.city && cardInformation?.area) {
        dispatch(setCardStep(step));
      } else {
        console.log(error)
        setError(true);
        toast.error('Please complete your details', {
        autoClose: 2000,
      });
      }
    }
  };

  return (
    <div className="w-full flex items-center relative gap-2 my-[2rem]">
      {items.map((item) => (
        <div
          key={item}
          className="w-full flex flex-col justify-center items-center"
        >
          <p className="text-black text-xs lg:text-sm font-normal min-w-max mb-2">
            {titles[item]}
          </p>
          <div
            className={
              chatStep === item
                ? 'h-[2rem] w-[2rem] bg-[#050505] rounded-full z-10 cursor-pointer flex items-center justify-center'
                : 'h-[2rem] w-[2rem] bg-[#050505] rounded-full z-10 cursor-pointer flex items-center justify-center'
            }
            onClick={() => navigateSteps(item)}
          >
            <div
              key={item}
              className={
                chatStep === item
                  ? 'h-[1.5rem] w-[1.5rem] bg-[#050505] rounded-full z-10 cursor-pointer'
                  : 'h-[1.5rem] w-[1.5rem] bg-[#fff] rounded-full z-10 cursor-pointer'
              }
            ></div>
          </div>
        </div>
      ))}

      <div className="absolute border border-[#7676763D] w-[81%] left-10 sm:left-20 md:left-16 lg:left-24 xl:left-28 top-[2.6rem]"></div>
    </div>
  );
};

export default StepIndicator;
