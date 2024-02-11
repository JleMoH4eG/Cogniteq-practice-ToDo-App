import classes from "./SubmitBtn.module.scss";

function SubmitBtn({ disabled, ...props }) {
  return (
    <button disabled={disabled} className={classes.button}>
      Create
    </button>
  );
}

export default SubmitBtn;
