import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';
import bg_img from '../assets/bg_img.png';
import chart_sys from '../assets/chart_sys.png';
import stock_img from '../assets/stock_img.png';
import stock_mobile from '../assets/stock_mobile.png';
import stock_mobile2 from '../assets/stock_mobile2.png';
import MainLayout from '../components/MainLayout';
import StockSteps from '../components/StockSteps';
import StockSwiper from '../components/StockSwiper';
import StockCardsContainer from '../components/utils/StockCardsContainer';

const Stock = () => {
  const navigate = useNavigate()
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[90vh]">
        <img src={bg_img} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col justify-center items-start gap-12 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-10 xl:pl-20">
          <p className="laviossa text-[2.5rem] font-bold w-[30rem]">
            The Better Place for Traders
          </p>
          <ul className="font-medium list-disc list-inside">
            <li>$0 commissions for stocks, ETFs, and options</li>
            <li>Intuitive tools and support for traders</li>
            <li>Discuss market trends with other investors</li>
          </ul>
          <button 
           onClick={() => {
            navigate('/register');
            scrollToTop();
          }}className="font-bold py-3 px-5 bg-[#D4B716] rounded-lg text-black">
            Get Started
          </button>
        </div>
      </div>

      <div className="px-5 lg:px-10 xl:px-20 my-[5rem]">
        <div className="bg-[#30022e1a] mx-auto bg-opacity-10 py-3 px-5 font-bold text-center max-w-max text-[#30022ECC] rounded-[50%] border-4 border-[#30022ECC] text-4xl">
          0
        </div>
        <div className="border-b py-7 relative">
          <p className="text-center text-3xl font-semibold">
            Take advantage of our commission-free online trading
          </p>
          <p className="text-center text-3xl font-semibold">
            ― plus $0 per-contract fees.
          </p>
          <div className="absolute left-[37%] md:left-[43%] lg:left-[47%] bottom-0 w-24 border-b-8 rounded-t-md border-[#30022ECC]"></div>
        </div>
      </div>

      <div>
        <div className="px-5 lg:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-1 my-[2rem]">
          <div className="flex flex-col items-center gap-2">
            <p className="font-extrabold text-7xl text-[#1B2C48]">$0</p>
            <p className="font-medium text-lg lg:text-xl lg:w-[22rem] text-center text-[#586985]">
              Stocks and ETFs online commission
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="font-extrabold text-7xl text-[#1B2C48]">$0</p>
            <p className="font-medium text-lg lg:text-xl lg:w-[22rem] text-center text-[#586985]">
              Options per contract with no online commission
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <p className="font-extrabold text-7xl text-[#1B2C48]">$0</p>
            <p className="font-medium text-lg lg:text-xl text-center text-[#586985]">
              Deposit minimums
            </p>
          </div>
        </div>
        <p className="my-[3rem] text-center font-medium">
          In addition to our low fees, Bulloak also offers competitive margin
          rates.{' '}
          <span className="text-[#FFD700] cursor-pointer">
            See more pricing
          </span>
        </p>
      </div>

      <div className="bg-[#41073f80] bg-opacity-10 px-5 lg:px-10 xl:px-20 py-[2rem] my-[2rem]">
        <div className="flex flex-col lg:flex-row items-center justify-evenly">
          <div>
            <div className="flex flex-col gap-3">
              <p className="font-extrabold text-4xl text-white">
                Get up to 12 Free Stocks
              </p>
              <p className="text-xl tracking-wider font-medium">
                When You Open and Fund a New Account
              </p>
              <p className="text-[#3e3e3e] text-sm underline cursor-pointer">
                See more about the free stock bonus
              </p>
            </div>
            <button 
             onClick={() => {
              navigate('/register');
              scrollToTop();
            }}className="text-black font-bold text-xl py-5 px-7 bg-[#D4B716] rounded-lg mt-[4rem]">
              Get your free stocks
            </button>
          </div>

          <img src={stock_img} alt="" />
        </div>
      </div>
      <div className="px-5 lg:px-10 xl:px-20 my-[5rem]">
        <div className="bg-[#30022e1a] mx-auto bg-opacity-10 py-3 px-5 font-bold text-center max-w-max text-[#30022ECC] rounded-[50%] border-4 border-[#30022ECC] text-4xl">
          0
        </div>
        <div className="border-b py-7 relative">
          <p className="text-center text-3xl font-semibold lg:w-[45rem] mx-auto">
            Powerful, intuitive trading platforms help you to trade smarter, not
            harder.
          </p>

          <div className="absolute left-[37%] md:left-[43%] lg:left-[47%] bottom-0 w-24 border-b-8 rounded-t-md border-[#30022ECC]"></div>
        </div>
      </div>

      <div className="px-5 lg:px-10 xl:px-32 py-[2rem] my-[2rem] flex flex-col lg:flex-row justify-center items-center gap-7">
        <img
          src={chart_sys}
          alt=""
          className="w-[50rem] lg:w-[40rem] xl:w-[50rem]"
        />
        <p className="md:text-lg text-gray-700">
          {`Find, research, and make trades with Bulloak's innovative tools and
          features. Enjoy the convenience of trading via web, tablet and app, or
          take advantage of our advanced desktop platform.`}
          <br />
          <br />
          {` We support full
          extended trading hours, which includes pre-market (4:00 AM - 9:30 AM
          ET) and after hours (4:00 PM - 8:00 PM ET) sessions.`}
        </p>
      </div>

      <div className="px-5 lg:px-10 xl:px-20 my-[5rem]">
        <div className="bg-[#30022e1a] mx-auto bg-opacity-10 py-3 px-5 font-bold text-center max-w-max text-[#30022ECC] rounded-[50%] border-4 border-[#30022ECC] text-4xl">
          0
        </div>
        <div className="border-b py-7 relative">
          <p className="text-center text-3xl font-semibold lg:w-[50rem] mx-auto">
            Real-time quotes and premium tools may assist you with enhancing
            your trading experience.
          </p>

          <div className="absolute left-[37%] md:left-[43%] lg:left-[47%] bottom-0 w-24 border-b-8 rounded-t-md border-[#30022ECC]"></div>
        </div>
      </div>

      <StockSwiper />

      <div className="px-5 lg:px-10 xl:px-20 my-[5rem]">
        <div className="bg-[#30022e1a] mx-auto bg-opacity-10 py-3 px-5 font-bold text-center max-w-max text-[#30022ECC] rounded-[50%] border-4 border-[#30022ECC] text-4xl">
          0
        </div>
        <div className="border-b py-7 relative">
          <p className="text-center text-3xl font-semibold lg:w-[50rem] mx-auto">
            Fractional shares: Invest in the stocks you want regardless of share
            price.
          </p>

          <div className="absolute left-[37%] md:left-[43%] lg:left-[47%] bottom-0 w-24 border-b-8 rounded-t-md border-[#30022ECC]"></div>
        </div>
      </div>

      <div className="px-5 lg:px-10 xl:px-48 py-[2rem] my-[2rem] flex flex-col md:flex-row justify-center items-center gap-10">
        <div>
          <p className="md:text-lg text-gray-700 w-full lg:w-[27rem]">
            {`Fractional shares are pieces, or fractions, of whole shares of a company or ETF.`}
            <br />
            <br />
            {` You can buy fractions of stocks and ETFs at a $5 minimum on Bulloak.`}
          </p>
          <p className="text-blue-600 mt-[1rem] cursor-pointer">
            Explore Fractional Shares Trading
          </p>
        </div>
        <img src={stock_mobile} alt="" className="h-[35rem]" />
      </div>

      <div className="px-5 lg:px-10 xl:px-20 my-[5rem]">
        <div className="bg-[#30022e1a] mx-auto bg-opacity-10 py-3 px-5 font-bold text-center max-w-max text-[#30022ECC] rounded-[50%] border-4 border-[#30022ECC] text-4xl">
          0
        </div>
        <div className="border-b py-7 relative">
          <p className="text-center text-3xl font-semibold lg:w-[50rem] mx-auto">
            Understand how Order Types can enhance your experience.
          </p>

          <div className="absolute left-[37%] md:left-[43%] lg:left-[47%] bottom-0 w-24 border-b-8 rounded-t-md border-[#30022ECC]"></div>
        </div>
      </div>

      <div className="px-5 lg:px-10 xl:px-48 py-[2rem] my-[2rem] flex flex-col md:flex-row justify-center items-center gap-10">
        <div>
          <p className="md:text-lg text-gray-700 w-full lg:w-[30rem]">
            {`Bulloak now provides 11 stock order types as following:`}
            <br />
            <br />
            {`Simple orders: Limit order, Market order, Stop order, Stop-Limit order, and Trailing Stop order.`}
            <br />
            <br />
            {`Group orders: ·Stop-Loss/Take-Profit orders (Bracket orders), One-Triggers-the-Other order (OTO), One-Cancels-the-Other order (OCO), and One-Triggers-a-One-Cancels-the-Other order (OTOCO).`}
          </p>
        </div>
        <img src={stock_mobile2} alt="" className="h-[35rem]" />
      </div>

      <div className="px-5 lg:px-10 xl:px-20 my-[5rem]">
        <div className="bg-[#30022e1a] mx-auto bg-opacity-10 py-3 px-5 font-bold text-center max-w-max text-[#30022ECC] rounded-[50%] border-4 border-[#30022ECC] text-4xl">
          0
        </div>
        <div className="border-b py-7 relative">
          <p className="text-center text-3xl font-semibold lg:w-[50rem] mx-auto">
            Leverage Bulloak’s customer support and knowledge building.
            Communicate with other traders.
          </p>

          <div className="absolute left-[37%] md:left-[43%] lg:left-[47%] bottom-0 w-24 border-b-8 rounded-t-md border-[#30022ECC]"></div>
        </div>
      </div>

      <StockCardsContainer />

      <StockSteps />
    </MainLayout>
  );
};

export default Stock;
