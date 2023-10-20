import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CarDetailsPage = () => {
  const carDetails = useLoaderData();
  const { user } = useContext(AuthContext);
  const { id, image, brandName, name, type, price, rating, description } =
    carDetails;
  console.log(carDetails.name);
  // const singleCarDetails = carDetails.find((car) => car._id === id);
  // const { image, brandName, name, type, price, rating } = singleCarDetails;
  console.log(name);

  const handleMyCart = (event) => {
    event.preventDefault();
    console.log("button click");
    const userName = user.displayName;
    const Brand = {
      userName,
      image,
      brandName,
      name,
      type,
      price,
      rating,
      description,
    };
    console.log(Brand);

    fetch("http://localhost:5000/Cart", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const existingCart = data.find(
          (cart) => cart.userName === userName && cart.image === image
        );

        if (existingCart) {
          Swal.fire({
            title: "Warning",
            text: `This cart is already in ${userName}'s cart`,
            icon: "warning",
            confirmButtonText: "OK",
          });
        } else {
          fetch("http://localhost:5000/Cart", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(Brand),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  title: "Success!",
                  text: `Add this Car into ${userName}'s Cart Successfully`,
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              }
            });
        }
      });
  };

  return (
    <div>
      <h2>CarDetailsPage:{name}</h2>
      <div className=" container mx-auto border  flex gap-2">
        {/* left */}
        <div className="border border-4 w-1/2 ">
          <div>
            <img src={image} alt="" className="w-full h-[500px] rounded-lg" />
          </div>
          <div className="py-2">
            <div className="card w-full bg-[#adebeb] text-black">
              <div className="card-body">
                <h2 className="card-title">Short Description:</h2>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        {/* left */}
        {/* right */}

        <div className="border border-4 w-1/2 h-36">
          <div>
            <div className="py-2">
              <div className="card w-full bg-[#3399ff] text-black">
                <div className="card-body">
                  <h2 className="card-title text-5xl text-[#000066] font-bold">
                    {name}
                  </h2>
                  <p className="text-5xl text-red-800 font-bold">${price}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mx-10 py-2">
              <div className="card w-full bg-slate-400 text-black text-xl">
                <div className="card-body">
                  <h2 className="card-title">Details:</h2>
                  <p>Name: {name}</p>
                  <p>BrandName: {brandName}</p>
                  <p>Type: {type}</p>
                  <p>Price: ${price}</p>
                  <div className="flex items-center">
                    {/* <span className="ml-2">Rating: {rating}</span> */}
                    <span className=" mr-2">Rating: </span>
                    <StarRatings
                      rating={rating}
                      starRatedColor="#f39c12"
                      numberOfStars={5}
                      name="rating"
                      starDimension="30px" // Adjust the size of the stars
                      starSpacing="2px" // Adjust the spacing between stars
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 bg-red-400 mx-10 h-12 rounded-2xl text-center">
              <button
                onClick={handleMyCart}
                className="text-black text-xl font-bold w-full"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        {/* right */}
      </div>
    </div>
  );
};

export default CarDetailsPage;
