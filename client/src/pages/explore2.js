import React from "react";
import { Items } from "../Components/exploreComponents/Items.js";
import CardList from "../Components/exploreComponents/CardList";
import "tachyons";
import "./explore2.css";

const explore2 = () => {
  return (
    <div className="tc">
      <h1>Explore All The Different Items You Can Borrow!</h1>
      <p>
        Ranging from clothing to electronics to stationary items, look through
        the latest drops from your fellow peers! Invest in Anteater picks and
        support each other along the way.
      </p>
      <CardList Items={Items} />
    </div>
  );
};
export default explore2;
