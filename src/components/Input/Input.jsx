import classes from "./Input.module.scss";

function Input({ inputId, value, getTaskTitleValue, style, ...props }) {
  return (
    <input
      onChange={getTaskTitleValue}
      value={value}
      id={inputId}
      type="text"
      className={classes.input}
      style={{
        outline: style,
      }}
    />
  );
}

export default Input;
