import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../actions/utils';

export default function GetStarted() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#fef3fd] py-5 px-0">
      <h2 className="font-bold text-center py-9 lg:text-4xl text-2xl text-[#550952]">
        Get Started in 3 easy steps
      </h2>
      {/* Timeline */}
      <div className="flex lg:flex-row flex-col justify-between items-center w-2/3 py-5 mx-auto gap-2">
        <div className="lg:w-1/5 w-full lg:bg-transparent bg-white lg:rounded-0 rounded-xl py-5">
          <img src="apply.png" className="lg:w-44 w-20 mx-auto h-auto" alt="" />
          <h3 className="text-[#550952] lg:text-start text-center font-bold text-xl mt-5">
            Apply for an account
          </h3>
        </div>
        <hr className="w-[30%] hidden lg:block  border-2" />
        <div className="lg:w-1/5 w-full lg:bg-transparent bg-white lg:rounded-0 rounded-xl py-5">
          <img src="apply.png" className="lg:w-44 w-20 mx-auto h-auto" alt="" />
          <h3 className="text-[#550952] lg:text-start text-center font-bold text-xl mt-5">
            Deposit any amount
          </h3>
        </div>

        <hr className="w-[30%] border-2 hidden lg:block" />
        <div className="lg:w-1/5 w-full lg:bg-transparent bg-white lg:rounded-0 rounded-xl py-5">
          <img src="apply.png" className="lg:w-44 w-20 mx-auto h-auto" alt="" />
          <h3 className="text-[#550952] lg:text-start text-center font-bold text-xl mt-5">
            Start buying & selling
          </h3>
        </div>
      </div>
      <button
        onClick={() => {
          navigate('/register');
          scrollToTop();
        }}
        className="bg-[#550952] w-64  mx-auto text-center  font-bold lg:text-2xl text-xl rounded-lg text-[#fff]  py-4 flex items-center justify-center gap-2 lg:mt-9"
      >
        <span>Open an account</span>
      </button>
      <div className="flex flex-col mt-9 lg:w-2/3 px-3 lg:px-0 w-full mx-auto">
        <hr />
        <p className="my-5 text-md text-gray-500">
          Fractional shares Disclosure: This is not an offer, or solicitation of
          any offer to buy or sell any security, investment or other product.
          Fractional Shares trading involves risks, and there is always the
          potential of losing money when you invest in securities. Past
          performance, historical returns, future projections, and statistical
          forecasts are no guarantee of future returns or future performance.
          Diverseﬁcation does not ensure a proﬁt or guarantee against loss.
          Investors should consider their investment objectives and risks
          carefully before investing. Regulatory and Exchange Fees may apply.
          <br />
          <br />
          Fractional shares trade is available for equities and ETFs ONLY. The
          list of active symbols will be maintained by Bulloak. Users can only
          place fractional shares orders during market hours. The trading window
          is 9:30am-4:00pm EST. The minimum USD amount for single trade is $5
          and the minimum fractional amount of shares for a single trade is
          0.00001. This rule does not work when clients are closing a position.
        </p>
      </div>
    </section>
  );
}
