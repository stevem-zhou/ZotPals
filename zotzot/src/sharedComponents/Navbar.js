import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav-brand-text">
        <img class="logo" src="images/banana.png" alt="" />
        <Link to="/">
          <p>AntTrade</p>
        </Link>
      </div>

      <div class="nav-cata-text">
        {/* figure out the hrefs to work with react --> routing to different pages */}
        <Link class="nav-cata-link" to="/explore">
          <p>Explore</p>
        </Link>
        <Link class="nav-cata-link" to="/post">
          <p>Post</p>
        </Link>
        <Link class="nav-cata-link" to="/about">
          <p>About</p>
        </Link>
      </div>
    </nav>
  );
}
