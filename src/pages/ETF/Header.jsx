import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../actions/utils';

export default function Header() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col lg:flex-row px-8 items-center justify-center md:gap-16 gap-8 py-9  ">
      <div className="flex text-center md:text-start flex-col gap-10 text-[#fff] md:items-start w-full lg:w-1/4">
        <h1 className="font-bold md:text-[70px] text-5xl  text-center md:text-start mt-9 text-[#fff]">
          In-depth
          <br /> ETF Trading <br />
          with Bulloak
        </h1>
        <p className="">
          Bulloak’s charting tools, granular data, and independent analysis aim
          to empower investors through various platforms and different operating
          systems.
        </p>
        <p>On Bulloak, do it all with zero commission.</p>
        <img src="/companies.png" alt="" />
        <button
          onClick={() => {
            navigate('/register');
            scrollToTop();
          }}
          className="bg-[#D4B716] hidden md:block rounded-lg p-4 w-60 font-bold text-lg text-black"
        >
          Get Started
        </button>
      </div>
      <img src="/mobile.png" className="h-auto w-full md:w-1/3" alt="" />
      <button
        onClick={() => {
          navigate('/register');
          scrollToTop();
        }}
          className="bg-[#D4B716] rounded-lg md:hidden text-[#000]  p-2 w-64 font-bold text-lg"
      >
        Get Started
      </button>
    </section>
  );
}
