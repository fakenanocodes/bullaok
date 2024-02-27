import { useDispatch } from 'react-redux';
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

  const navigateSteps = (step) => {
    console.log(step);
    dispatch(setCardStep(step));
  };

  return (
    <div className="w-full flex items-center relative gap-2 my-[2rem]">
      {items?.map((item) => (
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
