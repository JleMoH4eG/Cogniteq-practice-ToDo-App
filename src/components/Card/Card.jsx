import classes from "./Card.module.scss";

function Card({ taskName, taskDescription, taskDate, ...props }) {
  return (
    <div className={classes.card} {...props}>
      <h2 className={classes.cardTitle}>{taskName}</h2>
      <p className={classes.cardTask}>{taskDescription}</p>
      <time className={classes.cardDate}>{`Published: ${taskDate}`}</time>
    </div>
  );
}

export default Card;
