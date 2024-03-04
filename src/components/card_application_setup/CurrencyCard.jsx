import debit_bank from '../../assets/dashboard/investment/debit_bank.png';
import debit_card from '../../assets/dashboard/investment/debit_card.png';
import visa_plat from '../../assets/dashboard/investment/visa_plat.png';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const CurrencyCard = () => {
  return (
    <div className="py-3 px-14 h-full overflow-y-scroll">
      <p className="text-sm md:text-base lg:text-xl text-black font-[poppins]">
        Select the type and design of the card
      </p>

      <form className="mt-[1.5rem] flex flex-col gap-5 font-[poppins]">
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

        <div className="flex items-center gap-5 mt-3">
          <button className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm">
            Cancel
            <CancelIcon />
          </button>

          <button className="h-[2.4rem] flex items-center gap-2 px-3 py-2 text-sm bg-[#41073F] border border-[#41073F] text-white font-semibold rounded-sm">
            Add selected
            <ForwardArrowIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyCard;
