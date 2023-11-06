import invest from '../assets/invest.mp4';
import MainLayout from '../components/MainLayout';
import HubCard from '../components/utils/cards/HubCard';
import HubSmallCard from '../components/utils/cards/HubSmallCard';
import LoginCard from '../components/utils/cards/LoginCard';
import HubOptions from '../components/utils/reusables/HubOptions';

const cardData = [
  {
    title: 'Making a first-time investment',
    description:
      'When taking the plunge as a new investor, you want to be certain that',
  },
  {
    title: 'What is an index option?',
    description:
      'New index options are available on Bulloak! Lets learn more about index',
  },
  {
    title: 'Finding a trading idea',
    description:
      'Before you begin investing, you need to develop a trading idea. This idea should',
  },
  {
    title: 'Market, limit, or stop order',
    description:
      'Market, limit, and stop order are the three most commonly used order',
  },
  {
    title: 'Is investing risky',
    description:
      'When taking the plunge as a new investor, you want to be certain that...',
  },
  {
    title: 'Making a first-time investment',
    description:
      'Because virtually every investment carries some degree of risk, it is critical',
  },
];

const Hub = () => {
  return (
    <MainLayout>
      <div className="flex gap-5 justify-evenly py-[3rem] mx-auto w-[95vw] lg:w-[85vw]">
        <div className="lg:w-[70%] xl:w-[60%]">
          <div className="pb-[1rem] border-b">
            <div className="mb-[1rem]">
              <video
                src={invest}
                autoPlay
                loop
                className="max-h-[30rem] rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 items-center">
              <HubSmallCard />
              <HubSmallCard />
            </div>
          </div>

          <section className="my-[3rem] flex flex-col items-center">
            <p className="text-lg lg:text-2xl font-bold capitalize text-[#2B3240] text-center">
              What’s Popular This Week
            </p>

            <p className="text-[#2B3240] text-xs md:text-sm text-center mt-[0.2rem] tracking-wide">
              See what investors are reading this week
            </p>

            <div className="gap-1 flex flex-col md:flex-row items-start justify-between">
              {cardData?.slice(0, 3)?.map((data, idx) => (
                <HubCard key={idx} data={data} />
              ))}
            </div>

            <div className="gap-1 flex flex-col md:flex-row items-start justify-between">
              {cardData?.slice(3)?.map((data, idx) => (
                <HubCard key={idx} data={data} />
              ))}
            </div>
          </section>

          <section className="my-[5rem] flex flex-col items-center">
            <p className="text-lg lg:text-2xl font-bold capitalize text-[#2B3240] text-center">
              Explore All Products
            </p>

            <p className="text-[#2B3240] text-xs md:text-sm text-center mt-[0.2rem] tracking-wide">
              Explore all investment products including Stocks, Options, ETFS,
              and Others
            </p>

            <div className="my-[1rem] md:w-[90%] xl:w-[95%]">
              <HubOptions />
            </div>

            <div className="gap-1 flex flex-col md:flex-row items-start justify-between">
              {cardData?.slice(0, 3)?.map((data, idx) => (
                <HubCard key={idx} data={data} />
              ))}
            </div>

            <div className="gap-1 flex flex-col md:flex-row items-start justify-between">
              {cardData?.slice(3)?.map((data, idx) => (
                <HubCard key={idx} data={data} />
              ))}
            </div>
          </section>
        </div>

        <div className="hidden lg:inline-block w-[30%] sticky top-0">
          <LoginCard />
        </div>
      </div>
    </MainLayout>
  );
};

export default Hub;
