const express = require("express");
const router = express.Router();

const Comment = require("./comment.model");

//defined get data route
router.route("/").get((req, res) => {
  Comment.find((err, comments) => {
    if (err) {
      console.log(err);
    } else {
      res.json(comments);
    }
  });
});

module.exports = router;
