import React from 'react';
import { images } from '../assets';

export default function NotificationsList({ type, message }) {
  return (
    <div className="flex items-center justify-between  p-4 hover:bg-[#DDD6D6]/80 border-[#DDD6D6] border-[0.81px] ">
      <div className="flex items-center">
        <span className="mr-2" role="img" aria-label="Notification Icon">
          <img src={images.open} alt="" />
        </span>
        <p className="text-xs xl:text-lg">{message}</p>
      </div>
      <button className="text-black text-xs xl:text-lg ">1 day ago</button>
    </div>
  );
}
