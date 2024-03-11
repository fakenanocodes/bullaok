import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import NotificationsList from '../../components/NotificationsList';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState('All');

  const notifications = [
    { type: 'New Visitor', message: 'You have one visitor on your page' },
    {
      type: 'Active User',
      message: 'You have an active user on the Home page',
    },
    { type: 'Message Alert', message: 'Kalu John messaged you' },
    {
      type: 'Active User',
      message: 'You have an active user on the Home page',
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full xl:p-10 p-3  h-full flex flex-col ">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-7 justify-start w-12 py-7 text-black text-3xl cursor-pointer  "
      >
        <IoMdArrowBack />
      </div>
      <div className=" text-black w-full  mx-auto xl:py-[50px] py-6 ">
          <div className=" xl:mt-[40px] mt-8">
            {notifications.map((notification, index) => (
              <NotificationsList {...notification} key={index} />
            ))}
          </div>
      </div>
    </div>
  );
}
