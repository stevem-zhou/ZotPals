require("dotenv").config();

const express = require("express");
const { MongoError } = require("mongodb");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json())

const itemListingRouter = require('./routes/itemListing');
app.use('/itemListing', itemListingRouter);

app.listen(3000, function () {
  console.log("Server Started");
});
