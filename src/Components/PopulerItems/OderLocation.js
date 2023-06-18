import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./OrderLocation.css";
const OderLocation = (props) => {
  return (
    <div>
      <div className="location">
        <span className="location-icon">
          {" "}
          <FaMapMarkerAlt />
        </span>
        <div className="current-location-txt">
          <span className="text-change"> {props.children}</span>
        </div>
      </div>
    </div>
  );
};

export default OderLocation;
