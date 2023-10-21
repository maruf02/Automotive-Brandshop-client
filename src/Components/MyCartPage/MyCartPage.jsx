import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import MyCartSignleCard from "../MyCartSignleCard/MyCartSignleCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const MyCartPage = () => {
  const allCart = useLoaderData();
  const { user } = useContext(AuthContext);
  const userName = user.displayName;
  // console.log(userName);
  const filteredCart = allCart.filter((cart) => cart.userName === userName);
  //   console.log(filteredCart);
  return (
    <div className="container mx-auto flex justify-center ">
      {/* <h2>MyCartPage:{allCart.length}</h2> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-5">
        {filteredCart.map((cart) => (
          <MyCartSignleCard key={cart._id} cart={cart}></MyCartSignleCard>
        ))}
      </div>
    </div>
  );
};

export default MyCartPage;
