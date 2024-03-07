import axios from 'axios';
import { useSelector } from 'react-redux';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const DeliveryOption = () => {
  const cardInformation = useSelector((state) => state.card.cardInformation);
  const createCard = async () => {
    try {
      await axios
        .post('/card/api/create_card/', {
          first_name: cardInformation?.firstName,
          middle_name: cardInformation?.lastName,
          phone_number: cardInformation?.phoneNumber,
          currency: cardInformation?.currency,
          card_type: cardInformation?.type,
        })
        .then((res) => console.log(res));
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(cardInformation);

  return (
    <div className="py-3 px-14">
      <p className="text-sm md:text-base lg:text-xl text-black font-[poppins]">
        Delivery Option
      </p>

      {/* <form className="mt-[1.5rem] flex flex-col gap-3"> */}
      <div className="flex justify-between items-center gap-5 w-full">
        <div className="w-full">
          <CardInputComponent label={'Zip code'} required={true} />
        </div>
        <div className="w-full">
          <CardInputComponent label={'City'} required={true} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-5 w-full">
        <div className="w-[49%]">
          <CardInputComponent label={'Area'} required />
        </div>
      </div>

      <div className="flex items-center gap-5 mt-5">
        <button className="h-[2.4rem] flex items-center gap-1 px-3 py-2 text-sm text-[#5F5656] font-semibold border border-[#41073F] rounded-sm">
          Cancel
          <CancelIcon />
        </button>

        <button
          onClick={createCard}
          className="h-[2.4rem] flex items-center gap-2 px-3 py-2 text-sm bg-[#41073F] border border-[#41073F] text-white font-semibold rounded-sm"
        >
          Next
          <ForwardArrowIcon />
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};

export default DeliveryOption;
