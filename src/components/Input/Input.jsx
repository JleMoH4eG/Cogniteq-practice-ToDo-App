import classes from "./Input.module.scss";

function Input({ inputId, value, getTaskTitleValue, style, ...props }) {
  // need to change getTaskTitleValue to onChange
  // const classNames = [classes.input]
  // if (props.className) classNames.push(props.className) 
  // in <input className={classNames.join(' ')}
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
