const path = require("path");

const express = require("express");

const app = express();
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/file", function (req, res) {
  res.send("Hello World!");
});

app.get("/user", function (req, res) {
  res.send("Hello World from user");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function () {
  console.log("Server is up and running...");
});
