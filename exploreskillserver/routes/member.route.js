const express = require("express");
const router = express.Router();
const createMember = require("../controllers/member.controller");
const sendMoney = require("../controllers/donate.controller");

router.post("/member", createMember.member);

module.exports = router;
