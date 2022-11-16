import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <>
      <div class="info-container">
        <img
          class="info-img"
          src="https://slm-assets.secondlife.com/assets/1253560/lightbox/8a88bbb0cb59859fdfaa4c26d729b33e.jpg?1277210865"
          alt=""
        />
        <div class="info-description">
          <h1>Chopper for sale</h1>
          <h3>Very strange dog, size: small</h3>
          <h3>Contact: @yourmom</h3>

          <p>
            Description: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and
          </p>

          <button class="info-btn">ZOT???</button>
        </div>
      </div>
    </>
  );
}
