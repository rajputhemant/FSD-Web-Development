import React from 'react'
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaOutdent } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import insta from "../assets/intaa.png";
import fec from "../assets/facebook.png";
import snap from "../assets/snap.png";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-between mx-5 mt-3 bg-gray-300 sahadow  w-370 h-55">
        <div className="w-120  ms-4 py-2">
          <h1 className="text-pink-600 text-2xl">GlowUp Beatuy</h1>
          <p>Enhancing Your natural beatuy with care & confidence ✨</p>
        </div>

        <div className=" ms-4 py-2">
           <h3 className="text-2xl text-black mb-2">Quik Links</h3>
            <div className=" grid gap-2 mx-3">
             <Link to={"/"} className="decoration-none flex items-center gap-2 ">  <span>Home</span></Link>
            <Link to={"/about"} className="decoration-none flex items-center gap-2"> <span>About</span></Link>
            <Link to={"/product"} className="decoration-none  flex items-center gap-2"> <span>Product</span></Link>
           </div>
        </div>
        <div className=" ms-4 py-2 ">
          <h3 className="text-2xl text-black mb-2">Contact</h3>
          <p>Email:-hrajput1272004@gmail.com</p>
          <p>Phone: 91+ 6264500205</p>
          <p>Minal Mall Narela Shankri,Bhopal 462023</p>
        </div>

        <div className=" ms-4 py-2 me-3">
          <h1 className="text-2xl text-black mb-2">Follow us</h1>
          <p>Stay connected tips & update❤️</p>
          <div className=" flex gap-4 py-2 ">
            <a href="https://www.instagram.com/hemantrajput_03?igsh=a244eHk4Znl0b3Ex"target="_blank" className='hover:pink-500'>
            <img src={insta} className="w-8 h-8  mt-2 " />
            </a>
             <a href="https://www.facebook.com/share/18ADzHLNzM/"target="_blank">
            <img src={fec} className="w-8 h-8 mt-2" />
            </a>
            <a href="https://www.snapchat.com/add/h_rajput2022111?share_id=X8MR4Xb1RQ4&locale=en-GB"target="_blank">
            <img src={snap} className="w-8 h-8 mt-2 " />
            </a>
          </div>
        </div>



      </div>
       <div className=" bg-gray-300 sahadow  w-370 mx-5 h-10 border-gray-100 shadow-fuchsia-100 text-center ">
        <h1>2026 Beauty Makeup. All right reserved</h1>
       </div>
    </>
    
  );
};
export default Footer;