const path = require("path");

const test = path.parse(
  path.join(__dirname, "node_modules", "express", "index.js")
);
console.log(test);

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.writeHead(200, {
//     "content-type": "text/plain",
//   });
//   res.end("Hello");
// });
// app.listen(3000);
