import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-component">
      <label for="input-id" className="label-element">{label}</label>
      <input id="input-id" className="input-element" name={name} type={type} placeholder={placeholder}></input>
    </div>
  );
}

export default Input;
