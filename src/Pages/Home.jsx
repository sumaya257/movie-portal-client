import React, { useState, useEffect, useContext } from 'react';
import Banner from '../Components/Banner';
import FeaturedMovies from '../Components/FeaturedMovie';
import TrendingNow from '../Components/TrendingNow';
import UpcomingMovies from '../Components/UpcomingMovies';
import { DarkModeContext } from '../Providers/DarkModeProvider';

const Home = () => {
    const { isDarkMode } = useContext(DarkModeContext);


    return (
        <div className='min-h-screen w-11/12 mx-auto'>

            
                <Banner />
            

           
                <FeaturedMovies />
           

            
                <TrendingNow/>
          

            
                <UpcomingMovies/>
            
        </div>
    );
};

export default Home;
