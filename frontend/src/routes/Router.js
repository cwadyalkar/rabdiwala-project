import React from 'react'
import { Routes, Route ,Navigate} from "react-router-dom";
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import AboutUs from '../Pages/AboutUs';
import Menu from '../Pages/Menu';


const Router = () => {
  return (
   <Routes>
    <Route path='/' element={<Navigate to="/home"/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about' element={<AboutUs/>}/>
    <Route path='/menu' element={<Menu/>}/>
    
   </Routes>
  )
}

export default Router