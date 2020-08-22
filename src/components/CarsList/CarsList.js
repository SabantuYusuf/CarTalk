import React from 'react';
import Car from '../Car/Car';

import './CarsList.css';

function CarsList(props) {
    const CarsList = props.cars.map((carObj) => {
        return <Car key={carObj._id} car={carObj} list={true} />
    });
    
    return (
        <div className="cars-container">
            {CarsList}
        </div>
    );
}

export default CarsList;

