const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.listen(3000, () => {
  console.log("server has started");
});
