import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const schema = yup.object().shape({
  first_name: yup.string(),
});

const ContactInformation = ({ handleNext }) => {
  const { getValues, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    console.log(getValues());
    handleNext(1);
  };

  return (
    <div className="py-3 px-14">
      <p className="text-sm md:text-base lg:text-xl text-black font-[poppins]">
        Contact Information
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[1.5rem] flex flex-col gap-5"
      >
        <CardInputComponent label={'First Name'} />
        <CardInputComponent label={'Last Name'} />
        <CardInputComponent label={'Phone Number'} />

        <div className="flex items-center gap-5">
          <button
            type="button"
            className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm"
          >
            Cancel
            <CancelIcon />
          </button>

          <button
            type="submit"
            className="h-[2.4rem] flex items-center gap-2 px-3 py-2 text-sm bg-[#41073F] border border-[#41073F] text-white font-semibold rounded-sm"
          >
            Next
            <ForwardArrowIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactInformation;
