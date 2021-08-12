export default function Comment({comment}) {
    return (

        <div>
            <h4>comment of post {comment.postId}:</h4>
            <p><i>- {comment.body}</i></p>
            <hr/>
        </div>
    );
}