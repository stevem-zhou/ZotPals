import React, { useState, useEffect } from "react";
import "./Home.css";
import ExploreListing from "../Components/exploreComponents/ExploreListing";
import Footer from "../Components/sharedComponents/Footer";
import axios from "axios";

export default function Home() {
  const NODE_APP = "http://localhost:3001";

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
          <h1>Welcome!</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktopm.
          </p>
        </div>
        <img
          className="landing-img"
          src={require("../images/photo-grid.png")}
          alt=""
        />
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
