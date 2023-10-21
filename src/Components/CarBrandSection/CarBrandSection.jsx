import React, { useEffect, useState } from "react";
import BrandSingleCard from "../BrandSingleCard/BrandSingleCard";

const CarBrandSection = () => {
  const [allBrands, setAllBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Brands")
      .then((res) => res.json())
      .then((data) => setAllBrands(data));
  }, []);
  return (
    <div>
      <div className="container mx-auto py-10">
        <div className="text-center text-5xl ">
          <h2 className="text-[#00b359] font-bold ">Our Brand Car</h2>
          <p className="border-b-4 w-1/4 relative left-[38%] mt-3 border-black"></p>
        </div>
        <div className="container mx-auto flex justify-center">
          <div className="  mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-28 ">
            {allBrands.map((brand) => (
              <BrandSingleCard key={brand._id} brand={brand}></BrandSingleCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarBrandSection;
