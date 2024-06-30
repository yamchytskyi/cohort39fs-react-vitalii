import "./styles.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

function LoginForm() {
    return (
        <div className="loginForm-component">
            <h2 className="title">Login form</h2>
            <Input name={"email"} label={"Email"} type={"email"} placeholder={"Enter your email"} />
            <Input name={"password"}  label={"Password"} type={"password"}  placeholder={"Enter your password"} />
            <Button type={"submit"} name="Login" />
        </div>
    )
}

export default LoginForm;