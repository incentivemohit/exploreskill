const Address = require("../models/shippingAddress.model");

exports.shippingAddress = (req, res) => {
  const data = new Address({
    country: req.body.Country,
    firstName: req.body.FirstName,
    lastName: req.body.LastName,
    city: req.body.City,
    state: req.body.State,
    postalCode: req.body.PostalCode,
  });

  try {
    data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
