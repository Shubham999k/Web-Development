import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className='bg-gray-900 text-white py-10 px-6'>

                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>

                    {/* Logo Section */}
                    <div className='text-center'>
                        <h1 className='text-3xl font-bold mb-4 text-cyan-400'>
                            Subbhi
                        </h1>

                        <p className='text-gray-400 leading-7'>
                            Building beautiful and responsive web applications
                            using React and Tailwind CSS.
                        </p>
                    </div>


                    {/* Quick Links */}
                    <div className='text-center'>

                        <h2 className='text-2xl font-semibold mb-4'>
                            Quick Links
                        </h2>

                        <ul className='text-gray-400 flex flex-wrap justify-center gap-4'>

                            <li className='hover:text-cyan-400 cursor-pointer transition duration-300'>
                                Home
                            </li>

                            <li className='hover:text-cyan-400 cursor-pointer transition duration-300'>
                                About
                            </li>

                            <li className='hover:text-cyan-400 cursor-pointer transition duration-300'>
                                Contact
                            </li>

                            <li className='hover:text-cyan-400 cursor-pointer transition duration-300'>
                                Services
                            </li>

                        </ul>

                    </div>


                    {/* Social Media */}
                    <div className='text-center'>

                        <h2 className='text-2xl font-semibold mb-4'>
                            Follow Us
                        </h2>

                        <div className='flex flex-wrap justify-center gap-5 text-3xl'>

                            <FaFacebook className='hover:text-blue-500 cursor-pointer transition duration-300 hover:scale-110' />

                            <FaInstagram className='hover:text-pink-500 cursor-pointer transition duration-300 hover:scale-110' />

                            <FaTwitter className='hover:text-sky-400 cursor-pointer transition duration-300 hover:scale-110' />

                            <FaGithub className='hover:text-green-300 cursor-pointer transition duration-300 hover:scale-110' />

                        </div>

                    </div>

                </div>


                {/* Bottom Footer */}
                <div className='border-t border-gray-700 mt-10 pt-5 text-center text-gray-400'>

                    © 2026 Subbhi. All Rights Reserved.

                </div>

            </footer>
        </>
    )
}

export default Footer