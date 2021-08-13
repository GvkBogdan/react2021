import './Comment.css'
export default function Comment({comment}) {
  return (
    <div className={'comment'}>

      <h5>Comment name:</h5>
      <p> - {comment.name}</p>
      <h5>Comment body:</h5>
      <p><i>{comment.body}</i></p>


    </div>
  );
}