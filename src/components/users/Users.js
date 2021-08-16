import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../../fetch.servisec/ferch.services";
import User from "../user/User";
import './Users.css'
import Posts from "../posts/Posts";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null)
    let [post, setPost] = useState([])


    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    const choserUserPost = (usr) => {
        setUser({...usr})

        getPosts(usr.id).then(value => setPost([...value]))

    }

    return (
        <div className={'wrap'}>

            <div className={'user-box'}>
                {
                    users.map(value => <User key={value.id} user={value} choserUser={choserUserPost}/>)

                }

            </div>

            {
                user && <div className={'chose-one'}>
                    {JSON.stringify(` Name of User - ${user.name}`)}{JSON.stringify()}
                    {
                        post.map(value => <Posts post={value} key={value.id}/>)
                    }

                </div>

            }

        </div>
    );
}