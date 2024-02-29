import { useForm } from 'react-hook-form';
import debit_bank from '../../assets/dashboard/investment/debit_bank.png';
import debit_card from '../../assets/dashboard/investment/debit_card.png';
import visa_plat from '../../assets/dashboard/investment/visa_plat.png';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const CurrencyCard = ({ handleNext }) => {
  const { getValues, handleSubmit } = useForm({
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    console.log(getValues());
    handleNext(3);
  };

  return (
    <div className="py-3 px-1 lg:px-14 h-full">
      <p className="text-base lg:text-xl text-black font-[poppins]">
        Select the type and design of the card
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[1.5rem] flex flex-col gap-5 font-[poppins]"
      >
        <div>
          <p className="text-black">Type of card</p>
          <CardInputComponent />
        </div>
        <div className="flex items-center gap-4 w-full rounded-lg py-4">
          <div className="relative">
            <img src={visa_plat} alt="" className="rounded-xl" />
            <div className="absolute -top-3 left-2 h-6 w-6 rounded-full border-2 border-black bg-white"></div>
          </div>
          <div className="relative">
            <img src={debit_bank} alt="" className="rounded-xl" />
            <div className="absolute -top-3 left-2 h-6 w-6 rounded-full border-2 border-black bg-white"></div>
          </div>
          <div className="relative">
            <img src={debit_card} alt="" className="rounded-xl" />
            <div className="absolute -top-3 left-2 h-6 w-6 rounded-full border-2 border-black bg-white"></div>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start md:mt-[7rem] lg:mt-0 gap-5 mt-3">
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
            Add selected
            <ForwardArrowIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyCard;
