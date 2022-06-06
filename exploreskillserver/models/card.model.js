const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  cardOwner: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  donateMoney: {
    type: String,
  },
});

module.exports = mongoose.model("donate", memberSchema);
