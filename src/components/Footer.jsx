import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { RiTwitterXLine } from 'react-icons/ri';
import data from '../data/footer.json';
import FooterItem from './common/FooterItem';

export default function Footer() {
  console.log({ data });
  return (
    <section className="w-full mx-auto py-9 px-5 lg:px-10 xl:px-20 bg-[#41073F]">
      <div className="flex gap-4 mt-5 md:hidden text-[#fff] justify-center">
        <BiLogoFacebook
          style={{
            fontSize: '30px',
            border: '1px solid white',
            padding: '4px',
            borderRadius: '50%',
          }}
        />
        <AiOutlineInstagram
          style={{
            fontSize: '30px',
            border: '1px solid white',
            padding: '4px',
            borderRadius: '50%',
          }}
        />
        <RiTwitterXLine
          style={{
            fontSize: '30px',
            border: '1px solid white',
            padding: '4px',
            borderRadius: '50%',
          }}
        />
      </div>
      <div className="   grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((item, index) => (
          <FooterItem
            key={index}
            faq={item.FAQ}
            about={item.About}
            terms={item.Terms}
            contact={item.Contact}
          />
        ))}
      </div>
      <hr />
      <p className="text-[#fff] my-5 ">
        Securities trading is offered to self-directed customers by Bulloak
        Financial LLC, a broker dealer registered with the Securities and
        Exchange Commission (SEC). Bulloak Financial LLC is a member of the
        Financial Industry Regulatory Authority (FINRA), Securities Investor
        Protection Corporation (SIPC), The New York Stock Exchange (NYSE),
        NASDAQ and Cboe EDGX Exchange, Inc (CBOE EDGX).
        <br />
        <br />
        Bulloak Financial LLC is a member of SIPC, which protects securities
        customers of its members up to $500,000 (including $250,000 for claims
        for cash). An explanatory brochure is available upon request or at
        www.sipc.org. Our clearing firm, Apex Clearing Corp., has purchased an
        additional insurance policy.
        <br />
        <br />
        Our clearing firm Apex Clearing Corp has purchased an additional
        insurance policy. The coverage limits provide protection for securities
        and cash up to an aggregate of $150 million, subject to maximum limits
        of $37.5 million for any one customer’s securities and $900,000 for any
        one customer’s cash. Similar to SIPC protection, this additional
        insurance does not protect against a loss in the market value of
        securities.
        <br />
        <br />
        Advisory accounts and services are provided by Bulloak Advisors LLC
        (also known as "Bulloak Advisors"). Bulloak Advisors is an Investment
        Advisor registered with and regulated by the SEC under the Investment
        Advisors Act of 1940. Registration does not imply a level of skill or
        training. See additional information on the Disclosures webpage. Trades
        in your Bulloak Advisors account are executed by Bulloak Financial LLC,
        a member of the Securities Investor Protection Corporation (SIPC). That
        means your assets are protected up to $500,000 in value, including
        $250,000 in any cash awaiting reinvestment.
        <br />
        <br />
        All investments involve risk, and not all risks are suitable for every
        investor. The value of securities may fluctuate and as a result, clients
        may lose more than their original investment. The past performance of a
        security, or financial product does not guarantee future results or
        returns. Keep in mind that while diversification may help spread risk,
        it does not assure a profit or protect against loss in a down market.
        There is always the potential of losing money when you invest in
        securities or other financial products. Investors should consider their
        investment objectives and risks carefully before investing.
        <br />
        <br />
        Options trading entails significant risk and is not appropriate for all
        investors. Option investors can rapidly lose the value of their
        investment in a short period of time and incur permanent loss by
        expiration date. Losses can potentially exceed the initial required
        deposit. You need to complete an options trading application and get
        approval on eligible accounts. Please read the{' '}
        <a href="#">Characteristics and Risks of Standardized Options</a> before
        trading options.
        <br />
        <br />
        No content on the Bulloak Financial LLC website shall be considered as a
        recommendation or solicitation for the purchase or sale of securities,
        options, or other investment products. All information and data on the
        website is for reference only and no historical data shall be considered
        as the basis for judging future trends.
        <br />
        <br />
        Investors should be aware that system response, execution price, speed,
        liquidity, market data, and account access times are affected by many
        factors, including market volatility, size and type of order, market
        conditions, system performance, and other factors.
        <br />
        <br />
        Free trading of stocks, ETFs, and options refers to $0 commissions for
        Bulloak Financial LLC self-directed individual cash or margin brokerage
        accounts and IRAs that trade U.S. listed securities via mobile devices,
        desktop or website products. A $0.55 per contract fee applies for
        certain options trades. Relevant regulatory and exchange fees may apply.
        Please refer to our <a href="#">Fee Schedule</a> for more details.
      </p>
      <hr />
      <p className="ml-auto w-fit text-sm text-[#fff] mt-8">
        © {new Date().getFullYear()} Bulloak Financial LLC, All rights
        reserved. Member <a href="#">FINRA/SIPC/NYSE/NASDAQ/CBOE EDGX</a>
      </p>
    </section>
  );
}
