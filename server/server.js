const nodeMailer = require("nodemailer");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const itemListing = require("./models/itemListing_model");
const cors = require("cors");

let port = process.env.PORT || 3001;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use(cors());

// connected
// explore get request
app.get("/explore", async function (req, res) {
  const items = await itemListing.find({borrowed: false}).sort({_id:-1});
  res.send(items);
});

// connected
// posting post request
app.post("/post", async function (req, res) {
  const dateObj = new Date();
  const currentDate =
    dateObj.toDateString();

  const newItem = new itemListing({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    contactInfo: req.body.contactInfo,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    duration: req.body.duration,
    date: currentDate,
  });

  await newItem.save();
  res.status(200).send(newItem);
});

//verification put request
app.put("/verification/:id", async function (req, res) {
  const { id } = req.params;
  const updateBool = await itemListing.findByIdAndUpdate(id, {
    borrowed: true,
  });

  res.send(updateBool);
});

// connected
// productpage get request
app.get("/product/:id", async function (req, res) {
  const { id } = req.params;
  const item = await itemListing.findById(id);
  res.send(item);
});

//posting a comment in product page
app.post("/product/:id", async function (req,res){
  const {newcomments} = req.body
  const {id } = req.params;
  const item = await itemListing.findById(id);
  if (newcomments){
  item.comments.push(newcomments);}
  const updatedItem = await itemListing.findByIdAndUpdate(id, {comments:item.comments})
  res.send(updatedItem);
})

// connected
// product page put send email request
app.put("/product/:id", async function (req, res) {
  const { id } = req.params;
  const item = await itemListing.findById(id);
  const email = item.contactInfo;
  const name = item.firstName + " " + item.lastName

  const transporter = nodeMailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const options = {
    from: process.env.HOST,
    to: `${email}`,
    subject: "Verify item being borrowed",
    html: `Hello ${name}, please click on the link to confirm that your item is being borrowed! ` + "http://localhost:3000/verification/" + id,
  };

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sent: " + info.response);
  });

  res.send(id);
});

// connected
// home get request
app.get("/home", async function (req, res) {
  // get the top three
  const items = await itemListing.find({borrowed: false});
  // let first, second, third;
  // for (let i = 0; i < items.length; i++) {
  //   if (i == items.length - 3) {
  //     first = items[i];
  //   }
  //   if (i == items.length - 2) {
  //     second = items[i];
  //   }
  //   if (i == items.length - 1) {
  //     third = items[i];
  //   }
  // }

  // let top_three = [first, second, third];
  res.send(items.slice(items.length-3).reverse());
});

app.put("/explore", async function (req, res) {
  const dateObj = new Date();
  const currentDate =
    dateObj.getMonth().toString() +
    dateObj.getDate().toString() +
    dateObj.getFullYear().toString();
  const items = await itemListing.insertMany([
    {
      name: "NWINNNNWIN",
      image:
        "https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg",
      description: "VNUGGEYT",
      contactInfo: "431",
      duration: "23 days",
      date: currentDate,
    },
    {
      name: "steve",
      image:
        "https://www.innersloth.com/wp-content/uploads/2021/06/hellowhatanicesurprise.png",
      description: "VERY BAd AMONG US",
      contactInfo: "412313241234",
      duration: "23 days",
      date: currentDate,
    },
    {
      name: "jesse",
      image:
        "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2815,w_4000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Shutterstock-by-Vistin-aeo_composite_1835067190-_Converted__yctaqg.png",
      description: " BAd AMONG US",
      contactInfo: "515135123",
      duration: "23 days",
      date: currentDate,
    },
    {
      name: "katy",
      image:
        "https://i.pinimg.com/originals/0a/df/6b/0adf6bb793036a77a2656568a04a6a30.png",
      description: "VERY  US",
      contactInfo: "462432634",
      duration: "34 days",
      date: currentDate,
    },
  ]);
  res.send(items);
});

app.delete("/explore", async function (req, res) {
  const items = await itemListing.deleteMany({});
  res.send(items);
});

app.listen(port, function () {
  console.log("Server Started");
});
