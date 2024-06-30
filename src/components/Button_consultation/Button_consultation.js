import "./styles.css";
function Button() {
  let name = "Delete";
  const className =
    name !== "Send"
      ? "main-button"
      : "delete-button";

  // Замена тернарного оператора на if
  const classNameIfElese = () => {
    if (name !== "Delete") {
      return "main-button";
    } else {
      return "delete-button";
    }
  };

  return <button className={`button-component ${className}`}>{name}</button>;
}

export default Button;
