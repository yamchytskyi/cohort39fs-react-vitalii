import "./styles.css";
import { useState } from "react";
import Button from "../../components/Button/Button";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const toLike = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  const toDislike = () => {
    setDislikes((prevValue) => {
      return prevValue + 1;
    });
  };

  const toReset = () => {
    setDislikes(0);
    setLikes(0);
  };
  return (
    <div className="wrapper">
      <Button name="Like" onClick={toLike} />
      <p className="likes-counter">{likes}</p>
      <Button name="Dislake" onClick={toDislike} />
      <p className="dislikes-counter">{dislikes}</p>
      <Button name="Reset Results" onClick={toReset} />
    </div>
  );
}

export default Feedback;
