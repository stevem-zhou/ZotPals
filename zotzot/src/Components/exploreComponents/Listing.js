import React from "react";
import { Link } from "react-router-dom";
export default function Listing() {
  return (
    <Link className="grow" to="/item_info">
      <section className="outerPostBox">
        <section className="innerPostBox">
          <img
            className="postImage"
            src={require("../../images/chopper.jpg")}
            alt="first chopper pic"
          />
          <section className="caption">
            {/* make the item_info below changeable for each loop */}

            <p>
              CHOPPER <br />
              11/14/2022 - 11/21/2022
            </p>
          </section>
        </section>
      </section>
    </Link>
  );
}
