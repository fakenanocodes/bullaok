import { Link, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';
import chart_img from '../assets/chart_img.png';
import equity_img from '../assets/equity_img.png';
import stock_img from '../assets/stock_img2.png';
import watchlist_img from '../assets/watchlist.png';
import MainLayout from '../components/MainLayout';

const PaperTrading = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainLayout>
        <h1 className="text-center mt-48 font-extrabold text-[3.5rem] leading-extra max-sm:text-[1.5rem] max-md:text-[2rem] max-lg:text-[2.5rem] max-xl:text-[3rem]">
          <span className="text-[#41073F]">Bulloak Paper Trading </span> Helps
          Investors <br /> Practice Their Trading Skills
        </h1>
        <div className="flex items-center justify-center mt-10">
          <button
           onClick={() => {
            navigate('/register');
            scrollToTop();
          }} className="text-lg bg-[#D4B716] text-black py-4 px-5 rounded-[0.5rem] max-lg:py-3 max-lg:px-4">
            <span>Open an account</span> <span>&rarr;</span>
          </button>
        </div>
        <img
          src={watchlist_img}
          alt=""
          className="w-[75%] mx-auto my-10  max-lg:w-[80%] max-md:w-[90%] max-sm:w-[90%]  "
        />
        <div className="flex items-center justify-center gap-32 mt-40 flex-wrap max-xl:gap-12 max-xl:mx-10">
          <div className="">
            <p className="text-black text-[2.5rem] mb-2 font-extrabold leading-[52px] max-lg:text-[2rem] max-md:text-[1.5rem]">
              Why use <br /> Bulloak Paper Trading?
            </p>
            <p className="text-[#909090] my-28 mt-0 mb-5 text-[1.2rem] font-opensans-semibold leading-[1.5rem] ">
              A stock trading simulator is a great way for anyone to hone <br />{' '}
              their trading skills if you:
            </p>
            <ul className="list-disc p-0 m-0 text-[#181818]  text-[1.2rem]  font-opensans-semibold leading-[2rem] max-sm:text-[1rem]">
              <li>
                Want to try trading stocks but don’t have enough funds yet.
              </li>
              <li>Have the capital to trade but aren’t sure where to begin.</li>
              <li>Want to use virtual trading to test new strategies.</li>
            </ul>
          </div>
          <img
            src={equity_img}
            alt=""
            className="w-[27.5rem] h-[39.5rem] max-xl:w-[25rem] max-xl:h-[37rem]"
          />
        </div>

        <div className="bg-[#41073F] h-[15rem]  items-center flex justify-around mt-20 max-md:flex-wrap max-lg:h-[25rem] max-lg:flex-col max-md:h-auto max-md:px-4 max-md:py-5 ">
          <img src={stock_img} className="w-60 h-52" alt="" />
          <div className="flex justify-between items-center gap-32 max-md:flex-col max-md:items-center max-md:gap-5 max-lg:p-2">
            <div className="flex flex-col justify-center gap-2 max-sm:items-center max-lg:">
              <p className="text-white text-[2.3rem]  font-extrabold leading-[40px] max-sm:text-[1.8rem] max-md:text-[2rem]">
                Get 6 Free Stocks
              </p>
              <p className="text-[1.6rem] text-white font-bold max-sm:text-[1.2rem] max-sm:text-center">
                When You Open and Fund a New Account
              </p>
              <p className="text-[0.8rem] opacity-[0.8] text-white">
                See{' '}
                <Link className="text-white underline" to="">
                  Terms & Conditions
                </Link>{' '}
                for more information regarding eligibility.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('/register');
                scrollToTop();
              }}
              className="flex gap-3 mt-5 text-[#000] bg-[#D4B716] px-4 py-3 items-center justify-center cursor-pointer text-lg text-center font-open-sans-semibold font-semibold leading-16 rounded-full  max-lg:py-3 max-lg:px-4"
            >
              <span> Get Started</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className="text-center my-28">
          <p className="text-black text-[2.5rem] mb-5 font-extrabold max-lg:text-[2rem] max-md:text-[1.5rem]">
            What does Bulloak Paper Trading offer ?
          </p>
          <p className="leading-[1.5rem] text-[1.2rem] max-sm:text-[1rem]">
            Bulloak Paper Trading offers a virtual trading experience that lets
            you test your trading strategies just as you <br /> would in a real,
            live situation but without risking a penny on an actual stock
            exchange.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-10 items-center flex-wrap">
          <div className="flex gap-10 justify-center items-center  flex-wrap">
            <div className="w-[22rem] h-[22rem] bg-[#F7F7F7] text-center flex flex-col justify-center">
              <p className="text-[1.5rem] font-bold mb-5">Zero Risk</p>
              <p className="text-[#909090] text-center text-[1.2rem]">
                Use our free trading simulator to <br /> practice trading
                risk-free and <br /> commission free.
              </p>
            </div>
            <div className="w-[22rem] h-[22rem] bg-[#F7F7F7] text-center flex-wrap  flex flex-col justify-center">
              <p className="text-[1.5rem] font-bold mb-5">
                Unlimited Virtual Cash
              </p>
              <p className="text-[#909090] text-[1.2rem]">
                Trade as many paper trading dollars <br /> as you want.
              </p>
            </div>
            <div className="w-[22rem] h-[22rem] bg-[#F7F7F7] text-center flex-wrap flex flex-col justify-center">
              <p className="text-[1.5rem] font-bold mb-5">Real-time Data</p>
              <p className="text-[#909090] text-[1.2rem]">
                Access real-time quotes, explore <br /> integrated charts with
                indicators, <br /> and set up price alerts.
              </p>
            </div>
          </div>
          <div className="flex  justify-center flex-wrap items-center gap-10 ">
            <div className="w-[34rem] h-[18.75rem] bg-[#F7F7F7]  text-center flex-wrap flex flex-col justify-center max-sm:w-[22rem]">
              <p className="text-[1.5rem] font-bold mb-5">
                Test New Strategies
              </p>
              <p className="text-[#909090] text-[1.2rem]">
                Practice trading strategies to see <br /> what might work and
                what might <br /> not work.
              </p>
            </div>
            <div className="w-[34rem] h-[18.75rem] bg-[#F7F7F7] text-center flex-wrap flex flex-col justify-center max-sm:w-[22rem]">
              <p className="text-[1.5rem] font-bold mb-5"> Indicator Studies</p>
              <p className="text-[#909090] text-[1.2rem]">
                Over 50 technical indicators and 12 <br /> charting tools allow
                you to apply <br /> indicator studies to your charts.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-32 mt-40 flex-wrap  max-xl:gap-12 max-xl:mx-10">
          <img
            src={chart_img}
            alt=""
            className="w-[30rem] h-[22rem] max-sm:w-[100%] "
          />
          <div className="">
            <p className="text-black text-[2.5rem] mb-2 font-extrabold  max-lg:text-[2rem] max-md:text-[1.5rem]">
              You can practice options <br /> trading skill on Bulloak <br />{' '}
              Paper Trading now.
            </p>
            <p className="text-[#909090] my-28 mt-0 mb-5 text-[1.2rem] font-opensans-semibold leading-[1.5rem]">
              Standard U.S. equity options are American-style options, <br />{' '}
              meaning they can be exercised any time before <br /> expiration.
              In contrast, you’ll never be assigned a short <br /> option before
              expiration in the Bulloak Paper Trading. <br /> Before you switch
              over to live options trading, make sure <br /> you understand the
              ins and outs of expiration.
            </p>
          </div>
        </div>

        <div className="h-[30rem] bg-[#8E0789] my-28 text-center flex flex-col justify-center">
          <p className="text-white text-[2.5rem] font-bold max-lg:text-[2rem] max-md:text-[1.5rem]">
            Practice Trading Without The Risk
          </p>
          <p className="text-white text-[1.2rem] mt-8 max-sm:text-[1rem]">
            Simulated trading can help all levels of traders to practice their
            trading skills and strategies. You can access <br /> Bulloak's
            trading simulator on desktop, web and mobile devices, so you can try
            out a new idea as soon as it <br /> comes to mind. Open an account
            today to get started.
          </p>
          <div className="flex items-center justify-center mt-20">
            <button
              onClick={() => {
                navigate('/register');
                scrollToTop();
              }}
              className="text-lg bg-[#D4B716] text-black py-4 px-5 rounded-[0.5rem] max-lg:py-3 max-lg:px-4 font-semibold"
            >
              <span>Open account</span>
            </button>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default PaperTrading;
