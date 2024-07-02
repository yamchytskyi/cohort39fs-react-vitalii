import "./styles.css";
import { useState } from "react";
import Button from "../../components/Button/Button";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLike  = () => {
    setLikes((prevValue) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setDislikes((prevValue) => {
      return prevValue + 1;
    });
  };

  const resetResults = () => {
    setDislikes(0);
    setLikes(0);
  };
  return (
    <div className="wrapper">
      <Button name="Like" onClick={onLike } />
      <p className="likes-counter">{likes}</p>
      <Button name="Dislake" onClick={onDislike} />
      <p className="dislikes-counter">{dislikes}</p>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
