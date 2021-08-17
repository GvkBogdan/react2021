import {getCars, saveCar} from "../../services/car.api.service";
import {useEffect, useState} from "react";
import Car from "../car/Car";
import './CarForm.css'

export default function CarForm() {

    let onFormSubmit = (e) => {
        e.preventDefault()

        let carSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value};
        console.log(carSave)

        saveCar(carSave);

    };


    let [cars, setCars] = useState([])

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])


    return (
        <div>
            <div className={'form-car'}>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name={'model'} placeholder={'enter model'}/>
                    <input type="text" name={'price'} placeholder={'enter price'}/>
                    <input type="text" name={'year'} placeholder={'enter year'}/>
                    <button>save</button>
                </form>
            </div>


            <div className={'car-box'}>

                {
                    cars.map(value => <Car car={value} key={value.id}/>)
                }

            </div>

        </div>
    );
}