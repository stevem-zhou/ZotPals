import React from "react";
import "./PostForm.css";

export default function PostForm() {
  return (
    <section class="collectorBox">
      <form action="" method="get" class="infoForm">
        <label for="name">Name of Item:</label>
        <input type="text" name="name" id="name" required />
        <p>Upload Item Photo:</p>
        <img
          id="photo"
          src={require("../../images/mouse_eat.png")}
          alt="mouse eat alone"
        />
        <input
          type="file"
          id="photoinput"
          name="photo"
          accept="image/jpeg, image/png, image/jpg"
          required
        />

        <label for="description">Description:</label>
        <textarea
          name="description"
          id="description"
          cols="10"
          rows="10"
          required
        ></textarea>

        <label for="contactInfo">Contact Information:</label>
        <textarea
          name="contactInfo"
          id="contactInfo"
          cols="10"
          rows="10"
          required
        ></textarea>

        <label for="duration">Duration:</label>
        <select name="duration" id="duration" required>
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
