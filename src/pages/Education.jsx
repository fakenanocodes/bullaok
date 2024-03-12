import React, { useState } from 'react';
import { BiSolidChevronLeft } from 'react-icons/bi';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { images } from '../assets';
import Layout from '../components/Layout';
import TestimonialsSwiper from '../components/TestimonialsSwiper';
import CoursesCard from '../components/utils/cards/CoursesCard';
export default function Education({ courses, header, testimonials }) {
  const [showMoreContent, setShowMoreContent] = useState(false);

  const toggleMoreContent = () => {
    setShowMoreContent(!showMoreContent);
  };
  return (
    <Layout>
      <header
        className="education flex flex-col xl:flex-row px-8 items-center bg-[#fff]  justify-center xl:gap-16 gap-8 bg-transparent py-6  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url(${images?.edu_bg})`,
        }}
      >
        {!showMoreContent ? (
          <>
            <section className="flex lg:flex-row flex-col justify-between items-center gap-8 xl:px-[100px]   px-2">
              <img
                src={images?.chart_graph}
                className="w-full lg:w-auto"
                alt=""
              />
              <div className="  px-4  w-full lg:w-2/4 xl:text-3xl   relative z-20 text-[#000] flex flex-col lg:items-start gap-[40px]">
                <h2 className="text-[#8E0789] font-[laviossa] lg:text-5xl text-3xl">
                  Watch, Learn & Invest
                </h2>
                <p className="leading-loose font-[roboto]  ">
                  Bulloak Finance Management provides a good educational system
                  that covers various aspects of finance. Their educational
                  programs are designed to equip individuals with the knowledge
                  and skills needed to navigate the complex world of finance.
                  From introductory courses to advanced topics, Bulloak Finance
                  Management offers a wide range of learning opportunities.
                </p>
                <button
                  className="ml-auto border flex items-center gap-4  border-black px-7 py-2 rounded-lg text-[#8E0789] font-[montserrat] font-semibold"
                  onClick={() => toggleMoreContent()}
                >
                  <span> More </span> <FaAngleRight />
                </button>
                <div className="grid xl:grid-cols-3 lg:grid-cols-3 grid-cols-3   items-center  xl:gap-8 xl:mt-8 mt-2 my-4">
                  {header?.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center  gap-5"
                    >
                      <img
                        src={item?.icon}
                        className="xl:w-12  lg:w-12 h-auto  "
                        alt=""
                      />
                      <p className="font-[montserrat] lg:text-2xl  ">
                        {item?.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="flex xl:flex-row flex-col items-center gap-8  xl:px-[100px]    px-2">
              <div className="flex xl:flex-row flex-col xl:gap-9 gap-7 my-6">
                <p className="leading-loose font-[roboto] text-[20px] xl:text-start text-justify">
                  Bulloak Finance Management provides a good educational system
                  that covers various aspects of finance. Their educational
                  programs are designed to equip individuals with the knowledge
                  and skills needed to navigate the complex world of finance.
                  From introductory courses to advanced topics, Bulloak Finance
                  Management offers a wide range of learning opportunities.
                  Their educational system includes courses on personal finance,
                  investment strategies, risk management, and financial
                  planning. Whether you're a beginner or an experienced
                  investor, you can find courses tailored to your needs and
                  level of expertise. The curriculum is designed in layman's
                  terms, making it easily understandable for individuals with
                  varying levels of financial knowledge. In addition to
                  traditional classroom-style courses, Bulloak Finance
                  Management also offers online learning resources such as
                  webinars, video tutorials, and interactive modules. These
                  resources provide flexibility and convenience, allowing you to
                  learn at your own pace and from the comfort of your own home.
                </p>
                <div className="flex flex-col gap-4">
                  <p className="leading-loose font-[roboto] text-[20px] xl:text-start text-justify">
                    Furthermore, Bulloak Finance Management believes in the
                    power of practical learning. They provide real-world case
                    studies, simulations, and hands-on exercises to enhance your
                    understanding of financial concepts. This practical approach
                    helps you apply the knowledge gained in the educational
                    programs to real-life financial situations. By enrolling in
                    Bulloak Finance Management's educational system, you'll have
                    the opportunity to learn from experienced professionals in
                    the field of finance. Their team of expert instructors and
                    mentors are dedicated to providing guidance and support
                    throughout your learning journey. Overall, Bulloak Finance
                    Management's educational system aims to empower individuals
                    with the knowledge and skills necessary to make informed
                    financial decisions. Whether you're looking to enhance your
                    personal finances or pursue a career in finance, their
                    educational programs can provide you with the foundation you
                    need to succeed.
                  </p>
                  <button
                    className="mr-auto border flex items-center gap-4  border-black px-7 py-2 rounded-lg text-[#8E0789] font-[montserrat] font-semibold"
                    onClick={() => toggleMoreContent()}
                  >
                    <BiSolidChevronLeft /> <span> Back</span>
                  </button>
                </div>
              </div>
            </section>
          </>
        )}
      </header>

      <main>
        <section className="bg-[#fff]">
          <h2 className="text-center font-bold font-[laviossa] lg:text-4xl text-3xl text-[#8E0789] py-6">
            Testimonial
          </h2>
          <TestimonialsSwiper testimonials={testimonials} />
        </section>
        <section className="bg-[#fff] flex flex-col items-center py-8">
          <h2 className="text-center font-bold font-[laviossa] lg:text-4xl text-3xl text-[#000] mb-8 py-6 px-4">
            Features Investment Courses
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full h-full xl:w-5/6  px-4 mx-auto ">
            {courses?.slice(0, 6)?.map((item, index) => (
              <CoursesCard item={item} />
            ))}
          </div>
          <Link to="/education-courses">
            <button className="text-[#000] bg-[#FFB803] font-[roboto] rounded-lg shadow-xl px-4 py-5 lg:text-[40px] text-[25px] text-center my-9 font-[600]">
              See all courses
            </button>
          </Link>
        </section>

        <section className="relative ">
          <div className="box bg-[#8E0789] h-40"></div>
          <div className="absolute bottom drop-shadow-xl flex flex-col justify-center  left-1/2 mx-auto  transform -translate-y-2/4 -translate-x-2/4 bg-[#fff] h-44 lg:w-[60%] w-[80%] text-center p-4">
            <h2 className="text-[#000] text-2xl font-bold mb-2">
              Stay up-to-date with insights from Bulloak Investment
            </h2>
            <p>Stay up-to-date with insights from Bulloak Investment</p>
          </div>
          <div className="box bg-[#fff] h-40"></div>
        </section>
      </main>
    </Layout>
  );
}
