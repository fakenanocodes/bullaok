import React from 'react';

export default function Learn() {
  return (
    <section>

    <div className='text-[#fff] w-2/4 m-auto mt-9 '>

      <h2 className='font-bold text-4xl text-center mb-5'>Learn as you go</h2>
      <p className='text-center'>
        Webull Learn provides 500+ lessons with videos and trainings to help you
        learn more about the world of investing.
      </p>
      <div className="con">
        <div className="title">
          <h2>How does Leverage Impact Risk and Investment Returns?</h2>
        </div>
        <p>
          Leverage can be a powerful investment tool if utilized effectively,
          but you could also lose more than your initial investment, depending
          on how you manage. How does leverage impact risk and investment
          returns?
        </p>
        <a href="">Learn More {'>'} </a>
      </div>

      <div className="content">
        <p>
          Leverage ETF disclosure:
          <br />
          ETFs are subject to similar risk to those of their underlying
          securities, including, but not limited to, market, investment, sector,
          or industry risks, and those regarding short-selling and margin
          account maintenance. An ETF prospectus contains its investment
          objectives, risks, charges, expenses, and other important information,
          and should be read and carefully considered before investing.
          <br />
          Inverse, leveraged, volatility-linked, and other types of ETFs are
          considered complex products and involve greater risk and typically
          have higher carrying costs. It is important that investors understand
          the unique characteristics and risks associated with these securities.
          These products may not be suitable for buy-and-hold investors. In
          general, these types of ETFs reset daily and are not designed to track
          the underlying index or benchmark over a longer period of time. <br />
          Disclaimer: <br />
          All companies or symbols provided are for informational purposes only
          and does not constitute an investment recommendation or advice. <br />
          *Regulatory and other fees may apply
        </p>
      </div>
      <button className="bg-[#000]">Open an account</button>
    </div>
    </section>
  );
}
