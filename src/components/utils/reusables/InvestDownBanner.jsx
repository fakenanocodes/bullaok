import invest_per from '../../../assets/invest_per.png';

const InvestDownBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[#590a56] to-purple-400 bg-opacity-90 relative w-full flex flex-col lg:flex-row justify-between items-center mb-[5rem]">
      <div className="flex flex-col justify-center items-start gap-12  text-white pl-3 md:pl-5 lg:pl-10 xl:pl-20 my-[2rem] lg:my-[5rem]">
        <p className="text-4xl md:text-5xl font-extrabold w-full md:w-[40rem] tracking-wide text-white mb-5 leading-normal">
          EARN{' '}
          <span className="text-yellow-100 text-4xl md:text-6xl tracking-normal">
            5.0%
          </span>{' '}
          APY NOW!
        </p>

        <button className="text-white font-bold py-4 px-6 bg-[#D4B716] rounded-lg">
          Get Started
        </button>
      </div>
      <img
        src={invest_per}
        alt=""
        className="w-full h-full xl:h-[30rem] object-contain hidden lg:block"
      />
    </div>
  );
};

export default InvestDownBanner;
