import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input className={inputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} onBlur={props.blurred} />
      );
      break;
    case "textarea":
      inputElement = <textarea rows="5" className={inputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} />;
      break;
    default:
      inputElement = <input className={inputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} />;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
