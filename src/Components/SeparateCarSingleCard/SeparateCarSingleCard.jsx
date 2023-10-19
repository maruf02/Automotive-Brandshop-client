import React from "react";
import { Link } from "react-router-dom";

const SeparateCarSingleCard = ({ car }) => {
  const { _id, image, brandName, name, type, price, rating } = car;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">BrandName: {brandName}</h2>
          <h2 className="card-title">Type: {type}</h2>
          <h2 className="card-title">Price: ${price}</h2>
          <h2 className="card-title">Rating: {rating}</h2>
          <div className="flex gap-2 justify-between py-5 ">
            <Link to={`/carDetails/${_id}`}>
              <button className="btn btn-primary w-full">See Details</button>
            </Link>
            <Link to={`/updateCarInfo/${_id}`}>
              <button className="btn btn-primary w-full">Update Info</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparateCarSingleCard;
