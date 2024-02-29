import { useForm } from 'react-hook-form';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const SecurityData = ({ handleNext }) => {
  const { getValues, handleSubmit } = useForm({
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    console.log(getValues());
    handleNext(4);
  };
  return (
    <div className="py-3 px-1 lg:px-14">
      <p className="text-base lg:text-xl text-black font-[poppins]">
        Security Data
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[1.5rem] flex flex-col gap-3"
      >
        <CardInputComponent label={'Name on the card'} />
        <CardInputComponent label={'Control question'} />
        <CardInputComponent label={'Control answer'} />
        <CardInputComponent label={'Secret word'} />

        <div className="flex items-center gap-5 justify-center lg:justify-start md:mt-[7rem] lg:mt-0">
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

export default SecurityData;
