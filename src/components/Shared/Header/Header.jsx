import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const navItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Contact Us</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>

      <Link to={"./our-menu"}>
        <li>Our Menu</li>
      </Link>

      <li>
        <Link>Our Shop</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-slate-950 bg-opacity-40 text-white fixed z-50 w-full">
      <div className="navbar px-[8%] ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className="font-cinzel">
            <span className="font-semibold uppercase text-2xl">
              BISTRO BOSS
            </span>
            <br />
            <span className="text-xl tracking-[0.3rem]">Restaurant</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="my-menu menu-horizontal space-x-2">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Header;