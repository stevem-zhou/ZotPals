import React, { useState, useEffect } from "react";
import "./Home.css";
import ExploreListing from "../Components/exploreComponents/ExploreListing";
import Footer from "../Components/sharedComponents/Footer";
import axios from "axios";

export default function Home() {
  const NODE_APP = "https://zotpals.herokuapp.com";

  const [itemListing, setItem] = useState([]);

  async function getData() {
    try {
      const results = await axios.get(`${NODE_APP}/home`);
      setItem(results.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(
    function () {
      getData();
    },
    [itemListing]
  );

  return (
    <>
      <div className="container">
        <div className="container-text">
          <h1><br />THE PLATFORM FOR ANTEATERS</h1>
          <p id="underText">
            Borrow, trade, discover authenticated pieces from top anteaters like yourselves
          </p>
        </div>
        <img
          className="landing-img"
          src={require("../images/photo-grid.png")}
          alt=""
        />
      </div>
      <div className="latestText">
        <p id="latestText">Check out the latest anteater posts, the newest, right now: <br />  </p>
      </div>
      <div className="posting">
        {itemListing.map((ele) => {
          return <ExploreListing {...ele} />;
        })}
      </div>
      <Footer />
    </>
  );
}
