import "./styles.css";
import SimpsonsCard from "../../components/SimpsonsCard/SimpsonsCard";
import Button_children from "../../components/Button_children/Button_children";

const homerSimpson = {
  firstName: "Homer",
  lastName: "Simpson",
  job: "Nucleear Safety Inspector",
  hobby: "Beer Duff",
  avatar:
    "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
};

const margeSimpson = {
  firstName: "Marge",
  lastName: "Simpson",
  job: "No job",
  hobby: "cooking",
  avatar: "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
};

const bartSimpson = {
  firstName: "Bart",
  lastName: "Simpson",
  job: "No job",
  hobby: "Skating",
  avatar:
    "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
};

function Lesson_03() {
  return (
    <div className="lesson_03-wrapper">
      <div className="simpsons-wrapper">
        {/* <SimpsonsCard
        avatar={homerSimpson.avatar}
        firstName={homerSimpson.firstName}
        lastName={homerSimpson.lastName}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      />
      <SimpsonsCard
        avatar={margeSimpson.avatar}
        firstName={margeSimpson.firstName}
        lastName={margeSimpson.lastName}
        job={margeSimpson.job}
        hobby={margeSimpson.hobby}
      />
      <SimpsonsCard
        avatar={bartSimpson.avatar}
        firstName={bartSimpson.firstName}
        lastName={bartSimpson.lastName}
        job={bartSimpson.job}
        hobby={bartSimpson.hobby}
      /> */}
        <SimpsonsCard userData={homerSimpson} />
        <SimpsonsCard userData={margeSimpson} />
        <SimpsonsCard userData={bartSimpson} />
      </div>
      <div>
        <Button_children></Button_children>
        <Button_children>Update</Button_children>
        <Button_children>Delete</Button_children>
      </div>
    </div>
  );
}

export default Lesson_03;
