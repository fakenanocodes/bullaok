import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { AiOutlineQuestion } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { PiMedalMilitaryFill } from 'react-icons/pi';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { images } from '../../assets';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  backgroundColor: theme.palette.mode === 'light' ? '#ffffcc' : '#666600', // Faint yellow background
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FFB803', // Yellow progress color
  },
}));

function CustomizedProgressBars({ referral }) {
  const [progressValue, setProgressValue] = useState(referral);

  useEffect(() => {
    // Update the progressValue whenever the referral prop changes
    setProgressValue((prevValue) => prevValue + 20);
  }, [referral]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={progressValue} />
    </Box>
  );
}
const MobileBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 12,
  borderRadius: 5,
  backgroundColor: theme.palette.mode === 'light' ? '#ffffcc' : '#666600', // Faint yellow background
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FFB803', // Yellow progress color
  },
}));

function MobileCustomizedProgressBars({ referral }) {
  const [progressValue, setProgressValue] = useState(referral);

  useEffect(() => {
    // Update the progressValue whenever the referral prop changes
    setProgressValue((prevValue) => prevValue + 8);
  }, [referral]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MobileBorderLinearProgress variant="determinate" value={progressValue} />
    </Box>
  );
}

const descriptionArray = [
  {
    text: 'Invite your friends using your referral code',
    icon: <AiOutlineQuestion />,
  },
  {
    text: 'Your code will be entered on registration',
    icon: <FaEdit />,
  },
  {
    text: 'You receive reward points for every successful referral',
    icon: <PiMedalMilitaryFill />,
  },
];

const boxesData = [
  { icon: images.share, text: 'Share your invitation code/link' },
  { icon: images.signin, text: 'Friends sign in with your invitation codes' },
  { icon: images.transaction, text: 'Friends make the first transaction' },
];
export default function ReferralComponent() {
  const { data: referral, isLoading } = useSWR('referral/');
  const { data: profile } = useSWR('user/');
  console.log(profile);
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        const referralCode = profile?.profile?.user?.username;
        const baseUrl = 'https://localhost:5174'; // Replace with your specific login URL

        const referralUrl = `${baseUrl}/register?referral=${referralCode}`;
        await navigator.share({
          title: 'Your Bulloak Referral Code',
          text: 'Invite your friends using your referral code',
          url: referralUrl,
        });
        toast.success('shared successfully.', {
          position: 'top-center',
          autoClose: 2000, // Close after 2 seconds
        });
      } else {
        // Fallback for browsers that do not support the Web Share API
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to share referral code.', {
        position: 'top-center',
        autoClose: 2000, // Close after 2 seconds
      });
    }
  };
  return (
    <div className="xl:px-8 px-2 ">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-7 py-7 text-black text-2xl xl:hidden block"
      >
        <MdOutlineArrowBackIos />
        <h2>Referral</h2>
      </div>
      <div className="flex items-center justify-around xl:flex-row flex-col ">
        <img src={images.referral} alt="" className="xl:w-2/6 w-full" />
        <div className="flex flex-col xl:w-2/5 w-full p-4 gap-8">
          <div className="gradient-referral hidden  w-full relative px-6 p-3 xl:flex justify-between items-center">
            <CustomizedProgressBars referral={profile?.referrals_profit} />
            <div className="absolute top-0 rounded-lg xl:left-[100px] left-8 h-12 w-20 bg-[#FFB803] text-[#41073F] flex text-lg items-center font-bold justify-center">
              $20.00
            </div>
            <div className="absolute top-0 rounded-lg xl:left-[310px] left-[100px] h-12 w-20 bg-[#FFB803] text-[#41073F] flex items-center font-bold justify-center">
              $40.00
            </div>
            <div className="absolute top-0 rounded-lg h-12 w-20  right-0 bg-[#FFB803] text-[#41073F] flex items-center font-bold justify-center">
              $60.00
            </div>
          </div>
          <div className="bg-[#41073F] p-4 rounded-lg">
            <div className=" w-full relative   flex xl:hidden justify-between items-center">
              <MobileCustomizedProgressBars
                referral={profile?.referrals_profit}
              />
              <div className="absolute -top-2 rounded-lg xl:left-[100px] left-8  h-8  w-12 bg-[#FFB803] text-[#41073F] flex p-3 text-xs items-center font-bold justify-center">
                $20.00
              </div>
              <div className="absolute -top-2 rounded-lg  left-[120px] h-8  w-12 bg-[#FFB803] text-[#41073F] p-3 text-xs flex items-center font-bold justify-center">
                $40.00
              </div>
              <div className="absolute -top-2 rounded-lg h-8  w-10  right-0 bg-[#FFB803] text-[#41073F] flex items-center font-bold p-3 text-xs justify-center">
                $60.00
              </div>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="bg-[#FFB803] w-full xl:hidden block text-black text-xl rounded-xl p-4"
          >
            Invite now
          </button>
          <div className="bg-white h-[300px] rounded-xl w-full xl:px-6 xl:p-3 ">
            <h2 className="text-black text-center my-4">How do you get?</h2>
            <hr />
            <div className="flex  justify-around mt-9 ">
              {boxesData?.map((box, index) => (
                <div key={index} className="box w-[90px] text-[#925C90]">
                  <div className="border flex items-center justify-center rounded-lg xl:p-4 p-2 border-[#925C90] mb-2">
                    <img src={box.icon} alt="" />
                  </div>
                  <p>{box.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#8E0789] xl:block hidden" />
      <div className="flex justify-around xl:flex-row flex-col w-full bg-[#531150] xl:bg-transparent p-4 xl:p-0 rounded-lg">
        <div className="flex flex-col items-center ">
          <h2 className="text-[#C771C4]">Your Referral Code</h2>
          <p className="xl:text-[70px] text-[30px] font-bold">
            {profile?.profile?.user?.username}
          </p>

          <h3 className="text-[#C771C4]">Referred Users</h3>
          <h3 className="xl:text-[70px] text-[30px]">
            {' '}
            {profile?.referrals?.length}
          </h3>
        </div>

        <div className="flex flex-col xl:w-2/6 w-full  gap-4 mt-4">
          {descriptionArray?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-6"
            >
              <div className="flex items-center justify-between w-full gap-4">
                {item?.icon && (
                  <span className="xl:text-3xl text-xl border border-[#FF9EFB] xl:p-4 p-3 rounded-[40px] flex items-center justify-center">
                    {item?.icon}
                  </span>
                )}
                <p
                  key={index}
                  className="text-start rounded-lg  px-4 w-full xl:text-xl text-[13px] bg-[#41073F] p-2"
                >
                  {item?.text}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={handleShare}
            className="bg-[#FFB803] xl:block hidden  w-full rounded-xl p-4"
          >
            Share your code
          </button>
        </div>
      </div>
      <button
        onClick={handleShare}
        className="bg-[#FFB803] xl:hidden block mt-4 w-full rounded-xl p-4"
      >
        Share your code
      </button>
    </div>
  );
}
