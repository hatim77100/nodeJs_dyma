const myModule = require("./module1");
myModule.name = "hello";

const myModule2 = require("./module1");

console.log(myModule2.name);
