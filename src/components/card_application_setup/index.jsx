import { useDispatch, useSelector } from 'react-redux';
import BackArrowIcon from '../utils/icons/BackArrowIcon';
import StepIndicator from './StepIndicator';

const CardApplicationSetup = () => {
  const dispatch = useDispatch();
  const chatStep = useSelector((state) => state.visibility.createCourseStep);

  const pageComponents = [];
  const Page = pageComponents[chatStep];

  const handleNext = (page) => {
    // dispatch(setCreateCourseStep(page));
  };

  const handleClose = () => {
    handleNext(0);
  };

  return (
    <div className="p-5">
      <div className="flex items-center gap-2 cursor-pointer border-b border-[#3C3C3C] pb-5">
        <BackArrowIcon />
        <p className="text-sm font-semibold text-white">Back</p>
      </div>
      <div className="flex flex-col justify-center items-center pb-[3rem]">
        <StepIndicator chatStep={chatStep} />
        <Page handleNext={handleNext} handleClose={handleClose} />
      </div>
    </div>
  );
};

export default CardApplicationSetup;
