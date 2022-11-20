import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Verification.css";

const NODE_APP = "https://zotpals.herokuapp.com";

const Verification = () => {
  const { productId } = useParams();

  async function updateBorrow() {
    try {
      const borrow = await axios.put(`${NODE_APP}/verification/${productId}`);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(function () {
    updateBorrow();
  });

  return (
    <>
      <div className="text">
        <h1>Confirmation</h1>
        <p>Your item has been borrowed. </p>
      </div>
      <br />
      <img
        src="https://cdn.discordapp.com/attachments/1036369852207738960/1043267770885873714/Eo_circle_green_checkmark.svg.png"
        class="img"
      />
    </>
  );
};

export default Verification;
