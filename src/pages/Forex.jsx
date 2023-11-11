import services_banner_img from '../assets/services_banner_img.png';
import MainLayout from '../components/MainLayout';
import ForexChartTable from '../components/utils/reusables/ForexChartTable';

const Forex = () => {
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[60vh]">
        <img
          src={services_banner_img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-start gap-12 lg:gap-20 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-16 xl:pl-48">
          <p className="laviossa text-[3rem] font-bold md:w-[30rem]">Forex</p>
          <p className="laviossa text-xl md:w-[30rem]">All about forex</p>
        </div>
      </div>

      <div className="px-5 lg:px-12 xl:px-40 py-[3rem]">
        <div>
          <p className="laviossa text-3xl font-semibold">What About Forex</p>

          <p className="text-base lg:text-lg mt-[1.5rem]">
            Forex, short for foreign exchange, is a global decentralized market
            where currencies are traded. It&apos;s the largest and most liquid
            financial market, facilitating the exchange of currencies between
            nations. Participants include central banks, financial institutions,
            corporations, and individual traders. The forex market operates 24
            hours a day, five days a week, allowing continuous trading as it
            moves across major financial centers in different time zones.
            Currency pairs are the primary assets traded, representing the
            exchange rate between two currencies. Traders aim to profit from
            fluctuations in these rates, influenced by economic indicators,
            geopolitical events, and market sentiment. Leverage is commonly used
            in forex trading, magnifying both potential gains and losses.
            Success in forex requires a deep understanding of global economic
            factors, technical analysis, and risk management.
          </p>
        </div>

        <div className="mt-[2.5rem]">
          <p className="laviossa text-2xl font-semibold">The Role Of Bulloak</p>

          <p className="text-base lg:text-lg mt-[1.5rem]">
            Bulloak, empowers forex traders to enhance profitability through
            comprehensive tools and analytics. By offering real-time market
            data, advanced charting, and automated trading strategies, it
            enables users to make informed decisions. The platform&apos;s risk
            management features help traders mitigate potential losses, while
            performance analytics provide insights for refining trading
            strategies. Bulloak&apos;s user-friendly interface facilitates
            efficient execution of trades, ensuring quick responses to market
            changes. Additionally, the platform offers educational resources,
            fostering a deeper understanding of forex dynamics. With its
            integrated features, Bulloak equips forex traders with the necessary
            tools to navigate the complexities of the market and optimize their
            trading outcomes.
          </p>
        </div>
      </div>
      <ForexChartTable />
    </MainLayout>
  );
};

export default Forex;
