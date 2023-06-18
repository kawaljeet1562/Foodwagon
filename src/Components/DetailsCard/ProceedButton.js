import React from "react";
import classes from "./ProceedButon.module.css";
const ProceedButton = (props) => {
  return (
    <div>
      <button
        className={classes.buton}
        type={props.type || "buton"}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </button>
    </div>
  );
};

export default ProceedButton;
