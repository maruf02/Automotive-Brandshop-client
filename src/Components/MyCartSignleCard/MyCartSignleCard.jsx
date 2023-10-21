import React from "react";
import Swal from "sweetalert2";

const MyCartSignleCard = ({ cart }) => {
  const { _id, image, brandName, name, type, price } = cart;
  //   console.log(_id);

  const handleDelete = (id) => {
    // console.log(id);
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
          `https://b8-a10-brans-shop-autocar-server.vercel.app/Cart/${id}`,
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
    <div className="flex flex-row rounded-lg card card-compact  bg-slate-300 text-black shadow-xl pr-16">
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
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error ml-5 my-5"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default MyCartSignleCard;
