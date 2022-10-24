

function value1() {
  let sele = document.getElementById("1");
  sele = sele.value;
  document.getElementById("result").innerHTML = sele;
}

function value2() {
  let sele = document.getElementById("2");
  sele = sele.value;
  document.getElementById("result").innerHTML = sele;
}

function value3() {
  let sele = document.getElementById("3");
  sele = sele.value;
  document.getElementById("result").innerHTML = sele;
}

function value4() {
  let sele = document.getElementById("4");
  sele = sele.value;
  document.getElementById("result").innerHTML = sele;
}

function value5() {
  let sele = document.getElementById("5");
  sele = sele.value;
  document.getElementById("result").innerHTML = sele;
}

function display2() {
  let solo = (document.getElementById("result").innerHTML);
  if (parseInt(solo) < 6 && parseInt(solo) > 0 ) {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container2").style.display = "flex";;
  } else {
    alert("Select a number")
  }
}
