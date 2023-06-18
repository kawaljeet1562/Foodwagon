import React from "react";
import { FaLock, FaMapMarkerAlt, FaMotorcycle, FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="food-delivery">
        <div className="title-card">
          <div className="title">
            <h2>Are You Starving?</h2>
            <p>Within a few clicks, find meals that are accessible near you</p>
          </div>
          <div className="order-card">
            <div className="order-card-top">
              <div className="tab">
                <Button
                  style={{
                    background: "#F172281A",
                    color: "#F17228",
                  }}
                >
                  <FaMotorcycle />
                  Delivery
                </Button>
                <Button>
                  {/* style=
                  {{
                    background: "white",
                    color: "#757575",
                  }} */}
                  <FaLock />
                  pickup
                </Button>
              </div>
            </div>
            {/* hr line */}
            <hr className="hr-tag"></hr>
            {/* <div className="hr-tag"></div> */}
            <div className="order-card-bottom">
              <div className="txt-filed">
                <FaMapMarkerAlt />
                <input type="text" placeholder=" Enter Your Address" />
              </div>
              <Button type="submit">
                <FaSearch /> Find food
              </Button>
            </div>
          </div>
        </div>

        <div className="noodles-img">
          <img src="./images/Image_Base.png" className="img-base" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
