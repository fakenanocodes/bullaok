import chart_sys from '../../../assets/chart_sys.png';

const OtcBigCard = ({ datum }) => {
  return (
    <div className="relative bg-gray-50 h-[15rem] md:h-[35rem] w-full md:w-[40rem] rounded-xl p-3 md:p-14 cursor-pointer hover:bg-[#8E07894D] transition-all">
      <div>
        <p className="text-base md:text-xl md:w-[65%] leading-8">
          {datum?.description}
        </p>

        <button className="font-bold bg-[#41073F] text-lg py-4 px-5 min-w-[12rem] text-white rounded-md mt-[3rem]">
          Download Now
        </button>
      </div>

      <div className="hidden md:inline-block absolute bottom-0 right-0">
        <img src={datum?.image || chart_sys} alt="" className="h-[18rem]" />
      </div>
    </div>
  );
};

export default OtcBigCard;
