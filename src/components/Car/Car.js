import React from 'react';
import { Link } from 'react-router-dom';

import './Car.css';

function Car(props) {
    const { car, list } = props;
    return(
        
        <Link to={`/cars/{${car._id}}`}>
            <div><h1>Add New Car</h1></div>
            <div className='car-card'>
                <section className='image-wrapper'>
                    <img src={car.carPhotoUrl} alt={car.name} height='100' />
                </section>
                <section className='content-wrapper'>
                    <h4>{car.name}</h4>
                    {!list && (
                        <>
                            <p><strong>Year</strong>{car.year}</p>
                            <p><strong>Model</strong>{car.model}</p>
                            <p><strong>Horsepower</strong>{car.horsepower}</p>
                        </>
                    )}
                </section>
            </div>
        </Link>
    );
};

export default Car;