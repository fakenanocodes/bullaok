import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { handleGenericError } from '../../../config/mixin';
import { setCurrentSignupEmail } from '../../../store/auth_reducer';
import Button from '../../utils/reusables/Button';
import InputComponent from '../../utils/reusables/InputComponent';
import { MdOutlineArrowBack } from 'react-icons/md';

const schema = yup.object().shape({
  email: yup.string().required('Email field cannot be empty'),
});

export default function ForgotPasswordForm({ setForgotPasswordComponent }) {
  const dispatch = useDispatch();
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
      const response = await axios.post('/user/auth/password-reset/', data);
      dispatch(setCurrentSignupEmail(data));
      toast.success(response.data.message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
      });
      setIsLoading(false);
      setSuccess('Login Successful');

      reset();
      console.log(response);
      setForgotPasswordComponent(1);
      //   navigate('/dashboard');
    } catch (err) {
      setIsLoading(false);
      const errMsg = handleGenericError(err);
      toast.error(errMsg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
      });
      setError(errMsg);
    }
  };

  //   const resendEmail = async () => {
  //     setResendingEmail(true);
  //     try {
  //       await axios.post('user/auth/password-reset/', {
  //         email: currentUserEmail.email,
  //       });

  //       setSuccess('We have resent a code to your email');

  //       setResendingOtp(false);
  //     } catch (error) {
  //       setResendingOtp(false);
  //       const errMsg = handleGenericError(error);
  //       setError(errMsg);
  //     }
  //   };
  setTimeout(() => {
    setError(null);
  }, 20000);

  return (
    <div className="w-[100%] max-[640px]:flex-1  flex flex-col justify-center gap-y-12 p-5 lg:p-14 h-[50vh] lg:h-[100vh]">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        {/* {error && <Alert severity="error">{error}</Alert>} */}
        {/* {success && <Alert severity="success">{success}</Alert>} */}
        <p className="laviossa text-3xl font-semibold mb-7">Forgot Password</p>

        <InputComponent
          error={errors?.email?.message}
          register={register('email')}
          type={'email'}
          placeholder={'Email'}
          label={'Email'}
        />

        <Button type={'submit'}>
          {' '}
          {isLoading ? (
            <CircularProgress sx={{ color: 'white' }} thickness={6} size={18} />
          ) : (
            'Send'
          )}
        </Button>
      </form>
      {/* <div className="flex justify-center">
        <p>Didn't receive link?</p>
        <button className="text-[#8E0789] font-bold">resend</button>
      </div> */}

      <div
        className="flex items-center justify-start w-full gap-5 text-[#8E0789] "
        onClick={() => navigate(-1)}
      >
        <MdOutlineArrowBack />
        <h2 className="font-bold">Back</h2>
      </div>
    </div>
  );
}
