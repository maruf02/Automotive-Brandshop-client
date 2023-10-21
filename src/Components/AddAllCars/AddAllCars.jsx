import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const AddAllCars = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [allBrands, setAllBrands] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch("https://b8-a10-brans-shop-autocar-server.vercel.app/Brands")
      .then((res) => res.json())
      .then((data) => setAllBrands(data));
  }, []);
  const handleAddCar = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    // const rating = form.rating.value;
    const description = form.description.value;
    const Brand = { image, name, brandName, type, price, rating, description };
    // console.log(Brand);

    form.image.value = "";
    form.name.value = "";
    form.brandName.value = "";
    form.type.value = "";
    form.price.value = "";
    form.description.value = "";

    fetch("https://b8-a10-brans-shop-autocar-server.vercel.app/Cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Brand),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };
  return (
    <div>
      <div className="relative ">
        <img
          src="https://i.ibb.co/PzRX0rJ/automotive-banner.jpg"
          alt="Background Image"
          className="object-cover w-full h-[1100px] lg:h-[700px]"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-1">
          <h1 className="text-xl lg:text-5xl font-bold mb-5 text-[#00ffcc] uppercase pt-5">
            Add Brand New Cars Here
          </h1>
          {/* form  */}
          <div className="card flex-shrink-0 w-screen lg:w-full  shadow-2xl ">
            <form onSubmit={handleAddCar} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#00ffcc] text-xl">
                    Image URL
                  </span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Enter Car Image URL here"
                  required
                  className="input input-bordered input-primary w-full bg-transparent text-lg "
                />
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Car Model Name here"
                    required
                    className="input input-bordered input-secondary  w-full bg-transparent text-lg"
                  />
                </div>
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Brand Name
                    </span>
                  </label>
                  {/* <input
                    type="text"
                    name="brandName"
                    placeholder="Enter Brand Name here"
                    required
                    className="input input-bordered input-accent w-full bg-transparent text-lg"
                  /> */}
                  <select
                    className="select select-error w-full text-lg "
                    required
                    name="brandName"
                    value={selectedBrand}
                    onChange={handleBrandChange}
                  >
                    <option value="" disabled>
                      Choose Car Brand
                    </option>
                    {allBrands.map((brand) => (
                      <option key={brand._id} value={brand.BrandName}>
                        {brand.BrandName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-5">
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Type
                    </span>
                  </label>
                  <input
                    type="text"
                    name="type"
                    placeholder="Enter Type here"
                    required
                    className="input input-bordered input-info  w-full bg-transparent text-lg"
                  />
                </div>
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Price here"
                    required
                    className="input input-bordered input-success w-full bg-transparent text-lg"
                  />
                </div>
              </div>
              <div className="grid lg:grid-cols-3 gap-5">
                <div className="form-control grid grid-rows-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Rating
                    </span>
                  </label>
                  {/* <input
                    type="text"
                    name="rating"
                    placeholder="Enter Rating here"
                    required
                    className="input input-bordered input-warning w-full bg-transparent text-lg"
                  /> */}

                  <StarRatings
                    rating={rating}
                    starRatedColor="#f39c12"
                    starHoverColor="#f39c12"
                    changeRating={setRating}
                    numberOfStars={5}
                    starDimension="30px"
                    starSpacing="2px"
                    name="rating"
                  />
                </div>
                <div className="form-control grid grid-rows-2 col-span-2">
                  <label className="label">
                    <span className="label-text text-[#00ffcc] text-xl">
                      Short Description
                    </span>
                  </label>
                  <textarea
                    name="description"
                    className="textarea textarea-info text-lg"
                    placeholder="Enter Short Description here"
                  ></textarea>
                </div>
              </div>

              <div className="form-control mt-6 pb-10">
                <button className="btn btn-primary text-2xl ">ADD CAR</button>
              </div>
            </form>
          </div>
          {/* form  */}
        </div>
      </div>
    </div>
  );
};

export default AddAllCars;
