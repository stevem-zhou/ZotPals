import React, { useState, useEffect } from "react";
import { Members } from "../Components/aboutComponents/Members";
import CardList from "../Components/aboutComponents/CardList";
import Footer from "../Components/sharedComponents/Footer";
import "./About.css";
import "tachyons";


const About = () => {


  return (
    <>
      <div className="tc">
        <div className="aboutBlock">
        <h1 id="aboutUsHead">About Us</h1>
        <p id="aboutUsDesc">
          Focused on creating a community where we are able to create <br />
          relationships and ease the hardships that Anteaters face, we as <br />
          creators, have developed an easy-to-use platform with inspiration from<br />
          the barter system of trade.
        </p>
        </div>
        
        <CardList Members={Members} />
      </div>
      <Footer />
    </>
  );
};

export default About;
