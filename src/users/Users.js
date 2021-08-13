import {useEffect, useState} from "react";
import {getUsers} from "../users.axios";
import User from "../user/User";

export default function Users() {

  let [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(({data}) => setUsers ([...data]) )
  },[])

  return (

    <div>

      {users.map(value => <User user = {value} key = {value.id}/>)}

    </div>
  );
}