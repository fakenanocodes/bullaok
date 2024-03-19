import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../utils/icons/BackArrowIcon';
import ThankyouIcon from '../utils/icons/ThankyouIcon';

const CardSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full h-full justify-center">
      <div onClick={() => navigate(-1)} className="p-10">
        <BackArrowIcon />
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center">
        <div className="mb-10">
          <ThankyouIcon />
        </div>
        <div className="text-black">
          <h2 className="text-4xl font-bold mb-10">Congratulations</h2>
          <p className="md:text-xl ">
            Your application has been successfully sent out. Our Consultant will contact you shortly
          </p>
        </div>
        <div
          onClick={() => navigate('/dashboard')}
          className=" cursor-pointer"
        >
          <button className="bg-[#41073F] text-white px-14 py-3 mt-10">OK!</button>
        </div>
      </div>
    </div>
  );
};
export default CardSuccess;