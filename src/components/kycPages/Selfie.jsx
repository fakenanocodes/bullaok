import PersonIcon from "../utils/icons/PersonIcon";

const Selfie = () => {
  return (
    <div className="w-full h-full hidden">
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
          <div className="w-fit flex flex-col items-center">
            <div className="w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer"></div>
            <div className="w-[1px] h-[calc(100%/3.5)] bg-[grey]"></div>
            <div className="w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer"></div>
            <div className="w-[1px] h-[calc(100%/3.5)] bg-[grey]"></div>
            <div className="w-[10px] h-[10px] rounded-[50%] bg-[#8E0789] cursor-pointer"></div>
            <div className="w-[1px] h-[calc(100%/3.5)] bg-[grey]"></div>
            <div className="w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer"></div>
          </div>
        </div>

        {/* main body */}

        <div className="w-full pl-[30px] flex flex-col gap-[5px]">
          <div className="border-b-[1px] border-b-[#8E0789] flex flex-col py-[5px]">
            <h2 className="font-[Poppins] font-[500] text-[15px] text-[#FFFFFF] leading-[15px] ">
              Selfie
            </h2>
            <p className="font-[Outfit] font-[400] text-[13px] text-[#AAAAAA] leading-[13px] ">
              Include a photo
            </p>
          </div>

          {/* photo background */}

          <div className="flex flex-col gap-[5px] border border-[#8E0789] w-full h-full rounded-[8px] bg-[#AA8EA8] px-[30px] pt-[15px]">
            <div className="w-full h-[120px] bg-[#413640] rounded-[8px] flex justify-center items-center">
              <PersonIcon />
            </div>

            <div className="w-full h-[25px] flex items-start justify-between px-[20px]">
              <button className="w-[100px] border border-[rgba(142,7,137,0.7)] rounded-[5px] font-[Outfit] font-[600] text-[11px] py-[2px] text-[rgba(0,0,0,0.9)]">
                Upload photo
              </button>
              <button className="w-[100px] border border-[rgba(142,7,137,0.7)] rounded-[5px] font-[Outfit] font-[600] text-[11px] py-[2px] text-[rgba(0,0,0,0.9)]">
                Take photo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* the footer */}
      <div className="w-full h-[30px] flex gap-[5px] p-[2px] justify-end">
        <button className="bg-[inherit] w-[80px] rounded-[5px] text-center text-white font-[Poppins] text-[12px] py-[2px] font-[600]">
          Back
        </button>

        <button className="bg-[#FFB803] w-[80px] rounded-[5px] text-center text-[black] font-[Poppins] text-[12px] py-[2px] font-[600]">
          Next
        </button>
      </div>
    </div>
  );
}

export default Selfie