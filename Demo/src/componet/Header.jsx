import React from "react";
import {Link} from"react-router-dom";
const Header= ()=>{
    return(
        <>
       <div className="d-flex justify-content-bettwen  align-items-center p-2 bg-primary gap-5 ">
        <h1>My website</h1>
        <div className="d-flex gap-3">
            
            <Link to={"/"}className="text-decoration-none text-light">Home</Link>
            <Link to={"/about"}className="text-decoration-none text-light">About</Link>
            <Link to={"/product"}className="text-decoration-none text-light">Product</Link>
            <Link to={"/contcat"}className="text-decoration-none text-light">Contact</Link>
            <Link to={"/singup"}className="text-decoration-none text-light">Singup</Link>
            <Link to={"/login"}className="text-decoration-none text-light">Login</Link>
        </div>
       </div>
        </>
    );
};

export default Header;