import BackArrowIcon from './utils/icons/BackArrowIcon';

const BonusContainer = () => {
  return (
    <div className="p-5">
      <div className="flex items-start gap-6 pb-3 border-b border-[#8E0789]">
        <div className="mt-2">
          <BackArrowIcon color={'white'} />
        </div>
        <div>
          <p className="font-semibold text-xl">Bonus Notifications</p>
          <p className="text-[#AAAAAA] text-sm">Total added bonuses</p>
        </div>
      </div>
    </div>
  );
};

export default BonusContainer;
