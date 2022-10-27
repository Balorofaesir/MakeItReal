function myFunction(a, b) {
  let obj = {};

  for (i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  console.log obj;
}

//tambien se puede:
// function myFunction(a, b) {
//     let obj = {};
  
//     a.forEach((element, index) => {
//       obj[element] = b[index];
//     });
//     return obj;
//   }
