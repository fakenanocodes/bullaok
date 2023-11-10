import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../../actions/utils';
import login_bg from '../../../assets/login_bg.png';
import Button from '../../utils/reusables/Button';
import InputComponent from '../../utils/reusables/InputComponent';

const UserLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between h-[90vh]">
      <form className="w-[100%] max-[640px]:flex-1 flex flex-col justify-around p-5 lg:p-14 h-[50vh] lg:h-[90vh]">
        <p className="laviossa text-3xl font-semibold">Login</p>

        <div>
          <InputComponent type={'email'} placeholder={'Email'} />
          <InputComponent type={'password'} password placeholder={'Password'} />
          <p className="text-[#8E0789] text-right cursor-pointer font-medium -mt-3">
            Forgot password?
          </p>
        </div>

        <div>
          <Button>Login</Button>
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
      </form>

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
