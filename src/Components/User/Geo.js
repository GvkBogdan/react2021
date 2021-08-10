export default function Geo({geo: {lat, lng}}) {
    return (
        <ul className={'geo'}>
            <h4>Geo</h4>
            <li>{lat}</li>
            <li>{lng}</li>
        </ul>
    );
}