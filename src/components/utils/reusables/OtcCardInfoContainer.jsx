import trade_icon from '../../../assets/trade_icon.svg';
import OtcCard from '../cards/OtcCard';
import OtcInfo from './OtcInfo';

const items = [
  {
    description:
      'Trade OTCs with $0.00 commission, no added platform fees or account minimums*.',
    image: trade_icon,
  },
  {
    description:
      'Buy and sell large-cap ADRs, and small or micro-cap growth companies.',
  },
  {
    description:
      'Get instant market access and customize your trading with our free trading tools.',
  },
  {
    description:
      'OTC Markets: Real-time best bid & offer pricing for OTCQX, OTCQB, and Pink securities.',
  },
  {
    description:
      'Trade stocks, ETFs, options, index options and more, with one Bulloak account.',
  },
  {
    description:
      'Level up your market knowledge and learn about investing with free online courses on Trading.',
  },
];

const OtcCardInfoContainer = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-4xl font-bold tracking-wide text-white text-center">
          Why Trade OTCs with us?
        </p>
        <div className="w-14 border-b-8 rounded-md border-[#fff]"></div>
      </div>

      <div className="mt-[3rem] flex flex-col gap-3 lg:gap-7">
        <div className="w-full flex flex-col items-center justify-center md:flex-row gap-3 lg:gap-7">
          {items?.slice(0, 3)?.map((item, idx) => (
            <OtcCard key={idx} item={item} image={trade_icon} />
          ))}
        </div>

        <div className="w-full flex flex-col items-center justify-center md:flex-row gap-3 lg:gap-7">
          {items?.slice(3)?.map((item, idx) => (
            <OtcCard key={idx} item={item} />
          ))}
        </div>
      </div>

      <p className="text-white font-bold text-xl text-center mt-[3rem]">
        Bulloak currently supports trading in about 500 OTC securities. More
        OTCs are coming.
      </p>

      <OtcInfo />
    </>
  );
};

export default OtcCardInfoContainer;
