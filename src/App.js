import React, { useState } from 'react';
import './index.css'; 
import Navbar from './component/navbar/Navbar';
import Contact from './component/contactpage/Contact';
import Home from './component/Homepage/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [currentPage, setCurrentPage] = useState('home');

   
    return (
         <BrowserRouter>
         <Navbar />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/home" element={<Home />} />
             <Route path="/contact" element={<Contact />} />
         </Routes>
       </BrowserRouter>

    );
}

export default App;