import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostForm.css";

const NODE_APP = "http://localhost:3001";

export default function PostForm() {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [contactInfo, setContactInfo] = useState();
  const [duration, setDuration] = useState();

  function uploadInfo() {
    axios.post(`${NODE_APP}/post`, {
      name: name,
      image: image,
      description: description,
      contactInfo: contactInfo,
      duration: duration,
    });
  }

  function updateName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function updateImage(event) {
    event.preventDefault();
    setImage(event.target.value);
  }

  function updateDescription(event) {
    event.preventDefault();
    setDescription(event.target.value);
  }

  function updateContactInfo(event) {
    event.preventDefault();
    setContactInfo(event.target.value);
  }

  function updateDuration(event) {
    event.preventDefault();
    setDuration(event.target.value);
  }

  return (
    <section className="collectorBox">
      <form onSubmit={uploadInfo} method="get" className="infoForm">
        <label for="name">Name of Item:</label>
        <input onChange={updateName} type="text" name="name" id="name" required />
        <p>Upload Item Photo:</p>
        <img
          id="photo"
          src={require("../../images/mouse_eat.png")}
          alt="mouse eat alone"
        />
        <input onChange={updateImage}
          type="file"
          id="photoinput"
          name="image"
          accept="image/jpeg, image/png, image/jpg"
          required
        />

        <label for="description">Description:</label>
        <textarea onChange={updateDescription}
          name="description"
          id="description"
          cols="10"
          rows="10"
          required
        ></textarea>

        <label for="contactInfo">Contact Information:</label>
        <textarea onChange={updateContactInfo}
          name="contactInfo"
          id="contactInfo"
          cols="10"
          rows="10"
          required
        ></textarea>

        <label for="duration">Duration:</label>
        <select onChange={updateDuration} name="duration" id="duration" required>
          <option value="">--Please choose an option--</option>
          <option value="oneDay">1 Day</option>
          <option value="twothreeDay">2-3 Days</option>
          <option value="fourfiveDay">4-5 Days</option>
          <option value="sixsevenDay">6-7 Days</option>
        </select>

        <button type="submit" id="post">
          POST
        </button>
      </form>
    </section>
  );
}
