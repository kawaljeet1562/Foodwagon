import React from "react";
import ProceedButton from "../DetailsCard/ProceedButton";
import "./Order.css";
import { FaGreaterThan } from "react-icons/fa";
const Order = () => {
  return (
    <div className="order-bg">
      <div>
        <h1>Are you ready to order with the best deals?</h1>
      </div>
      <ProceedButton style={{ background: "#F17228", color: "white" }}>
        Proceed to order
        <FaGreaterThan />
      </ProceedButton>
    </div>
  );
};

export default Order;
