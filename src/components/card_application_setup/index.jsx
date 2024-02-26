import { useDispatch, useSelector } from 'react-redux';
import { setCardStep } from '../../store/reducers/card_reducer';
import BackArrowIcon from '../utils/icons/BackArrowIcon';
import ContactInformation from './ContactInformation';
import StepIndicator from './StepIndicator';

const CardApplicationSetup = () => {
  const dispatch = useDispatch();
  const cardStep = useSelector((state) => state.card.cardStep);
  console.log("we won't", cardStep);

  const pageComponents = [ContactInformation];
  const Page = pageComponents[cardStep];

  const handleNext = (page) => {
    dispatch(setCardStep(page));
  };

  const handleClose = () => {
    handleNext(0);
  };

  return (
    <div className="p-5 w-full h-full bg-white">
      <div className="flex items-center gap-2 cursor-pointer pb-2">
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
