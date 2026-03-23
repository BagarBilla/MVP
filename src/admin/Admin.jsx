import React from "react";
import Navbar from "../components/Navbar";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;