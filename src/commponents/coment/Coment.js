export default function Coment({allComents, comentInfo}) {

    const comentDetails = () => {
        comentInfo (allComents)
    }
    return (
        <div>

            <div> Comment id № {allComents.postId}
                Name of comment: {allComents.name}
                <button onClick={comentDetails}>Details</button>

            </div>

        </div>
    );
}