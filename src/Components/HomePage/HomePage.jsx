import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import CarBrandSection from "../CarBrandSection/CarBrandSection";
import OurFeatureSection from "../OurFeatureSection/OurFeatureSection";
import WhyChooseUsSection from "../WhyChooseUsSection/WhyChooseUsSection";

const HomePage = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <WhyChooseUsSection></WhyChooseUsSection>
      <CarBrandSection></CarBrandSection>
      <OurFeatureSection></OurFeatureSection>
    </div>
  );
};

export default HomePage;
