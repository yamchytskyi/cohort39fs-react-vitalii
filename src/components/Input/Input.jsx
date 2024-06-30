import "./styles.css";

function Input({ name, type, placeholder, label }) {
  return (
    <div className="input-form">
      <label for="input-id">{label}</label>
      <input id="input-id" className="input-component" name={name} type={type} placeholder={placeholder}></input>
    </div>
  );
}

export default Input;
