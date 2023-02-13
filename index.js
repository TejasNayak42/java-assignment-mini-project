const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/user", function (req, res) {
  res.send("Hello World from user");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});

app.get("/hungry", function (req, res) {
  res.sendFile(__dirname + "/hungry.html");
});

app.listen(3000, function () {
  console.log("Server is up and running...");
});
