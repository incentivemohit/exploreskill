const Donate = require("../models/card.model");

exports.donate = (req, res) => {
  console.log(req.body);
  const data = new Donate(req.body);

  try {
    data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
