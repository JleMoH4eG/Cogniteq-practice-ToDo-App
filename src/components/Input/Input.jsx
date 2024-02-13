import classes from "./Input.module.scss";

function Input({ inputId, value, onChange, ...props }) {
  const classNames = [classes.input];
  if (props.className) classNames.push(props.className);

  return (
    <input
      onChange={onChange}
      value={value}
      id={inputId}
      type="text"
      className={classNames.join(" ")}
    />
  );
}

export default Input;
