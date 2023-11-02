import otc_bg_img from '../assets/otc_bg_img.png';
import otc_img1 from '../assets/otc_img1.png';
import MainLayout from '../components/MainLayout';
import OtcTable from '../components/utils/reusables/OtcTable';

const Otc = () => {
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
          <button className="text-white font-bold py-4 px-6 bg-[#D4B716] rounded-lg">
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
        <div className="w-24 border-b-8 rounded-md border-[#30022ECC]"></div>
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
        <div className="w-24 border-b-8 rounded-md border-[#30022ECC] mt-5"></div>
      </div>

      <div className="px-0 md:px-5 lg:px-10 xl:px-48 mb-[3rem]">
        <OtcTable />
      </div>
    </MainLayout>
  );
};

export default Otc;
