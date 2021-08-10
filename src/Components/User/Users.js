import './User.css'

export default function User({name, surname, age, info, photo}) {


    return (
        <div className={'user'}>
            <div>
                <h2>{name} {surname} </h2>
                <h3>Age is {age}</h3>
                <h3>Info above {name}</h3>
                <p>{info}</p>
                <img src={photo} alt=""/>
                <hr/>
            </div>

        </div>
    );
}