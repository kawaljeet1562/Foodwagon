import React from "react";
import SectionHeading from "../ChooseOrder/SectionHeading";

import RestaurentsImage from "./RestaurentsImage";
import "./RestaurentsList.css";

const RestaurentsList = () => {
  const restaurents = [
    {
      id: "r1",
      image: "../images/Image (5).jpg",
      discount: 20,
      logo: "../images/Image (13).jpg",
      name: "Foodworld",
      review: "46",
      opening: false,
    },
    {
      id: "r2",
      image: "./images/Image (6).jpg",
      discount: 15,
      logo: "./images/Image (14).jpg",
      name: "Pizzahub",
      review: "40",
      opening: false,
    },
    {
      id: "r3",
      image: "./images/Image (7).jpg",
      discount: 10,
      logo: "./images/Image (15).jpg",
      name: "Donuts hut",
      review: "20",
      opening: true,
    },
    {
      id: "r4",
      image: "images/Image (8).jpg",
      discount: 15,
      logo: "images/Image (16).jpg",
      name: "Donuts hut",
      review: "50",
      opening: true,
    },
    {
      id: "r5",
      image: "images/Image (9).jpg",
      discount: 10,
      logo: "images/Image (17).jpg",
      name: "Ruby Tuesday",
      review: "26",
      opening: true,
    },
    {
      id: "r6",
      image: "images/Image (10).jpg",
      discount: 25,
      logo: "images/Image (18).jpg",
      name: "Kuakata Fried Chicken",
      review: "53",
      opening: true,
    },
    {
      id: "r7",
      image: "images/Image (11).jpg",
      discount: 10,
      logo: "images/Image (19).jpg",
      name: "Red Square",
      review: "45",
      opening: true,
    },
    {
      id: "r8",
      image: "images/Image (12).jpg",
      discount: 10,
      logo: "images/Image (20).jpg",
      name: "Taco Bell",
      review: "35",
      opening: true,
    },
  ];

  return (
    <div className="main-restaurents">
      <SectionHeading>Featured Restaurents</SectionHeading>
      <div className="restaurents-container">
        {restaurents.map((item, i) => {
          return (
            <RestaurentsImage
              key={item.id}
              image={item.image}
              discount={item.discount}
              logo={item.logo}
              name={item.name}
              review={item.review}
              opening={item.opening}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentsList;
