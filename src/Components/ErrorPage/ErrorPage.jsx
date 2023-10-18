import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-white h-screen container mx-auto justify-center align-middle">
      <h2 className="text-center text-7xl text-red-700 font-bold pt-20">
        Oops!!
      </h2>
      <p className="text-center text-7xl text-red-700 font-bold">
        404 !! Page not found
      </p>
      <Link to="/">
        <div className="container mx-auto text-center">
          <button className="btn btn-primary mt-20 ">Go Home</button>
        </div>
      </Link>
    </div>
  );
};

export default ErrorPage;
