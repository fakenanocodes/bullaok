import ReferralComponent from '../../components/Dashboard/ReferralComponent';

const ReferralContainer = () => {
  return (
    <div className="h-inherit overflow-y-scroll no-scrollbar gradient-div ">
      <div className="bg-[#8E0789] h-8 xl:hidden block"></div>
      <div className="py-6">
        <ReferralComponent />
      </div>
    </div>
  );
};

export default ReferralContainer;
