import {useEffect, useState} from "react";
import {getPosts} from "../post.service";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (

        <div>
            {posts.map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
}