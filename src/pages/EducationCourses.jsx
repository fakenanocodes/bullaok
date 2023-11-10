import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Layout from '../components/Layout';
import CoursesCard from '../components/utils/cards/CoursesCard';
export default function EducationCourses({ courses }) {
  return (
    <Layout>
      <section className="bg-[#fff] py-8 px-4">
        <h2 className="text-center xl:text-5xl text-2xl  text-[#8E0789] font-[laviossa] mb-5">
          One Stop For Investment
        </h2>

        <div className="box xl:w-[80%] w-full mx-auto bg-[#F4EFF4] xl:py-9 py-4 xl:px-[70px] px-8">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-8 pr-4 py-2 rounded-lg"
              placeholder="Search Courses"
            />
            <BsSearch className="absolute right-5 top-3  text-gray-500" />
          </div>
        </div>
      </section>
      <section className="bg-[#fff] py-[90px]">
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full h-full xl:w-5/6  px-2 mx-auto ">
          {courses?.map((item, index) => (
            <CoursesCard item={item} />
          ))}
        </div>
      </section>
      <section className="relative ">
        <div className="box bg-[#8E0789] h-40"></div>
        <div className="absolute bottom drop-shadow-xl flex flex-col justify-center left-1/2 mx-auto  transform -translate-y-2/4 -translate-x-2/4 bg-[#fff] h-44 xl:w-[60%] w-[80%] text-center p-4">
          <h2 className="text-[#000] text-2xl font-bold mb-2">
            Stay up-to-date with insights from Bulloak Investment
          </h2>
          <p>Stay up-to-date with insights from Bulloak Investment</p>
        </div>
        <div className="box bg-[#fff] h-40"></div>
      </section>
    </Layout>
  );
}
