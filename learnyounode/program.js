let fs = require("fs");
let path = require("path");
const mymodule = require("./modules/mymodule")

let file = process.argv[2];

fs.readdir(file, "utf8", function (err, contents) {
    contents.forEach(element => {
        if (path.extname(element) === "." + process.argv[3]){
            console.log(element)}
    })
  
});
