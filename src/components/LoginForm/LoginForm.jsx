import "./styles.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function LoginForm() {
  return (
    <form className="login-form-component">
      <p2 className="title">Login form</p2>
      <div className="input-container">
        <Input
          id={"email"}
          htmlForor={"email"}
          name={"email"}
          label={"Email"}
          type={"email"}
          placeholder={"Enter your email"}
        />
        <Input
          id={"password"}
          htmlForor={"password"}
          name={"password"}
          label={"Password"}
          type={"password"}
          placeholder={"Enter your password"}
        />
      </div>
      <Button type={"submit"} name="Login" />
    </form>
  );
}

export default LoginForm;
