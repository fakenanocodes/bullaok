import card_img from '../../../assets/home/card_img.png';
import StarIcon from '../icons/StarIcon';

const HomeCard = ({ data }) => {
  return (
    <div className="bg-white shadow-md flex flex-col gap-3 w-[20rem] md:w-[14rem] lg:w-[18rem] xl:w-[25rem] rounded-md">
      <img
        src={data?.image || card_img}
        alt=""
        className="max-w-[20rem] md:max-w-[16rem] lg:max-w-[18rem] xl:max-w-[25rem] min-w-[20rem] md:min-w-[14rem] lg:min-w-[18rem] xl:min-w-[25rem] min-h-[15rem] md:min-h-[12rem] xl:min-h-[16rem] max-h-[15rem] md:max-h-[12rem] xl:max-h-[16rem] rounded-t-md object-cover"
      />

      <div className="p-3 xl:p-5 flex flex-col gap-3 xl:gap-5">
        <p className="text-lg xl:text-xl font-bold text-[#41073F]">
          {data?.location}
        </p>
        <div className="flex items-center gap-2">
          <span>
            <StarIcon />
          </span>
          <span className="text-sm font-medium text-[#404040]">
            {data?.views}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <button className="bg-[#AC09A6] text-white font-medium text-sm py-3 px-4 rounded-sm">
            Back Now
          </button>

          <p className="text-xl font-extrabold text-[#AC09A6]">{data?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
