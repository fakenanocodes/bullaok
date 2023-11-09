import { motion } from 'framer-motion';
import React from 'react';

export default function CoursesCard({ item }) {
  return (
    <motion.div
      className="pb-[30px] border xl:w-[90%] lg:w-[90%] w-[90%] my-8  mx-auto"
      initial={{ scale: 1, boxShadow: 'none' }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 13px 29px 0px rgba(0, 0, 0, 0.5)',
      }}
    >
      <img src={item.image} className="w-full h-60" alt="" />
      <div className="px-4 pt-2 pb-7 mt-4">
        <h2 className="text-[#8E0789] text-[36px] font-[laviossa] mb-4">
          {item.title}
        </h2>
        <p className="text-[#000] text-[15px] font-[roboto]">{item.text}</p>
      </div>
    </motion.div>
  );
}
