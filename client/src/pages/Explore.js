import React from "react";
import ExploreListing from "../Components/exploreComponents/ExploreListing";
import ExploreSummary from "../Components/exploreComponents/ExploreSummary";
import Footer from "../Components/sharedComponents/Footer";
import "./Explore.css";

export default function Explore() {
  return (
    <body>
      <ExploreSummary />
      <div className="posting">
        <ExploreListing />
        <ExploreListing />
        <ExploreListing />
        <ExploreListing />
      </div>
      <Footer />
    </body>
  );
}
