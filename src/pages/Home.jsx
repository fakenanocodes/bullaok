import bg_img from '../assets/bg_img.png';
import group from '../assets/home/group.png';
import home_bg from '../assets/home/home_bg.png';
import main_card_img from '../assets/home/main_card_img.png';
import main_card_img2 from '../assets/home/main_card_img2.png';
import MainLayout from '../components/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[90vh]">
        <img src={bg_img} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col justify-center items-start gap-12 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-10 xl:pl-20">
          <p className="laviossa text-[2.5rem] font-bold md:w-[30rem]">
            Elevate Your Wealth Management Experience
          </p>
          <p className="laviossa text-xl md:w-[30rem]">
            An investment company with a proficient digital presence
          </p>
          <button className="text-black font-semibold py-4 px-5 bg-[#D4B716] rounded-sm uppercase">
            Uncover more
          </button>
        </div>
      </div>

      <section className="px-5 lg:px-12 xl:px-40 my-[5rem] flex flex-col-reverse gap-3 md:gap-0 md:flex-row items-center justify-between">
        <div className="lg:w-[35rem]">
          <p className="laviossa text-3xl lg:w-[25rem] leading-normal">
            Wealth Management made easy with{' '}
            <span className="bg-[#30022ED6] text-white p-1">
              Bulloak Finance
            </span>
          </p>

          <p className="text-lg md:text-xl mt-5 lg:w-[30rem]">
            Rather than trying to track your investments across various
            institutions, each with their own dealing processes, paperwork and
            charging structures, you and your adviser can manage them all
            effi-ciently, securely and cost-effectively on the Bulloak Finance
            Mgt.
          </p>
        </div>

        <img
          src={main_card_img}
          alt=""
          className="min-h-[25rem] max-h-[25rem] lg:min-h-[30rem] lg:max-h-[30rem]"
        />
      </section>

      <section className="px-5 lg:px-12 xl:px-40 mt-[5rem] flex flex-col gap-5 xl:gap-0 md:flex-row items-center justify-between bg-[#CDA1CB0D] pb-5 pt-20">
        <img
          src={main_card_img2}
          alt=""
          className="min-h-[20rem] max-h-[20rem] lg:min-h-[25rem] lg:max-h-[20rem]  xl:min-h-[30rem] xl:max-h-[30rem]"
        />

        <div className="xl:w-[25rem]">
          <p className="text-3xl font-light lg:w-[25rem] leading-normal">
            About Bulloak Investment Platform
          </p>

          <p className="uppercase text-[1.3rem] lg:w-[25rem] leading-normal mt-5">
            TRUST, EXPERIENCE, EXPERTISE AND KNOWLEDGE
          </p>

          <p className="text-lg md:text-xl mt-5 lg:w-[30rem]">
            We are an international financial company engaged in investment
            activities, which are related to trading on financial markets and
            cryptocurrency exchanges performed by qualified professional
            traders.
          </p>
        </div>
      </section>

      <div
        style={{
          backgroundImage: `url(${home_bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100%',
        }}
        className="flex flex-col items-center gap-7 py-16 px-3"
      >
        <p className="laviossa text-center text-3xl font-light lg:w-[50rem]">
          Choose an investment product
          <br /> to get started to find out why
        </p>

        <img src={group} alt="" />
      </div>
    </MainLayout>
  );
};

export default Home;
