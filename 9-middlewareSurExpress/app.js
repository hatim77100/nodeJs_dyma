const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/foo", (req, res, next) => {
  console.log("middleware");
  next();
});

app.get("/foo", (req, res) => {
  res.render("index");
});
app.listen(3000);
