import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../actions/utils';

export default function Stock() {
  const navigate = useNavigate();
  return (
    <section className="py-5">
      <div className="flex items-center lg:w-3/5 w-full  lg:flex-row flex-col justify-center mx-auto gap-9 text-[#fff] ">
        <img
          src="freestock.png"
          className="w-64 h-auto hidden lg:block"
          alt=""
        />
        <div className="flex flex-col lg:items-start items-center gap-4 w-full">
          <h2 className="font-bold text-4xl">Get 6 Free Stocks</h2>
          <h3 className="lg:text-3xl text-xl lg:w-full lg:text-start w-2/3 text-center">
            When You Open and Fund a New Account
          </h3>
          <img
            src="freestock.png"
            className="w-64 h-auto lg:hidden block"
            alt=""
          />
          <button
            onClick={() => {
              navigate('/register');
              scrollToTop();
            }}
            className="bg-[#fff] lg:hidden rounded-lg text-[#41073F] font-bold px-4 py-4 items-center gap-2 "
          >
            <span>Get Started</span> <BsFillArrowRightCircleFill />
          </button>
          <p className="lg:text-lg mt-5 lg:mt-0 text-xs">
            See{' '}
            <a href="#" className="underline">
              {' '}
              Term & Conditions
            </a>{' '}
            for more information regarding eligibility.
          </p>
        </div>
        <button className="bg-[#D4B716] lg:block rounded-lg text-[#000] font-bold w-1/4 py-4 items-center gap-2 mt-[100px] lg:mt-0">
          <span>Get Started</span>
        </button>
      </div>
    </section>
  );
}
