import CheckIcon from '../utils/icons/CheckIcon';

const SuccessPage = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-10">
      <CheckIcon />
      <p className="text-black font-[poppins] text-3xl font-bold">Thank you!</p>
      <p className="text-black text-sm md:text-base">
        Your application has been successfully sent out. Our Consultant will
        contact you shortly
      </p>
      <p className="flex justify-center items-center py-3 px-4 w-[8rem] text-white bg-[#41073F] rounded-sm font-semibold cursor-pointer">
        OK!
      </p>
    </div>
  );
};

export default SuccessPage;
