import React from 'react';
import Layout from '../components/Layout';
import CoursesCard from '../components/utils/cards/CoursesCard';

export default function EducationCourses({ courses }) {
  return (
    <Layout>
      <section className="bg-[#fff] py-[90px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full lg:w-5/6 mx-auto ">
          {courses?.map((item, index) => (
            <CoursesCard item={item} />
          ))}
        </div>
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
    </Layout>
  );
}
