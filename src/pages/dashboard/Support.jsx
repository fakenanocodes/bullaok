import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdArrowBack } from 'react-icons/io';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import InputComponent from '../../components/utils/reusables/InputComponent';

const schema = yup.object().shape({
  subject: yup.string().required('subject field cannot be empty'),
  body: yup.string().required('body field cannot be empty'),
});
export default function Support() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
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

    try {
      setIsLoading(true);
      const response = await axios.post('/contact/', data);
      setSuccess(response?.data?.message);
      console.log(response);
      setIsLoading(false);
      reset();
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
    <div className="bg-white h-full flex-col flex justify-center items-start">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-7 py-7 p-6 text-black text-3xl cursor-pointer block"
      >
        <IoMdArrowBack />
        <p>Support</p>
      </div>
      <div className="flex flex-col text-black w-inherit m-auto -mt-[20px] gap-5 w-full">
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <h2 className="text-center xl:text-4xl text-2xl font-semibold">
          Need some help?
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-1 xl:w-[500px] w-full m-auto p-5"
        >
          {/* <InputComponent */}
          <label htmlFor="subject font-bold">Subject</label>

          <InputComponent
            error={errors?.subject?.message}
            register={register('subject')}
            type={'text'}
            placeholder={'I can not change profile picture'}
          />
          <div className="flex flex-col text-black">
            <label htmlFor="body">Body</label>
            <textarea
              // {errors?.subject?.message}
              className="outline-[#41073F] focus:border-[#41073F] border-1 border-[#41073F] border-2 rounded-xl p-2"
              placeholder="Message"
              {...register('body')}
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex items-center justify-center mt-7 w-full">
            <button
              type="submit"
              className="bg-[#41073F] rounded-xl px-6 p-2 flex justify-center text-white"
            >
              {isLoading ? (
                <CircularProgress size={20} sx={{ color: 'white' }} />
              ) : (
                'Send'
              )}
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center  items-center gap-5 text-black w-full">
          <hr className="w-[80%]  " />
          <div className="flex xl:flex-row flex-col w-full gap-8 text-2xl justify-around text-[#6E7781]">
            <div className="flex flex-col items-center justify-center">
              <IoCallOutline />
              <p>+91 343 222 43</p>
              <p>+91 449 890 02</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <IoMailOutline />
              <p>send us Email</p>
              <p>support@bulloak.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
