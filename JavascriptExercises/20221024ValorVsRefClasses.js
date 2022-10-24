// // Para resolver esta pregunta, tu amigo escribe el siguiente código:

function checkEquals(arr1, arr2) {
  let result = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  if (arr1.length !== arr2.length) {
    return false;
  } else return result;
}
// Pero probando el código, ves que algo no está del todo bien. Ejecutar el código arroja los siguientes resultados:

// checkEquals([1, 2], [1, 3]) ➞ false
// // Good so far...

// checkEquals([1, 2], [1, 2]) ➞ false
// // Yikes! What happened?
// Reescribe el código de tu amigo para que verifique correctamente si dos arreglos son iguales. Para ser iguales, los arreglos deben tener los mismos elementos en el mismo orden.

// Las siguientes pruebas deben pasar:

// Test Case	Expected
console.log(
  checkEquals([1, 2], [1, 3]), //false
  checkEquals([1, 2], [1, 2]), //true
  checkEquals([4, 5, 6], [4, 5, 6]), //true
  checkEquals([4, 7, 6], [4, 5, 6]), //false
  checkEquals([4, 7, 6], [4, 6, 7]),//false
  checkEquals([1, 2], [1, 2, 3]),   //false
  checkEquals([1, 2 , 3], [1, 2,])  //false
); //false
