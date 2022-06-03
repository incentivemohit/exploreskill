const Post = require("../models/post.model");

exports.newpost = (req, res) => {
  const data = new Post({
    sellerName: req.body.Seller,
    productName: req.body.ProductName,
    productPrice: req.body.ProductPrice,
    productImage: req.file.filename,
  });

  try {
    data.save();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

exports.getposts = (req, res) => {
  Post.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};
