import React from 'react';
import CarModel from '../../models/car';
import { withRouter } from 'react-router-dom';

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
        if (event.targe.value === 'on') {
            event.target.value = true;
        }

        this.setState({[event.target.name]: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault();
        CarModel.createCar(this.state)
            .then((result) => {
                console.log(result);
            });
        // Redirect to History/index
        this.props.history.push('/cars');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add A New Car</h2>
                    <div>
                        <label htmlFor="">Photo</label>
                        <input onInput={this.handleChange} type="text" name="carPhotoUrl"/>
                    </div>
                    <div>
                        <label htmlFor="">Name</label>
                        <input onInput={this.handleChange} type="text" name="name"/>
                    </div>
                    <div>
                        <label htmlFor="">Year</label>
                        <input onInput={this.handleChange} type="text" name="year"/>
                    </div>
                    <div>
                        <label htmlFor="">Model</label>
                        <input onInput={this.handleChange} type="text" name="model"/>
                    </div>
                    <div>
                        <label htmlFor="">Horsepower</label>
                        <input onInput={this.handleChange} type="text" name="horsepower"/>
                    </div>
                    <button type="submit">Add Car</button>
                </form>
            </div>
        );
    };
};

export default withRouter(NewCarContainer);