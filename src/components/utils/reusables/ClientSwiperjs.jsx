import { Swiper } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

const ClientSwiperjs = ({ children }) => {
  return (
    <div className="md:p-[0.5rem] p-0">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          1536: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper px-[0.5rem] pt-[3rem] pb-[1rem] md:pb-[2.5rem]"
      >
        <>{children}</>
      </Swiper>
    </div>
  );
};

export default ClientSwiperjs;
