import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { KycContext } from '../../pages/dashboard/Kyc';
import { setUserDetails } from '../../store/reducers/transact_reducer';
import DriveLicence from '../utils/icons/DriveLicence';
import Idcard from '../utils/icons/Idcard';
import PassportIcon from '../utils/icons/PassportIcon';

const IdVerification = () => {
  const [idCard, setIdcard] = useState('');
  const [homeAddress, setHomeAddress] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const { kyc, setKyc } = useContext(KycContext);
  const [selectedCountry, setSelectedCountry] = useState('Nigeria');
  const { userDetails } = useSelector((state) => state.transact);
  const dispatch = useDispatch();
  // console.log(`USERDETAILS`, userDetails);

  const { data: countries } = useSWR('https://restcountries.com/v3.1/all');

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    console.log(e.target.value);
  };

  // console.log(`SELECTED`, selectedCountry, idCard);

  const getFlagUrl = (countryCode) => {
    const country = countries?.find((c) => c?.name?.common === countryCode);
    return country ? country?.flags.svg : '';
  };

  const handleNextPage = () => {
    if (!idCard || !homeAddress || !birthDate) {
      toast.error('Please complete the required information');
      return;
    }
    setKyc('selfie');
    const moreDetails = {
      ...userDetails,
      country: selectedCountry,
      address: homeAddress,
      birth_date: birthDate,
    };
    dispatch(setUserDetails(moreDetails));
    // console.log(`More User Detail`, userDetails);
  };
  return (
    <div
      className={
        kyc === 'cardVerification' ? 'w-full h-full' : 'w-full h-full hidden'
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

        <div className="w-full pl-[30px] flex flex-col pt-[30px] gap-[5px] pb-[10px] overflow-auto">
          <div className="border-b-[1px] border-b-[#8E0789] flex flex-col gap-[3px] pb-[10px]">
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
                Select your preferred country
              </label>
              <div
                className="w-full h-[30px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[15px] text-[#939191] flex items-center gap-[5px]"
                id="kyc"
              >
                <img
                  src={getFlagUrl(selectedCountry)}
                  alt={`${selectedCountry} flag`}
                  className="w-8 rounded-lg"
                />
                <select
                  className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex items-center text-[13px] p-0"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                >
                  {countries
                    ?.sort((a, b) =>
                      a?.name?.common.localeCompare(b?.name?.common)
                    )?.map((country) => (
                      <option
                        key={country?.cca3}
                        value={country?.name?.common}
                        className="text-[purple]"
                      >
                        {country?.name?.common}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Select document type
              </label>

              {/* Verification cards */}

              <div className="flex flex-col gap-[15px]">
                <div
                  className={
                    idCard === 'idCard'
                      ? 'w-full h-[35px] rounded-[8px] border border-[rgba(255,255,255,0.5)] bg-[#533054] outline-none flex items-center gap-[5px] pl-[5px] cursor-pointer'
                      : 'w-full h-[35px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px] cursor-pointer'
                  }
                  id="kyc"
                  onClick={() => setIdcard('idCard')}
                >
                  <Idcard />
                  <div className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex flex-col justify-center gap-[10px]">
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[11px]">
                      ID Card
                    </p>
                  </div>
                </div>

                <div
                  className={
                    idCard === 'driverLicence'
                      ? 'w-full h-[35px] rounded-[8px] border border-[rgba(255,255,255,0.5)] bg-[#533054] outline-none flex items-center gap-[5px] pl-[5px] cursor-pointer'
                      : 'w-full h-[35px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px] cursor-pointer'
                  }
                  id="kyc"
                  onClick={() => setIdcard('driverLicence')}
                >
                  <DriveLicence />
                  <div className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex flex-col justify-center gap-[10px]">
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[11px]">
                      Driving Licence
                    </p>
                  </div>
                </div>

                <div
                  className={
                    idCard === 'passport'
                      ? 'w-full h-[35px] rounded-[8px] border border-[rgba(255,255,255,0.5)] bg-[#533054] outline-none flex items-center gap-[5px] pl-[5px] cursor-pointer'
                      : 'w-full h-[35px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none flex items-center gap-[5px] pl-[5px] cursor-pointer'
                  }
                  id="kyc"
                  onClick={() => setIdcard('passport')}
                >
                  <PassportIcon />
                  <div className="w-full h-full border-none outline-none rounded-r-[8px] bg-[inherit] flex flex-col justify-center gap-[10px]">
                    <p className=" leading-[2px] pl-[5px] font-[Poppins] font-[400] text-[11px]">
                      Passport
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* personal information */}

            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Home Address
              </label>
              <input
                type="text"
                className="w-full h-[30px] rounded-[8px] border border-[#8E0789] bg-[inherit] outline-none leading-[2px] p-[5px] font-[Poppins] font-[300] text-[12px] text-[#AAAAAA] pl-[10px]"
                id="kyc"
                value={homeAddress}
                onChange={(e) => setHomeAddress(e.target.value)}
              />
            </fieldset>

            <fieldset className="flex flex-col">
              <label className="font-[Poppins] font-[400] text-[12px] leading-[20px] text-[#FFFFFF]">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full h-[30px] rounded-[8px] border bg-[#533054] outline-none  font-[Poppins] font-[400] text-[12px] text-[#AAAAAA] pl-[5px]"
                id="kyc"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </fieldset>
          </form>
        </div>
      </div>

      {/* the footer */}
      <div className="w-full h-[30px] flex gap-[5px] p-[2px] justify-end">
        <button
          className="bg-[inherit] w-[80px] rounded-[5px] text-center text-white font-[Poppins] text-[12px] py-[2px] font-[600]"
          onClick={() => setKyc('personalInfo')}
        >
          Back
        </button>

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

export default IdVerification;
