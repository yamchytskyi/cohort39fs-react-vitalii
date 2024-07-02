import "./styles.css";

function Button({ name = "Button", type = "button", onClick }) {
  return (
    <button className="button-component" type={type} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;
