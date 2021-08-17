import './Car.css'

export default function Car({car}) {
    return (
        <div className={'info-car'}>
            <h4>information about the car : </h4>
            <p>Model Car - {car.model}</p>
            <p>Price - {car.price}</p>
            <p>Year - {car.year}</p>

        </div>
    );
}