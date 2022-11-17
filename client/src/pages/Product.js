import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import axios from "axios";

const NODE_APP = "http://localhost:3001";

export default function Product() {
  const { productId } = useParams();

  const [listings, setListings] = useState([]);

  async function getData() {
    try {
      const results = await axios.get(`${NODE_APP}/product/${productId}`);
      setListings(results.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(
    function () {
      getData();
    },
    [listings]
  );

  async function updateBorrow() {
    try {
      console.log(`${NODE_APP}/product/${productId}`);

      await axios.put(`${NODE_APP}/product/${productId}`, { borrowed: true });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="info-container">
        <img className="info-img" src={listings.image} alt="" />
        <div className="info-description">
          <h1>{listings.name}</h1>
          <h3>Duration: {listings.duration}</h3>
          <h3>Contact: {listings.contact}</h3>

          <p>{listings.description}</p>

          <button onClick={updateBorrow} className="info-btn">
            ZOT???
          </button>
        </div>
      </div>
    </>
  );
}
