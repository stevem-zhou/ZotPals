import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import axios from "axios";

const NODE_APP = "https://zotpals.herokuapp.com";

export default function Product() {
  const { productId } = useParams();

  const [listings, setListings] = useState([]);
  const [commentsArray, setCommentsArray] = useState([]);
  const [comments, setComments] = useState([]);

  function updateComments(event) {
    event.preventDefault();
    setComments(event.target.value);
  }

  function uploadComment() {
    axios.post(`${NODE_APP}/product/${productId}`, {
      newcomments: comments,
    });
  }

  async function getData() {
    try {
      const results = await axios.get(`${NODE_APP}/product/${productId}`);
      setListings(results.data);
      setCommentsArray(results.data.comments);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(
    function () {
      getData();
    },
    [listings]
  );

  async function updateBorrow() {
    try {
      console.log(`${NODE_APP}/product/${productId}`);

      await axios.put(`${NODE_APP}/product/${productId}`);
      alert("Verification Sent to Owner");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="info-container">
        <div className="img-des-box">
          <img className="info-img" src={listings.image} alt="" />
          <div className="info-description">
            <h1>{listings.name}</h1>
            <h3>Duration:</h3>
            <p id="productDescription">{listings.duration + " Days"}</p>
            
            <h3>Contact:</h3>
            <p id="productDescription">Owner: {listings.firstName + " " + listings.lastName}</p>
            <p id="productDescription">Email: {listings.contactInfo}</p>

            <h3>Description:</h3>
            <p id="productDescription">{listings.description}</p>

            <button onClick={updateBorrow} className="info-btn">
              SEND BORROW REQUEST
            </button>
          </div>
        </div>
        <div className="comment-outer-box">
          <div className="comment-box">
            <h1>Comments:</h1>
            <form onSubmit={uploadComment} method="get" className="infoForm">
              <input
                className="comment-input"
                onChange={updateComments}
                type="text"
                id="commentinput"
                name="comments"
                required
              />
              <button className="comment-btn" type="submit">
                POST
              </button>
            </form>
            {commentsArray.map((ele) => {
              return <p>{ele}</p>;
            })}
          </div>
        </div>
      </div>

      {console.log(listings.comments)}
    </>
  );
}
