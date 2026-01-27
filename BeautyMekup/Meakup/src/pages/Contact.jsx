
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div  className='  w-370 h-fit'>
  
      <div  className=' grid items-center justify-center py-5' >
           
          <div className= ' grid items-center justify-center gap-1 bg-gray-300  border-0 rounded w-190 h-15'>
             <h1 className='text-xl text-red-700 font-bold  text-center'>Contact Us</h1>
             <p className='text-amber-100 font-extrabold ms-10' >Luxury Support, Just a Message Away ✨💄💖</p> 
            </div> 
            <div className='grid items-center justify-center gap-2 border-0 rounded shadow w-190 py-5 mt-5'>
              <input type="text" name='fullName' id="fullName" placeholder='FullName'  className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700 '/>
              <input type="email" name='email' id="email" placeholder='Email' className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />
              <input type="text" name='mobileNumber' id="mobileNumber" placeholder='Mobile Number' className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />
              <textarea name="message" id="message" placeholder='Enter Message' className='border-2 border-blue-200 w-120 h-15 text-gray-900 py-2 rounded shadow hover:border-orange-700'></textarea>

               <div className='flex  justify-between mt-8 w-full'>

               <button className='bg-orange-700 border rounded shadow w-full h-10 text-xl text-white font-bold hover:bg-sky-300 hover:scale-105'>Submit</button>

              
            </div>

          
            </div>
           
      </div> 

      </div>
    </>
  )
}

export default Contact
