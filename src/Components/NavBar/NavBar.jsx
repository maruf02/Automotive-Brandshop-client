import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [selectedTheme, setSelectedTheme] = useState("light");
  // console.log(user.photoURL);
  // console.log(user.displayName);
  // const userName = user.displayName;
  // console.log(userName);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const toggleTheme = () => {
    setSelectedTheme(selectedTheme === "dark" ? "light" : "dark");
  };
  const themeClass = selectedTheme === "dark" ? "dark-theme" : "light-theme";

  const menuBar = (
    <>
      <li>
        <NavLink to="/" className="activeNavLink ">
          Home
        </NavLink>
      </li>
      <li>
        {user ? (
          <NavLink to="/addAllCars" className="activeNavLink ">
            Add Product
          </NavLink>
        ) : (
          ""
        )}
      </li>
      <li>
        {user ? (
          // <NavLink to={`/myCart/${userName}`} className="activeNavLink ">
          <NavLink to="/mycart" className="activeNavLink ">
            My Cart
          </NavLink>
        ) : (
          ""
        )}
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
        {user ? (
          <>
            <div className="navbar-end ">
              {/* right ProPic section */}
              <div className="pr-2 text-lg">
                <p>{user.displayName}</p>
              </div>
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[2] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
                >
                  <li>
                    <Link to="/addBrand">
                      <button>Add Brand</button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/viewBrand">
                      <button>View Brand</button>
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut}>Logout</button>
                  </li>
                </ul>
              </div>
              {/* right ProPic section */}
              <ThemeToggler />
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end">
              <div
                className="tooltip tooltip-open tooltip-bottom "
                data-tip="Login Here"
              >
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://i.ibb.co/w4b3n6F/avator.png" />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[3] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/signIn">
                        <button>Login</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <ThemeToggler />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
