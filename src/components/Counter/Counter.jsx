import "./styles.css";
import Button from "../../components/Button/Button";

// Импорт функции из библиотеки React
import { useState } from "react";

function Counter() {
  // Функция-хук useState() возвразает массив их 2х элементов
  // - 1 элемент - это переменная состояния
  // - 2 функция, которая меняет это состояние
  // По умолчанию count = undefind, если мы ничего не передаем в качестве аргумента в функцию useState()
  const [count, setCount] = useState(0);
  console.log(count);
  console.log(setCount);

  const onPlus = () => {
    setCount((prevValue)  => {
        return prevValue + 1;
    })
  }

  const onMinus = () => {
    setCount((prevValue) => {
        return prevValue - 1;
    })
  }

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
