import { SwiperSlide } from 'swiper/react';
import Swiperjs from './utils/reusables/Swiperjs';
import TestimonialSwiperCard from './utils/reusables/TestimonialsSwiperCard';

const items = [
  '$0 commissions for stocks, ETFs, and options',
  'Intuitive tools and support for traders',
  'Discuss market trends with other investors',
];

const TestimonialsSwiper = ({ testimonials }) => {
  return (
    <>
      <Swiperjs>
        {testimonials?.map((items, index) => (
          <SwiperSlide key={index}>
            <TestimonialSwiperCard items={items} />
          </SwiperSlide>
        ))}
      </Swiperjs>
    </>
  );
};

export default TestimonialsSwiper;
