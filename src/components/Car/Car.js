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
                {/* <Link  to={`/cars/{${car._id}}`}> */}
                    {/* <div className='car-card'> */}
                <section className='image-wrapper'>
                    <img src={car.carPhotoUrl} alt={car.name} />
                </section>
                <section className='car-name'>
                    <h4 className="name">{car.name}</h4>
                </section>
            </div>
                        {/* </div> */}
            {!list && (
                <div className='car-card-action'>
                    {/* <img src={car.carPhotoUrl} alt={car.name} /> */}
                    <p><strong>Year</strong>{car.year}</p>
                    <p><strong>Model</strong>{car.model}</p>
                    <p><strong>Horsepower</strong>{car.horsepower}</p>
                    <button className='like'>Like </button>
                    <Link to={`/cars/${car._id}}/edit`} ><button className="edit">Edit</button></Link>
                    <button className='delete' onClick={handleDelete}>Delete</button>
                </div>
            )}
                {/* </Link> */}
            
        </>
    );
};

export default withRouter(Car);