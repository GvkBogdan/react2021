import {useEffect, useState} from "react";
import {getComments} from "../fetch.services/fetch.services";
import Coment from "../coment/Coment";

export default function Comments() {

    let [comments, setComments] = useState([])

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    return (
        <div>

            {
                comments.map(value => <Coment coment={value} key={value.id}/>)
            }

        </div>
    );
}