import { useContext } from 'react';
import { KycContext } from '../../pages/dashboard/Kyc';
import EditIcon from '../utils/icons/EditIcon';

const KycPreview = () => {
  const { kyc, setKyc,setSup } = useContext(KycContext);
  return (
    <div
      className={kyc === 'review' ? 'w-full h-full' : 'w-full h-full hidden'}
    >
      {/* the header description */}
      <div className="w-full h-[30px] border-b-[1px] border-b-[#8E0789] flex flex-col justify-center pb-[10px]">
        <h2 className="font-[Poppins] font-[600] text-[15px] leading-[15px] text-[#FFFFFF]">
          KYC Verification
        </h2>
        <span className="font-[poppins] font-[400] text-[13px] leading-[10px] text-[#AAAAAA]">
          Browse and upload
        </span>
      </div>

      {/* body of the message */}
      <div className="w-full h-[calc(100%-60px)] flex">
        {/* side navigation bar */}
        <div className="w-[calc(100%/3)] border-r-[1px] border-r-[#8E0789] flex justify-center pt-[10px] gap-[10px] ">
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
          <div className="w-fit h-full flex flex-col items-center">
            <div
              className={
                kyc === 'personalInfo'
                  ? 'w-[10px] h-[10px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                  : 'w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer'
              }
              onClick={() => setKyc('personalInfo')}
            ></div>
            <div className="w-[1px] h-[calc((100%/3)-13px)] bg-[grey]"></div>
            <div
              className={
                kyc === 'cardVerification'
                  ? 'w-[10px] h-[10px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                  : 'w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer'
              }
              onClick={() => setKyc('cardVerification')}
            ></div>
            <div className="w-[1px] h-[calc((100%/3)-13px)] bg-[grey]"></div>
            <div
              className={
                kyc === 'selfie'
                  ? 'w-[10px] h-[10px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                  : 'w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer'
              }
              onClick={() => setKyc('selfie')}
            ></div>
            <div className="w-[1px] h-[calc((100%/3)-13px)] bg-[grey]"></div>
            <div
              className={
                kyc === 'review'
                  ? 'w-[10px] h-[10px] rounded-[50%] bg-[#8E0789] cursor-pointer'
                  : 'w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer'
              }
              onClick={() => setKyc('review')}
            ></div>
          </div>
        </div>

        {/* main body */}

        <div className="w-full pl-[30px] flex flex-col gap-[5px]">
          <div className="border-b-[1px] border-b-[#8E0789] flex flex-col py-[10px]">
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
              <div className="flex items-center mr-[15px] gap-[5px]">
                <EditIcon />
                <span className="font-[Poppins] font-[600] text-[12px] text-[#FFB803]">
                  Edit
                </span>
              </div>
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
                />
              </div>

              <div
                className="w-full h-[35px] border-b-[1px] border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                id="kyc"
              >
                <label className="font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] whitespace-nowrap">
                  Emmail address
                </label>
                <input
                  type="text"
                  className="w-full h-full bg-[inherit] outline-none p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] text-right border-none"
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
          onClick={() => setSup('success')}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default KycPreview;
