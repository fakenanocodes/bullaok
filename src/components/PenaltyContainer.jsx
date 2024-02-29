import { useNavigate } from 'react-router-dom';
import BackArrowIcon from './utils/icons/BackArrowIcon';
import NewProfileIcon from './utils/icons/NewProfileIcon';

const PenaltyContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 h-full">
      <div className="flex items-start gap-6 pb-3 border-b border-[#8E0789]">
        <div onClick={() => navigate(-1)} className="mt-2 cursor-pointer">
          <BackArrowIcon color={'white'} />
        </div>
        <div>
          <p className="font-semibold text-xl">Penalty Notifications</p>
          <p className="text-[#AAAAAA] text-sm">Total penalized activity</p>
        </div>
      </div>

      <div className="flex w-full min-h-[90%]">
        <div className="md:w-[30%] lg:w-[25%] border-r border-[#8E0789]">
          <p className="mt-[3rem] py-3 px-2 font-semibold text-lg border-b border-[#8E0789]">
            Penalty History
          </p>

          <div className="flex flex-col gap-3 py-3">
            <div className="flex gap-2 cursor-pointer">
              <div className="mt-1">
                <NewProfileIcon />
              </div>

              <div>
                <p className="text-sm lg:text-base text-[#AAAAAA]">
                  Defaulted penalty
                </p>
                <p className="text-xs lg:text-sm">$0.0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 md:px-7 mt-[3rem]">
          <div>
            <p className="text-[#E8C4E6] font-semibold text-xs md:text-sm py-3">
              Penalized details
            </p>
            <p className="text-sm md:text-base">
              Defaulted penalty - Violated transfer rules
            </p>
          </div>
          <div className="mt-[1rem]">
            <p className="text-[#E8C4E6] font-semibold text-sm py-3">
              Total amount penalized
            </p>
            <p className="">$10.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenaltyContainer;
