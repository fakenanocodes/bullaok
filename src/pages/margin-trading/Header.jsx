export default function Header() {
  return (
    <section className="flex flex-col lg:flex-row px-8 items-center justify-center md:gap-16 gap-8 py-9  ">
      <div className="flex text-center md:text-start flex-col gap-10 text-[#fff] md:items-start items-center w-full lg:w-3/4 items-start">
        <h1 className="font-bold md:text-[70px] text-5xl  text-center md:text-start mt-9 text-[#fff]">
          Margin Trading Overview
        </h1>
        <p className="">
          Margin trading enables you to borrow money from Bulloak and leverage
          your holdings to purchase securities. This gives you access to
          additional buying power based on the value of certain securities and
          assets in your brokerage account.​
        </p>
        <p>On Bulloak, do it all with zero commission.</p>
        <ul>
          <li>Why choose Bulloak for margin trading</li>
          <li>The benefit of a margin trading account​</li>
          <li>Understand the risks of margin trading</li>
          <li>How trading securities on margin works​</li>
        </ul>
        <button className="bg-[#000] hidden md:block rounded-lg p-4 w-64 font-bold text-2xl">
          Get Started
        </button>

        <p>
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
      <button className="bg-[#000]  rounded-lg md:hidden text-[#fff]  p-2 w-64 font-bold text-2xl">
        Get Started
      </button>
    </section>
  );
}
