const fs = require("fs");

// fs.readFile("./fixhiertest.text", (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });

// fs.appendFile("./fixhiertest.text", "ma nouvelle data", (err) => {
//   if (err) throw err;
// });

fs.unlink("./fixhiertest.text", (err) => {
  if (err) throw err;
  console.log("Le fichier a été supprimé.");
});
