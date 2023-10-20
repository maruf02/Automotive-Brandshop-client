import React from "react";
import { useLoaderData } from "react-router-dom";
import MyCartSignleCard from "../MyCartSignleCard/MyCartSignleCard";

const MyCartPage = () => {
  const allCart = useLoaderData();
  return (
    <div className="container mx-auto flex justify-center ">
      {/* <h2>MyCartPage:{allCart.length}</h2> */}
      <div className="grid grid-cols-2 gap-5">
        {allCart.map((cart) => (
          <MyCartSignleCard key={cart._id} cart={cart}></MyCartSignleCard>
        ))}
      </div>
    </div>
  );
};

export default MyCartPage;
