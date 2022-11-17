import React, { useState, useEffect } from "react";
import "./ExploreListing.css";
import { Link } from "react-router-dom";

// eventually use props and replace the string inside the require src
export default function ExploreListing(props) {
  return (
    <Link to={`/item_info/${props._id}`}>
      <section className="outerPostBox">
        <section className="innerPostBox">
          <img
            className="postImage"
            src={props.image}
            alt="first chopper pic"
          />
          <section className="caption">
            {/* make the item_info below changeable for each loop */}

            <p>
              {props.name} <br />
              {props.date}
            </p>
          </section>
        </section>
      </section>
    </Link>
  );
}
