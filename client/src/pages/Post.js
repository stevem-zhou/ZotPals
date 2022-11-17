import React, { useEffect, useState } from "react";
import PostForm from "../Components/postComponents/PostForm";
import "./Post.css";
import Footer from "../Components/sharedComponents/Footer";
import axios from "axios";

export default function Post() {
  return (
    <body>
      <div id="listText">
        <h3>List an Item</h3>
      </div>
      <PostForm />
      <Footer />
    </body>
  );
}
