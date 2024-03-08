import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { scrollToTop } from '../../../actions/utils';
import { handleGenericError } from '../../../config/mixin';
import Button from '../../utils/reusables/Button';
import InputComponent from '../../utils/reusables/InputComponent';
import { toast } from 'react-toastify';
import { MdOutlineArrowBack } from 'react-icons/md';

const schema = yup.object().shape({
  password: yup.string().required('Password field cannot be empty'),
  //   forgot_password: yup.string().required('Password field cannot be empty'),
});
const ResetPasswordForm = ({ setSignupComponent }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const otp = useSelector((state) => state.auth.otp);

  console.log(otp);
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
    if (data.password === data.forgot_password) {
      try {
        const apiData = {
          password: data.password,
          verification_code: otp,
        };
        setIsLoading(true);
        const response = await axios.post(
          '/user/auth/password-confirmation/',
          apiData
        );
        toast.success('Password changed successfully', {
          position: 'top-right',
          autoClose:4000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setIsLoading(false);

        navigate('/login');
        reset();
      } catch (err) {
        setIsLoading(false);
        const errMsg = handleGenericError(err);
        setError(errMsg);
      }
    } else {
      setError('Passwords do not match!');
    }
  };

  setTimeout(() => {
    setError(null);
  }, 20000);
  return (
    <form
      className="w-[100%] max-[640px]:flex-1  flex flex-col gap-9 justify-around p-5 lg:p-14"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="laviossa text-3xl font-semibold">Reset your password</p>

      <div>
        <InputComponent
          error={errors?.password?.message}
          register={register('password')}
          type={'password'}
          placeholder={'Password'}
          label={'Password'}
          password
        />
        <InputComponent
          error={errors?.forgot_password?.message}
          register={register('forgot_password')}
          type={'password'}
          placeholder={'Password'}
          label={'Confirm new password'}
          password
        />
        {error && <Alert severity="error">{error}</Alert>}
      </div>

      <div>
        <Button type={'submit'}>
          {' '}
          {isLoading ? (
            <CircularProgress sx={{ color: 'white' }} thickness={6} size={18} />
          ) : (
            'Reset my password'
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
      <div
        className="flex items-center justify-start w-full gap-5 text-[#8E0789] "
        onClick={() => navigate(-1)}
      >
        <MdOutlineArrowBack />
        <h2 className="font-bold">Back</h2>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
