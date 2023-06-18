import React from "react";
import ChooseOrder from "../ChooseOrder/ChooseOrder";
import DetailsCard from "../DetailsCard/DetailsCard";
import FeaturesList from "../Features/FeaturesList";

import FooterItems from "../Footer/FooterItems";
import TopNav from "../Header/TopNav";
import Order from "../LastSection/Order";
import ItemsList from "../PopulerItems/ItemsList";
import RestaurentsList from "../Restaurents/RestaurentsList";
import FoodItemsList from "../Searchfood/FoodItemsList";

import CardsList from "../SectionFlashDeals/CardsList";

import "./MainSection.css";
const MainSection = () => {
  return (
    <div className="main-section">
      <TopNav />
      <CardsList />
      <ChooseOrder />
      <ItemsList />
      <RestaurentsList />
      <FoodItemsList />
      <FeaturesList />
      <DetailsCard />
      <Order />
      <FooterItems />
    </div>
  );
};

export default MainSection;
