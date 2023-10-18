import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBrandCar = () => {
  const brands = useLoaderData();
  const { _id, BrandName, BrandImage } = brands;

  const handleUpdateBrand = (event) => {
    event.preventDefault();
    const form = event.target;
    const BrandName = form.BrandName.value;
    const BrandImage = form.BrandImage.value;
    const updateBrand = { BrandName, BrandImage };
    console.log(updateBrand);

    //send data to server
    fetch(`http://localhost:5000/Brands/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBrand),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Brand Name & Image Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div>
            <div className="text-center ">
              <h1 className="text-5xl font-bold text-center pb-6">
                Update Brand Car:{BrandName}
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleUpdateBrand} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Name</span>
                  </label>
                  <input
                    type="text"
                    name="BrandName"
                    defaultValue={BrandName}
                    placeholder="Enter Brand Name...."
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Img URL</span>
                  </label>
                  <input
                    type="text"
                    name="BrandImage"
                    defaultValue={BrandImage}
                    placeholder="Enter Image URL only"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBrandCar;
