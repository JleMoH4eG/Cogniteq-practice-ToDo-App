import classes from "./Card.module.scss";

//should be div
function Card({ taskName, taskContent, taskDate }) {
  return (
    <li className={classes.card}>
      <h2 className={classes.cardTitle}>{taskName}</h2>
      <p className={classes.cardTask}>{taskContent}</p>
      <time className={classes.cardDate}>{`Опубликовано: ${taskDate}`}</time>
    </li>
  );
}

export default Card;

// const date = new Date();
// {`Опубликовано: ${date.getDate()}.${
//   date.getMonth() + 1
// }.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`}
