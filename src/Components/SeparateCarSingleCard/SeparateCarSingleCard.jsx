import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const SeparateCarSingleCard = ({ car }) => {
  const { _id, image, brandName, name, type, price, rating } = car;
  return (
    <div>
      <div className="card card-compact h-[600px] bg-slate-400 shadow-xl mx-4 md:mx-auto ">
        <figure>
          <img src={image} alt="Shoes" className="w-full h-[300px]" />
        </figure>
        <div className="card-body text-black">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">BrandName: {brandName}</h2>
          <h2 className="card-title">Type: {type}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <div className="flex items-center">
            {/* <span className="ml-2">Rating: {rating}</span> */}
            <span className="card-title mr-2">Rating: </span>
            <StarRatings
              rating={rating}
              starRatedColor="#f39c12"
              numberOfStars={5}
              name="rating"
              starDimension="30px"
              starSpacing="2px"
            />
          </div>
          <div className="flex lg:gap-2 justify-between lg:py-5 ">
            <Link to={`/carDetails/${brandName}/${_id}`}>
              <button className="btn btn-primary w-full">See Details</button>
            </Link>
            <Link to={`/updateCarInfo/${brandName}/${_id}`}>
              <button className="btn btn-primary w-full">Update Info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparateCarSingleCard;
