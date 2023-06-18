import React from "react";
import "./TopNav.css";
import { FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";
import Header from "./Header";
const TopNav = () => {
  return (
    <div className="Header-container">
      <div className="top-nav">
        <div className="logo">
          <span>
            <img src="./images/Mask Group.jpg" alt="" />
          </span>
          <div className="text-frame">
            <span className="food-txt">food</span>
            <span className="wagon-txt">WAGON</span>
          </div>
        </div>
        {/* /******deiver address**** */}
        <div className="logo">
          <h3 className="txt">Deliver To:</h3>
          <span className="icon-set">
            {" "}
            <FaMapMarkerAlt />
          </span>
          <div className="current-location-txt">
            <span className="text-change"> Current Location</span>

            <h3 className="txt">Mohammadpur Bus Stand, Dhaka </h3>
          </div>
        </div>

        {/* /******search food**** */}
        <div className="logo">
          <span className="icon-set">
            <FaSearch />
          </span>
          <h3 className="txt">search Food </h3>
          <button className="Login-btn">
            <span className="icon-user">
              {" "}
              <FaUser /> Login
            </span>
          </button>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default TopNav;
