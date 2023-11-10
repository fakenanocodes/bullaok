import { useState } from 'react';
import OtpInput from 'react18-input-otp';
import Button from '../../utils/reusables/Button';

const Verification = ({ setSignupComponent }) => {
  const [state, setState] = useState({ otp: '' });
  const [error, setError] = useState('');

  const handleChange = (otp) => {
    setError('');
    setState({ otp });
  };

  return (
    <form className="w-[100%] max-[640px]:flex-1 flex flex-col justify-around p-5 lg:p-14 h-[50vh] lg:h-[90vh]">
      <div>
        <p className="laviossa text-3xl font-semibold">Email Verification</p>
        <p className="tracking-wide mt-1">
          We have sent an OTP to{' '}
          <span className="text-[#8E0789]">info@bulloak.com</span>
        </p>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col mx-3">
          <OtpInput
            value={state.otp}
            onChange={handleChange}
            numInputs={4}
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
              onClick={() => setSignupComponent(0)}
              className="text-[#8E0789] cursor-pointer font-medium"
            >
              Resend OTP
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-5 mx-0 gap-3">
        <Button>Verify</Button>
      </div>
    </form>
  );
};

export default Verification;
