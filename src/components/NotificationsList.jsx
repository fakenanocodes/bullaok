import React from 'react';
import { images } from '../assets';
import useTimeAgo from '../hooks/useTImeAgo';
// import { formatDistanceToNow } from 'date-fns';

export default function NotificationsList({ description, created }) {
  const relativeTime = useTimeAgo(created);

  return (
    <div className="flex items-center justify-between  p-4 hover:bg-[#DDD6D6]/80 border-[#DDD6D6] border-[0.81px] ">
      <div className="flex items-center">
        <span className="mr-2" role="img" aria-label="Notification Icon">
          <img src={images.open} alt="" />
        </span>
        <p className="text-xs xl:text-lg">{description}</p>
      </div>
      <button className="text-black text-xs xl:text-lg ">{relativeTime}</button>
    </div>
  );
}
