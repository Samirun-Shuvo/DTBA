import React from "react";
import "./Dashboard.css";
import Navbar from "../Shared/Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";


const Dashboard = () => {
  return (
    <div className="drawer drawer-mobile dashboard-bg">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Navbar></Navbar>
        <div className="min-h-screen">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <Sidebar></Sidebar>      
      </div>
    </div>
  );
};

export default Dashboard;
