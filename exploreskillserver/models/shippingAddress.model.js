const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: Number,
    required: true,
  },
  postalCode: {
    type: String,
  },
});

module.exports = mongoose.model("shippingAddress", memberSchema);
