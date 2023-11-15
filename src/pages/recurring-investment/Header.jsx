import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function Header() {
  // const data = [
  //   'Why choose Bulloak for margin trading.',
  //   'The benefit of a margin trading account.',
  //   'Understand the risks of margin trading.',
  //   'How trading securities on margin works.',
  // ];
  return (
    <section className="flex flex-col lg:flex-row px-8 items-center justify-center md:gap-16 gap-8 py-9  bg-contain bg-center bg-[#F7FAFC]  bg-no-repeat  w-full relative">
      <div className="lg:w-2/3 w-full  flex lg:flex-row flex-col">
        <div className="flex text-center md:text-start flex-col gap-10 text-[#000] md:items-start items-center w-full lg:w-2/4 items-start">
          <h1 className="font-bold md:text-7xl text-4xl  text-center md:text-start mt-9 ">
            Recurring <br /> Investments in <br /> Stock/ETF
          </h1>
          <p className="lg:w-3/5 w-full">
            Recurring investments can help you reach long-term goals during the
            market fluctuations.
          </p>

          <button className="bg-[#8E0789] font-bold lg:text-lg text-base rounded-lg text-[#fff] lg:px-9 px-4 py-4 flex items-center gap-2 mt-3 lg:mt-0">
            <span>Get Started</span> <BsFillArrowRightCircleFill />
          </button>
        </div>
        <img
          src="bg_investment.png"
          className="lg:w-2/5 w-full h-auto lg:mt-0 mt-8"
          alt=""
        />
      </div>
    </section>
  );
}
