import trade_icon from '../../../assets/trade_icon.svg';
import ForwardArrowIcon from '../icons/ForwardArrowIcon';

const IraMediumCard = ({ card }) => {
  return (
    <div className="w-[20rem] lg:w-[22rem] rounded-3xl bg-gray-50 shadow-gray-100 flex flex-col justify-between p-5 lg:py-10 gap-5 min-h-[20rem] max-h-[20rem]">
      <div className="bg-[#8E0789] p-2 w-max rounded-[50%]">
        <img src={trade_icon} alt="" className="h-[30px]" />
      </div>
      <p className="font-semibold text-[#383838] text-xl">{card?.title}</p>
      <p className="text-[#383838] md:text-xs xl:text-base">
        {card?.description}
      </p>

      <div className="flex items-center gap-7 p-2 justify-between cursor-pointer rounded-3xl bg-[#8E0789] text-white w-[14rem] md:w-max lg:w-[14.5rem]">
        <p className="text-sm md:text-xs lg:text-sm font-semibold">
          {`Open a ${card?.title}`}
        </p>
        <div className="">
          <div className="p-2 bg-[#FFD700] rounded-full">
            <ForwardArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IraMediumCard;
