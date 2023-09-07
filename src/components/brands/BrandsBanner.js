import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  Scrollbar,
  A11y,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import brand1 from "../../assets/Brands-Banners-1.png";
import brand2 from "../../assets/Brands-Banners-2.png";
import brand3 from "../../assets/Brands-Banners-3.png";
import brand4 from "../../assets/Brands-Banners-4.png";
import brand5 from "../../assets/Brands-Banners-5.png";

export const BrandsBanner = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        scrollbar={{ draggable: true }}
        className="relative mySwiper brands-swiper"
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      >
        <SwiperSlide>
          <img src={brand1} alt={brand1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand2} alt={brand2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand3} alt={brand3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand4} alt={brand4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={brand5} alt={brand5} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
