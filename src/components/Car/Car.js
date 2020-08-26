import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Car.css';

function Car(props) {
    const { car, list } = props;
    return(
        <div className="car-link">
            <Link  to={`/cars/{${car._id}}`}>
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
                                <Link to={`/cars/${car._id}}/edit`}>Eidt</Link>
                                <button className='delete'>Delete</button>
                            </>
                        )}
                    </section>
                </div>
            </Link>
        </div>
    );
};

export default Car;