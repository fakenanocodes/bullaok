import backgroundImage from '../assets/options_bg.png';
import data_img from '../assets/data_img.svg';
import phoneScreen from '../assets/phoneScreen.png';
import phones from '../assets/phones.png';
import tradepics from '../assets/tradepics.png';
import freestock from '../assets/freestock.png';
import opra from '../assets/opra.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import { Link } from 'react-router-dom';
import StockSwiper from '../components/StockSwiper';
import MainLayout from '../components/MainLayout';
// import { SwiperSlide } from 'swiper/react';
// import OptionFAQDropdown from '../Components/OptionFAQDropdown';
// import Swiperjs from '../components/utils/reusables/Swiperjs';

const OptionsPage = (props) => {
  const items = [
    '$0 commissions for stocks, ETFs, and options',
    'Intuitive tools and support for traders',
    'Discuss market trends with other investors',
  ];

  const textDecorationStyle = {
    textDecoration: 'line-through',
    textDecorationThickness: '5px', // Adjust the thickness as needed
    textDecorationColor: '#FA4C67',
  };

  return (
    <div>
      <MainLayout>
        <main
          className="bg-cover relative overflow-x-hidden  h-[39.5rem] sm:bg-left-top md:bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="translate-y-[-50%] absolute top-[50%] left-[10%]">
            <h1 className=" font-bold text-[3.5rem]  text-[#2B3240] max-sm:text-[2rem] max-md:text-[2.5rem] max-lg:text-[3rem] ">
              <span className="text-[#41073F]  ">Options</span> Trading <br />{' '}
              on the go
            </h1>
            <ul className="list-disc text-[1.2rem] mt-10 px-6 max-sm:text-[1rem]">
              <li>0 commission and 0 contract fees for equity options</li>
              <li>Free real-time OPRA and index data</li>
              <li>Multiple trading strategies</li>
              <li>Easy-to-use app, web, and desktop platform</li>
            </ul>
            <button className="flex gap-3 mt-5 text-white px-4 py-3 items-center justify-center cursor-pointer text-2xl bg-[#41073F] text-center font-open-sans-semibold font-semibold leading-16 rounded-full ">
             <span> Get Started</span><span>&rarr;</span>
            </button>
          </div>
        </main>
        <div className="text-center mt-20">
          <h1 className="text-[#2B3240] text-[2.7rem] font-bold  leading-14 mb-3 tracking-tight max-sm:text-[1.8rem] max-md:text-[2rem]">
            Pay No Contract Fees
          </h1>

          <p className="text-[#636872] text-[1.3rem] max-sm:text-[1rem]">
            0 commissions, 0 contract fees for equity options, 0 <br />
            assignment or exercise fees and no minimum deposit. No <br />
            matter what options strategy or lot size you like, you'll never{' '}
            <br /> pay fees per leg.
          </p>
        </div>
        {/*  */}
        <div className="my-0 mx-auto mt-16 w-[90%] rounded-[0.8rem] overflow-hidden max-sm:w-[100%]">
          <table className="w-full h-[20rem] text-center  border border-solid border-gray-300 rounded-lg">
            <tr className="bg-[#41073F] h-16">
              <th></th>
              <th></th>
              <th className="text-white text-[1.3rem] font-medium max-sm:text-[1rem]">
                Opening Commissions
              </th>
              <th className="text-white text-[1.3rem] font-medium max-sm:text-[1rem]">
                To Close
              </th>
            </tr>
            <tr>
              <td className="text-[#2B3240]">
                <p className="text-[1.3rem] max-sm:text-[1rem]">
                  20 Puts/Calls
                </p>{' '}
                <span> single leg</span>
              </td>
              <td>
                {' '}
                <span
                  style={textDecorationStyle}
                  className="text-[1.3rem] decorate-2px font-bold line-through max-sm:text-[1rem]"
                >
                  US$20
                </span>
              </td>
              <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">
                US$0
              </td>
              <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">
                US$0
              </td>
            </tr>
            <tr className="bg-[#f0f0f0]">
              <td className="text-[#2B3240]">
                <p className="text-[1.3rem] max-sm:text-[1rem]">20 Verticals</p>{' '}
                <span> two legs</span>
              </td>
              <td>
                <span
                  style={textDecorationStyle}
                  className="text-[1.3rem] decorate-2px font-bold line-through max-sm:text-[1rem]"
                >
                  US$20
                </span>
              </td>
              <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">
                US$0
              </td>
              <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">
                US$0
              </td>
            </tr>
            <tr>
              <td className="text-[#2B3240]">
                <p className="text-[1.3rem] max-sm:text-[1rem]">
                  20 Iron Condors
                </p>{' '}
                <span> four legs</span>
              </td>
              <td>
                <span
                  style={textDecorationStyle}
                  className="text-[1.3rem] decorate-2px font-bold line-through max-sm:text-[1rem]"
                >
                  US$20
                </span>
              </td>
              <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">
                US$0
              </td>
              <td className="text-[1.3rem] font-bold max-sm:text-[1rem]">
                US$0
              </td>
            </tr>
          </table>
          <div className="flex gap-1 items-center mt-5">
            <img src={data_img} alt="" className="h-[1rem] w-[1rem]" />
            <p className="text-[#979BA1]">
              Regulatory, exchange, and index option fees may apply.
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-20 items-center  max-lg:flex-wrap max-lg:flex-col">
          <div className="  max-xl:ml-20 max-sm:ml-auto">
            <h1 className="text-[#2B3240] mb-5 font-extrabold text-[2.3rem]  max-sm:text-[1.5rem] max-md:text-[2rem]">
              {' '}
              Complimentary Real-Time <br /> Market Data
            </h1>
            <p className="text-[#636872] leading-[30px] text-[1.3rem] max-sm:text-[1rem] ">
              Get real time OPRA data after opening an option <br />
              trading account. Webull is now partnered with <br />
              Cboe to provide Cboe Global Indices Feed when <br />
              you sign up.
            </p>
          </div>

          <img src={opra} className="w-[40rem] h-[20rem]" alt="" />
        </div>
        <div className="bg-[#41073F] h-[15rem]  items-center flex justify-around mt-20 max-md:flex-wrap max-lg:h-[25rem] max-lg:flex-col max-md:h-auto max-md:px-4 max-md:py-5 ">
          <img src={freestock} className="w-60 h-32" alt="" />
          <div className="flex justify-between items-center gap-32 max-md:flex-col max-md:items-center max-md:gap-5 max-lg:p-2">
            <div className="flex flex-col justify-center gap-2 max-sm:items-center max-lg:">
              <p className="text-[#CAFE4B] text-[2.3rem]  font-bold leading-[40px] max-sm:text-[1.8rem] max-md:text-[2rem]">
                Get up to 12 Free Stocks
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
            <button className="flex gap-3 mt-5 text-[#41073F] bg-white px-4 py-3 items-center justify-center cursor-pointer text-2xl text-center font-open-sans-semibold font-semibold leading-16 rounded-full ">
             <span> Get Started</span><span>&rarr;</span>
            </button>
          </div>
        </div>
        <div className="text-center my-20 leading-[20px] ">
          <h1 className="text-[#2B3240] font-extrabold text-[2.3rem] mb-8 max-sm:text-[1.5rem] max-md:text-[2rem]">
            {' '}
            Choose Your Option <br /> Trading Strategies
          </h1>
          <p className="text-[#636872] leading-[30px] text-[1.3rem]">
            11 option trading strategies to choose from on Webull, including{' '}
            <br />
            single option, covered stock, straddle, butterfly, iron condor, etc.
          </p>
        </div>

        <StockSwiper images={props.image}/>

        <div className="flex  justify-around items-center   max-lg:flex-col max-sm:justify-center max-sm:items-center">
          <div className=" mt-20 leading-[20px]  max-xl:ml-20 ">
            <h1 className="text-[#2B3240] font-extrabold text-[2.3rem] mb-8 max-sm:text-[1.5rem] max-md:text-[2rem]">
              {' '}
              Access to Smart <br /> Trading Tools
            </h1>
            <p className="text-[#636872] leading-[30px] text-[1.3rem] max-sm:text-[1rem]">
              Customizable option chain, multi leg option <br />
              quotes and real time chart. An intuitive interface & <br />
              multiple research tools make it easy to use for all <br />
              options traders.
            </p>
          </div>

          <img
            src={phoneScreen}
            className="w-[42rem] h-[40rem] max-sm:w-[50rem] max-sm:h-[40rem]"
            alt=""
          />
        </div>

        <div className="flex justify-around items-center mt-10 max-lg:flex-col">
          <img
            src={phones}
            className="w-[33rem] h-[35rem] max-lg:order-2"
            alt=""
          />

          <div className=" mt-20 leading-[20px] max-lg:order-1">
            <h1 className="text-[#2B3240] font-extrabold text-[2.3rem] mb-8 max-sm:text-[1.5rem] max-md:text-[2rem]">
              {' '}
              Build Your Options <br /> Knowledge
            </h1>
            <p className="text-[#636872] leading-[30px] text-[1.3rem]">
              Become a more confident investor with our
              <br />
              educational resources. Connect with others in the <br />
              community. Discuss market trends and trading <br />
              strategies.
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center mt-10 max-lg:flex-col">
          <div className=" mt-20 leading-[20px]">
            <h1 className="text-[#2B3240] font-extrabold text-[2.3rem] mb-8 max-sm:text-[1.5rem] max-md:text-[2rem]">
              {' '}
              Trade On Your Own
            </h1>
            <p className="text-[#636872] leading-[30px] text-[1.3rem]">
              Bulloak desktop and mobile app can help you get
              <br />
              started with options trading. <br />
            </p>
          </div>

          <img src={tradepics} className="w-[42rem] h-[40rem]" alt="" />
        </div>

        <div className="bg-[#41073F] min-h-[100vh] flex flex-col justify-around max-md:py-5">
          <p className="text-center text-white font-extrabold text-[2.6rem] max-sm:text-[1.5rem] max-md:text-[2rem]">
            {' '}
            Start your option trading <br /> journey in 3 easy steps
          </p>
          <div className="flex items-end justify-around mt-16 max-lg:flex-wrap max-lg:gap-10  ">
            <div className="border p-5 border-solid border-gray-300 w-[22rem] h-[13rem] rounded-[0.5rem] max-md:w-[70%] max-sm:w-[90%]">
              <img src={icon1} alt="" className="h-[3.5rem] w-[3.5rem]" />
              <div>
                <p className="text-white text-[2rem] font-semibold">
                  Open an acount
                </p>
                <p className="text-[#FFFFFF80]">
                  Fill out our simple application form
                </p>
              </div>
            </div>
            <div className="border p-5 border-solid border-gray-300 w-[22rem] h-[13rem] rounded-[0.5rem] max-md:w-[70%] max-sm:w-[90%]">
              <img src={icon2} alt="" className="h-[3.5rem] w-[3.5rem]" />
              <div>
                <p className="text-white text-[2rem] font-semibold">
                  Fund your account
                </p>
                <p className="text-[#FFFFFF80]">
                  Deposit funds securely with any amount
                </p>
              </div>
            </div>
            <div className="border border-solid p-5 border-gray-300 w-[22rem] h-[13rem] rounded-[0.5rem] max-md:w-[70%] max-sm:w-[90%]">
              <img src={icon3} className="h-[3.5rem] w-[3.5rem]" alt="" />
              <div className="">
                <p className="text-white text-[2rem] font-semibold">
                  Option trading
                </p>
                <p className="text-[#FFFFFF80]">
                  Start option trading on Webull with free <br /> real time OPRA
                  & index data
                </p>
              </div>
            </div>
          </div>

          <button className="flex  mx-auto gap-3  cursor-pointer px-4 py-3  text-2xl text-[#41073F] bg-white text-center font-open-sans-semibold font-semibold leading-16 rounded-full  max-md:m-10 ">
            Create Account<span>&rarr;</span>
          </button>
        </div>

        {/* <OptionFAQDropdown /> */}
      </MainLayout>
    </div>
  );
};

export default OptionsPage;
