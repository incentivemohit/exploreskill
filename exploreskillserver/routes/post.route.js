const express = require("express");
const router = express.Router();
const postData = require("../controllers/post.controller");

const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

let upload = multer({ storage: storage });

router.post("/newpost", upload.single("file"), postData.newpost);
router.get("/getposts", postData.getposts);

module.exports = router;
