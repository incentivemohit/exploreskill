const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./db/config");
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: "true",
  })
);

const member = require("./routes/member.route");
const donate = require("./routes/donate.route");
//member registration

app.use("/", member);
app.use("/", donate);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
