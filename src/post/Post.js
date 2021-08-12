export default function Post({post}) {
    return (

        <div>
            <h4> Body of post:</h4>
            <p> - {post.body}</p>
            <h4> Title of post:</h4>
            <p><i> - {post.title}</i></p>
            <hr/>
        </div>
    );
}
