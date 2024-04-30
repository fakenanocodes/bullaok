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

const CardApplicationSetup = () => {
  const dispatch = useDispatch();
  const cardStep = useSelector((state) => state.card.cardStep);
  const navigate = useNavigate();

  const pageComponents = [
    ContactInformation,
    PersonalData,
    CurrencyCard,
    SecurityData,
    DeliveryOption,
  ];
  const Page = pageComponents[cardStep];

  const handleNext = (page) => {
    dispatch(setCardStep(page));
  };

  const handleClose = () => {
    handleNext(0);
  };

  return (
    <div className="p-5 w-full bg-white h-full overflow-auto no-scrollbar rounded-r-xl">
      <div onClick={() => navigate(-1)} className="w-fit cursor-pointer">
        <BackArrowIcon />
      </div>
      <div className="flex flex-col pb-[3rem]">
        <StepIndicator chatStep={cardStep} />
        <Page handleNext={handleNext} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default CardApplicationSetup;
