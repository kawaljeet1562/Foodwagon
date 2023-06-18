import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={
        props.style && classes.btn ? props.style && classes.btn : classes.btn
      }
      type={props.type || "button"}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
