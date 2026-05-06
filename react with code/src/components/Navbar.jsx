import React, { useState } from 'react'
import { GiCircleForest } from "react-icons/gi";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import ForestNavBgg from '../assets/forestNavBgg.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>

            {/* NAVBAR */}
            <div

                className='flex items-center justify-between py-4 px-6 md:px-10 sticky top-0 z-999 shadow-xl gap-2'

                style={{
                    backgroundImage: `
                     linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${ForestNavBgg})`
                }}
            >

                {/* LOGO */}
                <div className='text-2xl md:text-4xl font-extrabold flex gap-3 md:gap-5 items-center justify-center'>

                    <h1 className='flex flex-wrap justify-center gap-0.5 cursor-pointer'>

                        {
                            "SUBBHI".split("").map((letter, index) => (

                                <span
                                    key={index}
                                    className='inline-block text-white hover:scale-150 hover:-translate-y-2 transition duration-300'

                                    onMouseEnter={(e) => {
                                        e.target.style.color = [
                                            "#f59e0b",
                                            "#3b82f6", 
                                            "#10b981",
                                            "#ef4444",
                                            "#8b5cf6",
                                            "#ec4899"
                                        ][index % 6]
                                    }}

                                    onMouseLeave={(e) => {
                                        e.target.style.color = "white"
                                    }}
                                >

                                    {letter}

                                </span>

                            ))
                        }

                    </h1>

                    <GiCircleForest className='text-white text-4xl md:text-5xl hover:text-yellow-400 transition duration-300 cursor-pointer animate-pulse hover:scale-110 drop-shadow-[0_0_10px_#22c55e]' />

                </div>

                {/* DESKTOP MENU */}
                <div className='hidden md:flex text-xl lg:text-2xl text-white space-x-8 font-semibold'>

                    <Link
                        to="/"
                        className='hover:text-yellow-300 transition duration-300 hover:scale-110'
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className='hover:text-yellow-300 transition duration-300 hover:scale-110'
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className='hover:text-yellow-300 transition duration-300 hover:scale-110'
                    >
                        Contact
                    </Link>

                </div>

                {/* HAMBURGER */}
                <div
                    className='md:hidden text-3xl text-white cursor-pointer'
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    {
                        menuOpen ? <FaTimes /> : <FaBars />
                    }

                </div>

            </div>

            {/* MOBILE MENU */}
            {
                menuOpen &&

                <div className='md:hidden flex flex-col bg-[#0b3d2e] text-white text-2xl px-6 py-5 space-y-5'>

                    <Link
                        to="/"
                        onClick={() => setMenuOpen(false)}
                        className='hover:text-yellow-300 transition duration-300'
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        onClick={() => setMenuOpen(false)}
                        className='hover:text-yellow-300 transition duration-300'
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className='hover:text-yellow-300 transition duration-300'
                    >
                        Contact
                    </Link>

                </div>
            }

        </>
    )
}

export default Navbar