import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const NODE_APP = "http://localhost:3001";

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
      <h1>verified</h1>
    </>
  );
};

export default Verification;
