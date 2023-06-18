import React from "react";
import AppDownload from "./AppDownload";
import FeatureShow from "./FeatureShow";
import "./FeaturesList.css";
const FeaturesList = () => {
  const features = [
    {
      id: "f1",
      icon: "../images/Icon.jpg",
      title: "Daily Discount",
    },
    {
      id: "f2",
      icon: "../images/Icon (1).jpg",
      title: "Live Tracing",
    },
    {
      id: "f2",
      icon: "../images/Icon (2).jpg",
      title: " Quick  Delivery",
    },
  ];
  return (
    <div className="mainfeature-container">
      <div className="items-feature">
        <div className=" features-container">
          {features.map((feature, i) => {
            return (
              <FeatureShow
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
              />
            );
          })}
        </div>{" "}
      </div>

      <AppDownload></AppDownload>
    </div>
  );
};

export default FeaturesList;
