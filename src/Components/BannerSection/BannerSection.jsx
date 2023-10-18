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
            <div className="static top-0 left-0 w-full h-full bg-cover bg-center">
              <div className=" h-full bg-cover bg-center">
                <img
                  src="https://i.ibb.co/Syq3DN5/automotive-banner-2.jpg"
                  alt="Background Image"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
                <h1 className="text-5xl font-bold mb-5">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
              <img
                src="https://i.ibb.co/Syq3DN5/automotive-banner-3.jpg"
                alt="Background Image"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
              <h1 className="text-5xl font-bold mb-5">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <img src="https://i.ibb.co/Syq3DN5/automotive-banner-2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Syq3DN5/automotive-banner-3.jpg" alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default BannerSection;
