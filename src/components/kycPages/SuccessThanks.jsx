import { useNavigate } from 'react-router-dom';
import BackArrowIcon from '../utils/icons/BackArrowIcon';
import ThankyouIcon from '../utils/icons/ThankyouIcon';

const SuccessThanks = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full h-full  justify-center">
      <div onClick={() => navigate(-1)} className="p-10">
        <BackArrowIcon />
      </div>

      <div className="w-full grid items-center justify-center text-center">
        <div>
          <div className="mx-28 mb-10">
            <ThankyouIcon />
          </div>
          <div className="text-black">
            <h2 className="text-4xl font-bold mb-10">Congratulations</h2>
            <p className="md:text-xl ">
              Your KYC data has been successfully recorded.
            </p>
          </div>
          <div
            onClick={() => navigate('/dashboard')}
            className=" cursor-pointer"
          >
            <button className="bg-[#41073F] px-14 py-3 mt-10">OK!</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessThanks;
