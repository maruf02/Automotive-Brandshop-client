import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSection = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/PzRX0rJ/automotive-banner.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-5 text-[#00ffcc]">
                Welcome To AUTOMOTIVE
              </h1>
              <p className="text-3xl font-semibold text-[#00cc66] mb-5">
                Your Journey Begins Here.Innovative Cars for Innovative
                Drivers.A World of Cars, A Universe of Possibilities
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/Syq3DN5/automotive-banner-2.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-5 text-[#00ffcc]">
                Welcome To AUTOMOTIVE
              </h1>
              <p className="text-3xl font-semibold text-[#00cc66] mb-5">
                Your Journey Begins Here.Innovative Cars for Innovative
                Drivers.A World of Cars, A Universe of Possibilities
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/FVxmZ9Z/automotive-banner-3.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-5 text-[#00ffcc]">
                Welcome To AUTOMOTIVE
              </h1>
              <p className="text-xl md:text-3xl font-semibold text-[#00cc66] mb-5">
                Your Journey Begins Here.Innovative Cars for Innovative
                Drivers.A World of Cars, A Universe of Possibilities
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/vvDgL1r/automotive-banner-4.jpg"
              alt="Background Image"
              className="object-cover w-full h-[600px]"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-5 text-[#00ffcc]">
                Welcome To AUTOMOTIVE
              </h1>
              <p className="text-3xl font-semibold text-[#00cc66] mb-5">
                Your Journey Begins Here.Innovative Cars for Innovative
                Drivers.A World of Cars, A Universe of Possibilities
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerSection;
