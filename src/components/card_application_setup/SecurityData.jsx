import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { resetCardInformation, setCardInformation } from '../../store/reducers/card_reducer';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const SecurityData = ({ handleNext }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [error, setError] = useState(false);
  const cardInformation = useSelector((state) => state.card.cardInformation);
  const [inputValue, setInputValue] = useState({
    nameOnCard: cardInformation?.nameOnCard || '',
    controlQuestion: cardInformation?.controlQuestion || '',
    controlAnswer: cardInformation?.controlAnswer || '',
    secretWord: cardInformation?.secretWord || '',
  });

  const handleChange = (e) => {
    console.log(inputValue);
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const storeCardInfo = (e) => {
    e.preventDefault();
    console.log('done');
    dispatch(setCardInformation({ ...cardInformation, ...inputValue }));
    if (
      !inputValue?.nameOnCard ||
      !inputValue?.controlQuestion ||
      !inputValue?.controlAnswer ||
      !inputValue?.secretWord
    ) {
      setError(true);
      toast.error('Please complete your personal details', {
        autoClose: 2000,
      });
      return;
    }
    handleNext(4);
  };

  const handleCancel = () => {
    navigate(-1)
    dispatch(resetCardInformation())
    handleNext(0)
  }

  return (
    <div className="py-3 px-14">
      <p className="text-sm md:text-base lg:text-xl text-black font-[poppins]">
        Security Data
      </p>

      <form className="mt-[1.5rem] flex flex-col gap-3">
        <CardInputComponent
          handleChange={handleChange}
          label={'Name on the card'}
          name="nameOnCard"
          value={inputValue.nameOnCard}
          error={error}
        />
        <CardInputComponent
          handleChange={handleChange}
          label={'Control question'}
          name="controlQuestion"
          value={inputValue.controlQuestion}
          error={error}
        />
        <CardInputComponent
          handleChange={handleChange}
          label={'Control answer'}
          name="controlAnswer"
          value={inputValue.controlAnswer}
          error={error}
        />
        <CardInputComponent
          handleChange={handleChange}
          label={'Secret word'}
          name="secretWord"
          value={inputValue.secretWord}
          error={error}
        />

        <div className="flex items-center gap-5">
          <button onClick={handleCancel} className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm">
            Cancel
            <CancelIcon />
          </button>

          <button
            className="h-[2.4rem] flex items-center gap-2 px-3 py-2 text-sm bg-[#41073F] border border-[#41073F] text-white font-semibold rounded-sm"
            onClick={storeCardInfo}
          >
            Next
            <ForwardArrowIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecurityData;
