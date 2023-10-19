import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBrandCar from "./Components/AddBrandCar/AddBrandCar.jsx";
import ViewBrandCar from "./Components/AddBrandCar/ViewBrandCar.jsx";
import UpdateBrandCar from "./Components/AddBrandCar/UpdateBrandCar.jsx";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import HomePage from "./Components/HomePage/HomePage";
import AddAllCars from "./Components/AddAllCars/AddAllCars";
import SeparateCarPage from "./Components/SeparateCarPage/SeparateCarPage";
import CarDetailsPage from "./Components/CarDetailsPage/CarDetailsPage";
import UpdateCarInfoPage from "./Components/UpdateCarInfoPage/UpdateCarInfoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/SeparateCars/:brand",
        element: <SeparateCarPage></SeparateCarPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Cars/${params.brand}`),
        // loader: () => fetch("http://localhost:5000/Cars"),
      },
      {
        path: "/carDetails/:id",
        element: <CarDetailsPage></CarDetailsPage>,
        loader: () => fetch("http://localhost:5000/Cars"),
      },
      {
        path: "/updateCarInfo/:id",
        element: <UpdateCarInfoPage></UpdateCarInfoPage>,
      },
      {
        path: "/addAllCars",
        element: <AddAllCars></AddAllCars>,
      },
    ],
  },

  // extra
  {
    path: "/createBrandCar",
    element: <AddBrandCar></AddBrandCar>,
  },
  {
    path: "/brands",
    element: <ViewBrandCar></ViewBrandCar>,
    loader: () => fetch("http://localhost:5000/Brands"),
  },
  {
    path: "/UpdateBrands/:id",
    element: <UpdateBrandCar></UpdateBrandCar>,
    loader: ({ params }) => fetch(`http://localhost:5000/Brands/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
