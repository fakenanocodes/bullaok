import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

const Swiperjs = ({ children }) => {
  return (
    <div className="md:p-[0.5rem] p-0">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerGroup: 1,
            slidesPerView: 1,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper px-[0.5rem] pt-[3rem] pb-[1rem] md:pb-[2.5rem]"
      >
        <>{children}</>
      </Swiper>
    </div>
  );
};

export default Swiperjs;
