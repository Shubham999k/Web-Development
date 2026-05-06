import React from 'react';
import { FaBeer, FaHeart } from "react-icons/fa";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import cardsData from './data/data';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App