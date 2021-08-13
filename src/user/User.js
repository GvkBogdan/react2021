import {useEffect, useState} from "react";
import {getPosts} from "../users.axios";
import Post from "../post/Post";
import './User.css'
export default function User({user}) {

    let[posts, setPosts] = useState([])
    useEffect(() => {
        getPosts(user.id).then(({data}) => setPosts([...data]));
    },[user.id])

  return (

    <div className={'users'}>

        <div className={'user'}><h3>{user.name} _ {user.username}</h3>
            <h4>user id № {user.id}</h4>
            <ul><h4>Contacts:</h4>
                <li>Phone: {user.phone}</li>
                <li>Email: {user.email}</li>
            </ul>
        </div>

        {posts.map(value => <Post post={value} key={value.id}/>)}


    </div>
  );
}