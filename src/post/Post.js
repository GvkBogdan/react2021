import {useEffect, useState} from "react";
import {getComments} from "../comments.axios";
import Comment from "../comment/Comment";
import './Post.css'

export default function Post({post}) {
    let[comments, setComments] = useState([])
    useEffect(() => {
        getComments(post.id).then(value => setComments(value.data))
    },[])
  return (
    <div className={'post'}>
        <h3>Post of users: </h3>

      <h5>Body of post: {post.id} </h5>
      <p><i> - {post.body}</i></p>
      <h5>Title of post: {post.id} </h5>
      <p><i> - {post.title}</i></p>

        {comments.map(value => <Comment key={value.id} comment={value}/>)}

    </div>
  );
}