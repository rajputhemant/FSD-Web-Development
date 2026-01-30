import React, { use } from 'react'
import toast  from 'react-hot-toast';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const Login = () => {
  const {setUser,setIsLogin, setRole}=useAuth()

  const navigate = useNavigate();

  const[formData,setFormData]=useState({
    email:"",
    password:"",
  });
 
  const [isLoading,setIsLoading]=useState(false);

  const handlechange=(e)=>{
    const {name, value}=e.target;
    setFormData((prev)=>({...prev,[name]:value}));

  };
   
  const handleClearFrom=()=>{
    setFormData({
      email:"",
      password:"",
    });
  };

  const handleSubmit= async (e)=>{
    e.preventDefault();
  setIsLoading(true);

  console.log(formData);

  try {
     const res=await AudioParam.post("/auth/login",formData);
     toast.success(res.data.message);
     setUser(res.data.data);
     setIsLoading(true);
     sessionStorage.setItem("BeautyMekup",JSON.stringify(res.data.data));
     handleClearFrom();
     
       

  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || "Unknown Error ");
  
  } finally{
    setIsLoading(false);
  }
}

  return (
      <>
      <div  className='  w-370 h-fit'>
  
      <div  className=' grid items-center justify-center py-5' >
           
          <div className= ' grid items-center justify-center gap-1 bg-gray-300  border-0 rounded w-190 h-15'>
             <h1 className='text-xl text-red-700 font-bold text-center'>Login Now</h1>
             <p className='text-amber-100 font-extrabold ms-10' >Welcome Back to Elegance ✨💄💖</p> 
            </div> 
            <form onSubmit={handleSubmit} onReset={handleClearFrom}>
            <div className='grid items-center justify-center gap-2 border-0 rounded shadow w-190 py-5 mt-5'>
              <input type="email" name='email' id="email" placeholder='Email' value={formData.email} onChange={handlechange}  required disabled={isLoading} className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />
              <input type="password" name='password' id="password" placeholder='Enter Password' value={formData.password} onChange={handlechange}  required disabled={isLoading} className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />
             
               <div className='flex  justify-between mt-8'>
               <button type='reset' disabled={isLoading} className='bg-red-600 border rounded shadow w-40 h-10 text-xl text-white font-bold hover:bg-sky-300 hover:scale-105  '>Clear</button>
               <button type='submit'disabled={isLoading}  className='bg-orange-700 border rounded shadow w-40 h-10 text-xl text-white font-bold hover:bg-sky-300 hover:scale-105'>
                {isLoading?"loading..":"Login"}
               </button>

              
            </div>

            <div className='flex gap-2 items-center justify-center  mt-5'>
              <p>You have don't Account? </p>
              <Link to={"/signup"} className='text-blue-700 font-bold hover:scale-105'>Signup</Link>
            </div>
            </div>
           </form>
           {/* Footer Note */}
          <p className="text-center text-gray-600 mt-8 text-sm">
            All fields marked are mandatory. We respect your privacy.
          </p>
      </div> 

      </div>
    </>
  )
}

export default Login