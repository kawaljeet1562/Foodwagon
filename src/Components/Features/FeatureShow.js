import React from "react";

import "./FeatureShow.css";
const FeatureShow = (props) => {
  return (
    <div>
      <div className="features-show">
        <div>
          <img src={props.icon} className="feature-img" alt="" />
        </div>
        <div className="feature-title">{props.title}</div>
        <div className="grey-line"></div>
      </div>
    </div>
  );
};

export default FeatureShow;
