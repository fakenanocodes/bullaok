import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { scrollToTop } from '../../actions/utils';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const data = [
    'Why choose Bulloak for margin trading.',
    'The benefit of a margin trading account.',
    'Understand the risks of margin trading.',
    'How trading securities on margin works.',
  ];
  const navigate = useNavigate()
  return (
    <section
      className="flex flex-col lg:flex-row px-8 items-center justify-center md:gap-16 gap-8 py-9 bg-cover bg-center bg-no-repeat w-full relative"
      style={{
        backgroundImage: `url('bg_margin.jpg')`,
      }}
    >
      <div className="flex text-center md:text-start flex-col gap-10 text-[#fff] md:items-start w-full lg:w-2/4">
        <h1 className="font-bold md:text-[70px] text-4xl  text-center md:text-start mt-9 ">
          Margin Trading
          <br />
          <br />
          <span className=" text-[#41073F] mt-2">Overview</span>
        </h1>
        <p className="lg:w-2/5 w-full">
          Margin trading enables you to borrow money from Bulloak and leverage
          your holdings to purchase securities. This gives you access to
          additional buying power based on the value of certain securities and
          assets in your brokerage account.
        </p>
        <p className="hidden md:block">
          On Bulloak, do it all with zero commission.
        </p>
        <div className="flex flex-col gap-2">
          {data.map((item, index) => (
            <ul key={index} className="p-0 m-0 border-red-500">
              <li className="flex items-center p-0 m-0 gap-3">
                <img src="tick.png" className="w-6 h-auto" alt="" />{' '}
                <p>{item}</p>{' '}
              </li>
            </ul>
          ))}
        </div>

        <button 
         onClick={() => {
          navigate('/register');
          scrollToTop();
        }} className="bg-[#D4B716] rounded-lg text-[#000] px-9 py-4 flex items-center gap-2 mt-[100px] lg:mt-0">
          <span>Get Started</span> <BsFillArrowRightCircleFill />
        </button>

        <p className=" text-sm">
          Margin trading involves unique risks, including interest charges and
          the potential to lose more than deposited. Before trading with margin,
          you should determine whether this type of trading strategy is right
          for your specific investment objectives, experience, risk tolerance,
          and financial situation. For more information please see Bulloak
          Financial’s Margin Disclosure Statement, Margin Agreement, Day Trading
          Risk Disclosure Statement and FINRA Investor Information. Additional
          info: Bulloak.com/policy.
        </p>
      </div>
      {/* <img src="/mobile.png" className="h-auto w-full md:w-1/3" alt="" /> */}
      {/* <button className="bg-[#000]  rounded-lg md:hidden text-[#fff]  p-2 w-64 font-bold text-2xl">
        Get Started
      </button> */}
    </section>
  );
}
