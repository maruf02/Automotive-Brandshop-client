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
import AuthProvider from "./Components/Provider/AuthProvider";
import SignInPage from "./Components/SignInPage/SignInPage";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyCartPage from "./Components/MyCartPage/MyCartPage";
import WhyCooseUsPage from "./Components/whyCooseUsPage/whyCooseUsPage";
import CarBrandPage from "./Components/CarBrandPage/CarBrandPage";
import FeaturePage from "./Components/FeaturePage/FeaturePage";

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
        path: "/about",
        element: <WhyCooseUsPage></WhyCooseUsPage>,
      },
      {
        path: "/brand",
        element: <CarBrandPage></CarBrandPage>,
      },
      {
        path: "/feature",
        element: <FeaturePage></FeaturePage>,
      },
      {
        path: "/SeparateCars/:brand",
        element: <SeparateCarPage></SeparateCarPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Cars/${params.brand}`),
        // loader: () => fetch("http://localhost:5000/Cars"),
      },
      {
        path: "/carDetails/:brand/:id",
        element: (
          <PrivateRoute>
            <CarDetailsPage></CarDetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Cars/${params.brand}/${params.id}`),
      },
      {
        path: "/updateCarInfo/:brand/:id",
        element: (
          <PrivateRoute>
            <UpdateCarInfoPage></UpdateCarInfoPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Cars/${params.brand}/${params.id}`),
      },
      {
        path: "/addAllCars",
        element: (
          <PrivateRoute>
            <AddAllCars></AddAllCars>
          </PrivateRoute>
        ),
      },
      {
        path: "/signIn",
        element: <SignInPage></SignInPage>,
      },
      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/addBrand",
        element: (
          <PrivateRoute>
            <AddBrandCar></AddBrandCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewBrand",
        element: (
          <PrivateRoute>
            <ViewBrandCar></ViewBrandCar>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/Brands"),
      },
      {
        path: "/UpdateBrands/:id",
        element: (
          <PrivateRoute>
            <UpdateBrandCar></UpdateBrandCar>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Brands/${params.id}`),
      },

      {
        // path: "/myCart/:userName",
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCartPage></MyCartPage>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/Cart/${params.userName}`),
        loader: () => fetch("http://localhost:5000/Cart"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
