import React from "react";
import { FaAlignLeft, FaClock, FaStar } from "react-icons/fa";

import "./RestaurentsImage.css";
const RestaurentsImage = (props) => {
  return (
    <div className="restaurent-info">
      <div className="cards-img">
        <span>
          <img src={props.image} className="img-set" alt="" />
        </span>
        <div className="discount-container">
          <div className="discount1">
            <span>
              <FaAlignLeft></FaAlignLeft>
            </span>
            <span>
              <h3>{props.discount}</h3>
            </span>
            <div className="percntge-off">
              <span>%</span>
              <span>off</span>
            </div>
          </div>
        </div>
        <div className="Fast-clock">
          <FaClock />

          <span>Fast</span>
        </div>
      </div>

      {/* /***logo+name */}
      <div className="restaurent-logo-col">
        <div>
          <img src={props.logo} className="logo" alt="" />
        </div>
        <div>
          <span>{props.name}</span>
          <div className="starreview">
            <span>
              <FaStar />
            </span>
            <span>{props.review}</span>
          </div>
        </div>
      </div>
      <span
        className="opening"
        style={{
          color: props.opening ? "#79B93C" : "#F17228",
          backgroundColor: props.opening
            ? "rgba(121, 185, 60, 0.2)"
            : "rgba(241, 114, 40, 0.2)",
          width: props.opening ? "107px" : "197px",
        }}
      >
        {props.opening ? `Opens Now` : `Opens tommarow`}
      </span>
    </div>
  );
};

export default RestaurentsImage;
