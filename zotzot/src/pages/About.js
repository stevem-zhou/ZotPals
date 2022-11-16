import React from "react";
import { Members } from "../Components/aboutComponents/Members";
import CardList from "../Components/aboutComponents/CardList";
import "tachyons";

const About = () => {
  return (
    <div className="tc">
      <h1>About Us</h1>
      <p>
        Focused on creating a community where we are able to create
        relationships and ease the hardships that Anteaters face, we as creators
        have developed an easy-to-use platform with inspiration from the barter
        system of trade.
      </p>
      <CardList Members={Members} />
    </div>
  );
};

export default About;
