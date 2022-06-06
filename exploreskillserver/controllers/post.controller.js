const Post = require("../models/post.model");

exports.newpost = (req, res) => {
  const data = new Post(req.body);

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
      return error;
    } else {
      res.json(data);
    }
  });
};
