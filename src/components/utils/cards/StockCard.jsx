import CommunityIcon from '../icons/CommunityIcon';
import CustomerServiceIcon from '../icons/CustomerServiceIcon';
import EducationIcon from '../icons/EducationIcon';

const StockCard = ({ image, title, description }) => {
  return (
    <div className="w-[20rem] lg:w-[19rem] xl:w-[22rem] min-[1440px]:w-[26rem] shadow-md rounded-lg">
      <img
        src={image}
        alt=""
        className="max-w-full w-full h-[13rem] xl:h-[15rem] max-h-[15rem] rounded-t-lg"
      />
      <div className="w-full p-5 flex flex-col gap-5 min-h-[15rem]">
        <div className="flex items-center gap-5">
          {title?.toLowerCase()?.includes('customer') && (
            <CustomerServiceIcon />
          )}
          {title?.toLowerCase()?.includes('education') && <EducationIcon />}
          {title?.toLowerCase()?.includes('community') && <CommunityIcon />}
          <p className="text-lg xl:text-xl font-medium uppercase text-gray-500">
            {title}
          </p>
        </div>

        <p className="text-lg font-semibold tracking-wide">{description}</p>
      </div>
    </div>
  );
};

export default StockCard;
