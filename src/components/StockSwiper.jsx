import { SwiperSlide } from 'swiper/react';
import stock_swiper_img1 from '../assets/stock_swiper_img1.png';
import stock_swiper_img2 from '../assets/stock_swiper_img2.png';
import StockSwiperCard from './utils/reusables/StockSwiperCard';
import Swiperjs from './utils/reusables/Swiperjs';

const items = [
  '$0 commissions for stocks, ETFs, and options',
  'Intuitive tools and support for traders',
  'Discuss market trends with other investors',
];

const StockSwiper = () => {
  return (
    <>
      <Swiperjs>
        <SwiperSlide>
          <StockSwiperCard image={stock_swiper_img1} items={items} />
        </SwiperSlide>
        <SwiperSlide>
          <StockSwiperCard image={stock_swiper_img2} items={items} />
        </SwiperSlide>
      </Swiperjs>
    </>
  );
};

export default StockSwiper;
