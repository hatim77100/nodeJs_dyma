const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    name: "Karim",
    authenticated: true,
    friends: 1,
    products: [
      { title: "product1", content: "content1" },
      { title: "product2", content: "content2" },
      { title: "product3", content: "content3" },
      { title: "product4", content: "content4" },
    ],
  });
});
app.listen(3000);
