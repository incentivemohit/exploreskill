const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("member", memberSchema);
