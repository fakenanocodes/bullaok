import { CircularProgress } from '@mui/material';
import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import NotificationsList from '../../components/NotificationsList';

export default function Notifications() {
  const { data, isLoading } = useSWR('/notification/');
  console.log(data);
  const navigate = useNavigate();
  return (
    <div className="bg-white w-full xl:p-10 p-3  h-full flex flex-col ">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-7 justify-start w-12 py-7 text-black text-3xl cursor-pointer  "
      >
        <IoMdArrowBack />
        <p>Notifications</p>
      </div>
      <div className=" text-black w-full  mx-auto xl:py-[50px] py-6 ">
        <div className=" xl:mt-[40px] mt-8">
          {isLoading ? (
            <div className="flex justify-center ">
              <CircularProgress size={50} sx={{ color: '#924E8F' }} />
            </div>
          ) : (
            <>
              {data?.notifications?.map((notification, index) => (
                <NotificationsList {...notification} key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
