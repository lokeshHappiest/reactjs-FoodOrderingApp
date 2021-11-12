import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  console.log("props.input = " + JSON.stringify(props.input));
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
