import React from "react";
import "./AppDownload.css";
const AppDownload = () => {
  return (
    <div className="app-info">
      <div className="mob-phone">
        <img src=" ./images/phone2.jpg" className="phone2" alt="" />
        <img src=" ./images/phone1.png" className="phone1" alt="" />
      </div>
      <div className="install-info">
        <h2>Install the app</h2>
        <p>
          It's never been easier to order food. Look for the finest discounts
          and you'll be lost in a world of delectable food.
        </p>
        <div className="app-icon">
          <img src=" ./images/googleplay.png" className="app-logo" alt="" />
          <img src=" ./images/appstore.png " className="app-logo" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
