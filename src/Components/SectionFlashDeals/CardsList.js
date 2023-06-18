import React from "react";
import Cards from "./Cards.js";
import "./CardList.css";
const CardsList = () => {
  const Deals = [
    {
      id: "d1",
      image: "../images/Image (1).jpg",
      discount: 15,
      name: "Greys Vage",
      offerdetail: "6 Days Remaining",
    },
    {
      id: "d2",
      image: "./images/Image (2).jpg",
      discount: 10,
      name: "Greys Vage",
      offerdetail: "6 Days Remaining",
    },
    {
      id: "d3",
      image: "./images/Image (3).jpg",
      discount: 25,
      name: "Greys Vage",
      offerdetail: "6 Days Remaining",
    },
    {
      id: "d4",
      image: "images/Image (4).jpg",
      discount: 25,
      name: "Greys Vage",
      offerdetail: "6 Days Remaining",
    },
  ];
  return (
    <div className="deals-container">
      <div className="cards">
        {Deals.map((offer, i) => {
          return (
            <Cards
              key={offer.id}
              image={offer.image}
              discount={offer.discount}
              name={offer.name}
              offerdetail={offer.offerdetail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsList;
