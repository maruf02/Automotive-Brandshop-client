import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewBrandCar = () => {
  const brands = useLoaderData();
  const [user, setUser] = useState(brands);
  // const { _id, BrandName } = brands;
  console.log(brands);

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
        console.log(id);

        fetch(`http://localhost:5000/Brands/${id}`, {
          method: "DELETE",
        })
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
    <div>
      <h2>All Brands With Image</h2>
      {user.map((brand) => (
        <div key={brand._id}>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>{brand.BrandName}</td>
                  <td>
                    <img src={brand.BrandImage} alt="" className="w-16 h-16" />
                  </td>
                  <td>
                    <div className="btn-group">
                      <Link to={`/UpdateBrands/${brand._id}`}>
                        <button className="btn mr-4">Edit</button>
                      </Link>
                      <button
                        onClick={() => handleDelete(brand._id)}
                        className="btn"
                      >
                        X
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewBrandCar;
