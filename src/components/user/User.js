export default function User({item,choserUser}) {

  const oncliclUserChose = () => {
    choserUser(item);
  }


  return (
    <div>
      {item.id} - {item.name}
      <button onClick={oncliclUserChose}> Info of post </button>
    </div>


  );
}