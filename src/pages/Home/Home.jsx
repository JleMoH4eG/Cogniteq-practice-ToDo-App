import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import SubmitBtn from "../../components/SubmitBtn/SubmitBtn";
import classes from "./Home.module.scss";
import { useState, useId } from "react";

function Home() {
  // New task's title value control
  const [taskTitleValue, setTaskTitleValue] = useState("");
  // remove it
  const [taskTitleEmpty, setTaskTitleEmpty] = useState(true);
  const [taskTitleEdited, setTaskTitleEdited] = useState(false);
  // handleInputTitle
  const getTaskTitleValue = (event) => {
    setTaskTitleValue(event.target.value);
    setTaskTitleEmpty(event.target.value.trim().length === 0);
    setTaskTitleEdited(true);
  };

  // New task's description value control
  const [taskDescriptionValue, setTaskDescriptionValue] = useState("");
  // remove it
  const [taskDescriptionEmpty, setTaskDescriptionEmpty] = useState(true);
  const [taskDescriptionEdited, setTaskDescriptionEdited] = useState(false);
  // better name it like handleInputDescription
  const getTaskDescriptionValue = (event) => {
    setTaskDescriptionValue(event.target.value);
    setTaskDescriptionEmpty(event.target.value.trim().length === 0);
    setTaskDescriptionEdited(true);
  };

  // Create a beautiful date
  const createDate = () => {
    const date = new Date().toString().split(" ");
    const result = `${date[0]}, ${date[2]} ${date[1]} ${date[3]}, ${date[4]}`;

    return result;
  };

  // Form submit functional
  // TODO: better create in fn, where're going to use it
  const newTaskObject = {
    title: taskTitleValue,
    description: taskDescriptionValue,
    date: createDate(),
    comleted: false,
    id: useId() + createDate(),
  };

  const saveFormData = (event) => {
    event.preventDefault();
    const newTaskObject = {
      title: taskTitleValue,
      description: taskDescriptionValue,
      date: createDate(),
      comleted: false,
      id: useId() + createDate(),
    };
    setTaskTitleValue("");
    setTaskDescriptionValue("");
    setTaskTitleEmpty(true);
    setTaskDescriptionEmpty(true);
    setTaskTitleEdited(false);
    setTaskDescriptionEdited(false);
    // remove it from here, need to get data in useEffect hook, and set state like const [cardsData, setCardsData] = useState([])
    if (localStorage.getItem("cardsData")) {
      const data = JSON.parse(localStorage.getItem("cardsData"));
      data.push(newTaskObject);
      localStorage.setItem("cardsData", JSON.stringify(data));
    } else {
      const data = [];
      data.push(newTaskObject);
      localStorage.setItem("cardsData", JSON.stringify(data));
    }
  };

  return (
    <section className={classes.home}>
      {/* Todo Form */}
      <h1 className={classes.homeTitle}>Create a new task</h1>
      <form
        action="#///"
        onSubmit={saveFormData}
        method="post"
        id="toDoForm"
        className={classes.toDoForm}
      >
        <label htmlFor="toDoFormTaskTitle" className={classes.toDoFormLabel}>
          New task's title:
        </label>
        <Input
          getTaskTitleValue={getTaskTitleValue}
          inputId={"toDoFormTaskTitle"}
          value={taskTitleValue}
          style={taskTitleEmpty && taskTitleEdited ? "2px solid #db2121" : ""}
        />

        <label
          htmlFor="toDoFormTaskDescriptionField"
          className={classes.toDoFormLabel}
        >
          New task's description:
        </label>
        <textarea
          id="toDoFormTaskDescriptionField"
          name="toDoFormTaskDescriptionField"
          className={classes.toDoFormTaskDescriptionField}
          value={taskDescriptionValue}
          onChange={getTaskDescriptionValue}
          style={{
            outline:
              taskDescriptionEmpty && taskDescriptionEdited
                ? "2px solid #db2121"
                : "",
          }}
        ></textarea>

        <SubmitBtn disabled={taskTitleEmpty || taskDescriptionEmpty} />
      </form>

      {/* Cards */}
      <ul className={classes.cardsContainer}>
        {localStorage.getItem("cardsData") &&
          JSON.parse(localStorage.getItem("cardsData")).map((card) => (
            <li key={card.id} className={classes.cardLi}>
              <Card
                taskName={card.title}
                taskDescription={card.description}
                taskDate={card.date}
              />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Home;
