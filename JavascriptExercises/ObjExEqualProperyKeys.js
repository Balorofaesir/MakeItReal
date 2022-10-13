

function myFunction(a, b) {
    let result = false;
    
      if (a.hasOwnProperty(b) == true && a[b] != undefined) {
         result = true;
      }
      return result;
    }
    
    console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
    console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
    console.log(myFunction({x:'a',y:'b',z:undefined},'z'))