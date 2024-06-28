import "./styles.css";
import avatar from "../../assets/avatar.png";
import Button from "../../components/Button/Button";
import { userData } from "./data";

function Consultation_02() {
  const showButton = true;

  return (
    <div className="consultation_01_component">
      {/* Пример работы условного рендеринга - && */}
      {/* Если showButton = true, кропка отображается, false - нет */}
      {showButton && <Button />}

      {/* 1й способ изменения картинки - добавление класса к тегу img */}
      <img className="avatar-img" src={avatar} alt="my avatar" />

      <div>{userData.userName}</div>
      {/* 2й способ изменения картинки - добавление обёртки */}
      <div className="tom_img_container">
        <img id="tom_img" src={userData.avatar} />
      </div>
    </div>
  );
}

export default Consultation_02;
