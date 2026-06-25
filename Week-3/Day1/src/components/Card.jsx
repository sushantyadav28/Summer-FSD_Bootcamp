function Card(props) {
  return (
    <div>
      <img src={props.image} />
      <h2>Name: {props.name}</h2>
      <h3>id: {props.id}</h3>
      <h4>Hobby: {props.hobby}</h4>
      <button>{props.text}</button>
    </div>
  );
}
export default Card;
