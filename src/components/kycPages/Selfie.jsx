import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KycContext } from '../../pages/dashboard/Kyc';
import { setUserDetails } from '../../store/reducers/transact_reducer';

const Selfie = () => {
  const { kyc, setKyc } = useContext(KycContext);
  const [uploadPoto, setUploadPhoto] = useState();
  const [selectedImage, setSelectedImage] = useState('');
  const { userDetails } = useSelector((state) => state.transact);
  // const { allUserDetails } = useSelector((state) => state.transact);
  const dispatch = useDispatch();

  const handlePhoto = (e) => {
    const image = e.target.files;
    setSelectedImage(image);
    const imageURL = URL.createObjectURL(image[0]);
    setUploadPhoto(imageURL);
  };
  console.log('aa  Image', selectedImage[0]);

  //   {
  //     "first_name": "hello",
  //     "last_name": "hello",
  //     "email": "20 wealth avenue",
  //     "country": "Moldova",
  //     "address": "20 wealth avenue",
  //     "birth_date": "2022-05-05"
  // }

  const handleNextPage = () => {
    setKyc('review');

    dispatch(setUserDetails({ ...userDetails, profile: selectedImage[0] }));
    console.log('User with ALL IMAGES', userDetails);
  };

  return (
    <div
      className={kyc === 'selfie' ? 'w-full h-full' : 'w-full h-full hidden'}
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

        <div className="w-full pl-[50px] flex flex-col gap-[5px] pt-[30px]">
          <div className="border-b-[1px] border-b-[#8E0789] flex flex-col pb-[5px]">
            <h2 className="font-[Poppins] font-[500] text-[15px] text-[#FFFFFF] leading-[15px] ">
              ID Card
            </h2>
            <p className="font-[Outfit] font-[400] text-[13px] text-[#AAAAAA] leading-[13px] ">
              Upload a photo
            </p>
          </div>

          {/* photo background */}

          <div className="relative flex flex-col justify-around border border-[#8E0789] w-full h-[calc(100%-45px)] rounded-[8px] bg-[#AA8EA8] px-[30px] pt-[15px]">
            <label className="w-full h-[70%] bg-[#413640] rounded-[8px] flex justify-center items-center cursor-pointer relative">
              <input
                type="file"
                accept=".jpeg, .jpg, .png"
                className="hidden"
                onChange={handlePhoto}
              />
              {uploadPoto && (
                <img src={uploadPoto} className="w-1/4 rounded-md " />
              )}
              {!uploadPoto && (
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[200px] h-[100px]"
                >
                  <path
                    d="M5 6C3.355 6 2 7.355 2 9V23C2 24.645 3.355 26 5 26H27C28.645 26 30 24.645 30 23V9C30 7.355 28.645 6 27 6H5ZM5 8H27C27.566 8 28 8.434 28 9V23C28 23.566 27.566 24 27 24H5C4.434 24 4 23.566 4 23V9C4 8.434 4.434 8 5 8ZM11 10C8.8 10 7 11.8 7 14C7 15.113 7.477 16.117 8.219 16.844C7.53832 17.3033 6.98029 17.9221 6.59353 18.6465C6.20677 19.3709 6.00301 20.1788 6 21H8C8 19.332 9.332 18 11 18C12.668 18 14 19.332 14 21H16C15.997 20.1788 15.7932 19.3709 15.4065 18.6465C15.0197 17.9221 14.4617 17.3033 13.781 16.844C14.523 16.117 15 15.114 15 14C15 11.8 13.2 10 11 10ZM18 11V13H26V11H18ZM11 12C12.117 12 13 12.883 13 14C13 15.117 12.117 16 11 16C9.883 16 9 15.117 9 14C9 12.883 9.883 12 11 12ZM18 15V17H26V15H18ZM18 19V21H23V19H18Z"
                    fill="white"
                  />
                </svg>
              )}
            </label>

            <div className="w-full h-[25px] flex items-start justify-between px-[20px]">
              <label className="cursor-pointer text-center w-[100px] border border-[rgba(142,7,137,0.7)] rounded-[5px] font-[Outfit] font-[600] text-[11px] py-[2px] text-[rgba(0,0,0,0.9)]">
                <input
                  type="file"
                  name=""
                  accept=".jpeg, .jpg, .png"
                  className="hidden"
                  onChange={handlePhoto}
                />
                Upload photo
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* the footer */}
      <div className="w-full h-[30px] flex gap-[5px] p-[2px] justify-end">
        <button
          className="bg-[inherit] w-[80px] rounded-[5px] text-center text-white font-[Poppins] text-[12px] py-[2px] font-[600]"
          onClick={() => setKyc('cardVerification')}
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

export default Selfie;
