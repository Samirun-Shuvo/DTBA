import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar nav-bg">
      <div className="flex-1">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost btn-circle lg:hidden drawer-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
      </div>
      <ul>
        <Link to="profile"><li >
          <i className="fa-solid fa-user"></i> Profile
        </li></Link>
        <Link to="/"><li>
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </li></Link>
      </ul>
    </div>
  );
};

export default Navbar;
