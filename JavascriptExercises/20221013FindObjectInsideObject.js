function myFunction(obj) {
  let result1 = obj.a;
  let result = undefined;

  if (result1 !== undefined) {
    result = result1.b;
  }
  return result;
}

// Test Case	Expected
// myFunction({a:1})	//undefined
// myFunction({a:{b:{c:3}}})	//{c:3}
// myFunction({b:{a:1}})	//undefined
// myFunction({a:{b:2}})	//2
