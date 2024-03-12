import axios from 'axios';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { KycContext } from '../../pages/dashboard/Kyc';

const KycPreview = () => {
  const { kyc, setKyc, setSup } = useContext(KycContext);
  const { userDetails } = useSelector((state) => state.transact);
  const { data: userData } = useSWR('/kyc/');
  const { data: user } = useSWR('/user/');
  const navigate = useNavigate();
  // console.log('KYC', userData);
  // console.log('PREVIEW PAGE', userDetails);
  // console.log('USER', user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSup('success');

    const formData = new FormData();
    formData.append('first_name', userDetails?.first_name);
    formData.append('last_name', userDetails?.last_name);
    formData.append('email', userDetails?.email);
    formData.append('country', userDetails?.country);
    formData.append('address', userDetails?.address);
    formData.append('birth_date', userDetails?.birth_date);
    formData.append('profile', user?.profile?.id);

    try {
      const response = await axios.post('/kyc/', formData);
      toast.success(response.data.message);
      navigate('/dashboard/kyc/success');
    } catch (error) {
      toast.error('Check your input and try again');
    }
  };
  return (
    <div
      className={kyc === 'review' ? 'w-full h-full' : 'w-full h-full hidden'}
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
                Selfie
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

        <div className="w-full pl-[30px] flex flex-col gap-[5px] overflow-auto pt-[30px]">
          <div className="border-b-[1px] border-b-[#8E0789] flex flex-col pb-[10px]">
            <h2 className="font-[Poppins] font-[500] text-[15px] text-[#FFFFFF] leading-[15px] ">
              Review
            </h2>
            <p className="font-[Outfit] font-[400] text-[13px] text-[#AAAAAA] leading-[13px] ">
              Review your information before submitting
            </p>
          </div>

          <div className="flex flex-col">
            <div
              className="w-full h-[35px] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px] justify-between"
              id="kyc"
            >
              <label className="font-[Poppins] font-[400] text-[12px] text-[#FFFFFF] whitespace-nowrap">
                Information review
              </label>
              {/* <div className="flex items-center mr-[15px] gap-[5px]">
                <EditIcon />
                <span className="font-[Poppins] font-[600] text-[12px] text-[#FFB803]">
                  Edit
                </span>
              </div> */}
            </div>

            {/* review */}
            <div className="rounded-[8px] overflow-hidden border border-[#8E0789]">
              <div
                className="w-full h-[35px] border-b-[1px] border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                id="kyc"
              >
                <label className="font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] whitespace-nowrap">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-[inherit] outline-none p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] text-right border-none"
                  disabled
                  value={userDetails?.first_name}
                />
              </div>

              <div
                className="w-full h-[35px] border-b-[1px] border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                id="kyc"
              >
                <label className="font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] whitespace-nowrap">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-[inherit] outline-none p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] text-right border-none"
                  disabled
                  value={userDetails?.last_name}
                />
              </div>

              <div
                className="w-full h-[35px] border-b-[1px] border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                id="kyc"
              >
                <label className="font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] whitespace-nowrap">
                  Email address
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-[inherit] outline-none p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] text-right border-none"
                  disabled
                  value={userDetails?.email}
                />
              </div>

              <div
                className="w-full h-[35px] border-b-[1px] border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                id="kyc"
              >
                <label className="font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] whitespace-nowrap">
                  Home address
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-[inherit] outline-none p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] text-right border-none"
                  disabled
                  value={userDetails?.country}
                />
              </div>

              <div
                className="w-full h-[35px] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                id="kyc"
              >
                <label className="font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] whitespace-nowrap">
                  Date of birth
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-[inherit] outline-none p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] text-right border-none"
                  disabled
                  value={userDetails?.birth_date}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* the footer */}
      <div className="w-full h-[30px] flex gap-[5px] p-[2px] justify-end">
        <button
          className="bg-[inherit] w-[80px] rounded-[5px] text-center text-white font-[Poppins] text-[12px] py-[2px] font-[600]"
          onClick={() => setKyc('selfie')}
        >
          Back
        </button>

        <button
          className="bg-[#FFB803] w-[80px] rounded-[5px] text-center text-[black] font-[Poppins] text-[12px] py-[2px] font-[600]"
          onClick={handleSubmit}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default KycPreview;
