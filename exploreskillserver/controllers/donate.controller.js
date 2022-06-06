const Donate = require("../models/card.model");

exports.donate = (req, res) => {
  console.log(req.body);
  const data = new Donate({
    cardOwner: req.body.cardOwner,
    cardNumber: req.body.cardNumber,
    day: req.body.day,
    year: req.body.year,
    cvv: req.body.cvv,
    donateMoney: req.body.money,
  });

  try {
    data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
