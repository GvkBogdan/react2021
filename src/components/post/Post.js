import './Post.css'

export default function Post({post}) {
    return (
        <div>

            <div className={'post-box'}><h3> - Post </h3>
                <h4>Post title:</h4>
                <p><i> - {post.title}</i></p>
                <h4>Post body:</h4>
                <p> - {post.body}</p>
            </div>

        </div>
    );
}