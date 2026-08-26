// CustomerRelationshipSummary.jsx  (or app/customer-relationship-summary/page.jsx)
import bulloak from '../assets/bulloak.png';
import home_bg from '../assets/home/home_bg.png';
import MainLayout from '../components/MainLayout';

export default function CustomerRelationship() {
  return (
    <MainLayout>
      <div className="px-5 md:px-20">
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
          <h1 className="laviossa text-2xl md:text-6xl text-center text-[#8e078aa4] font-bold flex flex-col justify-end">
            Customer Relationship <br /> Summary
          </h1>

          <div className="mx-auto py-10 space-y-10">

            {/* Summary & Purpose */}
            <section id="overview" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Summary & Purpose</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                This Customer Relationship Summary (CRS) gives a plain-language overview of the relationship between clients
                and the Firm. It describes the types of services offered, how we are compensated, key risks, and where you can
                find additional information. This summary is informational only — your Client Agreement and other formal
                disclosures govern the specific terms of our relationship.
              </p>
            </section>

            {/* Who We Are & Services */}
            <section id="services" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Who We Are & What We Do</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                The Firm is an investment services provider offering portfolio management, advisory services, and trade execution
                across multiple asset classes. Services may include discretionary portfolio management, non-discretionary advice,
                brokerage execution, and access to research and market commentary. The specific services available to you depend on
                the account type and the agreement you sign with the Firm.
              </p>
            </section>

            {/* Services: Differences & What To Expect */}
            <section id="service-types" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Service Types — What to Expect</h2>

              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-3">
                <li>
                  <strong>Discretionary Portfolio Management:</strong> The Firm makes investment decisions and executes trades on your behalf
                  according to your goals and risk profile. Clients receive periodic reporting and ongoing portfolio oversight.
                </li>
                <li>
                  <strong>Non-Discretionary Advisory:</strong> We provide advice and recommendations, but you retain decision-making authority
                  and must instruct the Firm to execute trades.
                </li>
                <li>
                  <strong>Brokerage & Execution:</strong> The Firm executes trades on behalf of clients; execution-only services do not include
                  advice or portfolio management.
                </li>
              </ul>
            </section>

            {/* How We Are Paid */}
            <section id="compensation" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">How We Are Paid</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                The Firm receives compensation in a number of ways:
              </p>

              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Advisory fees:</strong> Typically charged as a percentage of assets under management (AUM), billed periodically.</li>
                <li><strong>Commissions or execution fees:</strong> For brokerage services, trade-level fees or markups may apply.</li>
                <li><strong>Third-party fees:</strong> Exchange, clearing or custodial fees may be passed through to clients.</li>
                <li><strong>Other arrangements:</strong> In some cases, the Firm may receive referral or platform fees; such arrangements are disclosed where applicable.</li>
              </ul>

              <p className="mt-3 text-gray-700">
                Conflicts of interest may arise from certain compensation arrangements; see the <em>Conflicts of Interest</em> section below for more detail.
              </p>
            </section>

            {/* Conflicts of Interest */}
            <section id="conflicts" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Conflicts of Interest</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Conflicts can occur when the Firm or its employees have incentives that could influence advice or execution decisions.
                Examples include compensation tied to product placement, relationships with third-party service providers, and internal
                sales incentives. We seek to manage conflicts through policies, supervision, and disclosure. When material conflicts
                exist, we will disclose them in account documentation and in regulatory filings where required.
              </p>
            </section>

            {/* Risks */}
            <section id="risks" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Key Risks</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Investing involves risk. The value of investments can rise or fall and you may lose part or all of your invested capital.
                Other risks include market, liquidity, credit, counterparty, regulatory and operational risks. Leverage (including margin)
                amplifies both gains and losses. Past performance is not an indicator of future results.
              </p>
            </section>

            {/* Client Responsibilities */}
            <section id="client-responsibilities" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Client Responsibilities</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                To help us serve you effectively, clients should:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li>Provide accurate personal and financial information, including investment objectives and risk tolerance.</li>
                <li>Review account statements and trade confirmations promptly and report any discrepancies.</li>
                <li>Keep contact and beneficiary information up to date.</li>
                <li>Understand the fees, charges and tax implications of transactions before proceeding.</li>
              </ul>
            </section>

            {/* Communication & Reporting */}
            <section id="communication" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Communication & Reporting</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                The Firm provides regular reporting, including account statements and periodic performance summaries. We communicate
                material information via email or through the secure client portal as provided in your agreement. Please review all
                communications promptly and notify us if you believe any communication is inaccurate or fraudulent.
              </p>
            </section>

            {/* How To Open, Close, or Change Account */}
            <section id="account-changes" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Opening, Closing & Changing Accounts</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Account opening requires completing required forms and providing identification and verification documents. To close
                or make material changes to an account, contact your advisor or client services; instructions may require written confirmation.
                Some changes may be subject to processing fees or notice periods; check your Client Agreement for details.
              </p>
            </section>

            {/* Complaints & Dispute Resolution */}
            <section id="complaints" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Complaints & Dispute Resolution</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                If you are dissatisfied with any aspect of our service, please contact client services at <span className="font-medium">admin@bulloakinc.com</span>.
                We aim to investigate and resolve complaints promptly. If you remain unsatisfied, you may have the option to pursue escalation
                through regulatory complaint channels; details are available in your account documentation and on request.
              </p>
            </section>

            {/* Additional Information & Documents */}
            <section id="documents" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Additional Information & Documents</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                For more detailed information, request our Client Agreement, Form ADV (or equivalent regulatory submission), account brochure,
                margin disclosure (if applicable), and other regulatory documents. These documents contain important information about
                fees, conflicts, and legal rights.
              </p>
            </section>

            {/* How To Get A Copy */}
            <section id="get-copy" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">How to Request a Copy</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                You may request a full copy of the Firm's disclosure documents and Client Agreement by emailing <span className="font-medium">admin@bulloakinc.com</span>
                or contacting your advisor. We will provide electronic copies upon request and may provide printed copies where required by law.
              </p>
            </section>

            {/* Contact */}
            <section id="contact" className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Contact</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                For further questions about your relationship with the Firm, the services offered, or to request more information, please contact:
              </p>
              <ul className="pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Email:</strong> <span className="font-medium">admin@bulloakinc.com</span></li>
                <li><strong>Phone:</strong> The support number listed on the website.</li>
                <li><strong>Advisor:</strong> Contact your assigned financial advisor for account-specific queries.</li>
              </ul>
            </section>

            {/* Legal note */}
            <div className="text-sm text-gray-500">
              <p>
                <strong>Important:</strong> This Customer Relationship Summary is a high-level overview and does not replace the full Client Agreement
                or other regulatory disclosures. Please review all account documents carefully and contact us if you need clarification or additional information.
              </p>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
