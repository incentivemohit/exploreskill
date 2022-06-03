const express = require("express");
const router = express.Router();
const shippingAddress = require("../controllers/shippingAddress.controller");

router.post("/sendaddress", shippingAddress.shippingAddress);

module.exports = router;
