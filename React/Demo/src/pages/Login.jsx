import React, { useState } from "react";

const Login = () =>{
    const [contactData, setContactData] = useState({
      
        email: "",
        password: "",
      
        
      });
      console.log(contactData);
      const [isLoading, setIsLoading] = useState(false);
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setContactData((previousData) => ({ ...previousData, [name]: value }));
        };
      
        const handleClearForm = () => {};
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          setIsLoading(true);
          try {
            const response = await fetch(
              "https://official-joke-api.appspot.com/jokes/jhbaskdjbf"
            );
          } catch (error) {
            console.log(error.message);
          } finally {
            setIsLoading(false);
          }
          handleClearForm();
        };
      
  return (
    <> 
     <form onSubmit={handleSubmit}>

      <div className=" justify-content-center">
      
        
        <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
            <label htmlFor="email" className="form-label w-25 ms-4 ">Email</label>
            <input type="email" name="email"  className="form-control" value={contactData.email}   onChange={handleChange} />
        </div>
        <div className=" mx-auto gap-5 d-flex text-center align-items-center mx-5 w-25 mt-3">
            <label htmlFor="cPassword" className="form-label w-25 ms-4 ">Password</label>
            <input type="password" name="password"  className="form-control" value={contactData.password}   onChange={handleChange} />
        </div>
        
        <div className="text-center mt-3">
          <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Login"}
              </button>
            </div>
            </div>
     </form>

    </>
    
  );
};
export default Login;
