import React from "react";
import Button from "../Button/Button";
import OderLocation from "./OderLocation";
import "./Items.css";
const Items = (props) => {
  return (
    <div className="food-items">
      <span>
        {" "}
        <img src={props.image} className="food-img" alt="" />
      </span>
      <span>{props.name}</span>
      <span className="location">
        <OderLocation>{props.location}</OderLocation>
      </span>
      <span>${props.price}</span>
      <span>
        {" "}
        <Button> Order Now</Button>
      </span>
    </div>
  );
};

export default Items;
