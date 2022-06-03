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
  productImage: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("post", postSchema);
