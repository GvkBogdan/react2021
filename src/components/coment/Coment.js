import './Coment.css'

export default function Coment({coment}) {
    return (
        <div>
            <div className={'comment-box'}><h3>Comment:</h3>
                <h5>Comment name:</h5>
                <p><i>{coment.name}</i></p>
                <h5>Comment body:</h5>
                <p><i>{coment.body}</i></p>
            </div>

        </div>
    );
}