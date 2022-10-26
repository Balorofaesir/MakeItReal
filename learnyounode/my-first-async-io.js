let fs = require('fs')  
let file = process.argv[2]  
  
fs.readFile(file, "utf8", function (err, contents) {   
  let str = contents.toString();
  let result = str.match(/\n/g).length;
  console.log(result)  
})