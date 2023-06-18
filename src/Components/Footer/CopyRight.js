import React from "react";
import { FaHeart } from "react-icons/fa";
import "./CopyRight.css";
const CopyRight = () => {
  return (
    <div className="copyright">
      <div>
        <span>All rights Reserved</span>
        <span>copyright</span>
        <span>Indigg, 2023</span>
      </div>
      <div>
        <span>
          {" "}
          Made with <FaHeart style={{ color: "#ffb30e" }} />
          by kawaljeet
        </span>
      </div>
    </div>
  );
};

export default CopyRight;
