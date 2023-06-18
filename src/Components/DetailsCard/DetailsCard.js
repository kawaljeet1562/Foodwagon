import React from "react";
import Details from "./Details.js";
import "./DetailsCard.css";
const DetailsCard = (props) => {
  const ItemsDetail = [
    {
      id: "d1",
      image: "../images/Image (27).jpg",
      titleblack: "Best deals",
      titlecolor: " Crispy Sandwiches",
      paratext:
        "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
    },
    {
      id: "d2",
      image: "../images/Image (28).jpg",
      titleblack: " Celebrate  parties with ",
      titlecolor: " Crispy Sandwiches",
      paratext:
        "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.",
    },
    {
      id: "d3",
      image: "../images/Image (29).jpg",
      paratext:
        " Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
      titleblack: "Wanna eat hot & spicy ",
      titlecolor: " Pizza? ",
    },
  ];
  return (
    <div className="Details-card-container">
      <div className=" details-container">
        {/* <Details items={ItemsDetail} /> */}
        {ItemsDetail.map((detail, index) => {
          console.log("INDEX IS", index, "detail", detail);
          return (
            <Details
              index={index}
              key={detail.id}
              image={detail.image}
              paratext={detail.paratext}
              titleblack={detail.titleblack}
              titlecolor={detail.titlecolor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DetailsCard;
