import "./styles.css";
import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";

const clickOnMe = (event, someAtribute) => {
  console.log(event);
  console.log(someAtribute);
  console.log("Trhigger on button works, button is clicked");
};

// preventDefault() - убираем перезагрузку страницы
const login = (event) => {
  event.preventDefault();
  console.log(event);
  console.log("user logged in succesfully");
};

function Lesson_04() {
  return (
    <div>
      {/* пример работы с триггерами */}
      {/* добавляем eventListener все го лишь тегом onClick */}
      <button onClick={(event) => clickOnMe(event, "additional logic or message")}>
        Button
      </button>
      <Button onClick={login} />
      <Counter />
    </div>
  );
}

export default Lesson_04;
