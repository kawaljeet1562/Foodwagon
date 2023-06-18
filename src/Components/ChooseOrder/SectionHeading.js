import React from "react";
import "./SectionHeading.css";
const SectionHeading = (props) => {
  return <div className="main-heading">{props.children}</div>;
};

export default SectionHeading;
