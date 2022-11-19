import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PostForm.css";
import { Link } from "react-router-dom";

const NODE_APP = "https://zotpals.herokuapp.com/";

export default function PostForm() {
  const [name, setName] = useState();
  const [image, setImage] = useState(
    "https://media.discordapp.net/attachments/1036369852207738960/1043255229535223918/Add_a_heading.png?width=1042&height=1042"
  );
  const [description, setDescription] = useState();
  const [contactInfo, setContactInfo] = useState();
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [duration, setDuration] = useState();

  function uploadInfo() {
    axios.post(`${NODE_APP}/post`, {
      name: name,
      image: image,
      description: description,
      contactInfo: contactInfo,
      duration: duration,
      firstName: firstName,
      lastName: lastName,
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

  function updatefirstName(event) {
    event.preventDefault();
    setfirstName(event.target.value);
  }

  function updatelastName(event) {
    event.preventDefault();
    setlastName(event.target.value);
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
        <br />
        <input
          onChange={updateName}
          type="text"
          name="name"
          id="name"
          required
        />
        <p>Enter Item Photo URL:</p>
        <input
          onChange={updateImage}
          type="url"
          id="photoinput"
          name="image"
          accept="image/jpeg, image/png, image/jpg"
          required
        />
        <div className="imageContainer">
          <img id="photo-submitted" src={image} alt="Waiting on Image" />
        </div>

        {/* <input onChange={updateImage}
          type="file"
          id="photoinput"
          name="image"
          accept="image/jpeg, image/png, image/jpg"
          required
        /> */}

        <label for="description">Description:</label>
        <br />
        <textarea
          onChange={updateDescription}
          name="description"
          id="description"
          cols="5"
          rows="5"
          required
        ></textarea>

        <label for="firstName">First Name:</label>
        <br />
        <input
          type="text"
          onChange={updatefirstName}
          name="firstName"
          id="contactInfo"
          required
        ></input>

        <label for="lastName">Last Name:</label>

        <input
          type="text"
          onChange={updatelastName}
          name="lastName"
          id="contactInfo"
          required
        ></input>
        <label for="contactInfo">Contact Information (Email):</label>

        <input
          type="email"
          onChange={updateContactInfo}
          name="contactInfo"
          id="contactInfo"
          required
        ></input>

        <label for="duration">Duration:</label>
        <br />
        <select
          onChange={updateDuration}
          name="duration"
          id="duration"
          required
        >
          <option value="">--Please choose an option--</option>
          <option value="1">1 Day</option>
          <option value="2">2 Days</option>
          <option value="3">3 Days</option>
          <option value="4">4 Days</option>
          <option value="5">5 Days</option>
          <option value="6">6 Days</option>
          <option value="7">7 Days</option>
        </select>

          <button type="submit" id="post">
            POST
          </button>
      </form>
    </section>
  );
}
