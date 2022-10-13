//     //metodo 1:
// function myFunction(dateX, dateY) {
//     const xDate = dateX.getDate();
//     const xYear = dateX.getFullYear();
//     const xMonth = dateX.getMonth();
//     const yDate = dateY.getDate();
//     const yYear = dateY.getFullYear();
//     const yMonth = dateY.getMonth();
//     let result = false;
//     if(xDate === yDate && xYear === yYear && xMonth === yMonth){
//         result = true;
//     }
//     return result;
//   }

//metodo 2 despues de conocer el metodo time:

function myFunction(dateX, dateY) {
  const yTime = dateX.getTime();
  const xTime = dateY.getTime();

  let result = false;
  if (yTime === xTime) {
    result = true;
  }
  return result;
}