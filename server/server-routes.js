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

//defined post data route
router.route("/add").post((req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then(business => {
      res
        .status(200)
        .json({ Comment: "Comment was successfully added to database" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = router;
