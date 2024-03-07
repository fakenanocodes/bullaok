import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login_bg from '../../../assets/login_bg.png';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPassword';
import Verification from './Verification';

const ForgotPassword = () => {
  const [forgotPasswordComponent, setForgotPasswordComponent] = useState(0);
  const pageComponents = [ForgotPasswordForm, Verification, ResetPasswordForm];
  const Page = pageComponents[forgotPasswordComponent];

  return (
    <div className="flex flex-col-reverse items-center lg:flex-row justify-between h-full">
      <Page setForgotPasswordComponent={setForgotPasswordComponent} />

      <div
        style={{
          backgroundImage: `url(${login_bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="w-[100%] h-[100vh] flex flex-col justify-center items-center"
      >
        <p className="laviossa text-white text-xl lg:text-[2.5rem] p-5 lg:p-10 bg-white bg-opacity-5 backdrop-blur-sm w-[90%] lg:w-[30rem] lg:mx-3 leading-normal">
          Bulloak brings investments and investment opportunities straight to
          your screen
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
