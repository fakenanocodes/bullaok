import { useState } from 'react';
import hub_card_img2 from '../../../assets/hub_card_img2.png';

const HubCard = ({ data }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="w-[80vw] md:w-[14rem] lg:w-[12rem] xl:w-[16rem] flex flex-col gap-3 cursor-pointer mt-[1rem]"
    >
      <img
        src={hub_card_img2}
        alt=""
        className={
          'min-h-[9rem] max-h-[9rem] min-w-[80vw] md:min-w-[14rem] lg:min-w-[12rem] xl:min-w-[16rem] max-w-[80vw] md:max-w-[14rem] lg:max-w-[12rem] xl:max-w-[16rem] rounded-md object-cover'
        }
      />

      <div className="flex flex-col gap-3">
        <p
          className={
            isHover
              ? 'font-medium text-sm xl:text-base capitalize text-blue-500 transition-all'
              : 'font-medium text-sm xl:text-base capitalize text-[#2B3240]'
          }
        >
          {data?.title}
        </p>
        <p className="text-xs xl:text-sm text-[#2B3240]">{`${data?.description?.slice(
          0,
          50
        )}...`}</p>
        <div className="flex items-center text-xs gap-2 text-[#2B3240]">
          <p>4.6k</p>
          <p>views</p>
        </div>
      </div>
    </div>
  );
};

export default HubCard;
