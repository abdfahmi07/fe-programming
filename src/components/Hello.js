const Hello = (props) => {
  return (
    <div className="hello">
      <h2>Hello, {props.name}!</h2>
      <p>
        Saya {props.name} - {props.profession}
      </p>
    </div>
  );
};

export default Hello;
