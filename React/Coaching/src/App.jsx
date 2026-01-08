import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from  './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import IDE from './pages/IDE'
import {Toaster} from "react-hot-toast";


const App = () => {
  return (
    <> 
     <BrowserRouter>
     <Toaster/>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/conact" element={<Contact />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/ide" element={<IDE/>} />
        </Routes>

        <Footer />
      </BrowserRouter>
  
     </>
  )
}

export default App