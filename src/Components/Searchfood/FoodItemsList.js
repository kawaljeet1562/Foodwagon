import React from "react";
import FoodImages from "./FoodImages";
import FoodSearchTop from "./FoodSearchTop";
import "./FoodItemsList.css";
const FoodItemsList = () => {
  const FoodItems = [
    {
      id: "f1",
      image: "../images/Image (21).jpg",
      name: "Pizza",
    },
    {
      id: "f2",
      image: "./images/Image (22).jpg",

      name: "Burgere",
    },
    {
      id: "f3",
      image: "./images/Image (23).jpg",

      name: "Noodles",
    },
    {
      id: "f4",
      image: "images/Image (24).jpg",

      name: "Sub-sandiwch",
    },
    {
      id: "f5",
      image: "images/Image (25).jpg",

      name: "Chowmein",
    },
    {
      id: "f6",
      image: "images/Image (26).jpg",

      name: "Steak",
    },
  ];
  return (
    <div className="main-fooditem-container ">
      <FoodSearchTop />

      <div className="cards">
        {FoodItems.map((item, i) => {
          return (
            <FoodImages key={item.id} image={item.image} name={item.name} />
          );
        })}
      </div>
    </div>
  );
};

export default FoodItemsList;
