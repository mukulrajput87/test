console.log(__dirname);
console.log(__filename);

var path= require("path");
console.log(path.join(__dirname,"buffer.js"));

var port= process.env.port;
console.log(port);
