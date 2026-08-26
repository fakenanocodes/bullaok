// MarginTrading.jsx  (or app/margin-trading/page.jsx)
import bulloak from '../assets/bulloak.png';
import home_bg from '../assets/home/home_bg.png';
import MainLayout from '../components/MainLayout';

export default function Margin() {
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
          <h1 className="laviossa text-3xl md:text-7xl text-center text-[#8e078aa4] font-bold flex flex-col justify-end">
            Margin Trading
          </h1>

          <div className="mx-auto py-10 space-y-10">

            {/* Overview */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Overview</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Margin trading allows qualified clients to borrow funds from a broker to purchase securities or other financial instruments. Using margin can increase potential returns, but it also amplifies losses and introduces additional costs and risks. This page explains how margin accounts work, the key risks, margin requirements, interest and fees, and best practices for managing margin exposure.
              </p>
            </section>

            {/* How Margin Works */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">How Margin Works</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                When you open a margin account, the broker lends you a portion of the purchase price of securities you buy. The securities themselves typically serve as collateral for the loan. You must meet an initial margin requirement when opening a position and maintain a minimum equity level (maintenance margin) afterward. If your account equity falls below that maintenance level, the broker may issue a margin call requiring you to deposit cash or liquidate positions.
              </p>
            </section>

            {/* Initial & Maintenance Requirements */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Initial & Maintenance Requirements</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Margin requirements vary by jurisdiction, broker, and asset type. Common parameters include:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Initial Margin:</strong> The percentage of the trade value you must deposit upfront (e.g., 50% for certain equity purchases under some regulatory regimes).</li>
                <li><strong>Maintenance Margin:</strong> The minimum account equity you must maintain (e.g., 25–30% of the market value of positions). If equity falls below this, a margin call may be triggered.</li>
                <li><strong>Special/House Requirements:</strong> Brokers may impose stricter “house” requirements than regulatory minimums, especially for volatile assets.</li>
              </ul>
            </section>

            {/* Margin Calls & Liquidation */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Margin Calls & Liquidation</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                If your account equity falls below the maintenance requirement, the broker will typically issue a margin call. You will be required to deposit additional funds or securities to restore required equity. If you fail to meet the margin call, the broker may sell some or all of your positions — without further notice — to bring the account back into compliance. Liquidation can occur at unfavorable prices and may not fully satisfy the shortfall, leaving residual obligations.
              </p>
            </section>

            {/* Interest, Fees & Costs */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Interest, Fees & Costs</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Borrowing on margin incurs interest and may involve other fees. Important points:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Margin Interest:</strong> Charged on the borrowed amount; rates depend on the broker, loan size and prevailing market rates. Interest may be billed monthly or deducted from the account.</li>
                <li><strong>Trading & Execution Costs:</strong> Standard commissions, spreads, exchange and clearing fees still apply and are separate from margin interest.</li>
                <li><strong>Overnight Financing:</strong> For leveraged positions held overnight, financing and swap rates may apply for derivatives.</li>
              </ul>
            </section>

            {/* Risks of Margin Trading */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Risks of Margin Trading</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Margin trading significantly increases both potential gains and potential losses. Key risks include:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li><strong>Amplified Losses:</strong> A small adverse price movement can result in larger percentage losses due to leverage.</li>
                <li><strong>Margin Calls & Forced Liquidation:</strong> The broker may liquidate positions without your consent to cover shortfalls.</li>
                <li><strong>Interest Costs:</strong> Ongoing interest reduces net returns, especially for long-term leveraged positions.</li>
                <li><strong>Volatility & Gaps:</strong> Rapid price moves or overnight gaps can cause immediate breaches of margin requirements.</li>
                <li><strong>Regulatory & Counterparty Risk:</strong> Rules and broker policies may change; in extreme market conditions, you may face restrictions or delays in executing trades.</li>
              </ul>
            </section>

            {/* Margin Strategies & Best Practices */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Margin Strategies & Best Practices</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                If you choose to use margin, consider disciplined risk management:
              </p>
              <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
                <li>Set conservative position sizes and never use the maximum available leverage by default.</li>
                <li>Keep additional cash or liquid securities available to meet unexpected margin calls.</li>
                <li>Use stop-loss orders and monitor positions frequently; avoid excessive concentration.</li>
                <li>Understand the cost of financing and run scenarios showing how interest and drawdowns affect returns.</li>
                <li>Review broker margin schedules and house policies before opening positions in volatile or illiquid assets.</li>
              </ul>
            </section>

            {/* Example Scenarios */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Example Scenarios</h2>
              <div className="mt-4 bg-gray-50 border border-purple-100 p-4 rounded">
                <p className="text-gray-700">
                  <strong>Example A — Long Equity with 50% Initial Margin:</strong> You deposit $10,000 and buy $20,000 of stock (50% initial margin). If the stock declines 30% to $14,000, your equity becomes $4,000 ($14,000 − $10,000 loan) which is a 40% loss on your invested capital and below many maintenance requirements — potentially triggering a margin call.
                </p>
                <p className="text-gray-700 mt-3">
                  <strong>Example B — Leverage & Interest Drag:</strong> Borrowing to hold a position that returns a modest positive yield may still produce negative net returns after paying margin interest and fees. Always forecast net returns after financing costs.
                </p>
              </div>
            </section>

            {/* Suitability & Account Approval */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Suitability & Account Approval</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Margin accounts are not suitable for all clients. Approval typically requires evaluating your investment experience, financial condition, investment objectives, and risk tolerance. The Firm or custodian may impose additional requirements or decline margin privileges at its sole discretion.
              </p>
            </section>

            {/* Regulatory & Disclosure */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Regulatory & Disclosure</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                Margin trading is governed by regulatory requirements and exchange rules which may vary by jurisdiction. This page provides general educational information only and does not constitute investment advice or an offer to trade on margin. Consult the Firm's account agreement and margin disclosure documents for precise terms and conditions.
              </p>
            </section>

            {/* Frequently Asked Questions */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Frequently Asked Questions</h2>
              <div className="mt-3 text-gray-700 space-y-4">
                <div>
                  <strong>Q: What happens if I receive a margin call?</strong>
                  <p className="mt-1">A: You must deposit additional funds or securities to meet the call. If you don’t, the broker may sell positions to restore required equity.</p>
                </div>
                <div>
                  <strong>Q: Can I lose more than I invested?</strong>
                  <p className="mt-1">A: Yes. Because you borrow funds, your losses can exceed your invested capital in certain scenarios.</p>
                </div>
                <div>
                  <strong>Q: How is margin interest calculated?</strong>
                  <p className="mt-1">A: Interest is calculated on the outstanding loan amount, usually daily, and charged according to your margin agreement (monthly or as otherwise specified).</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="pb-6">
              <h2 className="font-bold text-lg md:text-2xl text-[#8E0789]">Contact</h2>
              <p className="mt-3 text-gray-700 leading-relaxed">
                For more information about margin accounts, approval criteria, or rate schedules, please contact your advisor or email <span className="font-medium">admin@bulloakinc.com</span>. We can provide margin disclosure documents and answer questions about suitability and risk management.
              </p>
            </section>

            {/* Legal note */}
            <div className="text-sm text-gray-500">
              <p>
                <strong>Important:</strong> Margin trading involves significant risk and is not appropriate for all investors. The Firm's margin policies, rates and approval criteria are set forth in account agreements and may change. Review those documents carefully before trading on margin.
              </p>
            </div>

          </div>
        </div>
      </div>
    </MainLayout>
  );
}
