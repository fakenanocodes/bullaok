import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Cookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { scrollToTop } from '../../../actions/utils';
import login_bg from '../../../assets/login_bg.png';
import { handleGenericError } from '../../../config/mixin';
import { getNextMonth } from '../../../store/actions/utils';
import { setUserData } from '../../../store/auth_reducer';
import Button from '../../utils/reusables/Button';
import InputComponent from '../../utils/reusables/InputComponent';

const schema = yup.object().shape({
  email: yup.string().required('Email field cannot be empty'),
  password: yup.string().required('Password field cannot be empty'),
});
const UserLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies();
  const dispatch = useDispatch();
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
    const expiringDate = getNextMonth();

    try {
      setIsLoading(true);
      const response = await axios.post('/user/auth/login/', data);
      dispatch(setUserData(response?.data?.user));

      setIsLoading(false);
      setSuccess('Login Successful');

      cookies.set('bk_access', response?.data?.token?.access, {
        path: '/',
        secure: false,
        sameSite: 'Lax',
        expires: expiringDate,
      });

      cookies.set('refresh', response?.data?.token?.refresh, {
        path: '/',
        secure: false,
        sameSite: 'Lax',
        expires: expiringDate,
      });

      cookies.set('date', expiringDate, {
        path: '/',
        secure: false,
        sameSite: 'Lax',
        expires: expiringDate,
      });

      cookies.set('bk_user', response?.data?.user, {
        path: '/',
        secure: false,
        sameSite: 'Lax',
        expires: expiringDate,
      });

      reset();
      console.log(response);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
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
    <div className="flex flex-col-reverse items-center lg:flex-row justify-between h-[100vh]">
      <div className="w-[100%] max-[640px]:flex-1 flex flex-col justify-around p-5 lg:p-14 h-[50vh] lg:h-[90vh]">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          {error && <Alert severity="error">{error}</Alert>}
          {success && <Alert severity="success">{success}</Alert>}
          <p className="laviossa text-3xl font-semibold mb-7">Login</p>

          <div>
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
            <p
              onClick={() => navigate('/forgot-password')}
              className="text-[#8E0789] text-right my-2 cursor-pointer font-medium -mt-3"
            >
              Forgot password?
            </p>
          </div>

          <Button type={'submit'}>
            {' '}
            {isLoading ? (
              <CircularProgress
                sx={{ color: 'white' }}
                thickness={6}
                size={18}
              />
            ) : (
              'Log in'
            )}
          </Button>
        </form>
        <div>
          <p className="text-center font-medium mt-5">
            Don’t have an account?{' '}
            <span
              onClick={() => {
                scrollToTop();
                navigate('/register');
              }}
              className="text-[#8E0789] cursor-pointer"
            >
              Sign up
            </span>{' '}
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${login_bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-[100%] h-[30vh] lg:h-[90vh] flex flex-col justify-center items-center"
      >
        <p className="laviossa text-white text-xl lg:text-[2.5rem] p-5 lg:p-10 bg-white bg-opacity-5 backdrop-blur-sm w-[90%] lg:w-[30rem] lg:mx-3 leading-normal">
          Bulloak brings investments and investment opportunities straight to
          your screen
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
