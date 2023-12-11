// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const app = express();

// app.set("views", path.join(__dirname, "views"));
// app.engine("toto", (path, options, callback) => {
//   fs.readFile(path, (err, data) => {
//     if (err) {
//       callback(err);
//     }
//     const template = data.toString().replace("%name", options.name);
//     callback(null, template);
//   });
// });

// app.get("/", (req, res) => {
//   res.render("index.toto", { name: "Karim" });
// });
// app.listen(3000);
