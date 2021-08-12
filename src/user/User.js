export default function User({user}) {
    return (
        <div>

            <h3> {user.name} - {user.username} </h3>
            <h4> Id of users - {user.id} </h4>
            <div><h4>Contacts:</h4>
                <ul>
                    <li>email: {user.email}</li>
                    <li>Phone: {user.phone}</li>
                </ul>
                <hr/>
            </div>
        </div>
    );
}