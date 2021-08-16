export default function Post({allPosts, postInfo}) {

    const postDetalis = () => {
        postInfo (allPosts)
    }

    return (
        <div>
            <div>User id № {allPosts.userId}
                Title of Post: {allPosts.title}
                <button onClick={postDetalis}>Details</button>
            </div>
        </div>
    );
}