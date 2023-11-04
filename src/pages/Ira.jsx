import ira_banner_img from '../assets/ira_banner_img.png';
import MainLayout from '../components/MainLayout';
import IraSmallCard from '../components/utils/cards/IraSmallCard';

const cardData = [
  {
    title: 'Stocks',
    description: 'Get started with zero commission and no account minimums.',
  },
  {
    title: 'Options',
    description: 'Enjoy zero commissions plus $0 per contract fees.',
  },
  {
    title: 'ETFs',
    description: 'Diversify your portfolio at a lower cost.',
  },
];

const Ira = () => {
  return (
    <MainLayout>
      <section className="flex flex-col lg:flex-row justify-evenly items-center gap-[2rem] mx-5 md:mx-[5rem]">
        <div className="flex flex-col gap-5 mt-[5rem] lg:mt-0">
          <div>
            <p className="text-4xl xl:text-5xl font-extrabold text-[#282828] mb-5 xl:leading-snug xl:w-[27rem]">
              Take control of your <span className="relative">retirement</span>{' '}
              with a Webull IRA.
            </p>
          </div>
          <p className="font-normal text-lg md:text-xl">
            Invest in stocks, ETFs and options in <br /> your self-directed
            retirement accounts from Webull.
          </p>
          <div>
            <button className="text-white font-semibold text-lg py-5 px-6 bg-[#FFD700] rounded-lg mt-[2rem]">
              Open a Bulloak account
            </button>
          </div>
        </div>

        <img src={ira_banner_img} alt="" className="h-[30rem] xl:h-[50rem]" />
      </section>
      <section className="bg-gray-50 py-[1rem]">
        <div className="flex flex-col justify-center items-center gap-4 my-[3rem] border-b mx-5 lg:mx-[5rem] xl:mx-[10rem]">
          <p className="text-2xl lg:text-4xl font-bold tracking-wide text-center my-[1rem]">
            Retirement investing by{' '}
            <span className="text-[#FFD700]">Bulloak</span>
          </p>
          <p className="text-base md:text-lg tracking-wide text-center w-full px-3 lg:w-[75vw] xl:w-[60vw] text-[#636872]">
            The all-in-one solution to actively manage your retirement savings.
            Invest in stocks, ETFs, and options, all in your Webull IRA while
            gaining potential tax advantages.
          </p>
          <div className="w-24 border-b-[6px] rounded-t-md border-[#30022ECC] mt-5"></div>
        </div>

        <div className="w-full flex flex-col items-center justify-center md:flex-row gap-20 md:gap-3 lg:gap-10 xl:gap-14 my-[5rem] px-5">
          {cardData?.map((card, idx) => (
            <IraSmallCard key={idx} card={card} index={idx} />
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center gap-4 my-[3rem] border-b mx-5 lg:mx-[5rem] xl:mx-[10rem]">
          <p className="text-2xl lg:text-4xl font-bold tracking-wide text-center my-[1rem]">
            Choose the right{' '}
            <span className="text-[#FFD700]">retirement account</span> for you
          </p>

          <div className="w-24 border-b-[6px] rounded-t-md border-[#30022ECC] mt-5"></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Ira;
