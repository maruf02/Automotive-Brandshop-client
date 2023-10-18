import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useLoaderData, useParams } from "react-router-dom";
import SeparateCarSingleCard from "../SeparateCarSingleCard/SeparateCarSingleCard";

const SeparateCarPage = () => {
  const SeparateCars = useLoaderData();
  const { brand, image } = useParams();
  const brandWiseCars = SeparateCars.filter((car) => car.brandName === brand);
  //   const { image, brandName, name } = useParams();
  console.log("ds", brand, brandWiseCars, SeparateCars);
  return (
    <div>
      {/* slide */}
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
                src="https://i.ibb.co/72p7YhV/audi-Coupe.jpg"
                alt="Background Image"
                className="object-cover w-full h-[600px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/m4TNb0z/audi-Executive.jpg"
                alt="Background Image"
                className="object-cover w-full h-[600px]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/dkHZFhr/audi-Sedan.jpg"
                alt="Background Image"
                className="object-cover w-full h-[600px]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
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
          {brandWiseCars.slice(0, 4).map((car) => (
            <SwiperSlide key={car._id}>
              <div className="relative">
                <img
                  src={car.image}
                  alt="Background Image"
                  className="object-cover w-full h-[600px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* slide */}
      {/* ************* */}
      {/* Separate cars */}
      <div className="grid grid-cols-3 pt-10">
        {brandWiseCars.map((car) => (
          <SeparateCarSingleCard
            key={car._id}
            car={car}
          ></SeparateCarSingleCard>
        ))}
      </div>
      {/* Separate cars */}
    </div>
  );
};

export default SeparateCarPage;
