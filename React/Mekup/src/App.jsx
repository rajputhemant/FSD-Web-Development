import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './componet/Header';
import Footer from './componet/Footer';
import Home from './page/Home';
import About from './Page/About';
import Product from './Page/Product';
import Contact from './page/Contact';


const App = () => {
  return (
    <> 
     <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
       
          
        </Routes>

        <Footer />
      </BrowserRouter>
  
     </>
  )
}

export default App