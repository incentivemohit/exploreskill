const express = require("express");
const app = express();
var fs = require("fs");
var path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/config");
app.use(express.static("/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const postData = require("./routes/post.route");
const member = require("./routes/member.route");
const address = require("./routes/shippingAddress.route");
const donate = require("./routes/donate.route");

app.use("/", postData);
app.use("/", member);
app.use("/", address);
app.use("/", donate);

app.use((req, res, next) => {
  res.status(404).send("Error 404!");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.listen("9000", (req, res) => {
  console.log(`Server is running at ${9000}`);
});
