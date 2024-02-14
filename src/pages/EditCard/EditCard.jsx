import classes from "./EditCard.module.scss";
import inputClasses from "./../../components/Input/Input.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCard } from "../../store/toDoSlice";

function EditCard() {
  // Task's title value control
  const [taskTitleValue, setTaskTitleValue] = useState("");
  const handleInputTitle = (event) => {
    setTaskTitleValue(event.target.value);
  };

  // Task's description value control
  const [taskDescriptionValue, setTaskDescriptionValue] = useState("");
  const handleInputDescription = (event) => {
    setTaskDescriptionValue(event.target.value);
  };

  // Task's comleted value control
  const [taskCompletedValue, setTaskCompletedValue] = useState(false);
  const handleCheckbox = () => {
    setTaskCompletedValue(!taskCompletedValue);
  };

  // Get card data and initializing form starting values
  const navigateTo = useNavigate();
  const { id } = useParams();
  const cardsData = useSelector((state) => state.toDos.cards);

  useEffect(() => {
    const currentData = cardsData.find((item) => item.id === id);
    if (!currentData) navigateTo("/");
    else {
      setTaskTitleValue(currentData.title);
      setTaskDescriptionValue(currentData.description);
      setTaskCompletedValue(currentData.completed);
    }
  }, [id, navigateTo, cardsData]);

  // Edit card data in local storage
  const dispatch = useDispatch();
  const editCardData = (event) => {
    event.preventDefault();
    dispatch(
      editCard({
        id: id,
        newTitle: taskTitleValue,
        newDescription: taskDescriptionValue,
        newCompleted: taskCompletedValue,
      })
    );
    navigateTo("/");
  };

  return (
    <section className={classes.editCard}>
      <h1 className={classes.editCardTitle}>Edit your task</h1>
      <form
        action="#///"
        onSubmit={editCardData}
        method="post"
        id="editCardForm"
        className={classes.editCardForm}
      >
        <label htmlFor="editTaskTitle" className={classes.editCardLabel}>
          Your task's title:
        </label>
        <Input
          onChange={handleInputTitle}
          inputId={"editTaskTitle"}
          value={taskTitleValue}
          className={
            taskTitleValue.trim().length === 0 ? inputClasses.empty : ""
          }
        />

        <label htmlFor="editTaskDescription" className={classes.editCardLabel}>
          Your task's description:
        </label>
        <textarea
          id="editTaskDescription"
          name="editTaskDescription"
          className={
            taskDescriptionValue.trim().length === 0
              ? classes.editTaskDescription + " " + classes.empty
              : classes.editTaskDescription
          }
          value={taskDescriptionValue}
          onChange={handleInputDescription}
        />

        <div className={classes.editCardChecboxContainer}>
          <input
            type="checkbox"
            name="editCardCheckbox"
            id="editCardCheckbox"
            className={classes.editCardCheckbox}
            checked={taskCompletedValue}
            onChange={handleCheckbox}
          />
          <label
            htmlFor="editCardCheckbox"
            className={classes.editCardCheckboxLabel}
          >
            Completed
          </label>
        </div>

        <Button
          disabled={
            taskTitleValue.trim().length === 0 ||
            taskDescriptionValue.trim().length === 0
          }
          title={"Edit"}
          type={"submit"}
        />
      </form>

      <div className={classes.editCardReturnButtonContainer}>
        <Link to={"/"}>
          <span className={classes.editCardReturnButton} />
        </Link>
      </div>
    </section>
  );
}

export default EditCard;
