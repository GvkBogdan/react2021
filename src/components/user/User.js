import './User.css'

export default function User({user}) {

    return (
        <div className={'user-bloc'}>

            <div className={'user-box'}><h3>Users - {user.id}</h3>
                <h4>{user.name} - {user.username}</h4>
                <ul>Contacts:
                    <li>Phone: {user.phone}</li>
                    <li>Email: {user.email}</li>
                    <li>Website: {user.website}</li>
                </ul>

            </div>

        </div>
    );
}