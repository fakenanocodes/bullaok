import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { scrollToTop } from '../../../actions/utils';
import { handleGenericError } from '../../../config/mixin';
import { setCurrentSignupEmail } from '../../../store/auth_reducer';
import Button from '../../utils/reusables/Button';
import InputComponent from '../../utils/reusables/InputComponent';

const schema = yup.object().shape({
  first_name: yup.string().required('First Name field cannot be empty'),
  last_name: yup.string().required('Last Name field cannot be empty'),
  email: yup.string().required('Email field cannot be empty'),
  password: yup.string().required('Password field cannot be empty'),
  username: yup.string().required('username field cannot be empty'),
  referral_code: yup.string(),
});
const SignupForm = ({ setSignupComponent }) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const referralCode = urlSearchParams.get('referral') || null;

  const [referral, setReferral] = useState(referralCode);

  
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {
    getValues,
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    reValidateMode: 'onSubmit',
    mode: 'onChange',
  });
  
  useEffect(() => {
    if (referralCode) {
      setReferral(referralCode);
      setValue('referral_code', referralCode); 
    }
  },[referralCode])

  const onSubmit = async () => {
    const data = getValues();

    try {
      setIsLoading(true);
      const response = await axios.post('/user/auth/create/', data);
      dispatch(setCurrentSignupEmail(data?.email));
      navigate('/verification');
      setIsLoading(false);
      toast.success('Account Created Succesfully', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
      });
      reset();
    } catch (err) {
      setIsLoading(false);
      const errMsg = handleGenericError(err);
      setError(errMsg);
    }
  };

  setTimeout(() => {
    setError(null);
  }, 20000);
  return (
    <form
      className="w-[100%] max-[640px]:flex-1 flex flex-col justify-around p-5 lg:p-14 h-[50vh] lg:h-[90vh]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {error && <Alert severity="error">{error}</Alert>}

      <p className="laviossa text-3xl font-semibold">Get Started</p>

      <div>
        <div className="flex justify-between items-center w-full gap-5">
          <div className="w-full">
            <InputComponent
              error={errors?.first_name?.message}
              register={register('first_name')}
              type={'text'}
              placeholder={'John'}
              label={'First Name'}
            />
          </div>
          <div className="w-full">
            <InputComponent
              error={errors?.last_name?.message}
              register={register('last_name')}
              type={'text'}
              placeholder={'Doe'}
              label={'Last Name'}
            />
          </div>
        </div>
        <InputComponent
          error={errors?.email?.message}
          register={register('email')}
          type={'email'}
          placeholder={'Email'}
          label={'Email'}
        />
        <InputComponent
          error={errors?.password?.message}
          register={register('password')}
          type={'password'}
          placeholder={'Password'}
          label={'Password'}
          password
        />
        <div className="w-full">
          <InputComponent
            error={errors?.username?.message}
            register={register('username')}
            type={'text'}
            placeholder={'User Name'}
            label={'Username'}
          />
        </div>

        <div className="w-full">
          <InputComponent
            error={errors?.referral_code?.message}
            type={'text'}
            value={referral}
            label={'Referral Code'}
            placeholder={'Referral Code'}
            disabled
          />
        </div>
      </div>

      <div>
        <Button type={'submit'}>
          {' '}
          {isLoading ? (
            <CircularProgress sx={{ color: 'white' }} thickness={6} size={18} />
          ) : (
            'Signup'
          )}
        </Button>
        <p className="text-center font-medium mt-5">
          Already have an account?{' '}
          <span
            onClick={() => {
              scrollToTop();
              navigate('/login');
            }}
            className="text-[#8E0789] cursor-pointer"
          >
            Sign in
          </span>{' '}
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
