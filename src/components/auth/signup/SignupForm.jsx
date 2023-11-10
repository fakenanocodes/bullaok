import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../../actions/utils';
import Button from '../../utils/reusables/Button';
import InputComponent from '../../utils/reusables/InputComponent';

const SignupForm = ({ setSignupComponent }) => {
  const navigate = useNavigate();

  return (
    <form className="w-[100%] max-[640px]:flex-1 flex flex-col justify-around p-5 lg:p-14 h-[50vh] lg:h-[90vh]">
      <p className="laviossa text-3xl font-semibold">Get Started</p>

      <div>
        <div className="flex justify-between items-center gap-5">
          <div className="w-full">
            <InputComponent type={'text'} placeholder={'First Name'} />
          </div>
          <div className="w-full">
            <InputComponent type={'text'} placeholder={'Last Name'} />
          </div>
        </div>
        <InputComponent type={'email'} placeholder={'Email'} />
        <InputComponent type={'password'} password placeholder={'Password'} />
        <InputComponent
          type={'password'}
          password
          placeholder={'Confirm Password'}
        />
      </div>

      <div>
        <Button eventHandler={() => setSignupComponent(1)}>Sign Up</Button>
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
