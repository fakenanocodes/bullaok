import MainLayout from '../components/MainLayout';
import bg_features from '../assets/bg_features.png';
import smartbg from '../assets/smart-advisor_bg.png';
import simplicity_img from '../assets/simplicity_img.png';
import lens_img from '../assets/lens_img.png';
import addfund_img from '../assets/addfund_img.png';
import depositmethod_img from '../assets/depositmethod_img.png';
import num_1 from '../assets/num_1.png';
import num_2 from '../assets/num_2.png';
import num_3 from '../assets/num_3.png';
import advisorservice_img from '../assets/advisorservice_img.png';
import etf_img from '../assets/etf_img.png';
import phonegif from '../assets/phone.gif';
import smartAdvisorVideo from '../assets/smartadvisorvideo.mp4';

import '../CSS/main.css';

const SmartAdvisor = () => {
  return (
    <div>
      <MainLayout>
        <div
          className="h-[100vh] relative"
          style={{
            backgroundImage: `url(${smartbg})`,
            backgroundSize: 'cover',
            color: 'white',
          }}
        >
          <div className=" translate-y-[-50%] absolute top-[50%] left-[10%]">
            <div className="mb-5">
              <h1 className="font-extrabold flex gap-3 text-[3.5rem]">
                <span className="text-white mb-10">BULLOAK</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-700 mb-10">
                  SMART
                </span>

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-700 mb-10">
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
                <span className="text-[1.5rem]">
                  A new way to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-700">
                    AUTO-INVEST
                  </span>
                </span>{' '}
                <br />
                <span className="text-[1.3rem]">
                  Where to Start? APP&gt;Markets&gt;Automate Your Investing
                </span>
              </p>
            </div>

            <ul className="list-disc p-0 m-0   text-[1.2rem]  font-opensans-semibold leading-[2rem]">
              <li>Low Minimum Investment</li>
              <li>Personalized risk distribution</li>
              <li>Hands-off Portfolio Monitoring</li>
            </ul>
            <button className="flex gap-3 mt-5 bg-[#41073F] text-white px-4 py-3 items-center justify-center cursor-pointer text-2xl text-center font-open-sans-semibold font-semibold leading-16 rounded-[0.5rem]">
              <span> Get Started</span>
              <span>&rarr;</span>
            </button>

            <div className="flex gap-3 mt-10">
              <input
                type="checkbox"
                name=""
                id=""
                className="cursor-pointer custom-checkbox"
              />
              <p className="text-[#FFFFFF80] text-[1.2rem]">
                (Optional) I agree to receive promotional and marketing text{' '}
                <br />
                messages from Webull. Message and data rates may apply.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around bg-gradient-to-tl from-indigo-900 to-black  bg-opacity-80 h-[100vh]">
          <div>
            <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-10">
              Bulloak Smart <br /> Advisor
            </p>
            <div class="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <p className="text-[2.5rem] text-white">
              Your AI Money <br /> Manager
            </p>
          </div>

          <video controls className="h-[50%] w-[50%]" muted>
            <source src={smartAdvisorVideo}></source>
          </video>
        </div>

        <div
          className="h-[100vh] flex justify-around items-center flex-wrap bg-gradient-to-tr from-opacity-60 via-opacity-0 to-transparent"
          style={{
            backgroundImage:
              'linear-gradient(201deg, rgba(49,57,159,0.60) 0%, rgba(0,0,50,0.9) 43%)',
          }}
        >
          <img src={phonegif} alt="" className="w-[25%] h-[90%]" />

          <div>
            <div className="mb-10">
              <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-10">
                Distinctive Balance of Risk and <br /> Potential Return
              </p>
              <div class="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-[1.5rem] text-white ">
                A 130-member investment team actively manages your <br />
                portfolio allocations based on quantitative analysis and <br />{' '}
                qualitative insight.
              </p>
            </div>

            <div>
              <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-10">
                Instantly View Your Investments
              </p>
              <div class="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-[1.5rem] text-white ">
                Stay in control of your investing strategy and track your <br />
                performance through interactive tools.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-tl from-indigo-900 to-black  bg-opacity-80 ">
          <div className="flex items-center justify-around h-[100vh]">
            <div>
              <p className="text-transparent text-[2.5rem] font-bold bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 mb-10">
                Receive A Customized <br />
                Portfolio
              </p>
              <div class="w-[4rem] h-[3px] my-8 rounded-1.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <p className="text-[1.5rem] text-white ">
                Your money is put into an expertly built <br /> portfolio
                containing a range of <br /> investment products based on your
                risk <br /> tolerance.
              </p>
            </div>

            <video
              className="h-[30%] w-[30%] border-none"
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
            (collectively "SSGA") for advisory or <br /> other services, which
            presents a conflict of interest for SSGA. Income earned by SSGA
            would be lower, and the returns generated by implementing one or
            more model <br /> portfolios might be higher, if the model
            portfolios were to be constructed using ETFs or other investments
            that do not pay fees to SSGA.
          </p>
        </div>

        {/* <div className="flex justify-around items-center gap-10">
          <div className="flex  items-center justify-center w-[30%] h-[70%]  flex-col ">
            <img src={simplicity_img} alt="" className="w-[25rem]" />
            <p>Simplicity</p>
            <p>
              You only need a small initial deposit to get started—leave the
              rest to us. We handle all aspects of portfolio management.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30%] h-[70%]">
            <img src={lens_img} alt="" className="w-[25rem]" />
            <p>Peace of Mind</p>
            <p>
              Webull Smart Advisor helps with day-to-day management by
              monitoring your portfolio, and it automatically rebalances it when
              necessary to keep you on track.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-[30%] h-[70%]">
            <img src={simplicity_img} alt="" className="w-[25rem] " />
            <p> 2-in-1 APP</p>
            <p>An app for both auto-investing and self-directed trading.</p>
          </div>
        </div> */}

        <div className="flex flex-wrap items-center justify-around bg-gradient-to-tl from-indigo-900 to-black  bg-opacity-80 h-[60vh]">
          <img src={etf_img} alt="" className="w-[30rem]" />
          <div>
            <p className="text-[3.5rem] font-bold text-white">
              What Is A Robo-Advisor?
            </p>
            <button className="flex gap-3 mt-5 bg-[#41073F] text-white px-4 py-3 items-center justify-center cursor-pointer text-2xl text-center font-open-sans-semibold font-semibold leading-16 rounded-[0.5rem]">
              <span> Learn More</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-tl from-indigo-900 to-black py-20 gap-28  bg-opacity-80 min-h-[100vh] flex items-center flex-wrap flex-col justify-center ">
          <div className="flex justify-around items-center h-[100%] flex-wrap">
            <div className="flex flex-col  ">
              <div className="flex items-center gap-7 ">
                <img src={num_1} alt="" className="w-[5rem] h-[5rem]" />
                <p className="text-[2rem] font-bold text-white">
                  Risk Assessment
                </p>
              </div>
              <p className="text-white font-bold text-[1.5rem]">
                Answer a few questions to let <br /> us know your willingness to{' '}
                <br /> take on risk.
              </p>
            </div>
            <img src={advisorservice_img} alt="" className="w-[25%]" />
          </div>

          <div className="flex justify-around items-center h-[100%] flex-wrap">
            <img src={depositmethod_img} alt="" className="w-[25%]" />

            <div className="flex flex-col  ">
              <div className="flex items-center gap-7 ">
                <img src={num_2} alt="" className="w-[5rem] h-[5rem]" />
                <p className="text-[2rem] font-bold text-white">
                  Funding Your Account
                </p>
              </div>
              <div className="text-white font-bold text-[1.5rem]">
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

          <div className="flex justify-around items-center h-[100%] flex-wrap">
            <div className="flex flex-col  ">
              <div className="flex items-center gap-7 ">
                <img src={num_3} alt="" className="w-[5rem] h-[5rem]" />
                <p className="text-[2rem] font-bold text-white">
                  Check Your Performance
                </p>
              </div>
              <p className="text-white font-bold text-[1.5rem]">
                Review your portfolio performance <br /> on the go. <br /> See how much you've
                earned <br /> based on the amount you invested.
              </p>
            </div>
            <img src={addfund_img} alt="" className="w-[25%]" />
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default SmartAdvisor;
