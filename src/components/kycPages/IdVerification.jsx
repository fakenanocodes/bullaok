import DriveLicence from '../utils/icons/DriveLicence';
import Idcard from '../utils/icons/Idcard';
import NijaFlag from '../utils/icons/NijaFlag';
import PassportIcon from '../utils/icons/PassportIcon';

const IdVerification = () => {
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
            <div className="w-[10px] h-[10px] bg-white rounded-[50%] cursor-pointer"></div>
            <div className="w-[1px] h-[calc(100%/3.5)] bg-[grey]"></div>
            <div className="w-[10px] h-[10px] rounded-[50%] bg-[#8E0789] cursor-pointer"></div>
            <div className="w-[1px] h-[calc(100%/3.5)] bg-[grey]"></div>
            <div className="w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer"></div>
            <div className="w-[1px] h-[calc(100%/3.5)] bg-[grey]"></div>
            <div className="w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer"></div>
          </div>
        </div>

        {/* main body */}

        <div className="w-full pl-[30px] flex flex-col gap-[5px] pb-[10px] overflow-auto">
          <div className="border-b-[1px] border-b-[#8E0789] flex flex-col py-[10px]">
            <h2 className="font-[Poppins] font-[500] text-[15px] text-[#FFFFFF] leading-[15px] ">
              Identity Verification
            </h2>
            <p className="font-[Outfit] font-[400] text-[13px] text-[#AAAAAA] leading-[13px] ">
              Fill your accurate details
            </p>
          </div>
          <form className="flex flex-col gap-[5px]">
            <div className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Select yor preferred country
              </label>
              <div
                className="w-full h-[25px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[15px] text-[#939191] flex items-center gap-[5px]"
                id="kyc"
              >
                <NijaFlag />
                <select className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex items-center text-[13px] p-0">
                  <option value="Nigeria" className="text-[purple">
                    Nigeria
                  </option>
                  <option value="America" className="text-[purple">
                    America
                  </option>
                  <option value="Australia" className="text-[purple">
                    Australia
                  </option>
                  <option value="Ghana" className="text-[purple">
                    Ghana
                  </option>
                  <option value="Cape Vade" className="text-[purple">
                    Cape Vade
                  </option>
                  <option value="Mali" className="text-[purple">
                    Mali
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Select document type
              </label>

              {/* Verification cards */}

              <div className="flex flex-col gap-[10px] pl-[20px]">
                <div
                  className="w-full h-[35px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                  id="kyc"
                >
                  <Idcard />
                  <div className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex flex-col justify-center gap-[10px]">
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[11px]">
                      ID Card
                    </p>
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[10px] text-[#AAAAAA]">
                      Create your account with ID card
                    </p>
                  </div>
                </div>
                <div
                  className="w-full h-[35px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                  id="kyc"
                >
                  <DriveLicence />
                  <div className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex flex-col justify-center gap-[10px]">
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[11px]">
                      Driving Licence
                    </p>
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[10px] text-[#AAAAAA]">
                      Create your account with Driving licence
                    </p>
                  </div>
                </div>
                <div
                  className="w-full h-[35px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px]"
                  id="kyc"
                >
                  <PassportIcon />
                  <div className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex flex-col justify-center gap-[10px]">
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[11px]">
                      Passport
                    </p>
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[10px] text-[#AAAAAA]">
                      Create your account with Passport
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* personal information */}

            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                First Name
              </label>
              <input
                type="text"
                className="w-full h-[25px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none leading-[2px] p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] pl-[5px]"
                id="kyc"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Last Name
              </label>
              <input
                type="text"
                className="w-full h-[25px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none leading-[2px] p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] pl-[5px]"
                id="kyc"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Home Address
              </label>
              <input
                type="text"
                className="w-full h-[25px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none leading-[2px] p-[5px] font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] pl-[5px]"
                id="kyc"
              />
            </fieldset>
            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full h-[25px] rounded-[8px] border border-[#8E0789] bg-[#480846] outline-none  font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] pl-[5px]"
                id="kyc"
              />
            </fieldset>
          </form>
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
};

export default IdVerification;
