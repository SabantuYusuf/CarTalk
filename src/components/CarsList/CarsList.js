import React from 'react';
import Car from '../Car/Car';

import './CarsList.css';

function CarsList(props) {
    console.log(props);
    
    const carsList = props.cars.map((carObj) => {
        
        return <Car key={carObj._id} car={carObj} list={true} />
        
    });
    
    return (
        <div className="cars-container">
            {carsList}
        </div>
    );
}

export default CarsList;

