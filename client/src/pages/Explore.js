import React, { useEffect, useState } from "react";
import ExploreListing from "../Components/exploreComponents/ExploreListing";
import ExploreSummary from "../Components/exploreComponents/ExploreSummary";
import Footer from "../Components/sharedComponents/Footer";
import "./Explore.css";
import axios from "axios";

export default function Explore() {
  // axios.get("http://localhost:3001/explore").then(res=>{
  //   console.log("test");
  // })
  const NODE_APP = "https://zotpals.herokuapp.com/";

  const [itemListing, setItem] = useState([]);

  async function getData() {
    try {
      const results = await axios.get(`${NODE_APP}/explore`);
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
    <body>
      <ExploreSummary />
      <div className="posting">
        {itemListing.map((ele) => {
          return <ExploreListing {...ele} />;
        })}
      </div>
      <Footer />
    </body>
  );
}
