var fs=require("fs");
var ab="input.txt";

var data= fs.readFileSync(ab);
console.log(data.toString());

console.log("Blocking Operations");
