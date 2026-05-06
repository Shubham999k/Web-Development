import React from 'react'
import { FaSearch } from "react-icons/fa";
import forestVideo from '../assets/forest.mp4'

const SearchBar = () => {

    const text = "Find Your Dream Destination";

    return (
        <>
            <section className='py-20 px-5 bg-linear-to-b from-yellow-100 to-green-200 shadow-lg'>

                <div className='max-w-7xl mx-auto'>

                    {/* Heading */}
                    <div className='text-center mb-12'>

                        {/* Animated Colorful Heading */}
                        <h1 className='text-4xl md:text-6xl font-extrabold flex flex-wrap justify-center gap-1'>

                            {
                                text.split("").map((letter, index) => (

                                    <span
                                        key={index}
                                        className='inline-block text-black hover:scale-150 hover:-translate-y-2 transition duration-300 cursor-pointer'
                                        style={{
                                            transition: "0.3s",
                                        }}
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
                                            e.target.style.color = "green"
                                        }}
                                    >

                                        {
                                            letter === " "
                                                ? "\u00A0"
                                                : letter
                                        }

                                    </span>

                                ))
                            }

                        </h1>


                        {/* Subtitle */}
                        <div className='relative max-w-5xl mx-auto h-75 rounded-3xl overflow-hidden mt-10 shadow-2xl'>

                            {/* Background Video */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className='absolute inset-0 w-full h-full object-cover'
                            >

                                <source src={forestVideo} type="video/mp4" />

                            </video>


                            {/* Dark Overlay */}
                            <div className='absolute inset-0 bg-black/5  object-fit-cover'></div>


                            {/* Content */}
                            <div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-5'>

                                <h2 className='text-white text-3xl md:text-5xl font-bold mb-5'>
                                    Explore Nature
                                </h2>

                                <p className='text-gray-200 text-lg md:text-xl max-w-2xl leading-8'>
                                    Search beautiful places around the world and
                                    explore unforgettable adventures.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Search Box */}
                    <div className='relative max-w-3xl mx-auto group'>

                        <input
                            type="text"
                            placeholder='Search destinations...'
                            className='w-full bg-white shadow-xl rounded-full py-5 pl-16 pr-5
                            text-lg outline-none border border-gray-200
                            focus:border-yellow-400 focus:shadow-2xl
                            transition duration-300'
                        />

                        {/* Search Icon */}
                        <FaSearch
                            className='absolute left-6 top-1/2 -translate-y-1/2
                            text-gray-400 text-xl
                            group-hover:text-yellow-500
                            transition duration-300'
                        />

                    </div>


                    {/* Categories */}
                    <div className='flex flex-wrap justify-center gap-5 mt-12'>

                        <button
                            className='bg-yellow-400 text-black px-7 py-3 rounded-full
                            font-semibold hover:bg-yellow-300
                            hover:scale-110 hover:shadow-lg
                            transition duration-300 cursor-pointer'
                        >
                            All
                        </button>


                        <button
                            className='bg-white shadow-md px-7 py-3 rounded-full
                            hover:bg-blue-600 hover:text-white
                            hover:scale-110 hover:shadow-lg
                            transition duration-300 cursor-pointer'
                        >
                            Beaches
                        </button>


                        <button
                            className='bg-white shadow-md px-7 py-3 rounded-full
                            hover:bg-green-600 hover:text-white
                            hover:scale-110 hover:shadow-lg
                            transition duration-300 cursor-pointer'
                        >
                            Mountains
                        </button>


                        <button
                            className='bg-white shadow-md px-7 py-3 rounded-full
                            hover:bg-purple-600 hover:text-white
                            hover:scale-110 hover:shadow-lg
                            transition duration-300 cursor-pointer'
                        >
                            Cities
                        </button>


                        <button
                            className='bg-white shadow-md px-7 py-3 rounded-full
                            hover:bg-orange-500 hover:text-white
                            hover:scale-110 hover:shadow-lg
                            transition duration-300 cursor-pointer'
                        >
                            Forests
                        </button>

                    </div>

                </div>

            </section>
        </>
    )
}

export default SearchBar