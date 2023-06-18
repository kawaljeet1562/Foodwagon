import React from "react";
import classes from "./SearchButton.module.css";
const SearchButton = (props) => {
  return (
    <div>
      <button
        className={classes.buttn}
        type={props.type || "button"}
        onClick={props.onClick}
        style={props.style}
      >
        {props.children}
      </button>
    </div>
  );
};

export default SearchButton;
