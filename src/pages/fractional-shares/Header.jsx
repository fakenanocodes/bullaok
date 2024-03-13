import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../actions/utils";

export default function Header() {
 
  const navigate = useNavigate()
  return (
    <section className="flex flex-col lg:flex-row px-8 items-center justify-center md:gap-16 gap-8 py-9  bg-contain bg-center bg-[#fbdbfa]  bg-no-repeat  w-full relative">
      <div className="lg:w-3/4 w-full px-4  flex lg:flex-row flex-col justify-center gap-9 items-center py-6">
        <div className="flex text-center md:text-start flex-col gap-10 text-[#000] md:items-start items-center w-full lg:w-3/6 items-start">
          <h1 className="font-bold md:text-7xl text-4xl text-[#550952] text-center md:text-start mt-9 ">
            Invest with as <br /> little as $5*.
          </h1>
          <p className="lg:w-4/5 w-full text-lg text-gray-500 font-bold">
            Fractional shares make it possible to own part of a stock from your
            favorite companies and Exchange-Traded Funds (ETFs) without
            committing to a whole share.
          </p>

          <button 
           onClick={() => {
            navigate('/register');
            scrollToTop();
          }} className="bg-[#550952] w-2/4 text-center font-bold lg:text-2xl text-xl rounded-lg text-[#fff]  py-4 flex items-center justify-center gap-2 mt-3 lg:mt-8">
            <span>Get Started</span>
          </button>
          <p className="text-md text-gray-500 hidden md:block">
            *There is a minimum of 0.00001 shares per order and a purchase
            quantity of $5 to own a portion of the stock or ETF.
          </p>
        </div>
        <div className="relative ">
          <img
            src="shares.png"
            className="lg:w-[100%] w-full h-auto lg:mt-0 mt-8"
            alt=""
          />
          <img
            src="comment.png"
            className="lg:w-64 w-36 h-auto lg:-left-40 -left-10 absolute lg:top-3 bottom-20"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
