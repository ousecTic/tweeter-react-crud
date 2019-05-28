const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Comment = new Schema({
  name: String,
  comment: String
});

module.exports = mongoose.model("comment", Comment);
