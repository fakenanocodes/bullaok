import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../assets';
import Layout from '../components/Layout';
import TestimonialsSwiper from '../components/TestimonialsSwiper';
import CoursesCard from '../components/utils/cards/CoursesCard';
export default function Education({ courses, header, testimonials }) {
  return (
    <Layout>
      <header
        className="education flex flex-col lg:flex-row px-8 items-center bg-[#fff]  justify-center md:gap-16 gap-8 bg-transparent h-screen  bg-cover bg-center bg-no-repeat  w-full relative"
        style={{
          backgroundImage: `url(${images.edu_bg})`,
        }}
      >
        <section className="flex items-center gap-8 lg:px-[100px] ">
          <img src={images.chart_graph} alt="" />
          <div className="  px-4  w-full lg:w-2/4 text-3xl   relative z-20 text-[#000] flex flex-col lg:items-start gap-[80px]">
            <h2 className="text-[#8E0789] font-[laviossa] text-5xl">
              Watch, Learn & Invest
            </h2>
            <p className="leading-loose font-[roboto]">
              Nam sollicitudin dignissim nunc, cursus ullamcorper eros vulputate
              sed. Vestibulum sit amet tortor sit amet libero lobortis semper at
              et odio. In eu tellus tellus tPellentesque ullamcorper aliquet
              ultrices.Nam sollicitudin dignissim nunc, cursus{' '}
            </p>
            <div className="grid grid-cols-3 items-center  gap-8 mt-8">
              {header.map((item, index) => (
                <div key={index} className="flex flex-col items-center  gap-5">
                  <img src={item.icon} className="w-12 h-auto " alt="" />
                  <p className="font-[montserrat] text-2xl ">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="bg-[#fff]">
          <h2 className="text-center font-bold font-[laviossa] text-4xl text-[#8E0789] py-6">
            Testimonial
          </h2>
          <TestimonialsSwiper testimonials={testimonials} />
        </section>
        <section className="bg-[#fff] flex flex-col items-center py-8">
          <h2 className="text-center font-bold font-[laviossa] text-4xl text-[#000] mb-8 py-6">
            Features Investment Courses
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full lg:w-5/6 mx-auto ">
            {courses?.slice(0, 6).map((item, index) => (
              <CoursesCard item={item} />
            ))}
          </div>
          <Link to="/education-courses">
            <button className="text-[#000] bg-[#FFB803] font-[roboto] rounded-lg shadow-xl px-4 py-5 text-[48px] text-center my-9 font-[600]">
              See all courses
            </button>
          </Link>
          {/* <button className='text-[#000] bg-[#FFB803] font-[roboto] rounded-lg shadow-xl px-4 py-5 text-[48px] text-center  my-9 font-[600]'>See all courses</button> */}
        </section>

        <section className="relative ">
          <div className="box bg-[#8E0789] h-40"></div>
          <div className="absolute bottom drop-shadow-xl flex flex-col justify-center left-1/2 mx-auto  transform -translate-y-2/4 -translate-x-2/4 bg-[#fff] h-40 w-[60%] text-center p-4">
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
