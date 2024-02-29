import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import profilepic from '../../assets/dashboard/profilepic.png';
import RunningInvestmentIcon from '../../assets/dashboard/runningInvestment.png';
import ContactIcon from '../../assets/icons/dashboard/ContactIcon';
import EditIcon from '../../assets/icons/dashboard/EditIcon';
import PrivacyIcon from '../../assets/icons/dashboard/PrivacyIcon';
import HelpIcon from '../../assets/icons/dashboard/HelpIcon';

const Profile = () => {
  return (
    <div className="p-5 space-y-32">
      <div className="flex justify-between items-center">
        <KeyboardBackspaceIcon fontSize="large" />
        <img src={RunningInvestmentIcon} alt="" className="pr-16" />
      </div>
      <div className="flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-col bg-black bg-opacity-[62%] rounded-xl border border-white border-opacity-30 items-center justify-center relative w-[600px] h-[150px]">
          <img
            src={profilepic}
            alt=""
            className="absolute -top-20 w-32 h-32 rounded-full object-contain"
          />
          <span className="pt-8 text-3xl font-semibold">Awah Bright</span>
          <span className="text-sm">brightganja@gmail.com | +234705289943</span>
        </div>
        <div className="space-y-4">
          <div className="flex p-5 space-y-4 flex-col bg-black bg-opacity-[62%] rounded-xl border border-white border-opacity-30 relative w-[600px] h-[120px]">
            <div className="flex items-center space-x-4">
              <EditIcon />
              <span>Edit profile information</span>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationsOutlinedIcon />
              <span>Notifications</span>
            </div>
          </div>
          <div className="flex p-5 flex-col space-y-4 bg-black bg-opacity-[62%] rounded-xl border border-white border-opacity-30 relative w-[600px] h-[150px]">
            <div className="flex space-x-4 items-center">
              <HelpIcon />
              <span>Help & Support</span>
            </div>
            <div className="flex space-x-4 items-center">
              <ContactIcon />
              <span>Contact</span>
            </div>
            <div className="flex space-x-4 items-center">
              <PrivacyIcon />
              <span>Privacy policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
history;
