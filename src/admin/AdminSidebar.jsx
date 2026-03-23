import React from "react";
import { NavLink } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <>
      <div className="lg:w-[4vw] w-[12vw] bg-white h-[90vh] lg:h-[86vh] border-r-4 border-[#C36137] px-1 py-10 flex flex-col gap-10">
        {/*Orders*/}
        <NavLink to="/admin/order">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black hover:text-[#2FA999] cursor-pointer transition-colors duration-200"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
            <path d="M14 2v6h6" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
        </NavLink>

        {/*Add orders*/}
        <NavLink to="/admin/addorder">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black hover:text-[#2FA999] cursor-pointer transition-colors duration-200"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16 4h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1" />
            <rect x="9" y="2" width="6" height="4" rx="1" ry="1" />
            <line x1="12" y1="11" x2="12" y2="17" />
            <line x1="9" y1="14" x2="15" y2="14" />
          </svg>
        </NavLink>

        {/*Add New Product*/}
        <NavLink to="/admin/addproduct">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black hover:text-[#2FA999] cursor-pointer transition-colors duration-200"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 10L20 6L12 2L4 6Z" />
            <path d="M4 6V16L12 20V10Z" />
            <path d="M12 10V20L20 16V6Z" />
            <line x1="16" y1="2" x2="22" y2="2" />
            <line x1="19" y1="-1" x2="19" y2="5" />
          </svg>
        </NavLink>

        {/*Custumers*/}
        <NavLink to="/admin/customer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black hover:text-[#2FA999] cursor-pointer transition-colors duration-200"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />

            <circle cx="8" cy="10" r="3" />
            <path d="M4 20v-2a4 4 0 0 1 8 0v2" />

            <line x1="15" y1="10" x2="19" y2="10" />
            <line x1="15" y1="14" x2="19" y2="14" />
          </svg>
        </NavLink>

        {/*Analyical support */}
        <NavLink to="/admin/analysis">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black hover:text-[#2FA999] cursor-pointer transition-colors duration-200"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="16" x2="13" y2="16" />
            <rect x="5" y="10" width="2" height="6" rx="0.5" />
            <rect x="9" y="6" width="2" height="10" rx="0.5" />
            <circle cx="16" cy="16" r="5" />
            <line x1="19.5" y1="19.5" x2="22" y2="22" />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export default AdminSidebar;
