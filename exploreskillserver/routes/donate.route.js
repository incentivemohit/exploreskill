const express = require("express");
const router = express.Router();

const sendMoney = require("../controllers/donate.controller");

router.post("/donate", sendMoney.donate);

module.exports = router;
