import {useEffect, useState} from "react";
import {getPosts, getUsers} from "../../fetch.servisec/ferch.services";
import User from "../user/User";
import './Users.css'
import Posts from "../posts/Posts";

export default function Users() {

  let [users, setUsers] = useState([]);
  let [user, setUser] = useState(null)
  let [posts, setPosts] = useState([])


  useEffect(() => {
    getUsers().then(value => setUsers([...value]))
  },[])

  const choserUser = (usr,pos) =>{
    setUser({...usr})

    getPosts(usr.id).then(value => setPosts([...value]))

  }

  return (
    <div className={'wrap'}>

      <div className={'user-box'}>
        {
          users.map(value => <User key={value.id} item={value}choserUser ={choserUser}/>)

        }
        <div>
          {
            posts.map(value => <Posts post={value} key={value.id}/>)
          }
        </div>


      </div>

      {
        user && <div className={'chose-one'}>
        {JSON.stringify(user.name)}{JSON.stringify(posts)}


      </div>
      }

    </div>
  );
}