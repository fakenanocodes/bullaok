import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import { images } from '../assets';
import bg_img from '../assets/bg_img.png';
import card_img from '../assets/home/card_img.png';
import card_img2 from '../assets/home/card_img2.png';
import card_img3 from '../assets/home/card_img3.png';
import group from '../assets/home/group.png';
import home_bg from '../assets/home/home_bg.png';
import main_card_img from '../assets/home/main_card_img.png';
import main_card_img2 from '../assets/home/main_card_img2.png';
import main_card_img3 from '../assets/home/main_card_img3.png';
import main_card_img4 from '../assets/home/main_card_img4.png';
import MainLayout from '../components/MainLayout';
import ClientCard from '../components/utils/cards/ClientCard';
import HomeCard from '../components/utils/cards/HomeCard';
import ClientSwiperjs from '../components/utils/reusables/ClientSwiperjs';
import MarqueeWidget from '../components/widget/MarqueeWidget';
import { clientData } from '../data/client';
import { assets, stocks } from '../data/home';

const cardData = [
  {
    location: 'Crev, Dubai',
    views: '5.0 (55,890 views)',
    price: '$453,897',
    image: card_img,
  },
  {
    location: 'California, USA',
    views: '5.0 (55,890 views)',
    price: '$564,897',
    image: card_img2,
  },
  {
    location: 'Aviana, Canada',
    views: '5.0 (55,890 views)',
    price: '$94,444',
    image: card_img3,
  },
];

const Home = () => {
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate('/services/what-we-invest')}
            className="text-black font-semibold py-4 px-5 bg-[#D4B716] rounded-sm uppercase"
          >
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
        <p className="laviossa text-center text-4xl font-light leading-10">
          Choose an investment product
          <br /> to get started to find out why
        </p>

        <img src={group} alt="" className="" />
      </div>
      <section className="w-full">
        <div
          style={{
            height: '433px',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
            boxSizing: 'border-box',
            border: '1px solid #56667F',
            borderRadius: '4px',
            textAlign: 'right',
            lineHeight: '14px',
            fontSize: '12px',
            fontFeatureSettings: 'normal',
            textSizeAdjust: '100%',
            boxShadow: 'inset 0 -20px 0 0 #56667F',
            padding: '0px',
            margin: '0px',
            width: '100%',
          }}
        >
          <div
            style={{
              height: '413px',
              padding: '0px',
              margin: '0px',
              width: '100%',
            }}
          >
            <iframe
              src="https://widget.coinlib.io/widget?type=full_v2&theme=light&cnt=6&pref_coin_id=1505&graph=yes"
              width="100%"
              height="409px"
              scrolling="auto"
              marginWidth="0"
              marginHeight="0"
              frameBorder="0"
              border="0"
              style={{
                border: '0',
                margin: '0',
                padding: '0',
              }}
            ></iframe>
          </div>
          <div
            style={{
              color: '#FFFFFF',
              lineHeight: '14px',
              fontWeight: '400',
              fontSize: '11px',
              boxSizing: 'border-box',
              padding: '2px 6px',
              width: '100%',
              fontFamily: 'Verdana, Tahoma, Arial, sans-serif',
            }}
          ></div>
        </div>
      </section>
      <section className="bg-[#CDA1CB26] py-7 px-5 lg:px-12 xl:px-40 xl:my-[5rem] my-0 ">
        <div className="flex flex-col-reverse gap-3 md:gap-0 md:flex-row items-center justify-between">
          <div className="xl:w-[35rem]">
            <p className="laviossa text-3xl xl:w-[25rem] leading-normal">
              Real Estate
            </p>

            <p className="uppercase text-[1.3rem] lg:w-[25rem] leading-normal mt-5">
              TRUST, EXPERIENCE, EXPERTISE AND KNOWLEDGE{' '}
            </p>

            <p className="text-lg md:text-xl mt-5 xl:w-[30rem]">
              We are an international financial company engaged in investment
              activities, which are related to trading on financial markets and
              cryptocurrency exchanges performed by qualified professional
              traders.
            </p>

            <button
              onClick={() => navigate('/services/what-we-invest')}
              className="text-black font-semibold py-4 px-5 bg-transparent rounded-sm border-2 mt-7 border-[#41073F] uppercase"
            >
              Uncover more
            </button>
          </div>

          <img
            src={main_card_img4}
            alt=""
            className="min-h-[17rem] max-h-[17rem] xl:min-h-[30rem] lg:max-h-[30rem]"
          />
        </div>

        <div className="mt-[4rem] mb-[2rem] flex flex-col md:flex-row items-center justify-center gap-5">
          {cardData?.map((data, idx) => (
            <HomeCard key={idx} data={data} />
          ))}
        </div>
      </section>
      <section className="bg-[#CDA1CB26] py-7 px-5 lg:px-12 xl:px-40 xl:my-[5rem] my-0 ">
        <div className="flex flex-col-reverse gap-3 md:gap-0 md:flex-row items-center justify-between">
          <div className="xl:w-[35rem]">
            <p className="laviossa text-3xl xl:w-[25rem] leading-normal">
              Stocks
            </p>

            <p className="uppercase text-[1.3rem] lg:w-[25rem] leading-normal mt-5">
              TRUST, EXPERIENCE, EXPERTISE AND KNOWLEDGE{' '}
            </p>

            <p className="text-lg md:text-xl mt-5 xl:w-[30rem]">
              We are an international financial company engaged in investment
              activities, which are related to trading on financial markets and
              cryptocurrency exchanges performed by qualified professional
              traders.
            </p>

            <button
              onClick={() => navigate('/services/what-we-invest')}
              className="text-black font-semibold py-4 px-5 bg-transparent rounded-sm border-2 mt-7 border-[#41073F] uppercase"
            >
              Uncover more
            </button>
          </div>

          <img
            src={images.stock_home}
            alt=""
            className="min-h-[17rem] max-h-[17rem] xl:min-h-[30rem] lg:max-h-[30rem]"
          />
        </div>
        <h2 className="laviossa font-bold xl:text-4xl text-2xl text-center my-9">
          Make the most of our online trading platform with no commissions and
          zero per-contract fees.
        </h2>

        <div className="mt-[4rem] mb-[2rem] flex flex-col md:flex-row items-center justify-center gap-5">
          {stocks?.map((image) => (
            <img src={image} className="w-full" alt="" />
          ))}
        </div>
      </section>
      <section className="bg-[#CDA1CB26] py-7 px-5 lg:px-12 xl:px-40 xl:my-[5rem] my-0 ">
        <div className="flex flex-col-reverse gap-3 md:gap-0 md:flex-row items-center justify-between">
          <div className="xl:w-[35rem]">
            <p className="laviossa text-3xl xl:w-[25rem] leading-normal">
              Assets
            </p>

            <p className="uppercase text-[1.3rem] lg:w-[25rem] leading-normal mt-5">
              TRUST, EXPERIENCE, EXPERTISE AND KNOWLEDGE{' '}
            </p>

            <p className="text-lg md:text-xl mt-5 xl:w-[30rem]">
              We are an international financial company engaged in investment
              activities, which are related to trading on financial markets and
              cryptocurrency exchanges performed by qualified professional
              traders.
            </p>

            <button
              onClick={() => navigate('/services/what-we-invest')}
              className="text-black font-semibold py-4 px-5 bg-transparent rounded-sm border-2 mt-7 border-[#41073F] uppercase"
            >
              Uncover more
            </button>
          </div>

          <img
            src={images.assetMain}
            alt=""
            className="min-h-[17rem] max-h-[17rem] xl:min-h-[30rem] lg:max-h-[30rem]"
          />
        </div>

        <div className="mt-[4rem] mb-[2rem] flex flex-col md:flex-row items-center justify-center gap-5">
          {assets?.map((data, idx) => (
            <HomeCard key={idx} data={data} />
          ))}
        </div>
      </section>

      <section className="px-5 lg:px-12 xl:px-40 my-[5rem] flex flex-col-reverse gap-7 md:gap-0 md:flex-row items-center justify-between">
        <div className="lg:w-[35rem] flex flex-col gap-5 md:gap-10">
          <p className="laviossa text-3xl lg:w-[25rem] leading-normal">
            Your Fiduciary Wealth Manager
          </p>

          <p className="text-lg md:text-xl lg:w-[30rem]">
            We’re a team of Certified Financial Planner™ professionals
            delivering objective financial advice and total wealth management.
            As fiduciary financial advisors, we adhere to the highest legal and
            ethical standards, and put your interests ahead of our own. This
            fiduciary duty is an important distinction. As much as financial
            advisors claim to be client-centric, most are simply not.
          </p>

          <div>
            <button
              onClick={() => navigate('/team')}
              className="text-black font-semibold py-4 px-5 bg-[#FFB803] rounded-sm capitalize shadow-md shadow-gray-100"
            >
              Meet the team
            </button>
          </div>
        </div>

        <img
          src={main_card_img3}
          alt=""
          className="min-h-[25rem] max-h-[25rem] md:min-h-[20rem] md:max-h-[20rem] lg:min-h-[25rem] lg:max-h-[25rem] xl:min-h-[30rem] xl:max-h-[30rem]"
        />
      </section>

      <section className="px-5 lg:px-12 xl:px-40 my-[5rem]">
        <p className="laviossa text-3xl text-center leading-normal">
          What Clients Say About Us
        </p>

        <ClientSwiperjs>
          {clientData?.map((client, idx) => (
            <SwiperSlide key={idx}>
              <ClientCard client={client} />
            </SwiperSlide>
          ))}
        </ClientSwiperjs>
      </section>

    

      <section className="px-5 lg:px-12 xl:px-40 py-10 xl:my-[5rem] my-0  flex flex-col items-center gap-7 bg-[#41073F]">
        <p className="laviossa text-3xl text-center leading-normal text-white">
          Are we right for you?
        </p>

        <p className="laviossa text-white text-center xl:w-[55vw] leading-8">
          Find out if we’re a good match for your financial planning and
          investment management needs. We offer a free, no-obligation
          consultation to help us get to know each other. We can meet by phone,
          in-person, or online.
        </p>

        <button className="laviossa text-black font-semibold py-4 px-5 bg-[#FFB803] rounded-md">
          Schedule a consultation
        </button>

        <MarqueeWidget />
      </section>
    </MainLayout>
  );
};

export default Home;
