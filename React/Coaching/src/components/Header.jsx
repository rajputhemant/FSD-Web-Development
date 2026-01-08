import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import logo from "../assets/Logo-2.png"

export const Header = () => {
  return (
    <>
    
      <div className="flex  justify-between  items-center p-2 bg-white text-shadow-amber-50 top-0 sticky w-380 h-25 rounded-2xl mt-0.5 opacity-95 z-100">
        <span className="mx-3 text-2xl font-bold">
            <img src={logo} alt="" /></span>
        <div className=" flex gap-5 mx-3 text-2xl">
        <Link to={"/"} className="decoration-none flex items-center gap-2 text-red-600">  <span>Home</span></Link>
        <Link to={"/about"} className="decoration-none flex items-center gap-2"> <span>About</span></Link>
        <Link to={"/contact"} className="decoration-none  flex items-center gap-2"> <span>Contact</span></Link>
        <Link to={"/courses"} className="decoration-none  flex items-center gap-2"> <span>Courses</span></Link>
        <Link to={"/ide"} className="decoration-none  flex items-center gap-2"> <span>IDE</span></Link>
      </div>
       <div className="flex gap-5 text-2xl">
        <label htmlFor="number">91+ 8889991736</label>
        <button className="bg-blue-950 text-white sahdow-box rounded w-50 h-15 hover:bg-red-700 hover:text-white">Student Login</button>
       </div>
      </div>
    </>
  );
};
export default Header;
