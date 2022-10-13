// Antes de saber a.hasWonProperty

function myFunction(a, b) {
    let result = false;
    const keys = Object.keys(a)
    for (i = 0; i < keys.length; i++) {
      if (keys[i] === b && a[b] != undefined) {
        result = true
      }
    }
    return result
  }
  
  console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
  console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
  console.log(myFunction({x:'a',y:'b',z:undefined},'z'))

