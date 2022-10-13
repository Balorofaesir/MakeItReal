// function myFunction(dateX, dateY) {
//     const XTime = dateX.getTime();
//     const YTime = dateY.getTime();
//     let result = false;

//     if (XTime - YTime <= 3600000 && XTime - YTime >= -3600000) {
//       result = true;
//     }
//     return result;
// }
//   console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) //true
//   console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))) //true
//   console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))) //false
//   console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))) //true