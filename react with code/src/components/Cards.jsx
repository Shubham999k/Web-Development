import React from 'react'

const Cards = ({ title, desc, image }) => {

    return (
        <>
            {/* Card */}
            <div
                className='relative bg-white rounded-xl shadow-lg overflow-hidden w-full h-full min-h-100
                hover:scale-105 hover:shadow-2xl 
                transition-all duration-500 cursor-pointer

                after:absolute after:left-0 after:bottom-0
                after:w-full after:h-1 after:bg-yellow-400
                after:scale-x-0 after:origin-left
                after:transition-transform after:duration-500
                hover:after:scale-x-100' 
            >

                {/* Image */}
                <div className='overflow-hidden '>

                    <img
                        src={image}
                        alt=""
                        className='w-full h-56 object-cover transition duration-75'
                    />

                </div>

            
                {/* Content */}
                <div className='p-5'>

                    <h1 className='text-2xl font-bold mb-3 text-gray-800'>
                        {title}
                    </h1>
                    <p className='text-gray-600 mb-15 leading-7'>
                        {desc}
                    </p>

                    {/* Button */}
                    <button
                        className='bg-blue-600 text-white px-5 py-2 rounded-lg
                        hover:bg-blue-700 transition duration-300 cursor-pointer absolute bottom-5 '
                    >
                        Explore
                    </button>


                </div>

            </div>
        </>
    )
}

export default Cards