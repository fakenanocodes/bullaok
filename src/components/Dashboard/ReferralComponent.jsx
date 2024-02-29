import React from 'react';

import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
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

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={50} />
    </Box>
  );
}

export default function ReferralComponent() {
  return (
    <div className="px-8">
      <div className="flex items-center justify-around space-around ">
        <img src={images.referral} alt="" className="xl:w-2/5 w-full" />
        <div className="flex flex-col w-2/5 p-4 gap-8">
          <CustomizedProgressBars />
          <div className="bg-white h-[300px] rounded-xl w-full px-6 p-3 ">
            <h2 className="text-black text-center my-4">How do you get?</h2>
            <hr />
            <div className="flex  justify-around mt-9 ">
              <div className="box  w-[90px] text-[#925C90]">
                <div className="border flex items-center justify-center rounded-lg p-4 border-[#925C90] mb-2">
                  <img src={images.share} alt="" />
                </div>
                <p>Share your invitation code/link</p>
              </div>
              <div className="box text-[#925C90] w-[90px]">
                <div className="border rounded-lg p-4 flex items-center border-[#925C90] justify-center mb-2">
                  <img src={images.signin} alt="" />
                </div>
                <p>Friends sign in with your invitation codes</p>
              </div>
              <div className="box text-[#925C90]  w-[90px]">
                <div className="border rounded-lg border-[#925C90] p-4 flex items-center justify-center  mb-2">
                  <img src={images.transaction} alt="" />
                </div>
                <p>Friends make the first transaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#8E0789]" />
      <div className="flex">
        <div className="flex flex-col items-center ">
          <h2 className="text-[#C771C4]">Your Referral Code</h2>
          <p className="text-[70px] font-bold">FYNM1879</p>

          <h3 className="text-[#C771C4]">Referred Users</h3>
          <h3 className="text-[70px]">0</h3>
        </div>
      </div>
    </div>
  );
}
