import "./styles.css";

// Компоненты, как обычные функции могут принимать аргументы
// Но можеи принимать в себя только 1 аргумент - это ОБЬЕКТ!!!
// Этот обьект называется props
// По умолчанию props - пустой обьеки, если в него ничего не передается
function SimpsonsCard({ userData }) {
  const { avatar, firstName, lastName, job, hobby } = userData;
  return (
    <div className="card-wrapper">
      <img className="avatar" src={avatar} alt="Avatar" />
      <p className="card-item">
        Full name: {firstName} {lastName}
      </p>
      <p className="card-item">Job: {job}</p>
      <p className="card-item">Hobby: {hobby}</p>
    </div>
  );
}

export default SimpsonsCard;
