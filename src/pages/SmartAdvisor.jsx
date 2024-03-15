import { useNavigate } from 'react-router-dom';
import addfund_img from '../assets/addfund_img.png';
import advisorservice_img from '../assets/advisorservice_img.png';
import bg_features from '../assets/bg_features.png';
import depositmethod_img from '../assets/depositmethod_img.png';
import etf_img from '../assets/etf_img.png';
import num_1 from '../assets/num_1.png';
import num_2 from '../assets/num_2.png';
import num_3 from '../assets/num_3.png';
import phonegif from '../assets/phone.gif';
import smartbg from '../assets/smart-advisor_bg.png';
import smartAdvisorVideo from '../assets/smartadvisorvideo.mp4';
import MainLayout from '../components/MainLayout';

import '../CSS/main.css';

const SmartAdvisor = () => {
  const navigate = useNavigate();
  return (
    <div>
      <MainLayout>
        <div
          className="min-h-[100vh] relative max-xl:bg-left"
          style={{
            backgroundImage: `url(${smartbg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            color: 'white',
          }}
        >
          <div className=" translate-y-[-50%] absolute top-[50%] left-[10%]">
            <div className="mb-5">
              <h1 className="font-extrabold flex gap-3 text-[3.5rem] max-xl:text-[3rem]  max-lg:text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.5rem]">
                <span className="text-white mb-10">BULLOAK</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-400 to-indigo-700 mb-10">
                  SMART
                </span>

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-400 to-indigo-700 mb-10">
                  ADVISOR
                </span>
              </h1>
              <div className="flex gap-3 items-center mb-10">
                <p
                  className="px-5 py-2"
                  style={{
                    backgroundImage: `url(${bg_features})`,
                    backgroundSize: 'cover',
                  }}
                >
                  Intuitive
                </p>
                <p
                  className="px-5 py-2"
                  style={{
                    backgroundImage: `url(${bg_features})`,
                    backgroundSize: 'cover',
                  }}
                >
                  Tailored
                </p>
                <p
                  className="px-5 py-2"
                  style={{
                    backgroundImage: `url(${bg_features})`,
                    backgroundSize: 'cover',
                  }}
                >
                  Secure
                </p>
              </div>

              <p>
                <span className="text-[1.5rem] max-sm:text-[1.2rem]">
                  A new way to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-700">
                    AUTO-INVEST
                  </span>
                </span>{' '}
                <br />
                <span className="text-[1.3rem] max-sm:text-[1rem]">
                  Where to Start? APP&gt;Markets&gt;Automate Your Investing
                </span>
              </p>
            </div>

            <ul className="list-disc p-0 m-0   text-[1.2rem]  font-opensans-semibold leading-[2rem] max-sm:text-[1rem]">
              <li>Low Minimum Investment</li>
              <li>Personalized risk distribution</li>
              <li>Hands-off Portfolio Monitoring</li>
            </ul>
            <button
              onClick={() => navigate('/register')}
              className="flex gap-3 mt-5 bg-[#D4B716] text-black px-4 py-3 items-center justify-center cursor-pointer text-lg text-center font-open-sans-semibold font-semibold leading-16 rounded-[0.5rem] max-sm:text-[1.2rem]"
            >
              <span>Get Started</span>
              <span>&rarr;</span>
            </button>

            <div className="flex gap-3 mt-10 max-sm:justify-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="cursor-pointer custom-checkbox"
              />
              <p className="text-[#FFFFFF80] text-[1.2rem] max-sm:text-[1rem]">
                (Optional) I agree to receive promotional and marketing text{' '}
                <br />
                messages from Bulloak . Message and data rates may apply.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around bg-gradient-to-tl from-indigo-900 to-black  bg-opacity-80 min-h-[100vh] max-lg:flex-col max-lg:justify-evenly">
          <div className="  ">
            <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-500 to-indigo-600 mb-10  max-lg:text-[2rem] max-sm:text-[1.5rem]">
              Bulloak Smart <br /> Advisor
            </p>
            <div className="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <p className="text-[2.5rem] text-white  max-lg:text-[2rem] max-sm:text-[1.5rem]">
              Your AI Money <br /> Manager
            </p>
          </div>

          <video
            controls
            className="h-[50%] w-[50%] max-lg:w-[70%] max-sm:w-[90%]"
            muted
          >
            <source src={smartAdvisorVideo}></source>
          </video>
        </div>

        <div
          className="min-h-[100vh] py-10 flex justify-around items-center flex-wrap bg-gradient-to-tr from-opacity-60 via-opacity-0 to-transparent max-lg:flex-col max-lg:flex-wrap"
          style={{
            backgroundImage:
              'linear-gradient(201deg, rgba(49,57,159,0.60) 0%, rgba(0,0,50,0.9) 43%)',
          }}
        >
          <img
            src={phonegif}
            alt=""
            className="w-[25%] h-[90%]   max-xl:h-auto max-lg:w-[30%] max-md:w-[50%]"
          />

          <div className="max-sm:mx-3">
            <div className="mb-10 ">
              <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-500 to-indigo-600 mb-10 max-lg:text-[2rem] max-sm:text-[1.5rem]">
                Distinctive Balance of Risk and <br /> Potential Return
              </p>
              <div className="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-[1.5rem] text-white max-sm:text-[1rem]">
                A 130-member investment team actively manages your <br />
                portfolio allocations based on quantitative analysis and <br />{' '}
                qualitative insight.
              </p>
            </div>

            <div>
              <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-10 max-lg:text-[2rem] max-sm:text-[1.5rem] ">
                Instantly View Your Investments
              </p>
              <div className="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-yellow-500 to-purple-500"></div>
              <p className="text-[1.5rem] text-white max-sm:text-[1rem]">
                Stay in control of your investing strategy and track your <br />
                performance through interactive tools.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-tl from-indigo-900 to-black  bg-opacity-80 ">
          <div className="flex items-center justify-around min-h-[100vh] max-lg:flex-col max-lg:flex-wrap">
            <div>
              <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-500 to-indigo-600 mb-10 max-lg:text-[2rem] max-sm:text-[1.5rem]">
                Receive A Customized <br />
                Portfolio
              </p>
              <div className="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-[1.5rem] text-white max-sm:text-[1rem]">
                Your money is put into an expertly built <br /> portfolio
                containing a range of <br /> investment products based on your
                risk <br /> tolerance.
              </p>
            </div>

            <video
              className="h-[30%] w-[30%] border-none max-sm:w-[80%] max-md:w-[60%] max-lg:w-[50%]"
              muted
              autoPlay
              controls={false}
              loop
            >
              <source src={smartAdvisorVideo} />
            </video>
          </div>

          <p className="text-gray-500 pb-48  text-sm self-start text-center font-open-sans font-normal leading-5">
            Important Disclosure: The model portfolios primarily utilize ETFs
            that make payments to SSGA Funds Management, Inc. or its affiliates
            (collectively) for advisory or <br /> other services, which presents
            a conflict of interest for SSGA. Income earned by SSGA would be
            lower, and the returns generated by implementing one or more model{' '}
            <br /> portfolios might be higher, if the model portfolios were to
            be constructed using ETFs or other investments that do not pay fees
            to SSGA.
          </p>
        </div>

        <div className="flex flex-wrap justify-around items-center  bg-gradient-to-tl  from-indigo-900 to-black  bg-opacity-90 min-h-[100vh] max-lg:flex-col max-lg:py-20">
          <div className="flex  items-center flex-wrap justify-center w-[30%] h-[80%]  flex-col rounded-md max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%]">
            <img src={etf_img} alt="" className="w-[18rem]" />
            <p className="text-transparent text-[2.2rem] text-center font-extrabold font-Arial font-sans mt-[2rem] mb-[2rem] tracking-normal bg-gradient-to-r from-[#5AFFDF] via-[#7EAAFF] to-[#6619FF] bg-clip-text">
              Simplicity
            </p>
            <p className="text-white opacity-90 p-0  text-center font-OpenSans-Regular font-Arial font-sans font-normal leading-[25px] text-[1.1rem] tracking-normal">
              You only need a small initial deposit to get started—leave the
              rest to us. We handle all aspects of portfolio management.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30%] h-[80%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%]">
            <img src={etf_img} alt="" className="w-[18rem]" />
            <p className="text-transparent text-[2.2rem] text-center font-extrabold font-Arial font-sans mt-[2rem] mb-[2rem] tracking-normal bg-gradient-to-r from-[#5AFFDF] via-[#7EAAFF] to-[#6619FF] bg-clip-text">
              Peace of Mind
            </p>
            <p className="text-white opacity-90 p-0  text-center font-OpenSans-Regular font-Arial font-sans font-normal leading-[25px] text-[1.1rem] tracking-normal">
              Webull Smart Advisor helps with day-to-day management by
              monitoring your portfolio, and it automatically rebalances it when
              necessary to keep you on track.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30%] h-[80%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%]">
            <img src={etf_img} alt="" className="w-[18rem] " />
            <p className="text-transparent text-[2.2rem] text-center font-extrabold font-Arial font-sans mt-[2rem] mb-[2rem] tracking-normal bg-gradient-to-r from-[#5AFFDF] via-[#7EAAFF] to-[#6619FF] bg-clip-text">
              {' '}
              2-in-1 APP
            </p>
            <p className="text-white opacity-90 p-0  text-center font-OpenSans-Regular font-Arial font-sans font-normal leading-[25px] text-[1.1rem] tracking-normal">
              An app for both auto-investing and self-directed trading.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around bg-gradient-to-tl from-indigo-900 to-black  bg-opacity-80 min-h-[60vh] py-20">
          <img src={etf_img} alt="" className="w-[30rem]" />
          <div>
            <p className="text-[3.5rem] font-bold text-white max-xl:text-[3rem]  max-lg:text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.5rem]">
              What Is A Robo-Advisor?
            </p>
            <button className="flex gap-3 mt-5 bg-[#D4B716] text-black px-4 py-3 items-center justify-center cursor-pointer text-lg text-center font-open-sans-semibold font-semibold leading-16 rounded-[0.5rem] max-sm:text-[1.2rem]">
              <span> Learn More</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-tl from-indigo-900 to-black py-20 gap-28  bg-opacity-80 min-h-[100vh] flex items-center flex-wrap flex-col justify-center ">
          <div className="flex justify-around items-center h-[100%] flex-wrap max-lg:flex-col max-lg:gap-10">
            <div className="flex flex-col  ">
              <div className="flex items-center gap-7 ">
                <img src={num_1} alt="" className="w-[5rem] h-[5rem]" />
                <p className="text-[2rem] font-bold text-white max-sm:text-[1.5rem]">
                  Risk Assessment
                </p>
              </div>
              <p className="text-white font-bold text-[1.5rem] max-sm:text-[1rem]">
                Answer a few questions to let <br /> us know your willingness to{' '}
                <br /> take on risk.
              </p>
            </div>
            <img
              src={advisorservice_img}
              alt=""
              className="w-[25%] max-lg:w-[40%] max-md:w-[50%] max-sm:w-[80%]"
            />
          </div>

          <div className="flex justify-around items-center h-[100%] flex-wrap  max-lg:flex-col max-lg:gap-10">
            <img
              src={depositmethod_img}
              alt=""
              className="w-[25%]  max-lg:order-1 max-lg:w-[40%] max-md:w-[50%] max-sm:w-[80%]"
            />

            <div className="flex max-lg:flex-col items-center justify-center">
              <div className="flex items-center gap-7  ">
                <img src={num_2} alt="" className="w-[5rem] h-[5rem] " />
                <p className="text-[2rem] font-bold text-white max-sm:text-[1.5rem] max-lg:order-2">
                  Funding Your Account
                </p>
              </div>
              <div className="text-white font-bold text-[1.5rem] max-sm:text-[1rem]">
                <p>
                  More choices, more flexibility. <br /> Fund via:
                </p>
                <ol className="p-0 m-0 pl-7 list-decimal">
                  <li>ACH </li>
                  <li>Wire transfer</li>
                  <li>Your individual account cash balance</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex justify-around items-center h-[100%] flex-wrap  max-lg:flex-col max-lg:gap-10">
            <div className="flex flex-col  items-center">
              <div className="flex items-center gap-7 justify-center">
                <img src={num_3} alt="" className="w-[5rem] h-[5rem] " />
                <p className="text-[2rem] font-bold text-white max-sm:text-[1.5rem]">
                  Check Your Performance
                </p>
              </div>
              <p className="text-white font-bold text-[1.5rem] max-sm:text-[1rem]">
                Review your portfolio performance <br /> on the go. <br /> See
                how much you&apos;ve earned <br /> based on the amount you
                invested.
              </p>
            </div>
            <img
              src={addfund_img}
              alt=""
              className="w-[25%] max-lg:w-[40%] max-md:w-[50%] max-sm:w-[80%]"
            />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default SmartAdvisor;
