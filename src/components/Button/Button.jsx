import "./styles.css";

function Button({ name = "Button" , type = "button"}) {
  return <button className="button-component" type={type}>{name}</button>;
}

export default Button;
