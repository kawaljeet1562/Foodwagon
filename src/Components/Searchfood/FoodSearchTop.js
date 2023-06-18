import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SearchButton from "./SearchButton";
import "./FoodSearchTop.css";
const FoodSearchTop = (props) => {
  return (
    <div className="foodsearch-container">
      <div className="main-foodsearch">
        <div>
          <h3>Search by Food</h3>
        </div>
        <div className="arrow-btn">
          <span className="view-txt">
            {" "}
            View All <FaArrowRight />
          </span>
          <SearchButton>
            {" "}
            <FaArrowLeft />
          </SearchButton>
          <SearchButton>
            {" "}
            <FaArrowRight />
          </SearchButton>
        </div>
      </div>
    </div>
  );
};

export default FoodSearchTop;
