import "./styles.css";

function Input({ id, name, type, placeholder, label }) {
  return (
    <div className="input-component">
      <label htmlForor={id} className="label-element">{label}</label>
      <input id={id} className="input-element" name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
