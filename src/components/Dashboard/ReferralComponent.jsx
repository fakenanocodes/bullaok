import { useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { AiOutlineQuestion } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { PiMedalMilitaryFill } from 'react-icons/pi';
import { GiShare } from "react-icons/gi";
import { IoIosCopy } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";
import { CgDollar } from "react-icons/cg";


import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { RWebShare } from 'react-web-share';
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
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    if (referral === null) {
      setProgressValue(0);
    }
    if (referral === 1) {
      setProgressValue(20);
    }
    if (referral === 2) {
      setProgressValue(50);
    }

    if (referral === 3) {
      setProgressValue(100);
    }
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
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    if (referral === null) {
      setProgressValue(0);
    }
    if (referral === 1) {
      setProgressValue(20);
    }
    if (referral === 2) {
      setProgressValue(50);
    }

    if (referral === 3) {
      setProgressValue(100);
    }
  }, [referral]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MobileBorderLinearProgress variant="determinate" value={progressValue} />
    </Box>
  );
}

const descriptionArray = [
  {
    text: 'Go to your dashboard',
    icon: <AiOutlineQuestion className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />,
  },
  {
    text: 'click on your profile',
    icon: <PiMedalMilitaryFill className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />,
  },
  {
    text: 'Seleect "Refer and Get Bonus"',
    icon: <FaEdit className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />,
  },
  {
    text: 'click on "copy and share link"',
    icon: <IoIosCopy className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />,
  },
];

const boxesData = [
  { icon: <IoIosCopy className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />, text: 'copy or share your invitation link' },
  { icon: <GiShare className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />, text: 'Invite your friends using your referral code' },
  { icon: <GrTransaction className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />, text: 'Friends make the first transaction' },
  { icon: <CgDollar className='text-3xl border min-w-7 p-1.5 h-7 rounded-full' />, text: 'You receive reward points' },
];

export default function ReferralComponent() {
  const [isShareable, setIsShareable] = useState(false);
  const [openShare, setOpenShare] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { data: profile } = useSWR('user/');
  const { data: referralData, isLoading } = useSWR('referral/');
  const navigate = useNavigate();
  
  
  const referralCode = profile?.profile?.user?.username;
  const baseUrl = 'https://bulloakltd.com'; // Replace with your specific login URL

  const shareRef = useRef(null);

  const referralUrl = `${baseUrl}/register?referral=${referralCode}`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareRef.current && !shareRef.current.contains(event.target)) {
        setOpenShare(false);
      }
    };

    if (openShare) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openShare]);

  useEffect(() => {
    if (navigator.share) {
      setIsShareable(true);
    } else {
      setIsShareable(false);
    }
  }, [isShareable]);

  // This is the function we wrote earlier
  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }   
  }

  const openShareHandler = () => {
    setOpenShare(prev => !prev)
    
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(referralUrl)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        toast.success("copied invite link to clipboard")
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        toast.error('Failed to copy referral code.', {
          position: 'top-center',
          autoClose: 2000, // Close after 2 seconds
        });
      }).finally(
        setOpenShare(prev => !prev)
      );
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Your Bulloak Referral Code',
          text: 'Invite your friends using your referral code',
          url: referralUrl,
        });
        setOpenShare(prev => !prev)
      } else {
        // Fallback for browsers that do not support the Web Share API
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      toast.error('Failed to share referral code.', {
        position: 'top-center',
        autoClose: 2000, // Close after 2 seconds
      })
      setOpenShare(prev => !prev)
    }
  };
  return (
    < div className="xl:px-8 px-2 bg-[#41073F] md:bg-inherit">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-7 py-7 text-white text-2xl xl:hidden "
      >
        <MdOutlineArrowBackIos />
        <h2>Referral</h2>
      </div>
      <div className="flex items-center justify-around xl:flex-row flex-col ">
        <img src={images.referral} alt="" className="xl:w-2/6 w-full" />
        <div className="flex flex-col xl:w-2/5 w-full p-4 gap-8">
          <div className="gradient-referral hidden  w-full relative px-6 p-3 xl:flex justify-between items-center">
            <CustomizedProgressBars referral={5} />
            <div className="absolute top-0  2xl:left-[100px] lg:left-[70px] left-8 flex flex-col gap-2  text-[#41073F] ">
              <div className="flex text-lg items-center font-bold rounded-lg justify-center h-12 w-20 bg-[#FFB803]">
                 10%
              </div>
              <p className="text-white ml-2">1 user</p>
            </div>
            <div className="absolute top-0 2xl:left-[310px] lg:left-[210px] left-[100px] flex flex-col gap-2 ">
              <div className="rounded-lg  h-12 w-20 bg-[#FFB803] text-[#41073F] flex items-center font-bold justify-center">
                20%
              </div>
              <p className="text-white ml-2">2 users</p>
            </div>
            <div className="absolute top-0 right-0 flex flex-col gap-2">
              <div className="rounded-lg h-12 w-20   bg-[#FFB803] text-[#41073F] flex items-center font-bold justify-center">
                30%
              </div>
              <p className="text-white ml-2">3 users</p>
            </div>
          </div>
          <div className="bg-[#41073F] p-4 rounded-lg">
            <div className=" w-full relative   flex xl:hidden justify-between items-center">
              <MobileCustomizedProgressBars
                referral={profile?.referrals?.length}
              />
              <div className="absolute -top-2 rounded-lg  left-8 md:left-[70px] h-8  w-12 bg-[#FFB803] text-[#41073F] flex p-3 text-xs items-center font-bold justify-center">
                10%
              </div>
              <div className="absolute -top-2 rounded-lg  left-[150px] md:left-[170px] h-8  w-12 bg-[#FFB803] text-[#41073F] p-3 text-xs flex items-center font-bold justify-center">
                20%
              </div>
              <div className="absolute -top-2 rounded-lg h-8  w-10  right-0 bg-[#FFB803] text-[#41073F] flex items-center font-bold p-3 text-xs justify-center">
                30%
              </div>
            </div>
          </div>

          <div className="shadow-[1px_1px_10px_#c6a6c6] h-fit rounded-xl w-full flex items-start ">
            
            {/* ------------ the left side ------------  */}

            <div className="h-fit w-full xl:px-6 xl:p-3 ">
              <h2 className="text-white text-center my-4">How to get bonus</h2>
              <hr />
              <div className="flex flex-col justify-around mt-9 gap-4 ">
                {boxesData?.map((box, index) => (
                  < button
                    onClick={() => {}}
                    key={index}
                    className="box w-full flex bg-[#380837] rounded-lg p-2 text-white text-sm items-center text-left gap-3 cursor-default"
                  >
                    {box.icon}
                    <p>{box.text}</p>
                  </button>
                ))}
              </div>
            </div> 

            {/* ------------  the right side ------------  */}

            <div className="h-fit w-full border-l xl:px-6 xl:p-3 ">
              <h2 className="text-white text-center my-4">where to get my link</h2>
              <hr />
              <div className="flex flex-col justify-around mt-9 gap-4 ">
                {descriptionArray?.map((box, index) => (
                  < button
                    onClick={() => {}}
                    key={index}
                    className="box w-full flex bg-[#380837] rounded-lg p-2 text-white text-sm items-center text-left gap-3 cursor-default"
                  >
                    {box.icon}
                    <p>{box?.text}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className='relative'>
            <button
              onClick={openShareHandler}
              className="bg-[#FFB803] block  w-full rounded-xl p-4 hover:scale-95 transform transition-all duration-200 relative z-10"
            >
              Share or copy your code
            </button>
              
            <div
              ref={shareRef}
              className={`flex flex-col items-center w-fit h-fit absolute right-0 bottom-full translate-y-6 z-0 transition-all duration-300 origin-bottom-right ${openShare? "scale-100" : "scale-0 translate-x-10"}`}
            >
              <div className='border flex flex-col gap-4 w-fit px-10 py-5 bg-[rgb(229,221,221)] rounded-xl'>
                <button
                  onClick={handleCopyClick}
                  className="shadow-[1px_1px_4px_#c6a6c6] bg-[#72076E] hover:bg-[#4e104c] w-fit block rounded-xl p-4 hover:scale-95 transition-all duration-200"
                >
                  <span>{isCopied ? 'Copied!' : 'Copy your link'}</span>
                </button>
                <button
                  onClick={handleShare}
                  className="shadow-[1px_1px_4px_#c6a6c6] bg-[#72076E] hover:bg-[#4e104c] w-fit block rounded-xl p-4 hover:scale-95 transition-all duration-200"
                >
                  <span>{'share your link'}</span>
                </button>
              </div>

              <GoTriangleDown className='text-4xl w-fit transform -translate-y-1/3' />

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

          <h3 className="text-[#C771C4]">Number of referred Users</h3>
          <h3 className="xl:text-[70px] text-[30px]">
            {' '}
            {profile?.referrals?.length}
          </h3>
        </div>

        <div className="shadow-[1px_1px_10px_#c6a6c6] h-fit rounded-xl flex items-start mt-10">

          <div className="max-h-96 w-full xl:px-6 xl:p-3 flex flex-col items-center ">
            <h2 className="text-white text-center my-4 w-fit border-b px-5 pb-3">Referred Users</h2>
            {/* <hr /> */}
            <div className="flex flex-col justify-around gap-4 max-h-72 overflow-auto no-scrollbar">
              
              {
                isLoading? (
                  <span>referrals loading . . .</span>
                ):referralData?.length > 0?
                (<table>
                  <thead >
                    <th>Name</th>
                    <th>User Name</th>
                    <th>bonus</th>
                  </thead>
                    <tbody className=''>
                      {
                        referralData?.map((refer,ind) => (
                          <tr className='text-center border-t mt-3'>
                            <td>{refer?.referred_user?.first_name + " " + refer?.referred_user?.last_name}</td>
                            <td>{refer?.referred_user?.username}</td>
                            <td>${refer?.referral_profit}</td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                ):(
                  <div className='flex flex-col items-center gap-1'>
                    <em>you have no referrals</em>
                    <i>click the button above to invite your friend</i>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
