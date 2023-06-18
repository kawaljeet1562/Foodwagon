import React from "react";
import "./OrderItems.css";
const OderItems = (props) => {
  return (
    <div className="Order-detail">
      <div className="">
        {" "}
        <img src={props.image} className="food-icon" alt="" />
      </div>
      <span className="title">{props.title}</span>
      <span className="features">{props.features}</span>
    </div>
  );
};

export default OderItems;
