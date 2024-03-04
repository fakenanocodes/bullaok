import debit_card from '../../assets/dashboard/investment/debit_card.png';
import AddIcon from '../utils/icons/AddIcon';
import CancelIcon from '../utils/reusables/CancelIcon';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const PersonalData = () => {
  return (
    <div className="py-3 px-14 h-full overflow-y-scroll">
      <p className="text-sm md:text-base lg:text-xl text-black font-[poppins]">
        Choose your currency & cards
      </p>

      <form className="mt-[1.5rem] flex flex-col gap-5 font-[poppins]">
        <div className="flex items-center gap-5">
          <p className="text-black">Currency:</p>
          <div className="flex items-center gap-2">
            <input
              type="Checkbox"
              name="usd"
              value="usd"
              className="outline-none text-[#41073F]"
            ></input>
            <p className="text-black">Dollar (USD)</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="Checkbox"
              name="usd"
              value="usd"
              className="outline-none text-[#41073F]"
            ></input>
            <p className="text-black">Euro (EUR)</p>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="Checkbox"
              name="usd"
              value="usd"
              className="outline-none text-[#41073F]"
            ></input>
            <p className="text-black">Pounds (GBP)</p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full rounded-lg bg-[#D2CDD247] px-4 py-4">
          <img src={debit_card} alt="" className="rounded-xl" />

          <div className="flex flex-col gap-4">
            <p className="text-sm text-black">Card type</p>
            <p className="text-black lg:text-lg">Dollar (USD)</p>
            <AddIcon />
          </div>
        </div>

        <div className="flex items-center gap-5 mt-5">
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

export default PersonalData;
