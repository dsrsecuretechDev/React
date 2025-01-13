import React from 'react'
import { NavLink } from 'react-router';
import Footer from '../Footer/Footer';
const Sidebar = () => {
  return (
    <div>
      {/* Saibar Start */}

      <div className=" flex  flex-row">
        <div className=" hidden md:block  fixed  left-0 container bg-white  overflow-hidden shadow-lg w-64 h-[602px] p-5 border text-center">
          <ul className=" mt-10">
            <li className=" py-2 hover:bg-[#2525f3]  border mt-6 p-2 hover:text-white pl-6 rounded-md">
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className=" py-2 hover:bg-[#0000ff]  border mt-6 p-2 hover:text-white pl-6  rounded-md">
              <NavLink to="/About">ABOUT</NavLink>
            </li>
         
            <li className=" py-2 hover:bg-[#0000ff]  border mt-6 p-2 hover:text-white pl-6 rounded-md">
              <NavLink to="/Contact">SERVICES</NavLink>
            </li>
            <li className=" py-2 hover:bg-[#0000ff]  border mt-6 p-2 hover:text-white pl-6">
              {" "}
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
            <li className=" py-2 hover:bg-[#0000ff]  border mt-6 p-2 hover:text-white pl-6">
              <NavLink to="/Login">LOGIN</NavLink>
            </li>
          </ul>
        </div>
          </div>

      </div>
      
  );
}

export default Sidebar
