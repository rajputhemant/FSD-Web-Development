import React from 'react'
import { useState } from 'react';
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [formData, setFormData]=useState({
    fullName:"",
    email:"",
    mobileNumber:"",
    password:"",
    confirmPassword:"",
  });
  const [isLoading, setIsLoading]=useState(false);
  const [validationError, setValidationError]=useState({});

  const handlechange = (e)=>{
    const {name, value}=e.target;

    setFormData((prev)=>({...prev, [name]:value}));
  };

  const handleClearForm=()=>{
    setFormData({
      fullName:"",
      email:"",
      mobileNumber:"",
      password:"",
      confirmPassword:"",
    });
  };
  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be More Than 3 Characters";
    } else {
      if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
        Error.fullName = "Only Contain A-Z , a-z and space";
      }
    }

    if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email,
      )
    ) {
      Error.email = "Use Proper Email Format";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobileNumber)) {
      Error.mobileNumber = "Only Indian Mobile Number allowed";
    }

   
    setValidationError(Error);

    return Object.keys(Error).length > 0 ? false : true;
  };
  
   const handleSubmit=async (e)=>{
    e.preventDefault();
    setIsLoading(true);

    if(!validate()){
      setIsLoading(false);
      toast.error("Fill The Form Correctly");
      return;
    }

    console.log(formData);
   
    try {
       const res=await AudioParam.post("/auth/signup",formData);
       toast.success(res.data.message);
       handleClearForm();

    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "unknow Error" );

      
    }finally{
      setIsLoading(false);
    }


   }
  return (
    <>
      <div  className='  w-370 h-fit'>
  
      <div  className=' grid items-center justify-center py-5' >
           
          <div className= ' grid items-center justify-center gap-1 bg-gray-300  border-0 rounded w-190 h-15'>
             <h1 className='text-xl text-red-700 font-bold text-center'>Signup Now</h1>
             <p className='text-amber-100 font-extrabold ms-10' >Your Beauty Starts Here ✨💄💖</p> 
            </div> 
            <form onSubmit={handleSubmit} onReset={handleClearForm}>
            <div className='grid items-center justify-center gap-2 border-0 rounded shadow w-190 py-5 mt-5'>
              <input type="text" name='fullName' id="fullName" placeholder='FullName' required disabled={isLoading} value={formData.fullName} onChange={handlechange}  className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700 ' /> {validationError.fullName&&(<span className='text-xs text-red-800'>{validationError.fullName}</span>)}
              <input type="email" name='email' id="email" placeholder='Email'    required disabled={isLoading} value={formData.email} onChange={handlechange}   className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />
              <input type="text" name='mobileNumber' id="mobileNumber" placeholder='Mobile Number'  required disabled={isLoading} value={formData.mobileNumber} onChange={handlechange}    className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />
              <input type="password" name='password' id="password" placeholder='Create Password'    required disabled={isLoading} value={formData.password} onChange={handlechange}   className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />
              <input type="password" name='confirmPassword' id="confirmPassword" placeholder='Confirm Password'  required disabled={isLoading} value={formData.confirmPassword} onChange={handlechange}   className='border-2 border-blue-200 w-120 h-10 text-gray-900 py-2 rounded shadow hover:border-orange-700' />

               <div className='flex  justify-between mt-8'>
               <button type='reset' disabled={isLoading} className='bg-red-600 border rounded shadow w-40 h-10 text-xl text-white font-bold hover:bg-sky-300 hover:scale-105  '>Clear</button>
               <button  type="submit" disabled={isLoading}  className='bg-orange-700 border rounded shadow w-40 h-10 text-xl text-white font-bold hover:bg-sky-300 hover:scale-105'>
                {isLoading ? "submitting":"submit"}
                </button>

              
            </div>

            <div className='flex gap-2 items-center justify-center  mt-5'>
              <p>You have alerady Account </p>
              <Link to={"/login"} className='text-blue-700 font-bold hover:scale-105'>Login</Link>
            </div>
            </div>
           </form>
      </div> 

      </div>
    </>
  )
}

export default Signup