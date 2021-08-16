export default function Posts({post}) {

    return (
        <div>

            <h4>Title of post - User - {post.userId}</h4>
            <p><i>-{post.title} </i></p>
            <h5>Body of post:</h5>
            <p><i>-{post.body}</i></p>

        </div>
    );
}