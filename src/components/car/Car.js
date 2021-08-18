export default function Car({car, onDeleteCar, onEdit}) {
    return (


        <div className={'car'}><h4>information about the car : </h4>
            <p>Model Car - {car.model}</p>
            <p>Price - {car.price}</p>
            <p>Year - {car.year}</p>
            <p># - {car.id}</p>
            <button onClick={() => onDeleteCar(car.id)}>Delete</button>
            <button onClick={() => onEdit(car.id)}>Edit</button>
            <hr/>
        </div>

    );
}