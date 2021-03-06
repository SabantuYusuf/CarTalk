import React from 'react';
import CarModel from '../../models/car';

import './EditCar.css';

class EditCarContainer extends React.Component {
    state = {
        carPhotoUrl: '',
        name: '',
        year: '',
        model: '',
        horsepower: '',
    };

    // Get Car (by Id) to edit and update state
    componentDidMount() {
        CarModel.getCarById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState(result)
            })
            .catch((err) => console.log(err));
    }

    handleChange = (event) => {
        // console.log(event.target.id);
        // if (event.target.value === 'on') {
        //     event.target.value = true;
        // }
        this.setState({[event.target.name]: event.target.value})
    }

    // Submit updated car object to server to save in database
    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.state);
        try {
            const updatedCar = await CarModel.updateCar(this.state, this.props.match.params.id)

            if (updatedCar) {
                this.props.history.push(`/cars/${this.props.match.params.id}`);
            }
            
        } catch (error) {
            
        }

    };

    render() {
        const { carPhotoUrl, name, year, model, horsepower } =this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="edit-form">
                    <h2>Edit Car</h2>
                    <div>
                        <label htmlFor="name">Photo</label>
                        <input type="text" name="carPhotoUrl" id="carPhotoUrl" value={carPhotoUrl} onChange={this.handleChange} className="editcar-input" />
                    </div>
                        
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={name} onChange={this.handleChange} className="editcar-input" />
                    </div>
                    <div>
                        <label htmlFor="name">Year</label>
                        <input type="text" name="year" id="year" value={year} onChange={this.handleChange} className="editcar-input" />
                    </div>
                    <div>
                        <label htmlFor="name">Model</label>
                        <input type="text" name="model" id="model" value={model} onChange={this.handleChange} className="editcar-input" />
                    </div>
                    <div>
                        <label htmlFor="name">horsepower</label>
                        <input type="text" name="horsepower" id="horsepower" value={horsepower} onChange={this.handleChange} className="editcar-input" />
                    </div>
                    <button type="submit">Update Car</button>
                </form>
            </div>
        )
    }
};  

export default EditCarContainer;