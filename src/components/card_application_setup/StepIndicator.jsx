import { useDispatch } from 'react-redux';
import { setCreateCourseStep } from '../../../../store/reducers/visibilityReducer';

const items = [0, 1, 2, 3, 4];
const titles = [
  'Class schedule',
  'Class details',
  'Add-ons',
  'Security data',
  'Delivery options',
];

const StepIndicator = ({ chatStep }) => {
  const dispatch = useDispatch();

  const navigateSteps = (step) => {
    console.log(step);
    dispatch(setCreateCourseStep(step));
  };

  return (
    <div className="w-full flex items-center relative gap-2 my-[2rem]">
      {items?.map((item) => (
        <div
          key={item}
          className="w-full flex flex-col justify-center items-center"
        >
          <div
            className={
              chatStep === item
                ? 'h-[2rem] w-[2rem] bg-[#47B39D] rounded-full z-10 cursor-pointer flex items-center justify-center'
                : 'h-[2rem] w-[2rem] bg-transparent rounded-full z-10 cursor-pointer flex items-center justify-center'
            }
            onClick={() => navigateSteps(item)}
          >
            <div
              key={item}
              className={
                chatStep === item
                  ? 'h-[1.5rem] w-[1.5rem] bg-[#fff] rounded-full z-10 cursor-pointer'
                  : 'h-[1.5rem] w-[1.5rem] bg-[#6D6D6D] rounded-full z-10 cursor-pointer'
              }
            ></div>
          </div>
          <p className="text-white text-xs lg:text-sm font-semibold min-w-max mt-1">
            {titles[item]}
          </p>
        </div>
      ))}

      <div className="absolute border border-[#6D6D6D] w-[76%] left-10 sm:left-20 md:left-16 lg:left-24 xl:left-36 top-4"></div>
    </div>
  );
};

export default StepIndicator;
