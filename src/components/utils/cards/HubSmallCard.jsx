import { useState } from 'react';
import hub_card_img from '../../../assets/hub_card_img.png';

const HubSmallCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="flex gap-3 cursor-pointer"
    >
      <div className="h-[5.5rem] w-[10rem]">
        <img
          src={hub_card_img}
          alt=""
          className={
            isHover
              ? 'min-h-[5.5rem] max-h-[5.5rem] min-w-[10rem] max-w-[10rem] rounded-md object-cover scale-105 transition-all'
              : 'min-h-[5.5rem] max-h-[5.5rem] min-w-[10rem] max-w-[10rem] rounded-md object-cover'
          }
        />
      </div>
      <div className="flex flex-col justify-between">
        <p
          className={
            isHover
              ? 'font-medium text-xs xl:text-base capitalize text-blue-500 transition-all'
              : 'font-medium text-xs xl:text-base capitalize text-[#2B3240]'
          }
        >
          finding equity sectors that can combat...
        </p>
        <div className="flex items-center text-sm gap-2 text-[#2B3240]">
          <p>4.6k</p>
          <p>views</p>
        </div>
      </div>
    </div>
  );
};

export default HubSmallCard;
