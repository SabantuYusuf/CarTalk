import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import FanFav from './FanFavs/FanFavs'

// import Footer from './Footer';

function Landing() {
    return (
        <div>
            <Home />
            <FanFav />
            <About />
            
        </div>
    )
};

export default Landing;