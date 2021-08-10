import Address from "./Address";

export default function User({i, users}) { // витягуємо певний елемент масиву чере "і" (перший, чи други1.....)
    if (i >users.length ) return (
        <>
            <h2>This is wrong user!!!</h2>
            <hr/>
        </>
    )
    const {id, name, username, email, phone, address} = users[i]; //диструктиризуємо, присвоюємо змінній її значення
    return (

        <div className={'user'}>

            <div className={'user1'}>
                <h2> id № - {id} {name}</h2>
                <h3> {username}</h3>
                <h4> email - {email}</h4>
                <h4> phone № - {phone}</h4>

                <Address address={address}/>
            </div>
            <hr/>
        </div>


    );
}