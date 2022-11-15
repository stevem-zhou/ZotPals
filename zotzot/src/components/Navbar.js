import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav-brand-text">
        <img class="logo" src="images/banana.png" alt="" />
        <a href="landing.html">
          <p>AntTrade</p>
        </a>
      </div>

      <div class="nav-cata-text">
        {/* figure out the hrefs to work with react --> routing to different pages */}
        <a class="nav-cata-link" href="explore.html">
          <p>Explore</p>
        </a>
        <a class="nav-cata-link" href="post.html">
          <p>Post</p>
        </a>
        <a class="nav-cata-link" href="about.html">
          <p>About</p>
        </a>
      </div>
    </nav>
  );
}
