import axios from 'axios';
const url = `http://localhost:4001/api/v1/carTalk`


class CarModel {
    // All cars
    static getAllCars =() => {
        return fetch(url)
            .then((response) => response.json())
    }


    // Car show
    static getCarById = (carId) => {
        return fetch(`${url}/${carId}`)
            .then((response) => response.json())
    }


    // Add car
    static createCar = (car, token) => {
        // console.log('this is the', token)
        // console.log('this is', token)
        return axios.post(url, car, {})
    }

    // Edit car
    static updateCar = (car, id) => {
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify(car)
        })
        .then((response) => response.json())
    }

    // Delete car
    static deleteCar= (id) => {
        return axios.delete(`${url}/${id}`, {})
    }
};

export default CarModel;