import "./styles.css";

// children 
function Button_children({ children = "Send" }) {
  return <button className="button-component">{children}</button>;
}

export default Button_children;
