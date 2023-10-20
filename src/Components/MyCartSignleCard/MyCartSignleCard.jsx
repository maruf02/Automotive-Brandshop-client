import React from "react";

const MyCartSignleCard = ({ cart }) => {
  const { image, brandName, name, type, price } = cart;
  return (
    <div className="flex flex-row rounded-lg card card-compact  bg-base-100 shadow-xl pr-16">
      {/* image part */}
      <div className="">
        <img src={image} alt="" className="w-56 h-full rounded-lg" />
      </div>
      {/* right part */}
      <div className="pt-5 text-lg">
        <h2 className="pl-5 text-2xl">{name}</h2>
        <h2 className="pl-5">Brand:{brandName}</h2>
        <h2 className="pl-5">Type:{type}</h2>
        <h2 className="pl-5">Price:${price}</h2>
        <button className="btn btn-error ml-5 my-5">Remove</button>
      </div>
    </div>
  );
};

export default MyCartSignleCard;
