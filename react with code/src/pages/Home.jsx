import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import Cards from '../components/Cards'
import cardsData from '../data/data'

const Home = () => {

    return (
        < >
            <Hero />
            <SearchBar/>
            <div className='bg-linear-to-b from-gray-800 to-gray-400'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-50 gap-8 px-2 md:px-10 py-8 place-items-center justify-center container mx-auto'>
                    
                    {
                        cardsData.map((item) => (

                            <Cards
                                key={item.id}
                                title={item.title}
                                desc={item.desc}
                                image={item.image}
                            />

                        ))
                    }

                </div>
                
            </div>

        </>
    )
}

export default Home