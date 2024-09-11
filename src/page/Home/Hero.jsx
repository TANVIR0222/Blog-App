import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between gap-8">
      {/* text */}
      <div className="md:w-1/2 w-full text-center justify-center">
        <h1 className="text-3xl font-bold md:leading-tight md:text-5xl capitalize">
          Hotels with rooftop pools near me
        </h1>
        <p>
          Nestled in the heart of the city’s most exclusive district, The Grand
          Aurelia Hotel stands as a beacon of sophistication and refinement.
          This five-star sanctuary offers an unparalleled experience where
          opulence meets personalized service, creating a haven for the
          discerning traveler
        </p>
      </div>
      {/* img */}
      <div className="md:w-1/2 w-full text-center justify-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
            <img className='w-full object-contain lg:h-[420px] sm:h-96 h-80' src="/img1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide> 
            <img className='w-full object-contain lg:h-[450px] sm:h-96 h-80' src="/img3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide> 
            <img className='w-full object-contain lg:h-[420px] sm:h-96 h-80' src="/img4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide> 
            <img className='w-full object-contain lg:h-[420px] sm:h-96 h-80' src="/img1.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default Hero;
