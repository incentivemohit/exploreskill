const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  sellerName: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
    max: "16",
  },
  productPrice: {
    type: String,
    required: true,
  },
  proDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("post", postSchema);
