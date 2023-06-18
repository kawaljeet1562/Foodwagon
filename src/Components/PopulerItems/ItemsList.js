import React from "react";
import SectionHeading from "../ChooseOrder/SectionHeading";
import Items from "./Items";
import "./ItemsList.css";
function ItemsList() {
  const orderItem = [
    {
      id: "i1",
      image: "/images/Rectangle 336.jpg",
      name: "Cheese Burger",
      price: "3.88",
      location: "Burger Arena",
    },
    {
      id: "i2",
      image: "/images/Rectangle 336 (1).jpg",
      name: "Toffe’s Cake",
      price: "4.00",
      location: "Top Sticks",
    },
    {
      id: "i3",
      image: "/images/Rectangle 336 (2).jpg",
      name: "Dancake",
      price: "1.99",
      location: "Cake World",
    },
    {
      id: "i4",
      image: "/images/Rectangle 336 (3).jpg",
      name: "Crispy Sandwitch",
      price: "3.00",
      location: "Fastfood Dine",
    },
    {
      id: "i5",
      image: "/images/Rectangle 336 (4).jpg",
      name: "Thai  Soup",
      price: "2.79",
      location: "Foody man",
    },
  ];
  return (
    <div className="items-container">
      <SectionHeading>Popular Items</SectionHeading>
      <div className="orderitem-container">
        {orderItem.map((item, i) => {
          return (
            <Items
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              location={item.location}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemsList;
