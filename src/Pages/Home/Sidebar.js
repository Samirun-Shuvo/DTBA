import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../../src/assets/dtba.png";
import "./Sidebar.css";

const Sidebar = () => {
 
   
    return (
        <ul className="menu bg-[#333334] overflow-y-auto w-64">
          <Link className="mb-2" to="/dashboard" element="">
            <img style={{ height: "64px", width: "100%" , background:"white"}} src={logoImg} alt="" />
          </Link>
          <Link to="/dashboard">
            <li  className="menu-item "><span><i className="fa-solid fa-gauge"></i> Dashboard</span> </li>
          </Link>
          <Link to="/dashboard/receipt">
            <li  className="menu-item"><span><i className="fa-solid fa-address-card"></i> Finance info <i className="fa-solid fa-caret-down"></i></span>
              <ul className="block">
                <Link to="/dashboard/receipt"><li><span><i className="fa-solid fa-arrow-right"></i>Receipt</span></li></Link>
                <Link to="/dashboard/payment"><li><span><i className="fa-solid fa-arrow-right"></i>Payment</span></li></Link>
              </ul>
            </li>
          </Link>
          <Link to="/dashboard/profile">
            <li  className="menu-item"><span><i className="fa-solid fa-address-card"></i> Member Profile <i className="fa-solid fa-caret-down"></i></span>
              <ul className="block">
                <Link to="/dashboard/profile"><li><span><i className="fa-solid fa-arrow-right"></i>Profile</span></li></Link>
                <Link to="/dashboard/nominee"><li><span><i className="fa-solid fa-arrow-right"></i>Nominee</span></li></Link>
                <Link to="/dashboard/document"><li><span><i className="fa-solid fa-arrow-right"></i>Documents</span></li></Link>
              </ul>
            </li>
          </Link>
        </ul>
    );
};

export default Sidebar;