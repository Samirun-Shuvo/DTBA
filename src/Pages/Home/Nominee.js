import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nominee = () => {
  return (
    <div className="whiteBackground">
      <ul className="flex bg-[#d8c2c2]  rounded-4">
      <Link to="/dashboard/nominee">
          <li className="p-2 border">
            <button>
              <i className="fa-solid fa-list p-1"></i> Nominee List
            </button>
          </li>
        </Link>
        <Link to="/dashboard/nominee/add">
          <li className="p-2 border">
            <button>
              <i className="fa-solid fa-address-book p-1"></i> Add Nominee
            </button>
          </li>
        </Link>
      </ul>
      <Outlet></Outlet>
    </div>
  );
};

export default Nominee;
