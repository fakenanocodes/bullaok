import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import CancelIcon from '../utils/reusables/CancelIcon';
import CardInputComponent from '../utils/reusables/CardInputComponent';
import ForwardArrowIcon from '../utils/reusables/ForwardArrowIcon';

const schema = yup.object().shape({
  delivery_method: yup.string(),
  zip_code: yup.string(),
  city: yup.string(),
  area: yup.string(),
});

const DeliveryOption = ({ handleNext }) => {
  const { control, getValues, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    console.log(getValues());
    handleNext(5);
  };

  return (
    <div className="py-3 px-1 lg:px-14">
      <p className="text-base lg:text-xl text-black font-[poppins]">
        Delivery Option
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-[1.5rem] flex flex-col gap-3"
      >
        <div className="flex items-center gap-8">
          <Controller
            name="delivery_method"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-3">
                <input
                  className="cursor-pointer accent-[#8E0789] text-[#8E0789] outline-none"
                  type="radio"
                  {...field}
                  id="courierDelivery"
                  value="courierDelivery"
                />

                <p className="text-black font-[poppins] text-sm md:text-base">
                  Courier delivery
                </p>
              </div>
            )}
          />
          <Controller
            name="delivery_method"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-3">
                <input
                  className="cursor-pointer accent-[#8E0789] text-[#8E0789]"
                  type="radio"
                  {...field}
                  id="officeDelivery"
                  value="officeDelivery"
                />
                <p className="text-black font-[poppins] text-sm md:text-base">
                  Deliver at office
                </p>
              </div>
            )}
          />
        </div>
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

        <div className="flex items-center gap-5 mt-10 justify-center lg:justify-start md:mt-[7rem] lg:mt-0">
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

export default DeliveryOption;
