import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css";

import{ BrowserRouter ,Route, Routes} from "react-router-dom";
import Header from "./componet/Header";
import Footer from "./componet/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Conctact from "./pages/Conctact";
import Singup from "./pages/singup";
import Login from "./pages/Login";

function App(){
 

  return(
    <>
       <BrowserRouter>
       <Header/>
        <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/product" element ={<Product/>}/>
        <Route path="/Conctact" element ={<Conctact/>}/>
        <Route path="/singup" element={<Singup/>}/>
         <Route path="/login" element={<Login/>}/>
        </Routes>


       <Footer/>
       </BrowserRouter>
    </>
  );
}


export default App;