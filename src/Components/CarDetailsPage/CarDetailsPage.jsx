import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CarDetailsPage = () => {
  const carDetails = useLoaderData();
  const { id, brand, name } = carDetails;
  console.log(carDetails.name);
  // const singleCarDetails = carDetails.find((car) => car._id === id);
  // const { image, brandName, name, type, price, rating } = singleCarDetails;
  console.log(name);
  return (
    <div>
      <h2>CarDetailsPage:{name}</h2>
    </div>
  );
};

export default CarDetailsPage;
