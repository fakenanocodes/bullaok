import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { KycContext } from '../../pages/dashboard/Kyc';
import { setUserDetails } from '../../store/reducers/transact_reducer';

const Personalinfo = () => {
  const { kyc, setKyc } = useContext(KycContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [notify, setNotify] = useState('border-[#8E0789]');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { userKyc } = useSelector((state) => state.transact);

  const { data: userKyc } = useSWR('/kyc/');

  // console.log('USER KYC', userKyc);

  let userDetail = {
    first_name: firstName,
    last_name: lastName,
    email: userEmail,
  };

  const handleNextPage = (e) => {
    if (!firstName || !lastName || !userEmail) {
      setNotify('border-[red]');
      toast.error('Please complete your personal details');
      return;
    }
    e.preventDefault();
    dispatch(setUserDetails(userDetail));
    setKyc('cardVerification');
  };

  if (userKyc?.verified) {
    navigate('/dashboard/kyc/success');
  }

  return (
    <div
      className={
        kyc === 'personalInfo' ? 'w-full h-full' : 'w-full h-full hidden'
      }
    >
      {/* the header description */}
      <div className="w-full h-[30px] border-b-[1px] border-b-[#8E0789] flex flex-col justify-center pb-[20px]">
        <h2 className="font-[Poppins] font-[600] text-[18px] leading-[12px] text-[#FFFFFF]">
          KYC Verification
        </h2>
        <span className="font-[poppins] font-[400] text-[15px] text-[#AAAAAA]">
          Browse and upload
        </span>
      </div>

      {/* body of the message */}
      <div className="w-full h-[calc(100%-60px)] flex">
        {/* side navigation bar */}
        <div className="w-[calc(100%/3)] border-r-[1px] border-r-[#8E0789] flex justify-center pt-[30px] gap-[10px] ">
          <div className="flex flex-col gap-[10px] items-end justify-between">
            <div className="w-fit flex flex-col">
              <p className="font-[Inter] font-[500] text-[13px] leading-[15px] text-[#FFFFFF] text-right">
                Personal Information
              </p>
              <span className="font-[Inter] font-[300] text-[10px] leading-[14.52px] text-[#FFFFFF] text-right">
                Browse and upload
              </span>
            </div>
            <div className="w-fit flex flex-col">
              <p className="font-[Inter] font-[500] text-[13px] leading-[15px] text-[#FFFFFF] text-right">
                ID Verification
              </p>
              <span className="font-[Inter] font-[300] text-[10px] leading-[14.52px] text-[#FFFFFF] text-right">
                Browse and upload
              </span>
            </div>
            <div className="w-fit flex flex-col">
              <p className="font-[Inter] font-[500] text-[13px] leading-[15px] text-[#FFFFFF] text-right">
                ID Card
              </p>
              <span className="font-[Inter] font-[300] text-[10px] leading-[14.52px] text-[#FFFFFF] text-right">
                Browse and upload
              </span>
            </div>
            <div className="w-fit flex flex-col">
              <p className="font-[Inter] font-[500] text-[13px] leading-[15px] text-[#FFFFFF] text-right">
                Review
              </p>
              <span className="font-[Inter] font-[300] text-[10px] leading-[14.52px] text-[#FFFFFF] text-right">
                Browse and upload
              </span>
            </div>
          </div>

          {/* the pagination circle */}
          <div className="w-fit h-full flex flex-col items-center relative">
            <div className="w-fit h-full flex flex-col justify-between items-center z-20">
              <div
                className={
                  kyc === 'personalInfo'
                    ? 'w-[13px] h-[13px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                    : 'w-[13px] h-[13px] rounded-[50%] bg-white cursor-pointer'
                }
                onClick={() => setKyc('personalInfo')}
              ></div>
              <div
                className={
                  kyc === 'cardVerification'
                    ? 'w-[13px] h-[13px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                    : 'w-[13px] h-[13px] rounded-[50%] bg-white cursor-pointer'
                }
                onClick={() => setKyc('cardVerification')}
              ></div>
              <div
                className={
                  kyc === 'selfie'
                    ? 'w-[13px] h-[13px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                    : 'w-[13px] h-[13px] rounded-[50%] bg-white cursor-pointer'
                }
                onClick={() => setKyc('selfie')}
              ></div>
              <div
                className={
                  kyc === 'review'
                    ? 'w-[13px] h-[13px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                    : 'w-[13px] h-[13px] rounded-[50%] bg-white cursor-pointer'
                }
                onClick={() => setKyc('review')}
              ></div>
            </div>
            <div className="w-[1px] h-full bg-[grey] absolute z-10"></div>
          </div>
        </div>

        {/* main body */}

        <div className="w-full pl-[30px] flex flex-col gap-[5px] pt-[30px]">
          <div className="border-b-[1px] border-b-[#8E0789] flex flex-col pb-[10px]">
            <h2 className="font-[Poppins] font-[500] text-[15px] text-[#FFFFFF] leading-[15px] ">
              Personal Information
            </h2>
            <p className="font-[Outfit] font-[400] text-[13px] text-[#AAAAAA] leading-[13px] ">
              Fill your accurate details
            </p>
          </div>
          <form className="flex flex-col gap-[10px]">
            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                First name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`w-full h-[30px] rounded-[8px] border ${notify} bg-[inherit] outline-none leading-[2px] p-[5px] font-[Poppins] font-[300] text-[12px] text-[#AAAAAA] pl-[10px]`}
                id="kyc"
                required
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[300] text-[12px] leading-[20px] text-[#FFFFFF]">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`w-full h-[30px] rounded-[8px] border ${notify} bg-[inherit] outline-none leading-[2px] p-[5px] font-[Poppins] font-[300] text-[12px] text-[#AAAAAA] pl-[10px]`}
                id="kyc"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Email
              </label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className={`w-full h-[30px] rounded-[8px] border ${notify} bg-[inherit] outline-none leading-[2px] p-[5px] font-[Poppins] font-[300] text-[12px] text-[#AAAAAA] pl-[10px]`}
                id="kyc"
              />
            </fieldset>
          </form>
        </div>
      </div>

      {/* the footer */}
      <div className="w-full h-[30px] flex gap-[5px] p-[2px] justify-end">
        <button
          className="bg-[#FFB803] w-[80px] rounded-[5px] text-center text-[black] font-[Poppins] text-[12px] py-[2px] font-[600]"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Personalinfo;
