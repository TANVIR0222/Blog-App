import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between md:gap-16 gap-8">
      {/* text */}
      <div className="md:w-1/2 w-full items-center text-center p-3">
        <h1 className="  text-3xl md:text-5xl md:leading-tight">
          Hotels with Rooftop Pools Near Me
        </h1>
        <p className=" text-gray-400 py-4 text-sm">
          A luxurious beachfront retreat featuring private infinity pools,
          ocean-view suites, and a world-class spa. Guests indulge in
          Michelin-star dining and personalized concierge services. Experience
          tranquility and opulence amidst stunning natural surroundings.
        </p>
      </div>

      {/* img */}
      <div className="md:w-1/2 w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

        pagination={{
          clickable: true,
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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full lg:h-[420px] sm:h-96 h-80' src="/img1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  className='w-full lg:h-[420px] sm:h-96 h-80'  src="/img2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  className='w-full lg:h-[420px] sm:h-96 h-80' src="/img3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img  className='w-full lg:h-[420px] sm:h-96 h-80' src="/img4.jpg" alt="" />
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  );
};

export default Hero;
