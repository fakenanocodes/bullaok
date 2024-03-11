import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react18-input-otp';
import { scrollToTop } from '../../../actions/utils';
import { handleGenericError } from '../../../config/mixin';
import { setOtp } from '../../../store/auth_reducer';
import Button from '../../utils/reusables/Button';
import { MdOutlineArrowBack } from 'react-icons/md';
import { toast } from 'react-toastify';

const Verification = ({ setForgotPasswordComponent }) => {
  const [state, setState] = useState({ otp: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [resendingOtp, setResendingOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUserEmail = useSelector(
    (state) => state.auth.currentSignupEmail
  );
  const { handleSubmit } = useForm();

  const handleChange = (otp) => {
    setError('');
    setState({ otp });
    // setSignupComponent(0);
  };

  const onSubmit = async () => {
    if (state?.otp !== '') {
      const data = {
        verification_code: state?.otp,
      };
      dispatch(setOtp(state?.otp));
      setForgotPasswordComponent(2);
    } else {
      setError('Input field cannot be empty');
    }
  };

  const resendOtp = async () => {
    setResendingOtp(true);
    try {
      await axios
        .post('user/auth/password-reset/', {
          email: currentUserEmail.email,
        })
        .then((res) => {
          setResendingOtp(false);

          console.log(res);
          toast.success('We have resent a code to your email', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
          });
        });

      setResendingOtp(false);
    } catch (error) {
      setResendingOtp(false);
      const errMsg = handleGenericError(error);
      setError(errMsg);
    }
  };
  setTimeout(() => {
    setError(null);
    setSuccess(null);
  }, 20000);
  return (
    <div className="w-[100%] max-[640px]:flex-1  flex flex-col justify-center gap-y-12 p-5 lg:p-14 h-[50vh] lg:h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[100%]  flex flex-col justify-around p-5 lg:p-14 gap-7"
      >
        <div>
          <p className="text-3xl font-semibold">Email Verification</p>
          <p className="tracking-wide mt-1">
            We have sent an OTP to{' '}
            <span className="text-[#8E0789]">{currentUserEmail?.email}</span>
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col mx-3">
            <OtpInput
              value={state.otp}
              onChange={handleChange}
              numInputs={6}
              inputStyle={
                error
                  ? {
                      outline: 'none',
                      borderTop: 'none',
                      borderRight: 'none',
                      borderLeft: 'none',
                      borderBottom: '3px solid red',
                      height: '120px',
                      width: '100%',
                      margin: '5px',
                      padding: '0.9rem 1rem',
                      fontSize: '24px',
                    }
                  : {
                      outline: 'none',
                      borderTop: 'none',
                      borderRight: 'none',
                      borderLeft: 'none',
                      borderBottom: '3px solid #8E0789',
                      height: '120px',
                      width: '100%',
                      margin: '5px 15px',
                      padding: '0.5rem 1rem',
                      fontSize: '24px',
                      marginTop: '2rem',
                    }
              }
            />

            <p className="text-[#0000004D] text-center mt-[2rem]">
              Didn&apos;t receive an email?{' '}
              <span
                onClick={resendOtp}
                className="text-[#8E0789] cursor-pointer font-medium"
              >
                {resendingOtp ? (
                  <>
                    <CircularProgress size={18} style={{ color: '#8E0789' }} />
                  </>
                ) : (
                  'Resend Otp '
                )}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-5 mx-0 gap-3">
          <Button
            type={'submit'}
            eventHandler={() => {
              scrollToTop();
              // setForgotPasswordComponent(2);
            }}
          >
            {isLoading ? (
              <>
                <CircularProgress size={18} style={{ color: 'white' }} />
              </>
            ) : (
              'Verify'
            )}
          </Button>
        </div>
      </form>
      <div
        className="flex items-center justify-start w-full gap-5 text-[#8E0789] "
        onClick={() => navigate(-1)}
      >
        <MdOutlineArrowBack />
        <h2 className="font-bold">Back</h2>
      </div>
    </div>
  );
};

export default Verification;
