import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import AboutUs from '../Pages/AboutUs';



const Router = () => {
  return (
   <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    
    
   </Routes>
  )
}

export default Router