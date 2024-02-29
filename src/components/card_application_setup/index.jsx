import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCardStep } from '../../store/reducers/card_reducer';
import BackArrowIcon from '../utils/icons/BackArrowIcon';
import ContactInformation from './ContactInformation';
import CurrencyCard from './CurrencyCard';
import DeliveryOption from './DeliveryOption';
import PersonalData from './PersonalData';
import SecurityData from './SecurityData';
import StepIndicator from './StepIndicator';
import SuccessPage from './SuccessPage';

const CardApplicationSetup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cardStep = useSelector((state) => state.card.cardStep);

  const pageComponents = [
    ContactInformation,
    PersonalData,
    CurrencyCard,
    SecurityData,
    DeliveryOption,
    SuccessPage,
  ];
  const Page = pageComponents[cardStep];

  const handleNext = (page) => {
    dispatch(setCardStep(page));
  };

  const handleClose = () => {
    handleNext(0);
  };

  const goBack = () => {
    if (cardStep < 1) {
      navigate(-1);
    } else {
      dispatch(setCardStep(cardStep - 1));
    }
  };

  return (
    <div className="p-5 w-full bg-white h-full overflow-auto no-scrollbar rounded-r-xl">
      <div
        onClick={goBack}
        className="flex items-center gap-2 cursor-pointer pb-2"
      >
        <BackArrowIcon />
      </div>
      <div className="h-full flex flex-col pb-[3rem]">
        {cardStep <= 4 && <StepIndicator chatStep={cardStep} />}
        <Page handleNext={handleNext} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default CardApplicationSetup;
