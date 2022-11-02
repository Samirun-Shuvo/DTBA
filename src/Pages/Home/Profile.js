import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="whiteBackground">
    <ul className="flex bg-[#d8c2c2]  rounded-4">
      <Link to="/dashboard/profile">
        <li className="p-2 border">
          <button>
          <i className="fa-solid fa-person p-1"></i> Personal Info
          </button>
        </li>
      </Link>
      <Link to="/dashboard/profile/social">
        <li className="p-2 border">
          <button>
          <i className="fa-solid fa-share-from-square p-1"></i> Social Info
          </button>
        </li>
      </Link>
      <Link to="/dashboard/profile/contact">
        <li className="p-2 border">
          <button>
          <i className="fa-solid fa-id-badge p-1"></i> Contact Info
          </button>
        </li>
      </Link>
    </ul>

    <Outlet></Outlet>
  </div>
  );
};

export default Profile;
