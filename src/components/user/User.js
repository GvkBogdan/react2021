export default function User({user, choserUser}) {

    const oncliclUserChose = () => {
        choserUser(user);
    }


    return (
        <div>

            <ul>
                <li>{user.id} - {user.name}</li>
            </ul>
            <br/>
            <button onClick={oncliclUserChose}> Info of post</button>
        </div>


    );
}