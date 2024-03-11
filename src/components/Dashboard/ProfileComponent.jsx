import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../../assets';
import { icons } from '../../assets/icons';
import EditProfileModal from '../modal/EditProfileModal';

const features = [
  {
    title: 'Notifications',
    icon: icons.notification,
    link: 'notification',
  },
  {
    title: 'KYC Verification',
    description: 'Verify your identity with KYC',
    icon: icons.kyc,
    link: 'kyc',
  },
  {
    title: 'Help & Support',
    icon: icons.support,
    link: 'support',
  },
  {
    title: 'Refer & Get Bonus',
    description:
      'Share your referral link and get a bonus for every friend who signs up',
    icon: icons.refer,
    link: 'referral',
  },
];
export default function ProfileComponent() {
  const { data, isLoading } = useSWR('user/');
  const navigate = useNavigate();
  const user = data?.profile?.user;
  const profile = data?.profile;
  console.log(user?.first_name);
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 xl:w-4/5 w-full mx-auto text-black xl:pb-8 p-3">
      <div className="flex xl:flex-row lg:flex-row flex-col gap-3 justify-between xl:p-8  xl:ml-8 ml-0">
        <div className="flex flex-col  items-center justify-center gap-3 text-[#7E577D]">
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

        <div className="border flex gap-9 flex-col xl:w-2/4 w-full  gap-1 border-[#8E0789]/20 rounded-lg xl:p-8 p-3">
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
            <button
              onClick={() => setOpen(true)}
              className="px-7 p-2 bg-[#8E0789] text-white rounded-[20px]"
            >
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
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 ">
        {features?.map((feature, index) => (
          <div
            key={index}
            onClick={() => navigate(`/dashboard/${feature.link}`)}
            className="border flex justify-between items-center gap-2 border-[#8E0789]/20 p-4 x:px-[70px] cursor-pointer px-8"
          >
            <img src={feature.icon} alt="" />
            <div className=" w-[95%] ">
              <h2 className="font-bold xl:text-2xl text-sm">{feature.title}</h2>
              {feature.description && (
                <h2 className="text-[#49454F] xl:text-xl text-sm">
                  {feature.description}
                </h2>
              )}
            </div>
          </div>
        ))}
      </div>
      {open && <EditProfileModal open={open} setOpen={setOpen} />}
    </div>
  );
}
