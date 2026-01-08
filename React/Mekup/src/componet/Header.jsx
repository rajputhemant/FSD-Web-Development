import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import logo from "../assets/Lo.png";

export const Header = () => {
  return (
    <>
    
      <div className="flex  justify-between  items-center p-2 bg-gray-100  text-shadow-amber-50 top-0 sticky w-380 h-20 rounded-2xl mt-0.5 opacity-95 z-100">
        <span className="mx-2 text-2xl font-bold"><img src={logo} className="w-50   bg-gray-300 opacity-50 h-20" alt="" /></span>
        <div className=" flex gap-5 mx-3">
        <Link to={"/"} className="decoration-none flex items-center gap-2 text-red-600"> <FaHome /> <span>Home</span></Link>
        <Link to={"/about"} className="decoration-none flex items-center gap-2"> <FaOutdent /><span>About</span></Link>
        <Link to={"/product"} className="decoration-none  flex items-center gap-2"> <MdOutlineProductionQuantityLimits /><span>Product</span></Link>
         <Link to={"/contact"} className="decoration-none  flex items-center gap-2"> <IoIosContacts /><span>Contact</span></Link>

      </div>
      </div>
    </>
  );
};
export default Header;
