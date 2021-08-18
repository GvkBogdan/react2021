import {useEffect, useState} from "react";
import {getUsers} from "../fetch.services/fetch.services";
import User from "../user/User";

export default function Users() {

  let [users, setUser] = useState([]);

  useEffect(() => {
    getUsers().then(value => setUser([...value]))
  })

  return (
    <div>

      {
        users.map(value => <User user={value} key={value.id}/>)
      }

    </div>
  );
}