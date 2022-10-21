  //EXERCISE 3
  let fs = require('fs');
  let file = process.argv[2];
  //lee el archivovar filename = process.argv[2];
  let contents = fs.readFileSync(file, "utf8");
  //lo vuelve un string
  let str = contents.toString(); 
  //cuenta los matches
  let count = (str.match(/\n/g) || []).length;
  //lo convierte en string
  console.log(count);










