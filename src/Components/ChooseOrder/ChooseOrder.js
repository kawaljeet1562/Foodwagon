import React from "react";
import SectionHeading from "./SectionHeading";
import "./ChooseOrder.css";
import OderItems from "./OderItems";
const ChooseOrder = () => {
  const SelectOrder = [
    {
      id: "o1",
      image: "/images/Group.jpg",
      title: "Select location",
      features: "Choose the location where your food will be delivered.",
    },
    {
      id: "o2",
      image: "./images/menu 2.jpg",
      title: "Choose order",
      features: "Check over hundreds of menus to pick your favorite food",
    },
    {
      id: "o3",
      image: "./images/Invoice.jpg",
      title: "Pay advanced ",
      features:
        "It's quick, safe, and simple. Select several methods of payment",
    },
    {
      id: "o4",
      image: "./images/Group (1).jpg",
      title: "enjoy meals",
      features: "Food is made and delivered directly to your home.",
    },
  ];

  return (
    <div className="main-container">
      <SectionHeading>How does it work</SectionHeading>
      <div className="order-container">
        {SelectOrder.map((order, i) => {
          return (
            <OderItems
              key={order.id}
              image={order.image}
              title={order.title}
              features={order.features}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChooseOrder;
