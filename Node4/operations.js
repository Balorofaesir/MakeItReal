function suma(parameter) {
    let result1 = 0;
    let result2 = 0;
    let array = [];
  
    for (let i = 0; i < parameter.length; i++) {
      result1 = parameter[i].value1;
      result2 = parameter[i].value2;
      let resultotal = (result1 += result2);
  
      finalResult = array.push({ user: parameter[i].user, result: resultotal });
    }
  
    return array;
  }
  
  function resta(parameter) {
    let result1 = 0;
    let result2 = 0;
    let array = [];
  
    for (let i = 0; i < parameter.length; i++) {
      result1 = parameter[i].value1;
      result2 = parameter[i].value2;
      let resultotal = result1 - result2;
  
      finalResult = array.push({ user: parameter[i].user, result: resultotal });
    }
  
    return array;
  }
  
  function multiplicar(parameter) {
    let result1 = 0;
    let result2 = 0;
    let array = [];
  
    for (let i = 0; i < parameter.length; i++) {
      result1 = parameter[i].value1;
      result2 = parameter[i].value2;
      let resultotal = result1 * result2;
  
      finalResult = array.push({ user: parameter[i].user, result: resultotal });
    }
  
    return array;
  }
  
  function multiplicar(parameter) {
    let result1 = 0;
    let result2 = 0;
    let array = [];
  
    for (let i = 0; i < parameter.length; i++) {
      result1 = parameter[i].value1;
      result2 = parameter[i].value2;
      let resultotal = result1 * result2;
  
      finalResult = array.push({ user: parameter[i].user, result: resultotal });
    }
  
    return array;
  }
  function dividir(parameter) {
    let result1 = 0;
    let result2 = 0;
    let array = [];
  
    for (let i = 0; i < parameter.length; i++) {
      result1 = parameter[i].value1;
      result2 = parameter[i].value2;
      let resultotal = result1 / result2;
  
      finalResult = array.push({ user: parameter[i].user, result: resultotal });
    }
    return array;
  }
  
  module.exports = {
    suma,
    resta,
    multiplicar,
    dividir,
  };
  