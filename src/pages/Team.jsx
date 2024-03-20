import { Link, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { images } from '../assets';
// import { image } from '../assets/team/teams';
import Layout from '../components/Layout';
import { teamData } from '../data/team';
// brokerData;

export default function Team() {
  const { data: brokers } = useSWR('/broker/brokers/');
  const navigate = useNavigate();

  const handleTeam = (id) => {
    navigate(`/team/member/${id}`);
  };

  const handleBroker = (id) => {
    navigate(`/team/broker/${id}`);
  };

  console.log('BROKERS', brokers);
  return (
    <Layout>
      <header
        className="flex flex-col lg:flex-row px-8 items-center bg-[#fff]  justify-center md:gap-16 gap-8 bg-transparent lg:h-96 lg:py:0 py-8  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url(${images.team_bg})`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#30022E] opacity-80"
          style={{ mixBlendMode: 'multiply' }}
        ></div>
        <div className=" lg:px-[150px] px-2 text-center w-full relative z-20 text-[#fff] flex flex-col lg:items-start gap-7">
          <h2 className="lg:text-6xl text-3xl  font-bold font-[laviossa]  ">
            The Team
          </h2>
          <p className="font-[laviossa] lg:text-[27px] text-[14px]  lg:mt-[100px] ">
            Meet the guys that make it all work
          </p>
        </div>
      </header>

      <main className="bg-[#fff] xl:px-[150px] lg:px-5 px-4">
        <section className="p-3">
          <h2 className=" w-full mx-auto font-[montserrat] lg:text-3xl text-[17px] text-justify lg:text-start py-8">
            <span className="text-[#8E0789] font-[laviossa] lg:text-[69px] text-[31px]">
              A
            </span>
            little intro to the awesome team at Bulloak Finance Management.
            They&apos;re a group of finance experts who are passionate about
            helping people achieve their financial goals. These talented
            individuals work together to provide top-notch financial services
            and support to clients like you.
          </h2>

          <div className="grid xl:grid-cols-2 md:grid-cols-2  w-full mx-auto gap-5">
            {teamData.map((items, index) => (
              <div className="item lg:w-5/6 xl:w-4/5 w-full " key={index}>
                <img
                  src={items.image}
                  className="lg:ml-6 ml-3 -mb-8 lg:w-auto w-2/3 "
                  alt=""
                />
                <div className=" border-2 p-2  border-[#8E0789] flex flex-col ">
                  <div className="flex px-3">
                    <h3 className="mt-4 -ml-2 font-[montserrat] xl:text-xl lg:text-sm  ">
                      {items.role}
                    </h3>
                    <p className="ml-auto font-[laviossa] lg:mt-3 mt-3  xl:text-xl lg:text-md">
                      {items.name}
                    </p>
                  </div>
                  <button
                    onClick={() => handleTeam(items?.id)}
                    href="#"
                    className="ml-auto px-3 text-[#8E0789] lg:text-md font-[montserrat]"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="  ">
          <div className=" w-full lg:w-full mx-auto xl:mt-[90px]">
            <h2 className="xl:text-5xl text-3xl my-6 font-bold font-[laviossa] ">
              Top brokers
            </h2>
            <h2 className=" font-[montserrat] lg:text-3xl text-[17px] text-justify lg:text-start xl:py-8 py-4">
              <span className="text-[#8E0789] font-[laviossa] lg:text-[69px] text-[31px]">
                A
              </span>{' '}
              little intro to the amazing brokers at Bulloak Finance Management.
              These brokers are experts in the financial market and play a
              crucial role in helping clients with their investments. These
              brokers at Bulloak Finance Management are dedicated to helping
              clients navigate the financial market and achieve their investment
              objectives.
            </h2>
          </div>

          <div className="grid xl:grid-cols-2 md:grid-cols-2 w-full  mx-auto gap-5 xl:py-[90px]">
            {brokers?.map((broker, index) => (
              <div
                className=" xl:w-3/4 w-full flex flex-col items-end mb-10"
                key={index}
              >
                {/* <img
                  src={items.image}
                  className="mr-6 -mb-8 w-44 relative z-10 "
                  alt=""
                /> */}
                <div className="content border-2 w-full p-5 border-[#8E0789] ">
                  <p className="font-[laviossa] ">{broker.name}</p>
                  <div className="flex justify-between mt-5 ">
                    {/* <h3 className="mt-4  font-[montserrat]">
                      {index == 0 && 'Real estate Broker'}
                      {index == 1 && 'Forex Broker'}
                      {index == 2 && 'Crypto Broker'}
                      {index == 3 && 'Forex Broker'}
                      {index == 4 && 'Real estate Broker'}
                      {index == 5 && 'Forex Broker'}
                    </h3> */}

                    <div className="flex flex-col ">
                      <Link
                        to={broker?.instagram_profile}
                        className="text-[#a84199]"
                      >
                        {'Instagram profile'}
                      </Link>
                      <Link
                        to={broker?.linkedin_profile}
                        className="text-[#a84199]"
                      >
                        {'Linkedin profile'}
                      </Link>
                    </div>

                    <div>
                      <p className="flex gap-8 justify-between text-sm ">
                        Major&nbsp;Licenses
                        <span className=" text-[#a84199] font-semibold ">
                          {broker?.main_state_licenses}
                        </span>
                      </p>
                      <p className="flex gap-8 justify-between text-sm">
                        Major&nbsp;Exams&nbsp;passed
                        <span className=" text-[#a84199] font-semibold">
                          {broker?.main_exams_passed}
                        </span>
                      </p>
                      <p className="flex gap-8 justify-between text-sm">
                        Year of experience{' '}
                        <span className=" text-[#a84199] font-semibold">
                          {broker?.years_of_experience}
                        </span>
                      </p>
                    </div>
                  </div>
                  {/* <button
                    onClick={() => handleBroker(broker?.id)}
                    className="ml-auto text-[#8E0789] font-[montserrat] font-bold"
                  >
                    Read more
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
