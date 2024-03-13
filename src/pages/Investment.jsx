import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { sectionsData } from '../data/inevstment';
import { scrollToTop } from '../actions/utils';
import { useNavigate } from 'react-router-dom';
export default function Investment() {
  const sections = sectionsData.map((section, index) => (
    <section
      key={index}
      className={`py-8 lg:px-[100px] px-5 bg-${
        index % 2 === 0 ? ['#CDA1CB/10'] : ['#fff']
      }`}
    >
      <div
        className={`flex lg:flex-row justify-center flex-col items-center gap-[50px] opacity-100 ${
          index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
        }`}
      >
        <img src={section.imageUrl} className="lg:w-2/5 w-full h-auto" alt="" />
        <div className="flex flex-col  lg:w-2/5 w-full gap-4 lg:items-start text-black">
          <h2 className="lg:text-4xl font-[laviosaa] text-3xl font-bold text-center lg:text-start uppercase">
            {section.title}
          </h2>
          <p className="text-2xl leading-loose font-[roboto] ">
            {section.text}
          </p>
          <button className="border shadow-lg bg-transparent font-[montserrat] border-[#D4B716] text-[#D4B716] lg:text-[25px] text-xl lg:px-8 px-4 font-bold py-4 uppercase">
            Read more
          </button>
        </div>
      </div>
    </section>
  ));
  const navigate = useNavigate();
  return (
    <Layout>
      <header
        className="flex flex-col lg:flex-row px-8 items-center  justify-center md:gap-16 gap-8 py-[190px]  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url('bck.png')`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#30022E] opacity-80"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className=" w-full relative z-20 flex flex-col items-center gap-7">
          <h2 className="lg:text-6xl text-3xl text-[#fff] font-bold font-[laviosaa]  text-center">
            Our investment approach relies <br /> on facts,{' '}
            <span className="text-[#FFD700]"> not guesswork.</span>
          </h2>
          <button
            onClick={() => {
              navigate('/register');
              scrollToTop();
            }}
            className="uppercase font-[montsserat] border text-[#fff] mt-8 bg-transparent lg:px-9 px-3 font-bold py-3"
          >
            Get started
          </button>
        </div>
      </header>
      <main className="w-full bg-[#fff] ">
        <section className="bg-[#CDA1CB]/10 lg:px-[100px] px-5">
          <div className="lg:w-3/5  w-full mx-auto py-8">
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="lg:text-3xl leading-loose font-[roboto] text-xl text-black text-center">
                Explore our diverse range of investment packages tailored to
                meet your financial goals. Whether you&apos;re aiming for
                short-term gains or long-term wealth accumulation, our expertly
                crafted investment packages offer a secure and strategic path to
                a prosperous future.{' '}
              </h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex lg:flex-row flex-col  justify-center my-8 w-full">
              <img src="finance.png" className="lg:w-2/4" alt="" />
              <h2 className="lg:text-5xl text-3xl text-black font-bold leading-loose  ">
                Investment Packages: <br /> Your Key to Financial <br /> Growth
              </h2>
            </div>
          </motion.div>
        </section>
        {sections}
      </main>
    </Layout>
  );
}
