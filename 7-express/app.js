const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  // res.send("<html><body><h1>Hello</h1></body></html>");
  // res.send({ key1: "value1" });
  // res.json({ key1: "value1" });
  // res.sendStatus(404);
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.listen(3000);
