import React from 'react';
import { Link } from 'react-router-dom';
import Car from '../Car/Car';

import './CarsList.css';

function CarsList(props) {
    // console.log(props);
    const carsList = props.cars.map((carObj) => {
        return (
            // <Car key={carObj._id} car={carObj} list={true} />
            <Link key={carObj._id} to={`/cars/${carObj._id}`}>
                <Car car={carObj} list={true} />
            </Link> 
        )
    });
    
    return (
        <div className="cars-container">
            {carsList}
        </div>
    );
}

export default CarsList;

