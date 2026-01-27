import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import logo from "../assets/Lo.png";

export const Header = () => {
  const navigate =useNavigate();
  return (
    <>
    
      <div className="flex  justify-between  items-center p-2 bg-gray-100  text-shadow-amber-50 top-0 sticky w-380 h-20 rounded-2xl mt-0.5 opacity-95 z-100">
        <span className="mx-2 text-2xl font-bold"><img src={logo} className="w-50   bg-gray-300 opacity-50 h-20" alt="" /></span>
        <div className=" flex gap-5 mx-3">
        <Link to={"/"} className="decoration-none flex items-center gap-2 text-red-600 hover:scale-105"> <FaHome /> <span>Home</span></Link>
        <Link to={"/about"} className="decoration-none flex items-center gap-2 hover:scale-105 "> <FaOutdent /><span>About</span></Link>
        <Link to={"/product"} className="decoration-none  flex items-center gap-2 hover:scale-105"> <MdOutlineProductionQuantityLimits /><span>Product</span></Link>
         <Link to={"/contact"} className="decoration-none  flex items-center gap-2 hover:scale-105"> <IoIosContacts /><span>Contact</span></Link>

      </div>

      <div className='flex justify-between gap-5 items-center'>
        <button className='bg-orange-700 text-white font-bold h-10 w-20 shadow rounded border hover:scale-105 hover:bg-emerald-500 hover:text-black ' onClick={() =>navigate("/login")}>Login</button>
        <button className='bg-orange-700 text-white font-bold h-10 w-20 shadow rounded border hover:scale-105 hover:bg-emerald-500 hover:text-black ' onClick={() =>navigate("/signup")}>SignUp </button>
      </div>
      </div>
    </>
  );
};
export default Header;