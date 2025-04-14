import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <div className="w-full h-[389px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <img
            src="images/1.png"
            alt="Slide 1"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/2.png"
            alt="Slide 2"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/3.png"
            alt="Slide 3"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/4.png"
            alt="Slide 4"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/5.png"
            alt="Slide 5"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/6.png"
            alt="Slide 6"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/7.png"
            alt="Slide 7"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/8.png"
            alt="Slide 8"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/9.png"
            alt="Slide 9"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="images/10.png"
            alt="Slide 10"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
