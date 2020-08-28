import React from 'react';

import img9 from '../../images/9.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.jpg';
import img8 from '../../images/8.jpg';
import img6 from '../../images/6.jpg';
import img7 from '../../images/7.jpg';


import './FanFavs.css'

function FanFav() {
    return (
        <section id="gallary">
            <div className="favs">
                <h2>Fans Favorites</h2>
                <h3>Vintage Journey</h3>
                <div className="hold-cars">
                    <img src={img9} alt="" />
                    <img src={img8} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img7} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
            </div>

        </section>
    )
};

export default FanFav;