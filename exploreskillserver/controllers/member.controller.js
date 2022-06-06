const Member = require("../models/member.model");

exports.member = (req, res) => {
  const data = new Member(req.body);

  try {
    data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

exports.adminLogin = (req, res) => {};
