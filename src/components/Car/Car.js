import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CarModel from '../../models/car';

import './Car.css';

function Car(props) {
    const { car, list } = props;

    const handleDelete = () => {
        CarModel.deleteCar(car._id)
            .then((result) => props.history.push('/cars'))
            .catch((err) => console.log(err));
    };

    return(
        <>
            <div className="car-link">
                <Link  to={`/cars/{${car._id}}`}>
                    <div className='car-card'>
                        <section className='image-wrapper'>
                            <img src={car.carPhotoUrl} alt={car.name} />
                        </section>
                        <section className='content-wrapper'>
                            <h4>{car.name}</h4>
                            {!list && (
                                <div className='car-card-cation'>
                                    <p><strong>Year</strong>{car.year}</p>
                                    <p><strong>Model</strong>{car.model}</p>
                                    <p><strong>Horsepower</strong>{car.horsepower}</p>
                                    <Link to={`/cars/${car._id}}/edit`}>Eidt</Link>
                                    <button className='delete' onClick={handleDelete}>Delete</button>
                                </div>
                            )}
                        </section>
                        
                    </div>
                </Link>
            </div>
        </>
    );
};

export default withRouter(Car);