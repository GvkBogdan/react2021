const saveCar = (cars) => {
    return fetch('http://195.72.146.25/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(cars),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => json);
}

const getCars = () => {
    return fetch('http://195.72.146.25/api/v1/cars')
        .then(value => value.json())
}

const deleteCar = (id) => {
    return fetch('http://195.72.146.25/api/v1/cars/' + id, {
        method: "DELETE"
    })
}

const editCar = (id, car) => {
    console.log(car);
    return fetch('http://195.72.146.25/api/v1/cars/' + id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(value => value.json()).then(value => value)
}

export {saveCar, getCars, deleteCar, editCar};