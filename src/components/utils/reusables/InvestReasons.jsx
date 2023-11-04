import invest_save from '../../../assets/invest_save.png';
import invest_save2 from '../../../assets/invest_save2.png';

const InvestReasons = () => {
  return (
    <section className="bg-gradient-to-b from-purple-300 to-[#41073F] bg-opacity-40 w-full flex flex-col justify-between px-5 xl:px-20 mb-5 py-[5rem] gap-[5rem]">
      <div className="place-items-center flex flex-col-reverse md:flex-row items-center justify-between lg:justify-around">
        <div className="flex flex-col gap-7 text-white">
          <div className="w-28 border-b-4 rounded-md border-[#fff]"></div>
          <p className="text-3xl md:text-4xl font-extrabold tracking-wide">
            PUT YOUR IDLE
            <br />
            MONEY TO WORK
          </p>
          <p className="text-lg md:text-2xl lg:w-[27rem]">
            Your uninvested cash will generate a 5.0% APY. Interest will be paid
            every month.
          </p>
          <button className="font-bold py-4 px-6 bg-[#fff] rounded-lg text-[#41073F] max-w-[10rem]">
            Get Started
          </button>
        </div>
        <img
          src={invest_save}
          alt=""
          className="h-[20rem] md:h-[30rem] xl:h-[40rem] -mr-[5rem]"
        />
      </div>
      <div className="mx-auto w-full lg:w-[93%] xl:w-[85%] border-b rounded-md border-gray-300 opacity-40"></div>
      <div className="w-full flex flex-col gap-[5rem] md:flex-row items-center justify-between lg:justify-around md:mt-[9rem] mb-[3rem]">
        <img
          src={invest_save2}
          alt=""
          className="h-[10rem] md:h-[15rem] lg:h-[20rem]"
        />

        <div className="flex flex-col gap-7 text-white">
          <div className="w-28 border-b-4 rounded-md border-[#fff]"></div>
          <p className="text-3xl md:text-4xl font-extrabold tracking-wide">
            BOOST YOUR SAVINGS
          </p>
          <p className="text-lg md:text-2xl lg:w-[27rem]">
            Your savings could grow faster with Bulloak Cash Management than in
            a bank. Set a recurring deposit schedule to achieve your savings
            goal.
          </p>
          <button className="font-bold py-4 px-6 bg-[#fff] rounded-lg text-[#41073F] max-w-[10rem]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestReasons;
