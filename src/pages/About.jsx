import bulloak from '../assets/bulloak.png';
import HistioryMap from '../components/HistioryMap';
import MainLayout from '../components/MainLayout';

const About = () => {
  return (
    <MainLayout>
      <div
        style={{
          backgroundImage: `url(${bulloak})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '10rem',
        }}
        className="laviossa text-4xl text-center text-[#8E0789] font-bold py-[2rem] mt-[8rem] xl:mt-[10rem] flex flex-col justify-end"
      >
        <p>History</p>
      </div>
      <HistioryMap />
      <div className="px-5 lg:px-12 xl:px-40 py-[3rem]">
        <p className="text-2xl font-semibold text-[#8E0789]">
          Then how does Bulloak do it?
        </p>

        <p className="text-base lg:text-lg mt-[1.5rem]">
          At Bulloak Finance Management, we&apos;re all about making your money
          work for you. We specialize in forex trading, crypto trading, real
          estate investments, ETFs, and bonds. With our team of experienced
          professionals, we provide expert guidance and strategies to help you
          navigate the exciting world of financial markets. Whether you&apos;re
          interested in trading currencies, exploring the potential of
          cryptocurrencies, investing in real estate, or diversifying your
          portfolio with ETFs and bonds, we&apos;ve got you covered.
          <br />
          <br />
          Our goal is to help you maximize your investment opportunities while
          managing risk effectively. We stay up-to-date with market trends and
          leverage our expertise to identify potential opportunities for growth
          and profitability. At Bulloak Finance Management, we understand that
          each client is unique, with different financial goals and risk
          tolerances. That&apos;s why we take the time to listen to your needs
          and tailor our services to meet your specific requirements. We believe
          in building long-term relationships based on trust, transparency, and
          personalized support.
          <br />
          <br />
          Whether you&apos;re a seasoned investor or just starting your journey,
          we&aposre here to provide you with the knowledge, tools, and resources
          you need to make informed decisions and achieve your financial
          objectives. Get in touch with us today to explore how Bulloak Finance
          Management can help you navigate the exciting world of forex trading,
          crypto trading, real estate, ETFs, and bonds.
        </p>
      </div>
    </MainLayout>
  );
};

export default About;
