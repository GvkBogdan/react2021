import {useEffect, useState} from "react";
import Car from "../car/Car";
import {deleteCar, editCar, getCars, saveCar} from "../../services.car/service.car";

export default function FormCar() {

    let [cars, setCars] = useState([])
    const [input, setInput] = useState({
        model: '',
        price: '',
        year: '',
    })

    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])


    let carSave = (e) => {
        e.preventDefault()
        saveCar({...input}).then(value => setCars([...cars, value]))

    }

    const onDeleteCar = (id) => {
        deleteCar(id);
        setCars(cars.filter(value => value.id !== id));
    }

    const onEdit = (id) => {
        editCar(id, input).then(value => {
            let find = cars.find(value => value.id === id);
            Object.assign(find, value)
            setCars([...cars])
        })

    }

    const onChangeInput = ({target: {value, name}}) => setInput({...input, [name]: value})

    return (
        <div>

            <div className={'form-car'}>
                <form onSubmit={carSave}>
                    <input type="text" name={'model'} placeholder={'model'} value={input.model}
                           onChange={onChangeInput}/>
                    <input type="number" name={'price'} placeholder={'price'} value={input.price}
                           onChange={onChangeInput}/>
                    <input type="number" name={'year'} placeholder={'year'} value={input.year}
                           onChange={onChangeInput}/>
                    <input type="submit" value={'Save'}/>
                </form>
            </div>

            <div className={'list-car'}>
                {cars.map(value => <Car car={value} key={value.id} onDeleteCar={onDeleteCar} onEdit={onEdit}/>)}
            </div>

        </div>
    );
}