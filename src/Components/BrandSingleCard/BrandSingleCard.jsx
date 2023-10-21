import React from "react";
import { Link } from "react-router-dom";

const BrandSingleCard = ({ brand }) => {
  const { BrandName, BrandImage } = brand;
  return (
    <div>
      <Link to={`/SeparateCars/${BrandName}`}>
        <div className="card card-compact  h-80 bg-blue-800 shadow-xl">
          <figure>
            <img src={BrandImage} alt="BMW Image" className="h-72 w-full" />
          </figure>
          <div className="card-body ">
            <h2 className=" text-center text-2xl font-bold text-[#00b359] ">
              {BrandName}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BrandSingleCard;
