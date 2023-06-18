import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import ProceedButton from "./ProceedButton";

import "./Details.css";
const Details = (props) => {
  return (
    <div
      className={
        props.index % 2 === 0 ? "Details-card-info" : "Details-card-info1"
      }
    >
      {console.log("index", props.index)}
      <div className="left-side">
        <div className="left-side-info">
          <h1>
            {props.titleblack}
            {props.titlecolor}
          </h1>
          <p>{props.paratext}</p>
        </div>
        <div>
          <ProceedButton>
            Proceed to order
            <FaGreaterThan />
          </ProceedButton>
        </div>
      </div>
      <div className="right-side">
        <img src={props.image} className="img-side" alt="" />
      </div>
    </div>
  );
};

export default Details;
