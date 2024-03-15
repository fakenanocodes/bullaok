import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
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
  console.log(user, profile);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [success, setSuccess] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFIle] = useState(null);

  const handleImageClick = () => {
    // Trigger the hidden file input when the image is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file
    const selectedFile = e.target.files[0];
    setSelectedFIle(selectedFile);
    // Read the selected file as a data URL and set it in the state
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };
  const handleImageUpload = (e) => {
    e.preventDefault();
    console.log(selectedImage);
    const formData = new FormData();
    if (selectedFile) {
      formData.append('image', selectedFile);
    }
    setLoading(true);

    axios
      .put('user/profile/update-profile-image/', formData)
      .then((response) => {
        console.log(response);
        setSuccess('Image Upload successful');
        setLoading(false);
      })
      .catch((error) => {
        setError('Upload failed');
        setLoading(false);
        // Handle the error
      });
  };

  setTimeout(() => {
    setError(null);
    setSuccess(null);
  }, 5000);
  const Api = 'https://django-bulloak-finance-production.up.railway.app';
  console.log(profile?.image);
  return (
    <div className="grid grid-cols-1 xl:w-4/5 w-full mx-auto text-black xl:pb-8 p-3">
      <div className="flex xl:flex-row lg:flex-row flex-col gap-3 justify-between xl:p-8  xl:ml-8 ml-0">
        <div className="flex flex-col  items-center justify-center gap-3 text-[#7E577D]">
          {success && <Alert severity="success">{success}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}

          <img
            src={selectedImage || (profile && profile?.image)}
            alt="Profile"
            style={{ cursor: 'pointer' }}
            onClick={handleImageClick}
            className="w-[180px] h-[180px] rounded-full"
          />
          {/* Hidden file input */}
          <input
            type="file"
            accept=".jpeg, .png, .jpg"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <button
            onClick={handleImageUpload}
            className="bg-[#8E0789] text-white px-4 py-2 rounded"
          >
            {loading ? (
              <>
                <CircularProgress size={18} color="inherit" />
              </>
            ) : (
              <>{'Upload Profile'}</>
            )}
          </button>
          <h2 className="text-3xl font-semibold">{profile?.full_name}</h2>
          <div className="flex mt-4 text-[30px] gap-10 text-[#8E0789]">
            <FaFacebook
              onClick={() => window.open(profile?.facebook, '_blank')}
            />
            <FaInstagram
              className="cursor-pointer"
              onClick={() => window.open(profile?.instagram, '_blank')}
            />
            <FaTwitter
              onClick={() => window.open(profile?.twitter, '_blank')}
            />
          </div>
        </div>

        <div className="border flex gap-9 flex-col xl:w-2/4 w-full  gap-1 border-[#8E0789]/20 rounded-lg xl:p-8 p-3">
          <div className="flex items-center justify-between">
            <div className="text-[#222222]/90">
              <h2 className="font-bold text-xl text-[#222222]/90 mb-3">
                Your Name
              </h2>
              {!profile?.full_name ? (
                <h2 className="text-black">No information</h2>
              ) : (
                <h2>{profile?.full_name}</h2>
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
              {!profile?.phone_number ? (
                <h2 className="text-black">No information</h2>
              ) : (
                <h2>{profile?.phone_number}</h2>
              )}{' '}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-[#222222]/90">
              <h2 className="font-bold text-xl mb-3 ">Address</h2>
              {!profile?.address ? (
                <h2 className="text-black">No information</h2>
              ) : (
                <h2>{profile?.address}</h2>
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
      {open && <EditProfileModal profile={profile} setOpen={setOpen} />}
    </div>
  );
}
