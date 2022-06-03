const Address = require("../models/shippingAddress.model");

exports.shippingAddress = (req, res) => {
  const data = new Address(req.body);

  try {
    data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
