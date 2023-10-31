import backgroundImage from '../assets/options_bg.png';
import data_img from '../assets/data_img.svg';
import { Link } from 'react-router-dom';
import ImageCarousel from '../Components/ImageCarousel';

const OptionsPage = () => {
  const textDecorationStyle = {
    textDecoration: 'line-through',
    textDecorationThickness: '5px', // Adjust the thickness as needed
    textDecorationColor: '#FA4C67',
  };

  return (
    <div>
      <main
        className="bg-cover relative bg-center h-[39.5rem]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="translate-y-[-50%] absolute top-[50%] left-[10%]">
          <h1 className="text-[3.5rem] font-bold text-[#2B3240]">
            <span className="text-[#0D86FF] ">Options</span> Trading <br /> on
            the go
          </h1>
          <ul className="list-disc text-[1.2rem] mt-10 px-6">
            <li>0 commission and 0 contract fees for equity options</li>
            <li>Free real-time OPRA and index data</li>
            <li>Multiple trading strategies</li>
            <li>Easy-to-use app, web, and desktop platform</li>
          </ul>
          <button className="flex gap-3 mt-5 text-white w-56 cursor-pointer h-16 text-2xl bg-blue-500 text-center font-open-sans-semibold font-semibold leading-16 rounded-full tracking-tight">
            Get Started<span>&rarr;</span>
          </button>
        </div>
      </main>
      <div className="text-center mt-20">
        <h1 className="text-[#2B3240] text-[2.7rem] font-bold  leading-14 mb-3 tracking-tight">
          Pay No Contract Fees
        </h1>

        <p className="text-[#636872] text-[1.3rem]">
          0 commissions, 0 contract fees for equity options, 0 <br />
          assignment or exercise fees and no minimum deposit. No <br />
          matter what options strategy or lot size you like, you'll never <br />{' '}
          pay fees per leg.
        </p>
      </div>
      {/*  */}
      <div className="my-0 mx-auto mt-16 w-[80%] rounded-[0.8rem] overflow-hidden">
        <table className="w-full h-[20rem] text-center table-container border border-solid border-gray-300 rounded-lg">
          <tr className="bg-[#0D86FF] h-16">
            <th></th>
            <th></th>
            <th className="text-white text-[1.3rem] font-medium">
              Opening Commissions
            </th>
            <th className="text-white text-[1.3rem] font-medium">To Close</th>
          </tr>
          <tr>
            <td className="text-[#2B3240]">
              <p className="text-[1.3rem]">20 Puts/Calls</p>{' '}
              <span> single leg</span>
            </td>
            <td>
              {' '}
              <span
                style={textDecorationStyle}
                className="text-[1.3rem] decorate-2px font-bold line-through "
              >
                US$20
              </span>
            </td>
            <td className="text-[1.3rem] font-bold">US$0</td>
            <td className="text-[1.3rem] font-bold">US$0</td>
          </tr>
          <tr className="bg-[#f0f0f0]">
            <td className="text-[#2B3240]">
              <p className="text-[1.3rem]">20 Verticals</p>{' '}
              <span> two legs</span>
            </td>
            <td>
              <span
                style={textDecorationStyle}
                className="text-[1.3rem] decorate-2px font-bold line-through "
              >
                US$20
              </span>
            </td>
            <td className="text-[1.3rem] font-bold">US$0</td>
            <td className="text-[1.3rem] font-bold">US$0</td>
          </tr>
          <tr>
            <td className="text-[#2B3240]">
              <p className="text-[1.3rem]">20 Iron Condors</p>{' '}
              <span> four legs</span>
            </td>
            <td>
              <span
                style={textDecorationStyle}
                className="text-[1.3rem] decorate-2px font-bold line-through "
              >
                US$20
              </span>
            </td>
            <td className="text-[1.3rem] font-bold">US$0</td>
            <td className="text-[1.3rem] font-bold">US$0</td>
          </tr>
        </table>
        <div className="flex gap-1 items-center mt-5">
          <img src={data_img} alt="" className="h-[1rem] w-[1rem]" />
          <p className="text-[#979BA1]">
            Regulatory, exchange, and index option fees may apply.
          </p>
        </div>
      </div>
      <div className="flex justify-around mt-20">
        <div>
          <h1 className="text-[#2B3240] font-extrabold text-[2.3rem]">
            {' '}
            Complimentary Real-Time <br /> Market Data
          </h1>
          <p className="text-[#636872] leading-[30px] text-[1.3rem]">
            Get real time OPRA data after opening an option <br />
            trading account. Webull is now partnered with <br />
            Cboe to provide Cboe Global Indices Feed when <br />
            you sign up.
          </p>
        </div>

        <img src="" alt="" />
      </div>
      <div className="bg-[#0D86FF] h-[15rem] flex justify-around mt-20">
        <img src="" alt="" />
        <div className="flex justify-between items-center gap-32">
          <div className="flex flex-col justify-center gap-2">
            <p className="text-[#CAFE4B] text-[2.3rem]  font-bold leading-[40px]">
              Get up to 12 Free Stocks
            </p>
            <p className="text-[1.6rem] text-white font-bold">
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
          <button className="flex gap-3 mt-5  w-56 cursor-pointer h-16 text-2xl text-blue-500 bg-white text-center font-open-sans-semibold font-semibold leading-16 rounded-full tracking-tight">
            Get Started<span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="text-center mt-20 leading-[20px]">
        <h1 className="text-[#2B3240] font-extrabold text-[2.3rem] mb-8">
          {' '}
          Choose Your Option <br /> Trading Strategies
        </h1>
        <p className="text-[#636872] leading-[30px] text-[1.3rem]">
          11 option trading strategies to choose from on Webull, including{' '}
          <br />
          single option, covered stock, straddle, butterfly, iron condor, etc.
        </p>
      </div>
      <ImageCarousel />

      <div>
        <div className=" mt-20 leading-[20px]">
          <h1 className="text-[#2B3240] font-extrabold text-[2.3rem] mb-8">
            {' '}
            Access to Smart <br /> Trading Tools
          </h1>
          <p className="text-[#636872] leading-[30px] text-[1.3rem]">
            Customizable option chain, multi leg option <br />
            quotes and real time chart. An intuitive interface & <br />
            multiple research tools make it easy to use for all <br />
            options traders.
          </p>
        </div>

        <img src="" alt="" />
      </div>
    </div>
  );
};

export default OptionsPage;
