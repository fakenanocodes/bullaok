// FeeSchedule.jsx (or app/fee-schedule/page.jsx)
// Reuses same MainLayout and assets as Disclosure page

import MainLayout from '../components/MainLayout';
import home_bg from '../assets/home/home_bg.png';
import bulloak from '../assets/bulloak.png';

export default function FeeSchedule() {
  return (
    <MainLayout>
      <div className="px-5 lg:px-10 xl:px-20">
        {/* decorative logo/top */}
        <div
          style={{
            backgroundImage: `url(${bulloak})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          className="laviossa mt-32 h-14 md:h-40"
        />

        {/* page background container */}
        <div
          className="bg-white text-lg h-fit"
          style={{
            backgroundImage: `url(${home_bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="laviossa text-3xl md:text-7xl text-center text-[#8e078aa4] font-bold flex flex-col justify-end">
            Fee Schedule
          </h1>

          <div className="mx-auto py-10 space-y-10">

            {/* Overview */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Overview</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                This Fee Schedule describes the principal fees and charges that may apply to clients of the Firm.
                Our goal is transparency: below we list advisory fees, trading and execution fees, account maintenance
                charges and other costs you may encounter. Fees are described in general terms — your
                individualized agreement and disclosures provided at account opening govern the precise fees and
                billing arrangements that apply to you.
              </p>
            </section>

            {/* Advisory Fees */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Advisory Fees</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We offer discretionary and non-discretionary advisory services. For discretionary portfolio management,
                our fee is typically charged as a percentage of assets under management (AUM). The specific percentage,
                billing frequency and minimum asset level are stated in your Client Agreement. Common structures include:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Tiered AUM:</strong> Example: 1.00% on the first $1,000,000; 0.80% on the next $4,000,000; 0.60% thereafter.</li>
                <li><strong>Flat percentage:</strong> A fixed percentage applied to total account value (e.g. 0.75% per annum).</li>
                <li><strong>Performance-based (where permitted):</strong> A success fee tied to returns above a benchmark (only used in select arrangements and disclosed up front).</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Fees may be negotiable and vary by client, account type, and services provided. All advisory fees are
                described in the Client Agreement and the Firm's separate Form ADV (or equivalent regulatory disclosure).
              </p>
            </section>

            {/* Trading & Execution Fees */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Trading & Execution Fees</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Transaction costs depend on the asset class, venue, and execution method. Examples of possible charges:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Equities & ETFs:</strong> Per-share or per-trade commission charged by the executing broker (or bundled into a spread).</li>
                <li><strong>Options & Futures:</strong> Exchange and clearing fees plus broker commissions.</li>
                <li><strong>Fixed Income & Bonds:</strong> Markups/markdowns or dealer spreads; some bond trades carry larger execution spreads.</li>
                <li><strong>Cryptocurrencies:</strong> Exchange fees, network fees, and possible spread costs; rates vary by exchange and liquidity.</li>
              </ul>
              <p className="mt-3 text-gray-700">
                Where applicable, third-party fees (exchange, clearing, and regulatory fees) are billed in addition to any broker commission.
                The Firm seeks competitive execution but does not guarantee specific pricing.
              </p>
            </section>

            {/* Account Fees and Minimums */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Account Fees & Minimums</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Certain accounts carry maintenance fees or minimum balances, for example:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Account opening fee:</strong> A one-time administrative fee may apply in select account types.</li>
                <li><strong>Minimum investment:</strong> Some advisory programs require a minimum account size to enroll; these minima are specified in your program brochure.</li>
                <li><strong>Inactivity or custodial fees:</strong> Where applicable, custodians may charge custodial, transfer, wire, or inactivity fees.</li>
              </ul>
            </section>

            {/* Other Fees */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Other Fees & Third-Party Charges</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                The Firm does not control third-party charges assessed by custodian banks, exchanges, clearing firms or
                payment processors. Examples include:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li>Wire transfer fees, account transfer-out fees, and check processing fees.</li>
                <li>Exchange, clearing, and regulatory fees embedded in trades.</li>
                <li>Third-party research or data subscription fees that a client opts into.</li>
              </ul>
            </section>

            {/* Fee Examples */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Illustrative Fee Examples</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                The following examples are illustrative and do not reflect all possible fee arrangements. They are provided
                to help you understand the impact of fees on account value.
              </p>

              <div className="mt-4 bg-gray-50 border border-purple-100 p-4 rounded">
                <p className="text-gray-700"><strong>Example A — Tiered AUM:</strong> A client with $500,000 in a program charging 1.0% annually would pay approximately $5,000 in advisory fees per year (excluding trading and custodial fees).</p>
                <p className="text-gray-700 mt-2"><strong>Example B — Trading Costs:</strong> Frequent active trading will increase transaction costs. For example, 50 trades per month at $5 per trade equals $250 in commissions monthly, before any spread or exchange fees.</p>
              </div>
            </section>

            {/* Billing & Payment */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Billing & Payment</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Advisory fees are typically billed in arrears or pro rata and are either deducted from client accounts
                or invoiced directly, depending on the agreement. You will receive periodic statements from the custodian
                showing advisory fee debits and transaction activity. Please review your statements carefully and notify us
                promptly of any questions.
              </p>
            </section>

            {/* Refunds & Disputes */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Refunds, Adjustments & Disputes</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                If an error occurs in fee calculation or billing, the Firm will investigate promptly and make appropriate
                adjustments or refunds where warranted. If you dispute a fee, please contact our compliance team at
                <span className="font-medium"> admin@bulloakltd.com</span> with account details and a summary of your concern.
                We will acknowledge receipt and aim to resolve disputes in a timely manner.
              </p>
            </section>

            {/* Regulatory & Disclosure */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Regulatory & Disclosure</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Information in this Fee Schedule is provided for general informational purposes and is not an offer to sell
                investment advisory services. For regulatory disclosures, conflicts of interest, and additional information
                about our fees and practices please refer to the Firm's Form ADV (or equivalent) and other formal disclosure
                documents available upon request.
              </p>
            </section>

            {/* Contact */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Contact</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                For questions about fees or to request a personalized fee schedule for a particular service, please contact
                us at <span className="font-medium">admin@bulloakltd.com</span> or by telephone at the number listed on the website.
              </p>
            </section>

            {/* small legal note */}
            <div className="text-sm text-gray-500">
              <p>
                <strong>Important:</strong> This Fee Schedule is informational only. The precise fees charged to you are
                set forth in your Client Agreement and any program brochure. The Firm reserves the right to modify fees
                and fee schedules without prior notice, subject to the terms of existing client agreements and applicable law.
              </p>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
