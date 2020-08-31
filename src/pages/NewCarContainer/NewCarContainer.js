import React from 'react';
import CarModel from '../../models/car';
import { withRouter } from 'react-router-dom';

import './NewCarContainer.css';


class NewCarContainer extends React.Component {
    state = {
        carPhotoUrl: '',
        name: '',
        year: '',
        model: '',
        horsepower: '',
    };
    
    handleChange = (event) => {
        // console.log(event.target.id);
        // if (event.targe.value === 'on') {
        //     event.target.value = true;
        // }

        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = async (event) => {
        console.log(this.props.currentUser);
        event.preventDefault();
        try {
            const carData = await CarModel.createCar(this.state, this.props.currentUser)
            if (carData) {
                // Redirect to History/index
                this.props.history.push('/cars');
            }
        } catch (error) {
            console.log(error)
        }
        
        
    }

    render() {
        
        return (
            <div className="wrap">
                <form onSubmit={this.handleSubmit} className="car-form">
                    <h2>Add A New Car</h2>
                    <div>
                        <label htmlFor=""></label>
                        <input onInput={this.handleChange} type="text" name="carPhotoUrl" placeholder="Car Photo" className="newcar-input"/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input onInput={this.handleChange} type="text" name="name" placeholder="Name" className="newcar-input"/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input onInput={this.handleChange} type="text" name="year" placeholder="Year" className="newcar-input"/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input onInput={this.handleChange} type="text" name="model" placeholder="Car Model" className="newcar-input"/>
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <input onInput={this.handleChange} type="text" name="horsepower" placeholder="Horsepower" className="newcar-input"/>
                    </div>
                    <button type="submit">Add Car</button>
                </form>
            </div>
        );
    };
};

export default withRouter(NewCarContainer);