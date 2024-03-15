import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../actions/utils';
import chart_sys from '../assets/chart_sys.png';
import otc_bg_img from '../assets/otc_bg_img.png';
import otc_img1 from '../assets/otc_img1.png';
import phone1 from '../assets/phone1.png';
import MainLayout from '../components/MainLayout';
import OtcBigCard from '../components/utils/cards/OtcBigCard';
import OtcCardInfoContainer from '../components/utils/reusables/OtcCardInfoContainer';
import OtcTable from '../components/utils/reusables/OtcTable';

const downloadData = [
  {
    description:
      'Download Bulloak destop native and customize your own trading terminal with personalized widgets',
    image: chart_sys,
  },
  {
    description:
      'Access your account anywhere via mobile or tablet - Seamless online trading experience',
    image: phone1,
  },
];

const Otc = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="bg-[#41073F] bg-opacity-90 relative w-full h-[90vh] lg:h-[78vh] flex flex-col lg:flex-row justify-between items-center pt-[5rem] pd:mt-0">
        <div className="flex flex-col justify-center items-start gap-12  text-white pl-3 md:pl-5 lg:pl-10 xl:pl-20">
          <div>
            <p className="text-5xl font-extrabold w-full md:w-[30rem] tracking-wider text-[#E0DDDD] mb-5">
              $0 Commission
            </p>
            <p className="text-5xl font-extrabold w-full md:w-[30rem] tracking-wider">
              OTC Securities Trading
            </p>
          </div>
          <p className="font-medium text-xl">
            Elevate your OTC trading experience with Bulloak.
          </p>
          <button
            onClick={() => {
              navigate('/register');
              scrollToTop();
            }}
            className="text-black font-bold py-4 px-6 bg-[#D4B716] rounded-lg"
          >
            Open an account
          </button>
        </div>
        <img
          src={otc_bg_img}
          alt=""
          className="xl:ml-[10rem] w-full h-full xl:h-[40rem] object-contain hidden lg:block"
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 my-[5rem]">
        <p className="text-4xl font-bold tracking-wide text-center">
          What is the Over-The-Counter Market?
        </p>
        <div className="w-14 border-b-8 rounded-md border-[#30022ECC]"></div>
        <div className="w-[95vw] md:w-[80vw] lg:w-[75vw] bg-gray-50 flex flex-col-reverse lg:flex-row justify-between items-center gap-5 lg:gap-14 py-5 px-10 rounded-xl mt-[3rem]">
          <p className="flex-1 text-base lg:text-lg text-[#636872]">
            {` Over-the-counter (OTC) refers to trading securities outside official stock exchanges like Nasdaq or NYSE. A wide range of securities can be traded over-the-counter, including common stocks, American Depository Receipts (ADRs), and even derivatives.`}
            <br />
            <br />
            {`Many companies
            choose to trade their shares over-the-counter because they cannot
            meet the listing requirements of official security exchanges or they
            are not willing to (or cannot) afford the listing fees of
            exchanges. The OTC market offers a place for large groups of
            unlisted companies to trade.`}
          </p>

          <img src={otc_img1} alt="" className="h-[17rem]" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 my-[3rem]">
        <p className="text-2xl lg:text-4xl font-bold tracking-wide text-center my-[1rem]">
          Tiers of OTC Markets
        </p>
        <p className="text-lg md:text-xl tracking-wide text-center w-full px-3 lg:w-[75vw] text-[#636872]">
          OTC markets are mainly divided into three markets—the OTCQX, OTCQB,
          and OTC Pink. The OTC QX ranks the first in high listing requirements,
          OTCQB the second.
        </p>
        <div className="w-14 border-b-8 rounded-md border-[#30022ECC] mt-5"></div>
      </div>

      <div className="px-0 md:px-5 lg:px-10 xl:px-48 mb-[3rem]">
        <OtcTable />
      </div>

      <div className="bg-[#8E07894D] px-1 md:px-5 lg:px-10 xl:px-20 py-[2rem] my-[2rem]">
        <OtcCardInfoContainer />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 my-[3rem]">
        <p className="text-2xl lg:text-4xl font-bold tracking-wide text-center my-[1rem]">
          Trade OTC securities on powerful trading platform
        </p>
        <p className="text-lg md:text-xl tracking-wide text-center w-full px-3 lg:w-[75vw] xl:w-[55vw] text-[#636872]">
          Our award-winning platform makes OTC trading accessible to both
          beginners and seasoned investors. Trade with ease, anytime, anywhere.
        </p>
        <div className="w-14 border-b-8 rounded-md border-[#30022ECC] mt-5"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 my-[5rem] mx-5">
        {downloadData?.map((datum, idx) => (
          <OtcBigCard key={idx} datum={datum} />
        ))}
      </div>
    </MainLayout>
  );
};

export default Otc;
