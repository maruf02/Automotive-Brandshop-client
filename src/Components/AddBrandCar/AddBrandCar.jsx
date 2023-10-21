import React from "react";
import Swal from "sweetalert2";

const AddBrandCar = () => {
  const handleAddBrand = (event) => {
    event.preventDefault();
    const form = event.target;
    const BrandName = form.BrandName.value;
    const BrandImage = form.BrandImage.value;
    const Brand = { BrandName, BrandImage };
    console.log(Brand);

    fetch("http://localhost:5000/Brands", {
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
            text: "Brand Name & Image Insert Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div>
          <div className="text-center ">
            <h1 className="text-5xl font-bold text-center pb-6">
              Add New Brand Car
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleAddBrand} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  type="text"
                  name="BrandName"
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
                  placeholder="Enter Image URL only"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBrandCar;
