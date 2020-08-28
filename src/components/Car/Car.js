import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CarModel from '../../models/car';
import Like from '../Like/Like'

import './Car.css';

function Car (props) {
    const { car, list } = props;

    const handleDelete = () => {
        CarModel.deleteCar(car._id)
            .then((result) => props.history.push('/cars'))
            .catch((err) => console.log(err));
    };

    return(
        <>
            <div className="car-card" style={!list ? {margin: '0 auto'}: {}}>
                <section className='image-wrapper'>
                    <img src={car.carPhotoUrl} alt={car.name} />
                </section>
                <section className='car-name'>
                    <h4 className="name">{car.name}</h4>
                </section>
            </div>
            {!list && (
                <div className='car-card-action'>
                    <h6><strong>Year</strong>{car.year}</h6>
                    <h6><strong>Model</strong>{car.model}</h6>
                    <h6><strong>Horsepower</strong>{car.horsepower}</h6>
                    <Like />
                    <Link to={`/cars/${car._id}/edit`} ><button className="edit">Edit</button></Link>
                    <button className='delete' onClick={handleDelete}>Delete</button>
                </div>
            )}
        </>
    );
};

export default withRouter(Car);