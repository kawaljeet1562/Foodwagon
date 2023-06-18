import React from "react";
import "./Cards.css";

const FlashDeals = (props) => {
  return (
    <div className="cards-container">
      <div className="cards-img">
        <span>
          <img src={props.image} className="img-set" alt="" />
        </span>
        <div className="discount-container">
          <div className="discount">
            <span>
              <h3>{props.discount}</h3>
            </span>
            <div className="discount-percntge">
              <span>%</span>
              <span>off</span>
            </div>
          </div>
        </div>
      </div>
      <div className="offer-detail">
        <span className="deal-txt">{props.name}</span>
        <span className="deal-vaid-offer">{props.offerdetail}</span>
      </div>
    </div>
  );
};

export default FlashDeals;
