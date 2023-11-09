import about_bg from '../assets/about/about_bg.png';
import info_img from '../assets/about/info_img.png';
import info_img2 from '../assets/about/info_img2.png';
import MainLayout from '../components/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <div className="bg-[#30022ECC] bg-opacity-10 relative w-full h-[90vh]">
        <img src={about_bg} alt="" className="w-full h-full object-cover" />
        <div className="absolute flex flex-col justify-center items-start gap-12 lg:gap-20 top-0 right-0 bottom-0 left-0 bg-[#30022ECC] bg-opacity-10 text-white pl-5 lg:pl-16 xl:pl-48">
          <p className="laviossa text-[3rem] font-bold md:w-[30rem]">
            About Us
          </p>
          <p className="laviossa text-xl md:w-[30rem]">
            What would you like to know about us?
          </p>
        </div>
      </div>
      <section className="px-5 lg:px-12 xl:px-48 my-[5rem]">
        <p className="text-lg md:text-xl mt-5">
          <span className="laviossa text-[#8E0789] font-extrabold text-6xl">
            A
          </span>
          t Bulloak Finance Management, we&apos;re all about making your money
          work for you. We specialize in forex trading, crypto trading, real
          estate investments, ETFs, and bonds. With our team of experienced
          professionals, we provide expert guidance and strategies to help you
          navigate the exciting world of financial markets. Whether you&apos;re
          interested in trading currencies, exploring the potential of
          cryptocurrencies, investing in real estate, or diversifying your
          portfolio with ETFs and bonds, we&apos;ve got you covered.
        </p>
      </section>
      <section className="px-5 lg:px-12 xl:px-48 my-[5rem] flex flex-col-reverse gap-3 md:gap-0 min-[640px]:flex-row items-center md:items-start justify-between">
        <div className="lg:w-[35rem]">
          <p className="laviossa text-3xl lg:text-4xl lg:w-[25rem] leading-normal capitalize">
            We are Bulloak
          </p>
          <div className="bg-gradient-to-br from-[#8E0789] via-purple-600 to-[#8E0789] h-2 w-[20rem]"></div>

          <p className="text-lg md:text-xl mt-5 lg:w-[30rem]">
            Our goal is to help you maximize your investment opportunities while
            managing risk effectively. We stay up-to-date with market trends and
            leverage our expertise to identify potential opportunities for
            growth and profitability. At Bulloak Finance Management, we
            understand that each client is unique, with different financial
            goals and risk tolerances. That&apos;s why we take the time to
            listen to your needs and tailor our services to meet your specific
            requirements. We believe in building long-term relationships based
            on trust, transparency, and personalized support
          </p>
        </div>

        <img
          src={info_img}
          alt=""
          className="min-h-[25rem] max-h-[25rem] lg:min-h-[30rem] lg:max-h-[30rem] xl:min-h-[40rem] xl:max-h-[40rem]"
        />
      </section>

      <section className="px-5 lg:px-12 xl:px-40 my-[5rem] flex flex-col gap-5 xl:gap-0 md:flex-row items-center justify-between pb-5 pt-20">
        <img
          src={info_img2}
          alt=""
          className="min-h-full max-h-full md:min-h-[20rem] md:max-h-[20rem] lg:min-h-[25rem] lg:max-h-[20rem]  xl:min-h-[30rem] xl:max-h-[30rem]"
        />

        <div>
          <div className="hidden lg:inline-block bg-gradient-to-br from-[#8E0789] via-purple-600 to-[#8E0789] h-2 w-[30rem] -ml-44 mb-10"></div>
          <div className="xl:w-[30rem]">
            <p className="text-lg md:text-xl mt-5 lg:w-[30rem]">
              Whether you&apos;re a seasoned investor or just starting your
              journey, we&apos;re here to provide you with the knowledge, tools,
              and resources you need to make informed decisions and achieve your
              financial objectives. Get in touch with us today to explore how
              Bulloak Finance Management can help you navigate the exciting
              world of forex trading, crypto trading, real estate, ETFs, and
              bonds.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 lg:px-12 xl:px-40 py-20 mt-[5rem] flex flex-col items-center gap-7 bg-[#8e07894d]">
        <p className="laviossa text-3xl text-center leading-normal text-[#8E0789]">
          Trusted by some of the biggest companies
        </p>

        <div className="flex items-center justify-center gap-7">
          <div className="h-16 w-16 rounded-[50%] bg-[#8E0789]"></div>
          <div className="h-16 w-16 rounded-[50%] bg-[#8E0789]"></div>
          <div className="h-16 w-16 rounded-[50%] bg-[#8E0789]"></div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
