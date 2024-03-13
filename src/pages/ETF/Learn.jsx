import { useNavigate } from "react-router-dom";
import { scrollToTop } from "../../actions/utils";

export default function Learn() {
  const navigate = useNavigate()
  return (
    <section className="bg-[#a53aa1] ">
      <div className="text-[#fff] py-9 px-6 lg:px-3 lg:w-2/4 w-full m-auto  flex flex-col gap-5">
        <h2 className="font-bold lg:text-4xl text-2xl text-center mb-5">
          Learn as you go
        </h2>
        <p className="text-center">
          Bulloak Learn provides 500+ lessons with videos and trainings to help
          you learn more about the world of investing.
        </p>
        <div className="con bg-gradient-to-l from-[#30073F] via-[#fff]-900 to-[#41073F] lg:h-64 h-full pb-5 ">
          <div className="title bg-[#000]  text-[#fff] py-8 px-8 ">
            <h2 className="font-bold lg:text-xl text-sm">
              How does Leverage Impact Risk and Investment Returns?
            </h2>
          </div>
          <p className="text-[#fff] py-8 px-8 text-sm">
            Leverage can be a powerful investment tool if utilized effectively,
            but you could also lose more than your initial investment, depending
            on how you manage. How does leverage impact risk and investment
            returns?
          </p>
          <a href="" className="px-8 underline mb-4">
            Learn More {'>'}{' '}
          </a>
        </div>

        <div className="content">
          <p className="lg:text-lg text-sm">
            Leverage ETF disclosure:
            <br />
            <br />
            ETFs are subject to similar risk to those of their underlying
            securities, including, but not limited to, market, investment,
            sector, or industry risks, and those regarding short-selling and
            margin account maintenance. An ETF prospectus contains its
            investment objectives, risks, charges, expenses, and other important
            information, and should be read and carefully considered before
            investing.
            <br />
            <br />
            Inverse, leveraged, volatility-linked, and other types of ETFs are
            considered complex products and involve greater risk and typically
            have higher carrying costs. It is important that investors
            understand the unique characteristics and risks associated with
            these securities. These products may not be suitable for
            buy-and-hold investors. In general, these types of ETFs reset daily
            and are not designed to track the underlying index or benchmark over
            a longer period of time.
            <br />
            <br />
            Disclaimer:
            <br />
            <br />
            All companies or symbols provided are for informational purposes
            only and does not constitute an investment recommendation or advice.
            <br />
            <br />
            *Regulatory and other fees may apply
          </p>
        </div>
        <button onClick={() => {
            navigate('/register');
            scrollToTop();
          }} className="bg-[#D4B716] text-black mx-auto hidden lg:block w-full lg:w-2/5 rounded-[30px] py-4 text-xl mt-5">
          Open an account
        </button>
        {/* <button className="bg-[#000] mx-auto flex items-center px-6 gap-3 rounded-[30px] py-2 text-xl mt-5">
          <span> Open an account</span> <BsArrowRight />
        </button> */}
      </div>
      <div className="bg-[#021333] md:hidden block">
        <img src="/mobile2.png" alt="" />
      </div>
    </section>
  );
}
