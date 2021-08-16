import {useEffect, useState} from "react";
import {getPosts} from "../services/fetch.services";
import Post from "../post/Post";
import './Posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([])
    let [details, setDetails] = useState(null)


    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])

    const postInfo = (postDetails) => {
        setDetails(postDetails)
    }

    return (
        <div className={'wrap'}>

            <div className={'posts-box'}>{posts.map(value => <Post allPosts={value} key={value.id}
            postInfo={postInfo}/>)}

            </div>

            {details && <div className={'posts-details'}>
                <h4>Body of post: </h4><i>{details.body}</i>

            </div>}

        </div>
    );
}