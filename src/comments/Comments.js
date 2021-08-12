import {useEffect, useState} from "react";
import {getComments} from "../comment.service";
import Comment from "../comment/Comment";

export default function Comments() {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(value => setComments([...value]));
    },[]);

    return (
        <div>
            {
                comments.map(value => <Comment comment={value} key={value.id}/>)
            };
        </div>
    );
}