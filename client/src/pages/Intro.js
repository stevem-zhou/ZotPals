import React from "react";
import "./Intro.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="intro-div">
      <div className="carousel-intro">
        <Carousel>
          <Carousel.Item>
            <img
              className=" intro-img"
              src="https://media.discordapp.net/attachments/1036369852207738960/1043278554558902272/Untitled_Artwork_4.png?width=1046&height=1046"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="intro-img"
              src="https://media.discordapp.net/attachments/1036369852207738960/1043279189991772321/Untitled_Artwork.png?width=1046&height=1046"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className=" intro-img"
              src="https://media.discordapp.net/attachments/1036369852207738960/1043278554294652959/Untitled_Artwork_3.png?width=1046&height=1046"
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className=" intro-img"
              src="https://media.discordapp.net/attachments/1036369852207738960/1043278554516955276/Untitled_Artwork_2.png?width=1046&height=1046"
              alt="Fourth slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className=" intro-img"
              src="https://media.discordapp.net/attachments/1036369852207738960/1043278554592456734/Untitled_Artwork_1.png?width=1046&height=1046"
              alt="Fifth slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className=" intro-img"
              src="https://media.discordapp.net/attachments/1036369852207738960/1043278554227556352/Untitled_Artwork.png?width=1046&height=1046"
              alt="Sixth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <Link to="/home">
        <button className="home-btn">❤️Home❤️</button>
      </Link>
    </div>
  );
}
