import React from 'react';
import Car from '../../components/Car/Car';
import CarModel from '../../models/car';

class CarContainer extends React.Component {
    state = {
        car: {},
    };
    

    componentDidMount() {
        // Get one Cars
        CarModel.getCarById(this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({car: result})
            })
            .catch((err) => console.log(err))
    }
    
    render() {
        console.log(this.props);
        return <Car car={this.state.car} list={false} />
    };
};

export default CarContainer;