const name = require("./code.js");

console.log("====================================");
console.log(name);
console.log("====================================");

module.exports.myName = name;
module.exports.default = "defaultName";
module.exports._esModule = true;
