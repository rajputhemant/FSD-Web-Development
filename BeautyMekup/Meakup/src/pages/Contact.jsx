
import React from 'react'

const Contact = () => {
  return (
    <>
    <div className=" bg-blue-50 w-370 mx-5 ">
     
    <div  className="min-h-screen  py-6 px-4  border-0  shadow-fuchsia-500 h-100 ">

      <div className="flex text-center justify-center text-2xl mb-5 text-red-600">
        <h1>Contact Us</h1>
      </div>
    
        <div className='flex gap-5 mx-5 py-5 text-center justify-center' >
          <label htmlFor="fullName" >FullName</label>
          <input type="text" name="fullName" placeholder='Enter Your FullName ' className="border border-2 shadow rounded w-70" />
        </div>
        <div className='flex gap-6 mx-5 py-5 text-center justify-center'>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder='Enter Your Email'  className="border border-2 shadow rounded w-70 ms-4"/>
        </div>
        <div className='flex gap-6 mx-5 py-5 text-center justify-center'>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" placeholder='Enter Your Phone Number' className="border border-2 shadow rounded w-70 ms-2" />
        </div>
        <div className='flex gap-5 mx-5 py-5 text-center justify-center'>
          <label htmlFor="message">message</label>
          <textarea name="message" placeholder='Enter Your Message' className="border border-2 shadow rounded w-70"></textarea>
        </div>
        <div className= 'flex gap-6 mx-5 py-5 text-center justify-center'>
        <button type='submit' className="bg-blue-800 text-white border rounded sahdow w-25 h-10 mx-auto">Submit</button>
        </div>
    </div>
    </div>
    <div>
      contect
      ijshfjidh
    </div>
    
   
    </>
  )
}

export default Contact
