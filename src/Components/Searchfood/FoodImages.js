import React from "react";
import "./FoodImages.css";
const FoodImages = (props) => {
  return (
    <div>
      <div className="food-info">
        <img src={props.image} className="fooditems-img" alt="" />
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default FoodImages;
