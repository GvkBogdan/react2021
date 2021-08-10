import Geo from "./Geo";

export default function Address({address: {city, street, suite, zipcode, geo}}) { // звертаємось до підобєкта "address" обєкта "user",
    //диструктиризуємо і присвоюємо змінній її значення
    return (
        <div className={'addressUser'}>
            <ul><h3>Address</h3>
                <li>{city}</li>
                <li>{street}</li>
                <li>{suite}</li>
                <li>{zipcode}</li>
            </ul>

            <Geo geo={geo}/>
        </div>
    );
}