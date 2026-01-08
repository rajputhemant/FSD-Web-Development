import React from "react";

import lips from "../assets/lip.jpg";
import viedo from "../assets/videow.mp4"
import p1 from "../assets/h11.jpg";
import p2 from "../assets/h21.jpg";
import p3 from "../assets/h31.jpg";
import p11 from "../assets/h1.jpg";
import p21 from "../assets/h2.jpg";
import p31 from "../assets/h3.jpg";

const Home = () => {
   
  return (
    <>
    <div className="h-120 mt-2 shadow-blue-200">
     
         <video src={viedo}
         autoPlay
         loop
         muted
         className="w-full h-full object-cover"
         />
         
       
      
      </div>
       <div className="mt-2  shadow-blue-200" >
        <img src={lips} className="w-full rounded-lg" alt="Lips"
           
        />
        <button className="relative bottom-30  ms-20 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-amber-400"onClick={() => alert("Button Clicked")}>By Now</button>
      </div>

         

         <div className=" bg-amber-200 w-370 h-150 mx-6 mt-1 shadow-2xs shadow-blue-800">
              <div className=" flex justify-center text-red-600 font-bold text-lg ">  
              <h1>New Launches </h1>
              </div>
        <div className="flex   justify-around mt-7 gap-5">
          
            <div className="relative group w-90">
          <img src={p1} className="rounded-lg group-hover:opacity-0 transition duration-300" alt="" />
          <img src={p11} className="absolute top-0 left-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" alt="" />
          <p className="text-gray-800 mt-3">GLIDE PEPTIDE PLUMPING GLOSS STICK</p>
          <p className="text-gray-800" > Rs. 699.00</p>
          <button className="absolute w-90  mt-3 bg-black text-white px-4 py-2 rounded-md hover:bg-amber-400">ADD TO CART</button>
          </div>
          <div className="relative group w-90">
          <img src={p2} className="rounded-lg group-hover:opacity-0 transition duration-300" alt="" />
          <img src={p21} className="absolute top-0 left-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" alt="" />
          <p className="text-gray-800 mt-3">GLIDE PEPTIDE SERUM LIPSTICK</p>
          <p className="text-gray-800" > Rs. 499.00</p>
          <button className="absolute w-90  mt-3 bg-black text-white px-4 py-2 rounded-md hover:bg-amber-400">ADD TO CART</button>
          </div>
          <div className="relative group w-90">
          <img src={p3} className="rounded-lg group-hover:opacity-0 transition duration-300" alt="" />
          <img src={p31} className="absolute top-0 left-0 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300" alt="" />
          <p className="text-gray-800 mt-3">PARTNER IN SHINE TRANSFERPROOF LIP GLOSS</p>
          <p className="text-gray-800" > Rs. 699.00</p>
          <button className="absolute w-90  mt-3 bg-black text-white px-4 py-2 rounded-md hover:bg-amber-400">ADD TO CART</button>
          </div>
          
        </div>
        </div>
       

     
    </>
  );
};

export default Home;
