import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './componts/Header';
import Footer from './componts/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';


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