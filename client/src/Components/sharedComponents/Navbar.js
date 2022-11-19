import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar1">
      <div className="nav-brand-text">
        <Link to="/">
          {/* <p>AntTrade</p> */}
          <img
            className="logo"
            src={require("../../images/zotpals.png")}
            alt=""
          />
        </Link>
      </div>

      <div class="nav-cata-text">
        {/* figure out the hrefs to work with react --> routing to different pages */}
        <Link className="nav-cata-link" to="/home">
          <p>Home</p>
        </Link>
        <Link className="nav-cata-link" to="/explore">
          <p>Explore</p>
        </Link>
        <Link className="nav-cata-link" to="/post">
          <p>Post</p>
        </Link>
        <Link className="nav-cata-link" to="/about">
          <p>About</p>
        </Link>
      </div>
    </nav>
  );
}
