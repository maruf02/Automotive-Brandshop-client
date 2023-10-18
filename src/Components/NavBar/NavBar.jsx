import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const menuBar = (
    <>
      <li>
        <NavLink to="/" className="activeNavLink ">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/addAllCars" className="activeNavLink ">
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink to="/myCart" className="activeNavLink ">
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="md:mx-5 pb-8 ">
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuBar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img
              src="https://i.ibb.co/28PSHPC/logo2.png"
              alt=""
              className="w-24 md:w-32 h-10 md:h-16"
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{menuBar}</ul>
        </div>
        <div className="navbar-end ">
          {/* right ProPic section */}
          <div className="pr-2 text-base">
            <p>Maruf</p>
          </div>
          <div
            className="tooltip tooltip-open tooltip-bottom"
            data-tip="Login Here"
          >
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/w4b3n6F/avator.png" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
              >
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
          {/* right ProPic section */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
