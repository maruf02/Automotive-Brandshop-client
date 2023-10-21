import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewBrandCar = () => {
  const brands = useLoaderData();
  const [user, setUser] = useState(brands);
  // const { _id, BrandName } = brands;
  // console.log(brands);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(id);

        fetch(
          `https://b8-a10-brans-shop-autocar-server.vercel.app/Brands/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="container mx-auto flex justify-center py-14">
      <div className="grid grid-cols-3 gap-10 ">
        {/* <h2>All Brands With Image</h2> */}
        {user.map((brand) => (
          <div key={brand._id}>
            <div className="card w-96 bg-base-100 shadow-xl w-96 h-80">
              <figure>
                <img
                  src={brand.BrandImage}
                  alt="Shoes"
                  className="w-full h-72"
                />
              </figure>
              <div className="h-20 flex justify-between pt-2 mx-3">
                <div>
                  <h2 className="card-title pt-2">{brand.BrandName}</h2>
                </div>

                <div className="flex gap-5">
                  <Link to={`/UpdateBrands/${brand._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(brand._id)}
                    className="btn btn-primary"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBrandCar;
