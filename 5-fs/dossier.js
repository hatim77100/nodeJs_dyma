const fs = require("fs");

// fs.mkdir("./monDossier", (err) => {
//   if (err) throw err;
// });

// fs.mkdir("./monDossier/mondossier2/souDossier", { recursive: true }, (err) => {
//   if (err) throw err;
// });

// fs.rmdir("./monDossier/mondossier2", (err) => {
//   console.log(err);
// });

fs.readdir("./monDossier", (err, files) => console.log(files));
