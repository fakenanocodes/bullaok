import { useState } from 'react';
import login_bg from '../../../assets/login_bg.png';
import SelectBroker from './SelectBroker';
import SignupForm from './SignupForm';
import Verification from './Verification';

const SignupComponent = () => {
  const [signupComponent, setSignupComponent] = useState(0);

  const pageComponents = [SignupForm, Verification, SelectBroker];
  const Page = pageComponents[signupComponent];

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between lg:h-[90vh]">
      <Page setSignupComponent={setSignupComponent} />

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

export default SignupComponent;
