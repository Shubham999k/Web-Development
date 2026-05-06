import React from 'react'
import forestVideo from '../assets/forest.mp4'

const Hero = () => {

    return (
        <>
            <section className='relative h-screen overflow-hidden'>

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
                <div className='absolute inset-0 bg-black/20'></div>


                {/* Hero Content */}
                <div className='relative z-10 flex flex-col justify-center items-center text-center h-full px-5'>

                    <h1 className='text-white text-5xl md:text-7xl font-extrabold leading-tight'>

                        Explore The

                        <span className='block font-bold bg-linear-to-r from-yellow-500 to-green-600 bg-clip-text text-transparent'>
                            Beautiful Forest
                        </span>

                    </h1>


                    <p className='text-gray-200 mt-8 text-lg md:text-2xl max-w-2xl leading-8'>

                        Discover breathtaking adventures and unforgettable nature experiences.

                    </p>


                    <button
                        className='mt-10 bg-yellow-400 text-black px-8 py-4 rounded-full
                        font-semibold hover:bg-yellow-300 hover:scale-105
                        transition duration-300'
                    >
                        Explore Now
                    </button>

                </div>

            </section>
        </>
    )
}

export default Hero