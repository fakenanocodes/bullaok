import IraEtfIcon from '../icons/IraEtfIcon';
import IraOptionsIcon from '../icons/IraOptionsIcon';
import IraStocksIcon from '../icons/IraStocksIcon';

const IraSmallCard = ({ card, index }) => {
  console.log(index);
  return (
    <div className="w-[20rem] lg:w-[22rem] rounded-3xl bg-white shadow-lg shadow-gray-100 flex flex-col items-center justify-evenly pl-3 pr-3 pb-3 xl:pl-8 xl:pr-8 xl:pb-8 gap-5 min-h-[12rem] max-h-[12rem]">
      <div className="p-5 rounded-3xl bg-gray-100 bg-opacity-70 shadow-sm -mt-[3rem]">
        {index === 0 ? (
          <IraStocksIcon />
        ) : (
          <>{index === 1 ? <IraOptionsIcon /> : <IraEtfIcon />}</>
        )}
      </div>

      <p className="font-semibold text-[#383838] text-xl">{card?.title}</p>
      <p className="text-[#383838] text-center md:text-xs lg:text-base">
        {card?.description}
      </p>
    </div>
  );
};

export default IraSmallCard;
