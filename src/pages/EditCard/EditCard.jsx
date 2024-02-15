import classes from "./EditCard.module.scss";
import inputClasses from "./../../components/Input/Input.module.scss";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCard, deleteCard, getCardById } from "../../store/toDoSlice";

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

  // Create a beautiful date
  const createDate = () => {
    const date = new Date().toString().split(" ");
    const result = `${date[0]}, ${date[2]} ${date[1]} ${date[3]}, ${date[4]}`;

    return result;
  };

  // Get card data and initializing form starting values
  const navigateTo = useNavigate();
  const { id } = useParams();
  const cardsData = useSelector((state) => state.toDos.cards);
  const currentCardData = useSelector((state) => state.toDos.currentCard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardById({ id: id }));
    if (!currentCardData) navigateTo("/");
    else {
      setTaskTitleValue(currentCardData.title);
      setTaskDescriptionValue(currentCardData.description);
      setTaskCompletedValue(currentCardData.completed);
    }
  }, [id, navigateTo, currentCardData, dispatch]);

  // Edit card data in local storage
  const editCardData = (event) => {
    event.preventDefault();
    const currentCard = { ...currentCardData };
    currentCard.title = taskTitleValue;
    currentCard.description = taskDescriptionValue;
    currentCard.completed = taskCompletedValue;
    currentCard.date = createDate();
    dispatch(
      editCard({
        card: currentCard,
      })
    );
    navigateTo("/");
  };

  // Delete card from local storage
  const deleteCurrentCard = (event) => {
    event.preventDefault();
    dispatch(deleteCard());
    navigateTo("/");
  };

  return (
    <section className={classes.editCard}>
      <h1 className={classes.editCardTitle}>Edit your task</h1>
      <form
        action="#///"
        onSubmit={editCardData}
        onReset={deleteCurrentCard}
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
        <Button
          disabled={
            taskTitleValue.trim().length === 0 ||
            taskDescriptionValue.trim().length === 0
          }
          title={"Delete task"}
          type={"reset"}
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
