import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, CircularProgress, ClickAwayListener } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { handleGenericError } from '../../config/mixin';

const schema = yup.object().shape({
  full_name: yup.string(),
  phone_number: yup.number(),
  address: yup.string(),
  facebook: yup.string(),
  instagram: yup.string(),
  twitter: yup.string(),
});
export default function EditProfileModal({ setOpen, profile }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const {
    getValues,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });

  const onSubmit = async () => {
    const data = getValues();
    console.log(data);

    try {
      setIsLoading(true);
      const response = await axios.put('/user/profile/', data);
      console.log(response);
      setIsLoading(false);
      setSuccess('Profile update Successful');

      reset();
      console.log(response);
    } catch (err) {
      setIsLoading(false);
      const errMsg = handleGenericError(err);
      setError(errMsg);
    }
  };

  setTimeout(() => {
    setError(null);
    setSuccess(null);
  }, 4000);
  return (
    <div className=" fixed top-0 rounded-lg left-0 w-full h-full flex  justify-center items-center bg-[#000000b3]">
      <ClickAwayListener onClickAway={() => setOpen(false)}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white  w-[90%] p-9 md:w-5/6 max-w-[700px] p-4 my-6  rounded-lg relative"
        >
          {success && <Alert severity="success">{success}</Alert>}
          {error && <Alert severity="error">{error}</Alert>}
          <div className="border-[#8E0789]/25 flex flex-col gap-4 border p-7 rounded-lg">
            <div className="">
              <label htmlFor="fullname">Full name</label>

              <input
                defaultValue={profile?.full_name}
                {...register('full_name')}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="John Doe"
                id="phone_number"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone number</label>
              <input
                defaultValue={profile?.phone_number}
                {...register('phone_number')}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="+1 234 567 233"
                id="phone"
                type="tel"
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                defaultValue={profile?.address}
                {...register('address')}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="7th street, London"
                id="address"
              />
            </div>
            <div>
              <label htmlFor="facebook">Facebook link</label>
              <input
                defaultValue={profile?.facebook}
                {...register('facebook')}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="https://www.facebook.com/"
                id="facebook"
              />
            </div>
            <div>
              <label htmlFor="twitter">Twitter link</label>
              <input
                defaultValue={profile?.twitter}
                {...register('twitter')}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="https://www.x.com/"
                id="twitter"
              />
            </div>
            <div>
              <label htmlFor="twitter">Instagram link</label>
              <input
                defaultValue={profile?.instagram}
                {...register('instagram')}
                className=" w-full border-2 border-[#E8C4E6] outline-[#E8C4E6] p-2 px-4 rounded-md"
                placeholder="https://www.instagram.com/"
                id="instagram"
              />
            </div>
          </div>
          <div className="flex gap-5  justify-end w-full mt-5">
            <button
              className="p-2 px-4 text-[#8E0789] "
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              // onClick={}
              className="bg-[#8E0789] text-white p-2 px-4 rounded-[15px]"
            >
              {isLoading ? (
                <CircularProgress sx={{ color: 'white' }} size={20} />
              ) : (
                'Save Changes '
              )}
            </button>
          </div>
        </form>
      </ClickAwayListener>
    </div>
  );
}
