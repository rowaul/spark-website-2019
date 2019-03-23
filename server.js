// jshint esversion: 6

const express = require("express");
const path = require("path");
//const morgan = require("morgan");
const fs = require("file-system");
const home = require("./router/home.js");

//const winsont = require("./config/winston");
const app = express();

app.use("/", home);

const port = process.env.PORT || 8000;
const myhost = "0.0.0.0";

app.listen(port, myhost, () => {
  console.log(`Website is listening at http://${myhost}:${port}...`);
});
