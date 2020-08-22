import React from 'react';
import CarsList from '../../components/CarsList/CarsList';
import CarModel from '../../models/car';


class CarListContainer extends React.Component {
    state = {
        cars: [],
    };

    componentDidMount() {
        // Gett all Cars
        CarModel.getAllCars()
            .then((result) => {
                // console.log(result);
            this.setState({cars: result});
            })
            .catch((err) => console.log(err))
    };

    render() {
        return <CarsList cars={this.state.cars} />
    };
};

export default CarListContainer;