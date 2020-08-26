const url = `http://localhost:4001/api/v1/carTalk`

class CarModel {
    static getAllCars =() => {
        return fetch(url)
            .then((response) => response.json())
    }

    static getCarById = (carId) => {
        return fetch(`${url}/${carId}`)
            .then((response) => response.json())
    }

    static createCar = (car) => {
        return fetch(url, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(car)
        })
            .then((response) => response.json())
    }

    static updateCar = (car, id) => {
        return fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(car)
        })
        .then((response) => response.json())
    }

    static deleteCar= (id) => {
        return fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
    }
};

export default CarModel;