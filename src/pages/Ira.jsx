import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';
import account_icon from '../assets/account_icon.svg';
import fund_icon from '../assets/fund_icon.svg';
import ira_banner_img from '../assets/ira_banner_img.png';
import trade_icon from '../assets/trade_icon.svg';
import MainLayout from '../components/MainLayout';
import StockSteps from '../components/StockSteps';
import IraBigCard from '../components/utils/cards/IraBigCard';
import IraBigCardTwo from '../components/utils/cards/IraBigCardTwo';
import IraMediumCard from '../components/utils/cards/IraMediumCard';
import IraSmallCard from '../components/utils/cards/IraSmallCard';
import Faq from '../components/utils/reusables/Faq';

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

const mediumCardData = [
  {
    title: 'Traditional IRA',
    description:
      'Make pre-tax contributions and the investments in the account grow tax-deferred.',
    image: trade_icon,
  },
  {
    title: 'Roth IRA',
    description:
      'Contributions are post-tax allowing withdrawals later to be tax-free. Income restrictions may apply.',
    image: fund_icon,
  },
  {
    title: 'Rollover IRA',
    description:
      'If you have an IRA with your former employer, you have the option to roll it over to your IRA with Bulloak.',
    image: account_icon,
  },
];

const Ira = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <section className="flex flex-col lg:flex-row justify-evenly items-center gap-[2rem] mx-5 md:mx-[5rem]">
        <div className="flex flex-col gap-5 mt-[5rem] lg:mt-0">
          <div>
            <p className="laviossa text-3xl xl:text-4xl font-extrabold text-[#282828] mb-5 xl:leading-snug xl:w-[27rem]">
              Take control of your <span className="relative">retirement</span>{' '}
              with a Bulloak IRA.
            </p>
          </div>
          <p className="laviossa font-extralight text-base md:text-lg">
            Invest in stocks, ETFs and options in <br /> your self-directed
            retirement accounts from Bulloak.
          </p>
          <div>
            <button
             onClick={() => {
              navigate('/register');
              scrollToTop();
            }} className="laviossa text-white font-semibold text-lg py-5 px-6 bg-[#8E0789] rounded-lg mt-[2rem]">
              Open a Bulloak account
            </button>
          </div>
        </div>

        <img src={ira_banner_img} alt="" className="h-[30rem] xl:h-[45rem]" />
      </section>
      <section className="bg-gray-50 py-[1rem]">
        <div className="flex flex-col justify-center items-center gap-4 my-[3rem] border-b mx-5 lg:mx-[5rem] xl:mx-[10rem]">
          <p className="text-2xl lg:text-4xl font-bold tracking-wide text-center my-[1rem]">
            Retirement investing by{' '}
            <span className="text-[#FFD700]">Bulloak</span>
          </p>
          <p className="text-base md:text-lg tracking-wide text-center w-full px-3 lg:w-[75vw] xl:w-[60vw] text-[#636872]">
            The all-in-one solution to actively manage your retirement savings.
            Invest in stocks, ETFs, and options, all in your Bulloak IRA while
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

      <section className="py-[3rem]">
        <div className="flex flex-col justify-center items-center gap-4 my-[3rem] border-b mx-5 lg:mx-[5rem] xl:mx-[10rem]">
          <p className="text-2xl lg:text-4xl font-bold tracking-wide text-center my-[1rem]">
            Choose the right{' '}
            <span className="text-[#FFD700]">retirement account</span> for you
          </p>

          <div className="w-24 border-b-[6px] rounded-t-md border-[#30022ECC] mt-5"></div>
        </div>

        <div className="w-full flex flex-col items-center justify-center md:flex-row gap-20 md:gap-2 lg:gap-10 xl:gap-14 my-[5rem] px-5">
          {mediumCardData?.map((card, idx) => (
            <IraMediumCard key={idx} card={card} index={idx} />
          ))}
        </div>

        <p className="mx-auto text-xs md:text-sm text-center w-full px-3 lg:w-[75vw] xl:w-[60vw] text-[#636872] -mt-[2.5rem]">
          Disclosure: Bulloak Financial does not provide legal or tax advice.
          The information provided should not be considered legal or tax advice.
          Consult an attorney or tax professional regarding your specific
          situation.
        </p>
      </section>

      <section className="mb-[5rem] lg:mb-0 -mt-[3rem] mx-auto w-full xl:w-[75vw]">
        <div className="flex flex-col justify-center items-center gap-4 mt-[3rem] mb-[10rem] border-b mx-5 lg:mx-[5rem] xl:mx-0">
          <p className="text-2xl lg:text-4xl font-bold tracking-wide text-center my-[1rem]">
            Why open an IRA <span className="text-[#FFD700]">Bulloak</span>
          </p>

          <div className="w-24 border-b-[6px] rounded-t-md border-[#30022ECC] mt-5"></div>
        </div>

        <div className="flex flex-col gap-28 md:gap-48 lg:gap-0">
          <div className="w-full flex flex-col items-center justify-center gap-20 md:gap-2 -mt-[5rem] lg:mb-[10rem] lg:mt-[0rem] px-5">
            <IraBigCard />
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-20 md:gap-2 -mt-[5rem] lg:mb-[10rem] lg:mt-[7rem] px-5">
            <IraBigCardTwo />
          </div>
        </div>
      </section>

      <StockSteps title={'Start planning for the future in 3 easy steps'} />

      <section>
        <p className="text-5xl text-center font-extrabold text-[#8E0789]">
          FAQs
        </p>
        <Faq />
      </section>
    </MainLayout>
  );
};

export default Ira;
