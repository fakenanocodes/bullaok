import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const ContactInformation = () => {
  return (
    <div className="py-3 px-14">
      <p className="text-sm md:text-base lg:text-xl text-black">
        Contact Information
      </p>

      <form className="mt-[1.5rem] flex flex-col gap-5">
        <CardInputComponent label={'First Name'} />
        <CardInputComponent label={'Last Name'} />
        <CardInputComponent label={'Phone Number'} />

        <div className="flex items-center gap-5">
          <button className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm">
            Cancel
            <CancelIcon />
          </button>

          <button className="h-[2.4rem] flex items-center gap-2 px-3 py-2 text-sm bg-[#41073F] border border-[#41073F] text-white font-semibold rounded-sm">
            Next
            <ForwardArrowIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;
