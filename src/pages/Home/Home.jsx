import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import classes from "./Home.module.scss";
import inputClasses from "./../../components/Input/Input.module.scss";
import uuid from "react-uuid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Home() {
  // New task's title value control
  const [taskTitleValue, setTaskTitleValue] = useState("");
  const handleInputTitle = (event) => {
    setTaskTitleValue(event.target.value);
  };

  // New task's description value control
  const [taskDescriptionValue, setTaskDescriptionValue] = useState("");
  const handleInputDescription = (event) => {
    setTaskDescriptionValue(event.target.value);
  };

  // Create a beautiful date
  const createDate = () => {
    const date = new Date().toString().split(" ");
    const result = `${date[0]}, ${date[2]} ${date[1]} ${date[3]}, ${date[4]}`;

    return result;
  };

  // Form submit functional
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cardsData")) || [];
    setCardsData(data);
  }, []);

  const saveFormData = (event) => {
    event.preventDefault();
    const newTaskObject = {
      title: taskTitleValue,
      description: taskDescriptionValue,
      date: createDate(),
      completed: false,
      id: uuid(),
    };
    // add please catch
    try {
      let newData = cardsData;
      newData.push(newTaskObject);
      setCardsData(newData);
      localStorage.setItem("cardsData", JSON.stringify(cardsData));
    } finally {
      setTaskTitleValue("");
      setTaskDescriptionValue("");
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
          onChange={handleInputTitle}
          inputId={"toDoFormTaskTitle"}
          value={taskTitleValue}
          className={
            taskTitleValue.trim().length === 0 ? inputClasses.empty : ""
          }
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
          className={
            taskDescriptionValue.trim().length === 0
              ? classes.toDoFormTaskDescriptionField + " " + classes.empty
              : classes.toDoFormTaskDescriptionField
          }
          value={taskDescriptionValue}
          onChange={handleInputDescription}
        ></textarea>

        <Button
          disabled={
            taskTitleValue.trim().length === 0 ||
            taskDescriptionValue.trim().length === 0
          }
          title={"Create"}
          type={"submit"}
        />
      </form>

      {/* Cards */}
      <ul className={classes.cardsContainer}>
        {cardsData.map((card) => (
          <li key={card.id} className={classes.cardLi}>
            <Link to={`/edit/${card.id}`}>
              <Card
                taskName={card.title}
                taskDescription={card.description}
                taskDate={card.date}
                isCompleted={card.completed}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
