import { useNavigate } from 'react-router-dom';
import invest from '../assets/invest.mp4';
import banner_img from '../assets/invest_banner_page.png';
import invest_icon_four from '../assets/invest_icon_four.svg';
import invest_icon_one from '../assets/invest_icon_one.svg';
import invest_icon_three from '../assets/invest_icon_three.svg';
import invest_icon_two from '../assets/invest_icon_two.svg';
import MainLayout from '../components/MainLayout';
import InvestCard from '../components/utils/cards/InvestCard';
import Faq from '../components/utils/reusables/Faq';
import InvestDownBanner from '../components/utils/reusables/InvestDownBanner';
import InvestManagement from '../components/utils/reusables/InvestManagement';
import InvestReasons from '../components/utils/reusables/InvestReasons';
import { scrollToTop } from '../actions/utils';

const downloadData = [
  {
    title: 'Competitive APY',
    subtitle: '5.0% APY',
    description: 'More than 12x the national deposit rate*',
    image: invest_icon_one,
  },
  {
    title: 'Low Entry',
    subtitle: '0 minimum balance required',
    description: 'Deposit any amount to start',
    image: invest_icon_two,
  },
  {
    title: '$0 Fees',
    subtitle: '5.0% APY=earnings in your account',
    description: 'No monthly fees',
    image: invest_icon_three,
  },
  {
    title: 'Withdrawal Anytime',
    subtitle: 'Withdraw as your balance allows',
    description: 'Easy access to your cash',
    image: invest_icon_four,
  },
];

const Investing = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-[#41073F] to-purple-400 bg-opacity-90 w-full h-[90vh] flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row justify-between items-center pt-[4rem] xl:pt-0">
          <div className="flex flex-col justify-center items-start xl:gap-5  text-white pl-3 md:pl-5 lg:pl-10 xl:pl-20">
            <div>
              <p className="text-4xl md:text-5xl font-extrabold w-full md:w-[35rem] tracking-wide text-white mb-5 leading-normal">
                YOUR MONEY IS WORTH MORE. EARN{' '}
                <span className="text-yellow-100 text-5xl md:text-7xl tracking-normal">
                  5.0%
                </span>{' '}
                APY NOW!
              </p>
            </div>
            <p className="font-normal md:text-lg">
              Access Bulloak cash management to earn a 5.0% APY for your Bulloak
              account. No need to open a new account. No fees attached. No
              minimum balance required.
            </p>
            <button
             onClick={() => {
              navigate('/register');
              scrollToTop();
            }} className="text-black font-bold py-4 px-6 bg-[#D4B716] rounded-lg mt-[2rem]">
              Open an account
            </button>
          </div>
          <img
            src={banner_img}
            alt=""
            className="xl:ml-[10rem] w-full h-[30rem] xl:h-[45rem] object-contain hidden lg:block"
          />
        </div>
        <p className="text-white xl:-mt-[3.5rem] mb-[1rem] md:mb-[2rem] text-center text-sm md:text-base">
          Bulloak Financial LLC, FINRA, SIPC. Bulloak is not a bank. Rates are
          subject to change.
        </p>
      </div>

      <section className="flex flex-col gap-7 items-center my-[5rem]">
        <p className="text-center text-4xl font-bold tracking-wide leading-10 text-[#2B3240]">
          Why Choose
          <br />
          Bulloak Cash Management?
        </p>

        <div className="flex flex-col gap-5 my-[5rem] mx-5">
          <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5">
            {downloadData?.slice(0, 2)?.map((datum, idx) => (
              <InvestCard key={idx} datum={datum} />
            ))}
          </div>

          <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5">
            {downloadData?.slice(2)?.map((datum, idx) => (
              <InvestCard key={idx} datum={datum} />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-[#2B3240] tracking-wide lg:w-[50rem]">
          *The national average savings account interest rate is reported by the
          FDIC (as of May 15, 2023) as the average annual percentage yield (APY)
          for savings accounts with deposits under $100,000.
        </p>
      </section>

      <section className="bg-gray-50 mt-[5rem] py-[5rem]">
        <p className="text-center text-4xl font-bold tracking-wide leading-10 text-[#2B3240]">
          What Does
          <br />
          Bulloak Cash Management Offer?
        </p>

        <div className="mx-auto w-full md:w-[30rem] lg:w-[60rem] mt-[2rem] mb-[4rem]">
          <video src={invest} controls className="rounded-xl" />
        </div>
      </section>

      <InvestReasons />
      <InvestManagement />
      <Faq />
      <InvestDownBanner />
    </MainLayout>
  );
};

export default Investing;
