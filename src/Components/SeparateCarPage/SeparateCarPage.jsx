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
  const { brand } = useParams();
  console.log("ds", SeparateCars.length);
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
          {SeparateCars.length >= 1 ? (
            <>
              {SeparateCars.slice(0, 4).map((car) => (
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
            </>
          ) : (
            ""
          )}
        </Swiper>
      </div>
      {/* slide */}
      {/* ************* */}
      {/* Separate cars */}
      <div className="container mx-auto py-10">
        <div className="text-center text-5xl ">
          <h2 className="text-[#00b359] font-bold ">{`Our ${brand} Brand Car Collection`}</h2>
          <p className="border-b-4 w-2/4 relative left-[25%] mt-3 border-black"></p>
        </div>
        <div className="container mx-auto flex justify-center">
          <div className="  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  xl:gap-10 ">
            {SeparateCars.length >= 1 ? (
              <>
                {SeparateCars.map((car) => (
                  <SeparateCarSingleCard
                    key={car._id}
                    car={car}
                  ></SeparateCarSingleCard>
                ))}
              </>
            ) : (
              <p className="text-red-800 text-5xl text-center">
                No Available Car Right now. Please wait Until Available
              </p>
            )}
          </div>
        </div>
      </div>
      {/* Separate cars */}
    </div>
  );
};

export default SeparateCarPage;
