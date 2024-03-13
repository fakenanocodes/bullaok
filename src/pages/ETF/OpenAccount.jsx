import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../actions/utils';

export default function OpenAccount() {
  const navigate = useNavigate();
  return (
    <section className="py-9 px-5 flex flex-col items-center gap-9">
      <div>
        <h2 className="text-center text-[#fff] md:text-5xl text-3xl font-bold mt-5 md:mb-10">
          Over 3,300 ETFs available on the Bulloak App
        </h2>
      </div>
      <div className="md:w-2/3 w-full  m-auto mt-5 flex flex-col items-center">
        <hr className="w-full mt-5 hidden md:block" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:divide-x py-8 justify-center items-center">
          <div className="bx text-[#fff]  rounded-lg h-full w-full bg-gray-300 md:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 md:border-0 text-center px-6 py-4">
            <h3 className="text-3xl mb-4 font-bold">Fund Profile</h3>
            <p className="text-sm md:text-lg">
              Fund profile, dvidend, split record, and net asset value record
            </p>
          </div>
          <div className="bx text-[#fff] rounded-lg h-full w-full bg-gray-300 md:bg-transparent  bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 md:border-0 text-center px-6 py-4">
            <h3 className="text-3xl mb-4 font-bold">Asset Allocation</h3>
            <p className="text-sm md:text-lg">
              Fund profile, dvidend, split record, and net asset value record
            </p>
          </div>
          <div className="bx text-[#fff]  rounded-lg h-full w-full bg-gray-300  md:bg-transparent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border md:border-0 border-gray-100 text-center px-6 py-4">
            <h3 className="text-3xl mb-4 font-bold">Fund Profile</h3>
            <p className="text-sm md:text-lg">
              Fund profile, dvidend, split record, and net asset value record
            </p>
          </div>
        </div>
        <hr className="w-full hidden md:block " />
        <button
          onClick={() => {
            navigate('/register');
            scrollToTop();
          }}
          className="bg-[#D4B716] text-black py-3 rounded-lg font-bold mt-7 px-6"
        >
          Open an account
        </button>
      </div>
      <img src="/etf.png" className="h-auto md:w-2/4 w-full " alt="" />
      <div className="discover flex md:flex-row flex-col items-center justify-center gap-8 mt-9 px-7">
        <img src="etfsingle.png" className="h-auto md:w-80 w-2/4" alt="" />
        <div className="block text-[#fff] md:w-2/5 w-full">
          <h2 className="font-bold md:text-3xl text-2xl text-end md:text-start">
            Discover the ETF that is right for you with ETF Lists
          </h2>
          <p className="md:w-80 w-full mt-4 md:text-2xl text-lg text-[#D4D4D4] text-end md:text-start">
            ETF lists give you real-time top performing ETFs in each industry at
            a glance. Explore your options and align with your objectives more
            efficiently.
          </p>
        </div>
      </div>
      <div className="profile flex  flex-col items-center md:flex-row-reverse justify-center gap-8 mt-9 px-7">
        <img src="etf_profile.png" className="h-auto md:w-80 w-2/4" alt="" />
        <div className="block text-[#fff] md:w-2/5 w-full">
          <h2 className="font-bold text-2xl md:text-3xl text-end md:text-start">
            A deeper dive into the fund: <br />
            ETF Profile
          </h2>
          <p className=" mt-4 md:text-2xl text-lg text-[#D4D4D4] text-end md:text-start">
            See the details of each ETFs and explore more than 3,300 ETFs that
            best fit your objectives!
          </p>
        </div>
      </div>
    </section>
  );
}
