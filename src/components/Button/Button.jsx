import classes from "./Button.module.scss";

function Button({ title, type, disabled, ...props }) {
  return (
    <button disabled={disabled} type={type} className={classes.button}>
      {title}
    </button>
  );
}

export default Button;
