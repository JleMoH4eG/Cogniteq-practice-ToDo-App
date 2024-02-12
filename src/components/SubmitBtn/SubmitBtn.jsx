import classes from "./SubmitBtn.module.scss";

function SubmitBtn({ disabled, ...props }) {
  // title as props
  return (
    <button disabled={disabled} className={classes.button}>
      Create
    </button>
  );
}

export default SubmitBtn;
