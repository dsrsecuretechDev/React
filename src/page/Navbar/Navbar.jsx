import React from "react";
import { NavLink } from "react-router";
import Sidebar from "../SideBar/Sidebar";


const Navbar = () => {
  return (
    <>
      <nav className=" sticky top-0 bg-white shadow-md p-4 cursor-pointer">
        <div className=" flex justify-between">
          <div className=" flex flex-row space-x-3">
            <div>
              <button className="text-3xl -mt-2 text-gray-500   space-x-2 ">
                &equiv;
              </button>
            </div>
            <div className="  uppercase  font-bold text-red-500  hover:underline">
              CodingLab
            </div>
          </div>
          <ul className="hidden gap-6 md:flex">
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/"> HOME </NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1  uppercase ">
              <NavLink to="/About">About </NavLink>
            </li>

            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              SERVICES
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/Login"> LOGIN</NavLink>
            </li>
          </ul>
          <div className="md:hidden ">
            <button className="text-3xl -mt-2 text-gray-500   ">&equiv;</button>
          </div>
        </div>
      </nav>
    <Sidebar/>
    </>
  );
};

export default Navbar;
