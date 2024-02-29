import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import useSWR from 'swr';
import { images } from '../../assets';

export default function ProfileComponent() {
  const { data, isLoading } = useSWR('user/');

  const user = data?.profile?.user;
  const profile = data?.profile;
  console.log(user?.first_name);
  return (
    <div className="grid grid-cols-1 xl:w-4/5 w-full mx-auto text-black pb-8">
      <div className="flex xl:flex-row lg:flex-row flex-col  justify-between p-8 ml-8">
        <div className="flex xl:flex-row flex-col  items-center justify-center gap-3 text-[#7E577D]">
          {/* <img
            src={
              profile?.image !== null
                ? `${API_URL}${profile?.image}`
                : images.profile
            }
            alt=""
          /> */}
          <img src={images.profile} alt="" />

          <h2 className="text-3xl font-semibold">
            {user?.first_name} {user?.last_name}
          </h2>
          <p>Marketing Manager</p>
          <div className="flex mt-4 text-[30px] gap-10 text-[#8E0789]">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

        <div className="border flex gap-9 flex-col xl:w-2/4 w-full  gap-1 border-[#8E0789]/20 rounded-lg p-8">
          <div className="flex items-center justify-between">
            <div className="text-[#222222]/90">
              <h2 className="font-bold text-xl text-[#222222]/90 mb-3">
                Your Name
              </h2>
              {!user?.first_name ? (
                <h2 className="text-black">No information</h2>
              ) : (
                <h2>
                  {user?.first_name} {user?.last_name}
                </h2>
              )}
            </div>
            <button className="px-7 p-2 bg-[#F0EFFA] rounded-[20px]">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[#222222]/90">
              <h2 className="font-bold text-xl text-[#222222]/90 mb-3">
                Email{' '}
              </h2>
              {!user?.email ? (
                <h2 className="text-black">No information</h2>
              ) : (
                <h2>{user?.email}</h2>
              )}
            </div>
            <button className="px-7 p-2 bg-[#F0EFFA] rounded-[20px]">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[#222222]/90">
              <h2 className="font-bold text-xl text-[#222222]/90 mb-3">
                Phone Number
              </h2>
              {!user?.phone_number ? (
                <h2 className="text-black">No information</h2>
              ) : (
                <h2>{user?.phone_number}</h2>
              )}{' '}
            </div>
            <button className="px-7 p-2 bg-[#F0EFFA] rounded-[20px]">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[#222222]/90">
              <h2 className="font-bold text-xl mb-3 ">Address</h2>
              {!user?.address ? (
                <h2 className="text-black">No information</h2>
              ) : (
                <h2>{user?.address}</h2>
              )}{' '}
            </div>
            <button className="px-7 p-2 bg-[#F0EFFA] rounded-[20px]">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="border border-[#8E0789]/20 p-4 px-[70px]">
          <h2 className="font-bold text-2xl">Total Assets</h2>
          <h2 className="text-[#49454F] text-xl">
            View your total assets and earning.
          </h2>
        </div>
        <div className="border border-[#8E0789]/20 p-4 px-[70px]">
          <h2 className="font-bold text-2xl">Transaction History</h2>
        </div>
        <div className="border border-[#8E0789]/20 p-4 px-[70px]">
          <h2 className="font-bold text-2xl">Account Limits</h2>
          <h2 className="text-[#49454F] text-xl">
            View your transaction limits.{' '}
          </h2>
        </div>
        <div className="border border-[#8E0789]/20 p-4 px-[70px]">
          <h2 className="font-bold text-2xl">Support</h2>
        </div>
      </div>
    </div>
  );
}
