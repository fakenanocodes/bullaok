import { useForm } from 'react-hook-form';
import debit_card from '../../assets/dashboard/investment/debit_card.png';
import AddIcon from '../utils/icons/AddIcon';
import CancelIcon from '../utils/reusables/CancelIcon';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const PersonalData = ({ handleNext }) => {
  const { getValues, handleSubmit } = useForm({
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    console.log(getValues());
    handleNext(2);
  };

  return (
    <div className="py-3 px-1 lg:px-14 h-full overflow-y-scroll">
      <p className="text-base lg:text-xl text-black font-[poppins]">
        Choose your currency & cards
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[1.5rem] flex flex-col gap-5 font-[poppins]"
      >
        <div className="flex items-center gap-5">
          <p className="text-black text-xs md:text-sm lg:text-base">
            Currency:
          </p>
          <div className="flex items-center gap-2">
            <input
              type="Checkbox"
              name="usd"
              value="usd"
              className="outline-none text-[#41073F]"
            ></input>
            <p className="text-black text-xs md:text-sm lg:text-base">
              Dollar (USD)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="Checkbox"
              name="usd"
              value="usd"
              className="outline-none text-[#41073F]"
            ></input>
            <p className="text-black text-xs md:text-sm lg:text-base">
              Euro (EUR)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="Checkbox"
              name="usd"
              value="usd"
              className="outline-none text-[#41073F]"
            ></input>
            <p className="text-black text-xs md:text-sm lg:text-base">
              Pounds (GBP)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full rounded-lg bg-[#D2CDD247] px-4 py-4">
          <img
            src={debit_card}
            alt=""
            className="rounded-xl max-[600px]:w-[60%] max-[600px]:h-[9rem] max-[600px]:object-cover"
          />

          <div className="flex flex-col gap-4">
            <p className="text-xs md:text-sm text-black">Card type</p>
            <p className="text-black text-sm lg:text-lg">Dollar (USD)</p>
            <AddIcon />
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start md:mt-[7rem] lg:mt-0 gap-5 mt-5">
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

export default PersonalData;
